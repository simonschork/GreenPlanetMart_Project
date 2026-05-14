with bounds as (
    select
        max(planned_delivery_date) as max_planned_delivery_date
    from marts.fct_procurement_schedule
),
recent_schedule_lines as (
    select
        schedule_lines.*
    from marts.fct_procurement_schedule as schedule_lines
    cross join bounds
    where schedule_lines.planned_delivery_date >= bounds.max_planned_delivery_date - interval '15 months'
)

select
    schedule_lines.purchase_order_date,
    schedule_lines.planned_delivery_date,
    date_trunc('month', schedule_lines.planned_delivery_date) as planned_delivery_month,
    schedule_lines.supplier_key,
    coalesce(supplier.supplier_id, split_part(schedule_lines.supplier_key, '|', 2)) as supplier_id,
    coalesce(supplier.supplier_name, 'Unknown Supplier / Internal Transfer') as supplier_name,
    schedule_lines.material_key,
    coalesce(material.material_id, split_part(schedule_lines.material_key, '|', 2)) as material_id,
    coalesce(material.material_name, 'Unmapped Material') as material_name,
    coalesce(material.material_group, 'Unmapped Material Group') as material_group,
    schedule_lines.plant_key,
    coalesce(plant.plant_id, split_part(schedule_lines.plant_key, '|', 2)) as plant_id,
    coalesce(plant.plant_name, 'Unmapped Plant') as plant_name,
    coalesce(storage_location.storage_location_id, split_part(schedule_lines.storage_location_key, '|', 3)) as storage_location_id,
    schedule_lines.purchase_order_id,
    schedule_lines.purchase_order_item_id,
    schedule_lines.schedule_line_id,
    schedule_lines.company_code,
    schedule_lines.purchasing_document_type,
    schedule_lines.purchasing_organization_id,
    schedule_lines.purchasing_group_id,
    schedule_lines.document_currency,
    schedule_lines.order_unit,
    schedule_lines.net_price,
    schedule_lines.price_unit,
    schedule_lines.scheduled_quantity,
    schedule_lines.received_quantity,
    schedule_lines.open_quantity,
    schedule_lines.scheduled_net_value,
    schedule_lines.source_recordstamp,
    case
        when schedule_lines.scheduled_quantity = 0 then null
        else schedule_lines.received_quantity / schedule_lines.scheduled_quantity
    end as receipt_rate,
    case when schedule_lines.is_overdue = 1 then true else false end as is_overdue,
    case when schedule_lines.is_fully_received = 1 then true else false end as is_fully_received
from recent_schedule_lines as schedule_lines
left join marts.dim_supplier as supplier
    on schedule_lines.supplier_key = supplier.supplier_key
left join marts.dim_material as material
    on schedule_lines.material_key = material.material_key
left join marts.dim_plant as plant
    on schedule_lines.plant_key = plant.plant_key
left join marts.dim_storage_location as storage_location
    on schedule_lines.storage_location_key = storage_location.storage_location_key
