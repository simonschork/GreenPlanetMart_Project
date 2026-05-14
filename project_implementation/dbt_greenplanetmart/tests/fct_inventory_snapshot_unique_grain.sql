select
    snapshot_date_key,
    material_key,
    plant_key,
    storage_location_key,
    count(*) as row_count
from {{ ref('fct_inventory_snapshot') }}
group by 1, 2, 3, 4
having count(*) > 1
