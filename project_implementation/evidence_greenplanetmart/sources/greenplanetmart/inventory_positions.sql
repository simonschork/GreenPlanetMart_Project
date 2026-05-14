select
    positions.snapshot_date,
    positions.material_key,
    coalesce(material.client_id, split_part(positions.material_key, '|', 1)) as client_id,
    coalesce(material.material_id, split_part(positions.material_key, '|', 2)) as material_id,
    coalesce(material.material_name, 'Unmapped Material') as material_name,
    coalesce(material.material_group, 'Unmapped Material Group') as material_group,
    coalesce(material.material_type, 'Unmapped Material Type') as material_type,
    positions.plant_key,
    coalesce(plant.plant_id, split_part(positions.plant_key, '|', 2)) as plant_id,
    coalesce(plant.plant_name, 'Unmapped Plant') as plant_name,
    positions.storage_location_key,
    coalesce(storage_location.storage_location_id, split_part(positions.storage_location_key, '|', 3)) as storage_location_id,
    unrestricted_stock_qty,
    stock_in_transfer_qty,
    quality_inspection_qty,
    restricted_use_qty,
    blocked_stock_qty,
    returns_qty,
    positions.source_recordstamp,
    unrestricted_stock_qty
        + stock_in_transfer_qty
        + quality_inspection_qty
        + restricted_use_qty
        + blocked_stock_qty
        + returns_qty as total_visible_stock_qty,
    case when unrestricted_stock_qty = 0 then true else false end as is_zero_stock,
    case when unrestricted_stock_qty > 0 and unrestricted_stock_qty <= 100 then true else false end as is_low_stock,
    case when plant.plant_name is null then true else false end as is_unmapped_plant
from marts.fct_inventory_snapshot as positions
left join marts.dim_material as material
    on positions.material_key = material.material_key
left join marts.dim_plant as plant
    on positions.plant_key = plant.plant_key
left join marts.dim_storage_location as storage_location
    on positions.storage_location_key = storage_location.storage_location_key
