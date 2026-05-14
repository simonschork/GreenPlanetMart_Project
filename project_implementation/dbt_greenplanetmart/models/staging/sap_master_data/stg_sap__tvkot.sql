select
    trim(cast(mandt as varchar)) as client_id,
    trim(cast(spras as varchar)) as language_code,
    trim(cast(vkorg as varchar)) as sales_organization_id,
    trim(cast(vtext as varchar)) as sales_organization_name,
    recordstamp as source_recordstamp
from {{ source('raw', 'tvkot') }}
where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'
