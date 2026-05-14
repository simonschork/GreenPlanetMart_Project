select
    cast(strftime(current_date, '%Y%m%d') as integer) as snapshot_date_key,
    current_date as snapshot_date,
    client_id || '|' || material_id as material_key,
    client_id || '|' || plant_id as plant_key,
    client_id || '|' || plant_id || '|' || storage_location_id as storage_location_key,
    unrestricted_stock_qty,
    stock_in_transfer_qty,
    quality_inspection_qty,
    restricted_use_qty,
    blocked_stock_qty,
    returns_qty,
    source_recordstamp
from {{ ref('int_inventory_current') }}
