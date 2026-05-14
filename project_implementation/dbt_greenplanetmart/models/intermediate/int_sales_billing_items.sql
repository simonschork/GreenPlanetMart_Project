with billing_header as (
    select * from {{ ref('stg_sap__vbrk') }}
),
billing_items as (
    select * from {{ ref('stg_sap__vbrp') }}
),
customers as (
    select * from {{ ref('stg_sap__kna1') }}
)

select
    items.client_id,
    header.billing_document_id,
    items.billing_item_id,
    header.billing_date,
    header.document_currency,
    header.sales_organization_id,
    header.distribution_channel_id,
    header.division,
    coalesce(header.sold_to_customer_id, header.payer_customer_id) as customer_id,
    customers.customer_name,
    customers.country_code as customer_country_code,
    customers.region_code as customer_region_code,
    customers.city_name as customer_city_name,
    items.material_id,
    items.billing_item_description,
    items.plant_id,
    items.storage_location_id,
    items.shipping_point_id,
    items.sales_group_id,
    items.sales_office_id,
    items.billed_quantity,
    items.sales_unit,
    items.billed_net_value,
    items.billed_gross_value,
    items.net_weight,
    items.weight_unit,
    items.reference_document_id,
    items.reference_document_item_id,
    greatest(header.source_recordstamp, items.source_recordstamp, customers.source_recordstamp) as source_recordstamp
from billing_items as items
inner join billing_header as header
    on items.client_id = header.client_id
   and items.billing_document_id = header.billing_document_id
left join customers
    on coalesce(header.sold_to_customer_id, header.payer_customer_id) = customers.customer_id
   and header.client_id = customers.client_id
