with base as (
    select
        trim(cast(mandt as varchar)) as client_id,
        trim(cast(matnr as varchar)) as material_id,
        trim(cast(spras as varchar)) as language_code,
        trim(cast(maktx as varchar)) as material_name,
        try_cast(recordstamp as timestamp with time zone) as source_recordstamp
    from {{ source('raw', 'makt') }}
    where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'
),
deduplicated as (
    select
        client_id,
        material_id,
        language_code,
        material_name,
        source_recordstamp
    from base
    qualify row_number() over (
        partition by client_id, material_id, language_code
        order by source_recordstamp desc nulls last,
            material_name asc nulls last
    ) = 1
)

select
    client_id,
    material_id,
    language_code,
    material_name,
    source_recordstamp
from deduplicated
