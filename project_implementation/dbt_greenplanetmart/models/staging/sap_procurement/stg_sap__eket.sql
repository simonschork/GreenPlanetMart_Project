with base as (
    select
        trim(cast(mandt as varchar)) as client_id,
        trim(cast(ebeln as varchar)) as purchase_order_id,
        trim(cast(ebelp as varchar)) as purchase_order_item_id,
        trim(cast(etenr as varchar)) as schedule_line_id,
        try_cast(eindt as date) as planned_delivery_date,
        try_cast(menge as double) as scheduled_quantity,
        try_cast(wemng as double) as received_quantity,
        try_cast(wadat as date) as goods_issue_date,
        try_cast(eldat as date) as goods_receipt_date,
        try_cast(recordstamp as timestamp with time zone) as source_recordstamp
    from {{ source('raw', 'eket') }}
    where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'
),
deduplicated as (
    select
        client_id,
        purchase_order_id,
        purchase_order_item_id,
        schedule_line_id,
        planned_delivery_date,
        scheduled_quantity,
        received_quantity,
        goods_issue_date,
        goods_receipt_date,
        source_recordstamp
    from base
    qualify row_number() over (
        partition by client_id, purchase_order_id, purchase_order_item_id, schedule_line_id
        order by source_recordstamp desc nulls last,
            scheduled_quantity desc nulls last,
            received_quantity desc nulls last,
            planned_delivery_date desc nulls last,
            goods_issue_date desc nulls last,
            goods_receipt_date desc nulls last
    ) = 1
)

select
    client_id,
    purchase_order_id,
    purchase_order_item_id,
    schedule_line_id,
    planned_delivery_date,
    scheduled_quantity,
    received_quantity,
    goods_issue_date,
    goods_receipt_date,
    source_recordstamp
from deduplicated
