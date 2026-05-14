select
    cast(strftime(order_date, '%Y%m%d') as integer) as order_date_key,
    cast(strftime(requested_delivery_date, '%Y%m%d') as integer) as requested_delivery_date_key,
    case
        when actual_delivery_date is null then null
        else cast(strftime(actual_delivery_date, '%Y%m%d') as integer)
    end as actual_delivery_date_key,
    order_date,
    requested_delivery_date,
    actual_delivery_date,
    case
        when customer_id is null or customer_id = '' then client_id || '|__UNKNOWN__'
        else client_id || '|' || customer_id
    end as customer_key,
    case
        when material_id is null or material_id = '' then client_id || '|__UNKNOWN__'
        else client_id || '|' || material_id
    end as material_key,
    case
        when sales_organization_id is null or sales_organization_id = '' then client_id || '|__UNKNOWN__'
        else client_id || '|' || sales_organization_id
    end as sales_org_key,
    case
        when distribution_channel_id is null or distribution_channel_id = '' then client_id || '|__UNKNOWN__'
        else client_id || '|' || distribution_channel_id
    end as distribution_channel_key,
    case
        when plant_id is null or plant_id = '' then client_id || '|__UNKNOWN__'
        else client_id || '|' || plant_id
    end as plant_key,
    case
        when storage_location_id is null or storage_location_id = '' then null
        else client_id || '|' || plant_id || '|' || storage_location_id
    end as storage_location_key,
    sales_order_id,
    sales_order_item_id,
    latest_delivery_document_id,
    sales_document_type,
    document_currency,
    division,
    shipping_point_id,
    sales_unit,
    ordered_quantity,
    scheduled_quantity,
    confirmed_quantity,
    delivered_quantity,
    open_quantity,
    delivery_delay_days,
    is_on_time_delivery,
    is_fully_delivered,
    source_recordstamp
from {{ ref('int_order_fulfillment') }}
where order_date is not null
  and requested_delivery_date is not null
