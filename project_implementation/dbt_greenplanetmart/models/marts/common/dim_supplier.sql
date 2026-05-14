with observed_suppliers as (
    select distinct
        client_id,
        supplier_id
    from {{ ref('stg_sap__ekko') }}
    where supplier_id is not null
      and supplier_id != ''
),
supplier_master as (
    select * from {{ ref('stg_sap__lfa1') }}
),
resolved_suppliers as (
    select
        observed_suppliers.client_id || '|' || observed_suppliers.supplier_id as supplier_key,
        observed_suppliers.client_id,
        observed_suppliers.supplier_id,
        coalesce(supplier_master.supplier_name, observed_suppliers.supplier_id) as supplier_name,
        supplier_master.country_code,
        supplier_master.region_code,
        supplier_master.city_name,
        supplier_master.industry_code,
        supplier_master.account_group,
        supplier_master.company_group_id,
        supplier_master.source_recordstamp
    from observed_suppliers
    left join supplier_master
        on observed_suppliers.client_id = supplier_master.client_id
       and observed_suppliers.supplier_id = supplier_master.supplier_id
),
deduplicated as (
    select
        supplier_key,
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
    from resolved_suppliers
    qualify row_number() over (
        partition by supplier_key
        order by source_recordstamp desc nulls last, supplier_name asc
    ) = 1
),
clients as (
    select distinct client_id from {{ ref('stg_sap__ekko') }}
)

select
    supplier_key,
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

union all

select
    client_id || '|__UNKNOWN__' as supplier_key,
    client_id,
    '__UNKNOWN__' as supplier_id,
    'Unknown Supplier / Internal Transfer' as supplier_name,
    null as country_code,
    null as region_code,
    null as city_name,
    null as industry_code,
    null as account_group,
    null as company_group_id,
    null as source_recordstamp
from clients

