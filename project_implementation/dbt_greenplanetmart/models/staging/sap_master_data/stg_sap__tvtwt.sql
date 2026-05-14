select
    trim(cast(mandt as varchar)) as client_id,
    trim(cast(spras as varchar)) as language_code,
    trim(cast(vtweg as varchar)) as distribution_channel_id,
    trim(cast(vtext as varchar)) as distribution_channel_name,
    recordstamp as source_recordstamp
from {{ source('raw', 'tvtwt') }}
where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'
