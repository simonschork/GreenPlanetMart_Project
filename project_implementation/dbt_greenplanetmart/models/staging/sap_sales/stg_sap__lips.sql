select
    trim(cast(mandt as varchar)) as client_id,
    trim(cast(vbeln as varchar)) as delivery_document_id,
    trim(cast(posnr as varchar)) as delivery_item_id,
    trim(cast(vgbel as varchar)) as reference_sales_order_id,
    trim(cast(vgpos as varchar)) as reference_sales_order_item_id,
    trim(cast(matnr as varchar)) as material_id,
    trim(cast(arktx as varchar)) as item_description,
    trim(cast(werks as varchar)) as plant_id,
    trim(cast(lgort as varchar)) as storage_location_id,
    try_cast(lfimg as double) as delivered_quantity,
    trim(cast(vrkme as varchar)) as sales_unit,
    recordstamp as source_recordstamp
from {{ source('raw', 'lips') }}
where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'

