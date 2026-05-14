with base as (
    select
        trim(cast(mandt as varchar)) as client_id,
        trim(cast(werks as varchar)) as plant_id,
        trim(cast(name1 as varchar)) as plant_name,
        trim(cast(land1 as varchar)) as country_code,
        trim(cast(regio as varchar)) as region_code,
        trim(cast(ort01 as varchar)) as city_name,
        trim(cast(vkorg as varchar)) as sales_organization_id,
        trim(cast(vtweg as varchar)) as distribution_channel_id,
        trim(cast(vstel as varchar)) as shipping_point_id,
        try_cast(recordstamp as timestamp with time zone) as source_recordstamp
    from {{ source('raw', 't001w') }}
    where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'
),
deduplicated as (
    select
        client_id,
        plant_id,
        plant_name,
        country_code,
        region_code,
        city_name,
        sales_organization_id,
        distribution_channel_id,
        shipping_point_id,
        source_recordstamp
    from base
    qualify row_number() over (
        partition by client_id, plant_id
        order by source_recordstamp desc nulls last,
            plant_name asc nulls last,
            country_code asc nulls last,
            region_code asc nulls last,
            city_name asc nulls last,
            sales_organization_id asc nulls last,
            distribution_channel_id asc nulls last,
            shipping_point_id asc nulls last
    ) = 1
)

select
    client_id,
    plant_id,
    plant_name,
    country_code,
    region_code,
    city_name,
    sales_organization_id,
    distribution_channel_id,
    shipping_point_id,
    source_recordstamp
from deduplicated
