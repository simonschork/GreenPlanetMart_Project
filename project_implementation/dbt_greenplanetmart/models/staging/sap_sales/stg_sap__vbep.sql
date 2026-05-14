select
    trim(cast(mandt as varchar)) as client_id,
    trim(cast(vbeln as varchar)) as sales_order_id,
    trim(cast(posnr as varchar)) as sales_order_item_id,
    trim(cast(etenr as varchar)) as schedule_line_id,
    try_cast(edatu as date) as requested_delivery_date,
    try_cast(wmeng as double) as scheduled_quantity,
    try_cast(bmeng as double) as confirmed_quantity,
    recordstamp as source_recordstamp
from {{ source('raw', 'vbep') }}
where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'

