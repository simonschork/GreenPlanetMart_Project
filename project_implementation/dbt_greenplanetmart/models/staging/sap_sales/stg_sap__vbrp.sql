select
    trim(cast(mandt as varchar)) as client_id,
    trim(cast(vbeln as varchar)) as billing_document_id,
    trim(cast(posnr as varchar)) as billing_item_id,
    trim(cast(matnr as varchar)) as material_id,
    trim(cast(arktx as varchar)) as billing_item_description,
    trim(cast(werks as varchar)) as plant_id,
    trim(cast(lgort as varchar)) as storage_location_id,
    trim(cast(vstel as varchar)) as shipping_point_id,
    try_cast(fkimg as double) as billed_quantity,
    trim(cast(vrkme as varchar)) as sales_unit,
    try_cast(netwr as double) as billed_net_value,
    try_cast(brtwr as double) as billed_gross_value,
    try_cast(ntgew as double) as net_weight,
    trim(cast(gewei as varchar)) as weight_unit,
    trim(cast(vgbel as varchar)) as reference_document_id,
    trim(cast(vgpos as varchar)) as reference_document_item_id,
    trim(cast(vkgrp as varchar)) as sales_group_id,
    trim(cast(vkbur as varchar)) as sales_office_id,
    recordstamp as source_recordstamp
from {{ source('raw', 'vbrp') }}
where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'
