with observed_storage_locations as (
    select distinct
        client_id,
        plant_id,
        storage_location_id
    from {{ ref('int_inventory_current') }}
    where storage_location_id is not null
      and storage_location_id != ''

    union

    select distinct
        client_id,
        plant_id,
        storage_location_id
    from {{ ref('int_procurement_schedule_lines') }}
    where storage_location_id is not null
      and storage_location_id != ''

    union

    select distinct
        client_id,
        plant_id,
        storage_location_id
    from {{ ref('int_order_fulfillment') }}
    where storage_location_id is not null
      and storage_location_id != ''

    union

    select distinct
        client_id,
        plant_id,
        storage_location_id
    from {{ ref('int_sales_billing_items') }}
    where storage_location_id is not null
      and storage_location_id != ''

    union

    select distinct
        client_id,
        plant_id,
        storage_location_id
    from {{ ref('int_sales_pricing_conditions') }}
    where storage_location_id is not null
      and storage_location_id != ''
)

select distinct
    client_id || '|' || plant_id || '|' || storage_location_id as storage_location_key,
    client_id,
    plant_id,
    client_id || '|' || plant_id as plant_key,
    storage_location_id
from observed_storage_locations
