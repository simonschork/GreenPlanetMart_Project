select
    trim(cast(mandt as varchar)) as client_id,
    trim(cast(kunnr as varchar)) as customer_id,
    trim(cast(name1 as varchar)) as customer_name,
    trim(cast(land1 as varchar)) as country_code,
    trim(cast(regio as varchar)) as region_code,
    trim(cast(ort01 as varchar)) as city_name,
    trim(cast(brsch as varchar)) as industry_code,
    trim(cast(ktokd as varchar)) as account_group,
    trim(cast(vbund as varchar)) as company_group_id,
    recordstamp as source_recordstamp
from {{ source('raw', 'kna1') }}
where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'
