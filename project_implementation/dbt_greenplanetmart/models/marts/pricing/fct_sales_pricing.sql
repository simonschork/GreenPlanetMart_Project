select
    cast(strftime(billing_date, '%Y%m%d') as integer) as billing_date_key,
    billing_date,
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
    case
        when condition_type is null or condition_type = '' then client_id || '|__UNKNOWN__'
        else client_id || '|' || condition_type
    end as pricing_condition_type_key,
    billing_document_id,
    billing_item_id,
    condition_step_number,
    condition_counter,
    document_currency,
    condition_currency,
    condition_application,
    condition_type,
    calculation_type,
    condition_category,
    condition_amount_class,
    condition_base_amount,
    condition_rate,
    condition_amount,
    source_recordstamp
from {{ ref('int_sales_pricing_conditions') }}
where billing_date is not null

