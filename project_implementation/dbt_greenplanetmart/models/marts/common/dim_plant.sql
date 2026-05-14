with plant_master as (
    select
        client_id || '|' || plant_id as plant_key,
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
    from {{ ref('stg_sap__t001w') }}
    qualify row_number() over (
        partition by client_id || '|' || plant_id
        order by source_recordstamp desc, plant_name asc
    ) = 1
),
clients as (
    select distinct client_id from {{ ref('stg_sap__t001w') }}
    union
    select distinct client_id from {{ ref('stg_sap__vbap') }}
    union
    select distinct client_id from {{ ref('stg_sap__vbrp') }}
    union
    select distinct client_id from {{ ref('stg_sap__ekpo') }}
)

select
    plant_key,
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
from plant_master

union all

select
    client_id || '|__UNKNOWN__' as plant_key,
    client_id,
    '__UNKNOWN__' as plant_id,
    'Unknown Plant' as plant_name,
    null as country_code,
    null as region_code,
    null as city_name,
    null as sales_organization_id,
    null as distribution_channel_id,
    null as shipping_point_id,
    null as source_recordstamp
from clients
