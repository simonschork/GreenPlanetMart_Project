select
    trim(cast(mandt as varchar)) as client_id,
    trim(cast(vtweg as varchar)) as distribution_channel_id,
    recordstamp as source_recordstamp
from {{ source('raw', 'tvtw') }}
where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'
