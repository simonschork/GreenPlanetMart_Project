select
    cast(strftime(purchase_order_date, '%Y%m%d') as integer) as purchase_order_date_key,
    cast(strftime(planned_delivery_date, '%Y%m%d') as integer) as planned_delivery_date_key,
    purchase_order_date,
    planned_delivery_date,
    case
        when supplier_id is null or supplier_id = '' then client_id || '|__UNKNOWN__'
        else client_id || '|' || supplier_id
    end as supplier_key,
    case
        when material_id is null or material_id = '' then client_id || '|__UNKNOWN__'
        else client_id || '|' || material_id
    end as material_key,
    client_id || '|' || plant_id as plant_key,
    case
        when storage_location_id is null or storage_location_id = '' then null
        else client_id || '|' || plant_id || '|' || storage_location_id
    end as storage_location_key,
    purchase_order_id,
    purchase_order_item_id,
    schedule_line_id,
    company_code,
    purchasing_document_type,
    purchasing_organization_id,
    purchasing_group_id,
    document_currency,
    incoterm_part_1,
    incoterm_part_2,
    order_unit,
    net_price,
    price_unit,
    scheduled_quantity,
    received_quantity,
    open_quantity,
    scheduled_net_value,
    goods_receipt_processing_days,
    delivery_completed_flag,
    goods_receipt_expected_flag,
    returns_item_flag,
    is_overdue,
    is_fully_received,
    source_recordstamp
from {{ ref('int_procurement_schedule_lines') }}
where purchase_order_date is not null
  and planned_delivery_date is not null

