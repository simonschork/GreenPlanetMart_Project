with base as (
    select
        trim(cast(mandt as varchar)) as client_id,
        trim(cast(ebeln as varchar)) as purchase_order_id,
        trim(cast(ebelp as varchar)) as purchase_order_item_id,
        trim(cast(txz01 as varchar)) as item_description,
        trim(cast(matnr as varchar)) as material_id,
        trim(cast(werks as varchar)) as plant_id,
        trim(cast(lgort as varchar)) as storage_location_id,
        try_cast(menge as double) as ordered_quantity,
        trim(cast(meins as varchar)) as order_unit,
        try_cast(netpr as double) as net_price,
        try_cast(peinh as double) as price_unit,
        try_cast(netwr as double) as item_net_value,
        try_cast(webaz as integer) as goods_receipt_processing_days,
        trim(cast(elikz as varchar)) as delivery_completed_flag,
        trim(cast(wepos as varchar)) as goods_receipt_expected_flag,
        trim(cast(retpo as varchar)) as returns_item_flag,
        try_cast(recordstamp as timestamp with time zone) as source_recordstamp
    from {{ source('raw', 'ekpo') }}
    where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'
),
deduplicated as (
    select
        client_id,
        purchase_order_id,
        purchase_order_item_id,
        item_description,
        material_id,
        plant_id,
        storage_location_id,
        ordered_quantity,
        order_unit,
        net_price,
        price_unit,
        item_net_value,
        goods_receipt_processing_days,
        delivery_completed_flag,
        goods_receipt_expected_flag,
        returns_item_flag,
        source_recordstamp
    from base
    qualify row_number() over (
        partition by client_id, purchase_order_id, purchase_order_item_id
        order by source_recordstamp desc nulls last,
            item_net_value desc nulls last,
            ordered_quantity desc nulls last,
            net_price desc nulls last,
            price_unit desc nulls last,
            item_description asc nulls last,
            material_id asc nulls last,
            plant_id asc nulls last,
            storage_location_id asc nulls last
    ) = 1
)

select
    client_id,
    purchase_order_id,
    purchase_order_item_id,
    item_description,
    material_id,
    plant_id,
    storage_location_id,
    ordered_quantity,
    order_unit,
    net_price,
    price_unit,
    item_net_value,
    goods_receipt_processing_days,
    delivery_completed_flag,
    goods_receipt_expected_flag,
    returns_item_flag,
    source_recordstamp
from deduplicated
