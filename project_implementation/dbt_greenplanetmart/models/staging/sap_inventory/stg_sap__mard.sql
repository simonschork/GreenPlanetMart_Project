with base as (
    select
        trim(cast(mandt as varchar)) as client_id,
        trim(cast(matnr as varchar)) as material_id,
        trim(cast(werks as varchar)) as plant_id,
        trim(cast(lgort as varchar)) as storage_location_id,
        try_cast(labst as double) as unrestricted_stock_qty,
        try_cast(umlme as double) as stock_in_transfer_qty,
        try_cast(insme as double) as quality_inspection_qty,
        try_cast(einme as double) as restricted_use_qty,
        try_cast(speme as double) as blocked_stock_qty,
        try_cast(retme as double) as returns_qty,
        try_cast(ersda as date) as created_on,
        try_cast(recordstamp as timestamp with time zone) as source_recordstamp
    from {{ source('raw', 'mard') }}
    where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'
),
deduplicated as (
    select
        client_id,
        material_id,
        plant_id,
        storage_location_id,
        unrestricted_stock_qty,
        stock_in_transfer_qty,
        quality_inspection_qty,
        restricted_use_qty,
        blocked_stock_qty,
        returns_qty,
        created_on,
        source_recordstamp
    from base
    qualify row_number() over (
        partition by client_id, material_id, plant_id, storage_location_id
        order by source_recordstamp desc nulls last,
            unrestricted_stock_qty desc nulls last,
            stock_in_transfer_qty desc nulls last,
            quality_inspection_qty desc nulls last,
            restricted_use_qty desc nulls last,
            blocked_stock_qty desc nulls last,
            returns_qty desc nulls last,
            created_on desc nulls last
    ) = 1
)

select
    client_id,
    material_id,
    plant_id,
    storage_location_id,
    unrestricted_stock_qty,
    stock_in_transfer_qty,
    quality_inspection_qty,
    restricted_use_qty,
    blocked_stock_qty,
    returns_qty,
    created_on,
    source_recordstamp
from deduplicated
