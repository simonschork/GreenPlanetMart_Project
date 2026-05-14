with billing_items as (
    select * from {{ ref('int_sales_billing_items') }}
),
billing_header as (
    select * from {{ ref('stg_sap__vbrk') }}
),
pricing_conditions as (
    select * from {{ ref('stg_sap__konv') }}
)

select
    billing_items.client_id,
    billing_items.billing_document_id,
    billing_items.billing_item_id,
    billing_items.billing_date,
    billing_items.customer_id,
    billing_items.material_id,
    billing_items.plant_id,
    billing_items.storage_location_id,
    billing_items.sales_group_id,
    billing_items.sales_office_id,
    billing_items.sales_organization_id,
    billing_items.distribution_channel_id,
    billing_items.document_currency,
    billing_items.billing_item_description,
    billing_items.reference_document_id,
    billing_items.reference_document_item_id,
    pricing_conditions.condition_application,
    pricing_conditions.condition_type,
    pricing_conditions.condition_date,
    pricing_conditions.calculation_type,
    pricing_conditions.condition_step_number,
    pricing_conditions.condition_counter,
    pricing_conditions.condition_category,
    coalesce(pricing_conditions.condition_currency, billing_items.document_currency) as condition_currency,
    pricing_conditions.condition_base_amount,
    pricing_conditions.condition_rate,
    pricing_conditions.condition_amount,
    case
        when pricing_conditions.condition_amount < 0 then 'discount'
        when pricing_conditions.condition_amount > 0 then 'surcharge_or_charge'
        else 'neutral'
    end as condition_amount_class,
    greatest(billing_items.source_recordstamp, billing_header.source_recordstamp, pricing_conditions.source_recordstamp) as source_recordstamp
from billing_items
inner join billing_header
    on billing_items.client_id = billing_header.client_id
   and billing_items.billing_document_id = billing_header.billing_document_id
inner join pricing_conditions
    on billing_header.client_id = pricing_conditions.client_id
   and billing_header.pricing_document_id = pricing_conditions.pricing_document_id
   and try_cast(billing_items.billing_item_id as integer) = pricing_conditions.pricing_item_number

