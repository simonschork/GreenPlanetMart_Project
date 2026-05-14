with stock as (
    select * from {{ ref('stg_sap__mard') }}
),
materials as (
    select * from {{ ref('stg_sap__mara') }}
),
material_text as (
    select *
    from {{ ref('stg_sap__makt') }}
    where language_code = 'E'
),
plants as (
    select * from {{ ref('stg_sap__t001w') }}
)

select
    stock.client_id,
    stock.material_id,
    coalesce(material_text.material_name, stock.material_id) as material_name,
    materials.material_type,
    materials.material_group,
    materials.base_unit,
    stock.plant_id,
    plants.plant_name,
    plants.country_code,
    plants.region_code,
    plants.city_name,
    stock.storage_location_id,
    stock.unrestricted_stock_qty,
    stock.stock_in_transfer_qty,
    stock.quality_inspection_qty,
    stock.restricted_use_qty,
    stock.blocked_stock_qty,
    stock.returns_qty,
    stock.created_on,
    stock.source_recordstamp
from stock
left join materials
    on stock.client_id = materials.client_id
   and stock.material_id = materials.material_id
left join material_text
    on stock.client_id = material_text.client_id
   and stock.material_id = material_text.material_id
left join plants
    on stock.client_id = plants.client_id
   and stock.plant_id = plants.plant_id

