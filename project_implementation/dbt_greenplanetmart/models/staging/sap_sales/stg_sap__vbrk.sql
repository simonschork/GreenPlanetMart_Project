select
    trim(cast(mandt as varchar)) as client_id,
    trim(cast(vbeln as varchar)) as billing_document_id,
    trim(cast(fkart as varchar)) as billing_type,
    trim(cast(knumv as varchar)) as pricing_document_id,
    try_cast(fkdat as date) as billing_date,
    trim(cast(waerk as varchar)) as document_currency,
    trim(cast(vkorg as varchar)) as sales_organization_id,
    trim(cast(vtweg as varchar)) as distribution_channel_id,
    trim(cast(spart as varchar)) as division,
    trim(cast(kunag as varchar)) as sold_to_customer_id,
    trim(cast(kunrg as varchar)) as payer_customer_id,
    try_cast(netwr as double) as billing_net_value,
    recordstamp as source_recordstamp
from {{ source('raw', 'vbrk') }}
where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'
