select
    trim(cast(mandt as varchar)) as client_id,
    trim(cast(vbeln as varchar)) as delivery_document_id,
    try_cast(erdat as date) as delivery_created_date,
    try_cast(lfdat as date) as planned_delivery_date,
    try_cast(wadat as date) as planned_goods_issue_date,
    try_cast(wadat_ist as date) as actual_goods_issue_date,
    trim(cast(vstel as varchar)) as shipping_point_id,
    trim(cast(vkorg as varchar)) as sales_organization_id,
    trim(cast(kunnr as varchar)) as ship_to_customer_id,
    trim(cast(kunag as varchar)) as sold_to_customer_id,
    recordstamp as source_recordstamp
from {{ source('raw', 'likp') }}
where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'

