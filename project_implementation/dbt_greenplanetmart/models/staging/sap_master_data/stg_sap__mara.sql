with base as (
    select
        trim(cast(mandt as varchar)) as client_id,
        trim(cast(matnr as varchar)) as material_id,
        trim(cast(mtart as varchar)) as material_type,
        trim(cast(matkl as varchar)) as material_group,
        trim(cast(meins as varchar)) as base_unit,
        trim(cast(spart as varchar)) as division,
        try_cast(brgew as double) as gross_weight,
        try_cast(ntgew as double) as net_weight,
        trim(cast(gewei as varchar)) as weight_unit,
        try_cast(recordstamp as timestamp with time zone) as source_recordstamp
    from {{ source('raw', 'mara') }}
    where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'
),
deduplicated as (
    select
        client_id,
        material_id,
        material_type,
        material_group,
        base_unit,
        division,
        gross_weight,
        net_weight,
        weight_unit,
        source_recordstamp
    from base
    qualify row_number() over (
        partition by client_id, material_id
        order by source_recordstamp desc nulls last,
            material_type asc nulls last,
            material_group asc nulls last,
            base_unit asc nulls last,
            division asc nulls last,
            gross_weight desc nulls last,
            net_weight desc nulls last,
            weight_unit asc nulls last
    ) = 1
)

select
    client_id,
    material_id,
    material_type,
    material_group,
    base_unit,
    division,
    gross_weight,
    net_weight,
    weight_unit,
    source_recordstamp
from deduplicated
