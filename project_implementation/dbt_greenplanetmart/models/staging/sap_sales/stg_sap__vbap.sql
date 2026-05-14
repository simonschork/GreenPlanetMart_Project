select
    trim(cast(mandt as varchar)) as client_id,
    trim(cast(vbeln as varchar)) as sales_order_id,
    trim(cast(posnr as varchar)) as sales_order_item_id,
    trim(cast(matnr as varchar)) as material_id,
    trim(cast(arktx as varchar)) as item_description,
    trim(cast(werks as varchar)) as plant_id,
    trim(cast(lgort as varchar)) as storage_location_id,
    trim(cast(vstel as varchar)) as shipping_point_id,
    try_cast(kwmeng as double) as ordered_quantity,
    trim(cast(vrkme as varchar)) as sales_unit,
    try_cast(netwr as double) as item_net_value,
    recordstamp as source_recordstamp
from {{ source('raw', 'vbap') }}
where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'

