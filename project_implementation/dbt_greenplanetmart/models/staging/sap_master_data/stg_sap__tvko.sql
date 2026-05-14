select
    trim(cast(mandt as varchar)) as client_id,
    trim(cast(vkorg as varchar)) as sales_organization_id,
    trim(cast(waers as varchar)) as default_currency,
    trim(cast(bukrs as varchar)) as company_code,
    trim(cast(ekorg as varchar)) as purchasing_organization_id,
    trim(cast(werks as varchar)) as default_plant_id,
    recordstamp as source_recordstamp
from {{ source('raw', 'tvko') }}
where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'
