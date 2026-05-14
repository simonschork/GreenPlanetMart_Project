with deduplicated_items as (
    select
        billing_document_id,
        billing_item_id,
        billing_date,
        customer_key,
        material_key,
        sales_org_key,
        distribution_channel_key,
        plant_key,
        max(document_currency) as document_currency,
        max(sales_group_id) as sales_group_id,
        max(sales_office_id) as sales_office_id,
        max(shipping_point_id) as shipping_point_id,
        max(coalesce(billed_quantity, 0)) as billed_quantity,
        max(coalesce(billed_net_value, 0)) as billed_net_value,
        max(coalesce(billed_gross_value, 0)) as billed_gross_value
    from marts.fct_sales_billing
    group by 1, 2, 3, 4, 5, 6, 7, 8
),
bounds as (
    select
        max(billing_date) as max_billing_date
    from deduplicated_items
),
recent_items as (
    select
        items.*
    from deduplicated_items as items
    cross join bounds
    where items.billing_date >= bounds.max_billing_date - interval '15 months'
)

select
    items.billing_date,
    date_trunc('month', items.billing_date) as billing_month,
    items.customer_key,
    coalesce(customer.customer_id, split_part(items.customer_key, '|', 2)) as customer_id,
    coalesce(customer.customer_name, 'Unmapped Customer') as customer_name,
    coalesce(customer.country_code, 'Unmapped Country') as customer_country_code,
    coalesce(customer.region_code, 'Unmapped Region') as customer_region_code,
    items.material_key,
    coalesce(material.material_id, split_part(items.material_key, '|', 2)) as material_id,
    coalesce(material.material_name, 'Unknown Material') as material_name,
    coalesce(material.material_group, 'Unknown Material Group') as material_group,
    items.sales_org_key,
    coalesce(sales_org.sales_organization_id, split_part(items.sales_org_key, '|', 2)) as sales_organization_id,
    coalesce(sales_org.sales_organization_name, 'Unmapped Sales Organization') as sales_organization_name,
    items.distribution_channel_key,
    coalesce(channel.distribution_channel_id, split_part(items.distribution_channel_key, '|', 2)) as distribution_channel_id,
    coalesce(channel.distribution_channel_name, 'Unmapped Distribution Channel') as distribution_channel_name,
    items.plant_key,
    coalesce(plant.plant_name, 'Unmapped Plant') as plant_name,
    items.billing_document_id,
    items.billing_item_id,
    items.document_currency,
    items.sales_group_id,
    items.sales_office_id,
    items.shipping_point_id,
    items.billed_quantity,
    items.billed_net_value,
    items.billed_gross_value,
    case
        when items.billed_quantity = 0 then null
        else items.billed_net_value / items.billed_quantity
    end as average_net_value_per_unit,
    case when items.material_key like '%|__UNKNOWN__' then true else false end as is_unknown_material
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
