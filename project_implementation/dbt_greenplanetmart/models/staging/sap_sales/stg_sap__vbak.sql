select
    trim(cast(mandt as varchar)) as client_id,
    trim(cast(vbeln as varchar)) as sales_order_id,
    try_cast(audat as date) as order_date,
    try_cast(vdatu as date) as requested_header_delivery_date,
    trim(cast(auart as varchar)) as sales_document_type,
    trim(cast(waerk as varchar)) as document_currency,
    trim(cast(vkorg as varchar)) as sales_organization_id,
    trim(cast(vtweg as varchar)) as distribution_channel_id,
    trim(cast(spart as varchar)) as division,
    trim(cast(kunnr as varchar)) as customer_id,
    try_cast(netwr as double) as order_net_value,
    recordstamp as source_recordstamp
from {{ source('raw', 'vbak') }}
where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'

