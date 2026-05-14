with base as (
    select
        trim(cast(mandt as varchar)) as client_id,
        trim(cast(lifnr as varchar)) as supplier_id,
        trim(cast(name1 as varchar)) as supplier_name,
        trim(cast(land1 as varchar)) as country_code,
        trim(cast(regio as varchar)) as region_code,
        trim(cast(ort01 as varchar)) as city_name,
        trim(cast(brsch as varchar)) as industry_code,
        trim(cast(ktokk as varchar)) as account_group,
        trim(cast(vbund as varchar)) as company_group_id,
        try_cast(recordstamp as timestamp with time zone) as source_recordstamp
    from {{ source('raw', 'lfa1') }}
    where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'
),
deduplicated as (
    select
        client_id,
        supplier_id,
        supplier_name,
        country_code,
        region_code,
        city_name,
        industry_code,
        account_group,
        company_group_id,
        source_recordstamp
    from base
    qualify row_number() over (
        partition by client_id, supplier_id
        order by source_recordstamp desc nulls last,
            supplier_name asc nulls last,
            country_code asc nulls last,
            region_code asc nulls last,
            city_name asc nulls last,
            industry_code asc nulls last,
            account_group asc nulls last,
            company_group_id asc nulls last
    ) = 1
)

select
    client_id,
    supplier_id,
    supplier_name,
    country_code,
    region_code,
    city_name,
    industry_code,
    account_group,
    company_group_id,
    source_recordstamp
from deduplicated
