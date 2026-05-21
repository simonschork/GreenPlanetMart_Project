with observed_plants as (
    select distinct
        client_id,
        plant_id
    from {{ ref('stg_sap__t001w') }}
    where plant_id is not null
      and plant_id != ''

    union

    select distinct
        client_id,
        plant_id
    from {{ ref('int_inventory_current') }}
    where plant_id is not null
      and plant_id != ''

    union

    select distinct
        client_id,
        plant_id
    from {{ ref('int_sales_billing_items') }}
    where plant_id is not null
      and plant_id != ''

    union

    select distinct
        client_id,
        plant_id
    from {{ ref('int_sales_pricing_conditions') }}
    where plant_id is not null
      and plant_id != ''

    union

    select distinct
        client_id,
        plant_id
    from {{ ref('int_order_fulfillment') }}
    where plant_id is not null
      and plant_id != ''

    union

    select distinct
        client_id,
        plant_id
    from {{ ref('int_procurement_schedule_lines') }}
    where plant_id is not null
      and plant_id != ''
),
plant_master as (
    select * from {{ ref('stg_sap__t001w') }}
),
resolved_plants as (
    select
        observed_plants.client_id || '|' || observed_plants.plant_id as plant_key,
        observed_plants.client_id,
        observed_plants.plant_id,
        coalesce(plant_master.plant_name, observed_plants.plant_id) as plant_name,
        plant_master.country_code,
        plant_master.region_code,
        plant_master.city_name,
        plant_master.sales_organization_id,
        plant_master.distribution_channel_id,
        plant_master.shipping_point_id,
        plant_master.source_recordstamp
    from observed_plants
    left join plant_master
        on observed_plants.client_id = plant_master.client_id
       and observed_plants.plant_id = plant_master.plant_id
),
deduplicated as (
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
    from resolved_plants
    qualify row_number() over (
        partition by plant_key
        order by source_recordstamp desc nulls last, plant_name asc
    ) = 1
),
clients as (
    select distinct client_id from observed_plants
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
from deduplicated

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
