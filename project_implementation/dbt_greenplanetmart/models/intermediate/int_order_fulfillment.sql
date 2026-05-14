with sales_order_header as (
    select * from {{ ref('stg_sap__vbak') }}
),
sales_order_items as (
    select * from {{ ref('stg_sap__vbap') }}
),
schedule_lines as (
    select * from {{ ref('stg_sap__vbep') }}
),
deliveries as (
    select * from {{ ref('stg_sap__likp') }}
),
delivery_items as (
    select * from {{ ref('stg_sap__lips') }}
),
requested_dates as (
    select
        client_id,
        sales_order_id,
        sales_order_item_id,
        min(requested_delivery_date) as requested_delivery_date,
        sum(coalesce(scheduled_quantity, 0)) as scheduled_quantity,
        sum(coalesce(confirmed_quantity, 0)) as confirmed_quantity
    from schedule_lines
    group by 1, 2, 3
),
delivered_orders as (
    select
        delivery_items.client_id,
        delivery_items.reference_sales_order_id as sales_order_id,
        delivery_items.reference_sales_order_item_id as sales_order_item_id,
        sum(coalesce(delivery_items.delivered_quantity, 0)) as delivered_quantity,
        min(coalesce(deliveries.actual_goods_issue_date, deliveries.planned_goods_issue_date, deliveries.planned_delivery_date, deliveries.delivery_created_date)) as first_actual_delivery_date,
        max(coalesce(deliveries.actual_goods_issue_date, deliveries.planned_goods_issue_date, deliveries.planned_delivery_date, deliveries.delivery_created_date)) as latest_actual_delivery_date,
        max(deliveries.delivery_document_id) as latest_delivery_document_id
    from delivery_items
    inner join deliveries
        on delivery_items.client_id = deliveries.client_id
       and delivery_items.delivery_document_id = deliveries.delivery_document_id
    where delivery_items.reference_sales_order_id is not null
      and delivery_items.reference_sales_order_id != ''
    group by 1, 2, 3
)

select
    items.client_id,
    header.sales_order_id,
    items.sales_order_item_id,
    header.order_date,
    coalesce(requested_dates.requested_delivery_date, header.requested_header_delivery_date, header.order_date) as requested_delivery_date,
    delivered_orders.first_actual_delivery_date,
    delivered_orders.latest_actual_delivery_date as actual_delivery_date,
    header.sales_document_type,
    header.document_currency,
    header.sales_organization_id,
    header.distribution_channel_id,
    header.division,
    nullif(header.customer_id, '') as customer_id,
    items.material_id,
    items.item_description,
    items.plant_id,
    items.storage_location_id,
    coalesce(items.shipping_point_id, deliveries.shipping_point_id) as shipping_point_id,
    items.sales_unit,
    items.ordered_quantity,
    requested_dates.scheduled_quantity,
    requested_dates.confirmed_quantity,
    coalesce(delivered_orders.delivered_quantity, 0) as delivered_quantity,
    greatest(coalesce(items.ordered_quantity, 0) - coalesce(delivered_orders.delivered_quantity, 0), 0) as open_quantity,
    case
        when delivered_orders.latest_actual_delivery_date is not null
         and coalesce(requested_dates.requested_delivery_date, header.requested_header_delivery_date, header.order_date) is not null
            then datediff('day', coalesce(requested_dates.requested_delivery_date, header.requested_header_delivery_date, header.order_date), delivered_orders.latest_actual_delivery_date)
        else null
    end as delivery_delay_days,
    case
        when delivered_orders.latest_actual_delivery_date is not null
         and coalesce(requested_dates.requested_delivery_date, header.requested_header_delivery_date, header.order_date) is not null
         and delivered_orders.latest_actual_delivery_date <= coalesce(requested_dates.requested_delivery_date, header.requested_header_delivery_date, header.order_date)
            then true
        when delivered_orders.latest_actual_delivery_date is not null
         and coalesce(requested_dates.requested_delivery_date, header.requested_header_delivery_date, header.order_date) is not null
            then false
        else null
    end as is_on_time_delivery,
    case
        when coalesce(delivered_orders.delivered_quantity, 0) >= coalesce(items.ordered_quantity, 0)
         and coalesce(items.ordered_quantity, 0) > 0
            then true
        else false
    end as is_fully_delivered,
    delivered_orders.latest_delivery_document_id,
    greatest(
        header.source_recordstamp,
        items.source_recordstamp,
        coalesce(deliveries.source_recordstamp, header.source_recordstamp)
    ) as source_recordstamp
from sales_order_items as items
inner join sales_order_header as header
    on items.client_id = header.client_id
   and items.sales_order_id = header.sales_order_id
left join requested_dates
    on items.client_id = requested_dates.client_id
   and items.sales_order_id = requested_dates.sales_order_id
   and items.sales_order_item_id = requested_dates.sales_order_item_id
left join delivered_orders
    on items.client_id = delivered_orders.client_id
   and items.sales_order_id = delivered_orders.sales_order_id
   and items.sales_order_item_id = delivered_orders.sales_order_item_id
left join deliveries
    on delivered_orders.client_id = deliveries.client_id
   and delivered_orders.latest_delivery_document_id = deliveries.delivery_document_id
