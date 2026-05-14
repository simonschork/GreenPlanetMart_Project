select
    cast(strftime(billing_date, '%Y%m%d') as integer) as billing_date_key,
    billing_date,
    client_id || '|' || customer_id as customer_key,
    case
        when material_id is null or material_id = '' then client_id || '|__UNKNOWN__'
        else client_id || '|' || material_id
    end as material_key,
    client_id || '|' || sales_organization_id as sales_org_key,
    client_id || '|' || distribution_channel_id as distribution_channel_key,
    client_id || '|' || plant_id as plant_key,
    case
        when storage_location_id is null or storage_location_id = '' then null
        else client_id || '|' || plant_id || '|' || storage_location_id
    end as storage_location_key,
    billing_document_id,
    billing_item_id,
    document_currency,
    sales_group_id,
    sales_office_id,
    shipping_point_id,
    billed_quantity,
    sales_unit,
    billed_net_value,
    billed_gross_value,
    net_weight,
    weight_unit,
    reference_document_id,
    reference_document_item_id,
    source_recordstamp
from {{ ref('int_sales_billing_items') }}
where billing_date is not null
