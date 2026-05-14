with purchase_order_header as (
    select * from {{ ref('stg_sap__ekko') }}
),
purchase_order_items as (
    select * from {{ ref('stg_sap__ekpo') }}
),
schedule_lines as (
    select * from {{ ref('stg_sap__eket') }}
),
suppliers as (
    select * from {{ ref('stg_sap__lfa1') }}
)

select
    schedule_lines.client_id,
    purchase_order_header.purchase_order_id,
    purchase_order_items.purchase_order_item_id,
    schedule_lines.schedule_line_id,
    purchase_order_header.purchase_order_date,
    schedule_lines.planned_delivery_date,
    purchase_order_header.company_code,
    purchase_order_header.purchasing_document_type,
    purchase_order_header.purchasing_organization_id,
    purchase_order_header.purchasing_group_id,
    purchase_order_header.document_currency,
    purchase_order_header.incoterm_part_1,
    purchase_order_header.incoterm_part_2,
    nullif(purchase_order_header.supplier_id, '') as supplier_id,
    suppliers.supplier_name,
    suppliers.country_code as supplier_country_code,
    suppliers.region_code as supplier_region_code,
    suppliers.city_name as supplier_city_name,
    purchase_order_items.material_id,
    purchase_order_items.item_description,
    purchase_order_items.plant_id,
    purchase_order_items.storage_location_id,
    purchase_order_items.order_unit,
    purchase_order_items.net_price,
    purchase_order_items.price_unit,
    purchase_order_items.item_net_value,
    purchase_order_items.goods_receipt_processing_days,
    purchase_order_items.delivery_completed_flag,
    purchase_order_items.goods_receipt_expected_flag,
    purchase_order_items.returns_item_flag,
    coalesce(schedule_lines.scheduled_quantity, purchase_order_items.ordered_quantity) as scheduled_quantity,
    coalesce(schedule_lines.received_quantity, 0) as received_quantity,
    greatest(coalesce(schedule_lines.scheduled_quantity, purchase_order_items.ordered_quantity) - coalesce(schedule_lines.received_quantity, 0), 0) as open_quantity,
    case
        when coalesce(purchase_order_items.ordered_quantity, 0) = 0 then null
        when purchase_order_items.item_net_value is null then null
        else purchase_order_items.item_net_value * (coalesce(schedule_lines.scheduled_quantity, purchase_order_items.ordered_quantity) / nullif(purchase_order_items.ordered_quantity, 0))
    end as scheduled_net_value,
    case
        when schedule_lines.planned_delivery_date < current_date
         and greatest(coalesce(schedule_lines.scheduled_quantity, purchase_order_items.ordered_quantity) - coalesce(schedule_lines.received_quantity, 0), 0) > 0
            then true
        else false
    end as is_overdue,
    case
        when coalesce(schedule_lines.scheduled_quantity, purchase_order_items.ordered_quantity) > 0
         and coalesce(schedule_lines.received_quantity, 0) >= coalesce(schedule_lines.scheduled_quantity, purchase_order_items.ordered_quantity)
            then true
        else false
    end as is_fully_received,
    greatest(
        purchase_order_header.source_recordstamp,
        purchase_order_items.source_recordstamp,
        schedule_lines.source_recordstamp,
        suppliers.source_recordstamp
    ) as source_recordstamp
from schedule_lines
inner join purchase_order_items
    on schedule_lines.client_id = purchase_order_items.client_id
   and schedule_lines.purchase_order_id = purchase_order_items.purchase_order_id
   and schedule_lines.purchase_order_item_id = purchase_order_items.purchase_order_item_id
inner join purchase_order_header
    on schedule_lines.client_id = purchase_order_header.client_id
   and schedule_lines.purchase_order_id = purchase_order_header.purchase_order_id
left join suppliers
    on purchase_order_header.client_id = suppliers.client_id
   and purchase_order_header.supplier_id = suppliers.supplier_id

