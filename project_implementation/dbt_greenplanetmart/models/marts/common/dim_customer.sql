with customer_master as (
    select
        client_id || '|' || customer_id as customer_key,
        client_id,
        customer_id,
        customer_name,
        country_code,
        region_code,
        city_name,
        industry_code,
        account_group,
        company_group_id,
        source_recordstamp
    from {{ ref('stg_sap__kna1') }}
    qualify row_number() over (
        partition by client_id || '|' || customer_id
        order by source_recordstamp desc, customer_name asc
    ) = 1
),
clients as (
    select distinct client_id from {{ ref('stg_sap__kna1') }}
    union
    select distinct client_id from {{ ref('stg_sap__vbak') }}
    union
    select distinct client_id from {{ ref('stg_sap__vbrk') }}
)

select
    customer_key,
    client_id,
    customer_id,
    customer_name,
    country_code,
    region_code,
    city_name,
    industry_code,
    account_group,
    company_group_id,
    source_recordstamp
from customer_master

union all

select
    client_id || '|__UNKNOWN__' as customer_key,
    client_id,
    '__UNKNOWN__' as customer_id,
    'Unknown Customer' as customer_name,
    null as country_code,
    null as region_code,
    null as city_name,
    null as industry_code,
    null as account_group,
    null as company_group_id,
    null as source_recordstamp
from clients
