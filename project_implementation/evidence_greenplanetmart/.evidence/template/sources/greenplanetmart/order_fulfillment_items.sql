with deduplicated_items as (
    select
        sales_order_id,
        sales_order_item_id,
        order_date,
        requested_delivery_date,
        actual_delivery_date,
        customer_key,
        material_key,
        sales_org_key,
        distribution_channel_key,
        plant_key,
        max(latest_delivery_document_id) as latest_delivery_document_id,
        max(shipping_point_id) as shipping_point_id,
        max(document_currency) as document_currency,
        max(coalesce(ordered_quantity, 0)) as ordered_quantity,
        max(coalesce(scheduled_quantity, 0)) as scheduled_quantity,
        max(coalesce(confirmed_quantity, 0)) as confirmed_quantity,
        max(coalesce(delivered_quantity, 0)) as delivered_quantity,
        max(coalesce(open_quantity, 0)) as open_quantity,
        avg(delivery_delay_days) as delivery_delay_days,
        max(case when is_on_time_delivery then 1 else 0 end) as is_on_time_delivery,
        max(case when is_fully_delivered then 1 else 0 end) as is_fully_delivered
    from marts.fct_order_fulfillment
    group by 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
),
bounds as (
    select
        max(requested_delivery_date) as max_requested_delivery_date
    from deduplicated_items
),
recent_items as (
    select
        items.*
    from deduplicated_items as items
    cross join bounds
    where items.requested_delivery_date >= bounds.max_requested_delivery_date - interval '15 months'
)

select
    items.order_date,
    items.requested_delivery_date,
    items.actual_delivery_date,
    date_trunc('month', items.requested_delivery_date) as requested_delivery_month,
    items.customer_key,
    coalesce(customer.customer_id, split_part(items.customer_key, '|', 2)) as customer_id,
    coalesce(customer.customer_name, 'Unknown Customer') as customer_name,
    items.material_key,
    coalesce(material.material_id, split_part(items.material_key, '|', 2)) as material_id,
    coalesce(material.material_name, 'Unknown Material') as material_name,
    coalesce(material.material_group, 'Unknown Material Group') as material_group,
    items.sales_org_key,
    coalesce(sales_org.sales_organization_name, 'Unknown Sales Organization') as sales_organization_name,
    items.distribution_channel_key,
    coalesce(channel.distribution_channel_name, 'Unknown Distribution Channel') as distribution_channel_name,
    items.plant_key,
    coalesce(plant.plant_name, 'Unknown Plant') as plant_name,
    items.sales_order_id,
    items.sales_order_item_id,
    items.latest_delivery_document_id,
    items.shipping_point_id,
    items.document_currency,
    items.ordered_quantity,
    items.scheduled_quantity,
    items.confirmed_quantity,
    items.delivered_quantity,
    items.open_quantity,
    items.delivery_delay_days,
    case
        when items.actual_delivery_date is null then 'Not delivered yet'
        when items.delivery_delay_days <= 0 then 'On time or early'
        when items.delivery_delay_days <= 7 then '1 to 7 days late'
        when items.delivery_delay_days <= 30 then '8 to 30 days late'
        else 'More than 30 days late'
    end as delay_bucket,
    case when items.is_on_time_delivery = 1 then true else false end as is_on_time_delivery,
    case when items.is_fully_delivered = 1 then true else false end as is_fully_delivered
from recent_items as items
left join marts.dim_customer as customer
    on items.customer_key = customer.customer_key
left join marts.dim_material as material
    on items.material_key = material.material_key
left join marts.dim_sales_org as sales_org
    on items.sales_org_key = sales_org.sales_org_key
left join marts.dim_distribution_channel as channel
    on items.distribution_channel_key = channel.distribution_channel_key
left join marts.dim_plant as plant
    on items.plant_key = plant.plant_key
