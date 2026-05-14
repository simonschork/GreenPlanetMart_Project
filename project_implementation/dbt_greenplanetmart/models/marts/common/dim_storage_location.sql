select distinct
    client_id || '|' || plant_id || '|' || storage_location_id as storage_location_key,
    client_id,
    plant_id,
    client_id || '|' || plant_id as plant_key,
    storage_location_id
from {{ ref('stg_sap__mard') }}
where storage_location_id is not null
  and storage_location_id != ''

