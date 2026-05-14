with sales_org as (
    select * from {{ ref('stg_sap__tvko') }}
),
sales_org_text as (
    select *
    from {{ ref('stg_sap__tvkot') }}
    where language_code in ('E', 'D')
),
resolved_sales_org as (
    select
        sales_org.client_id || '|' || sales_org.sales_organization_id as sales_org_key,
        sales_org.client_id,
        sales_org.sales_organization_id,
        coalesce(sales_org_text.sales_organization_name, sales_org.sales_organization_id) as sales_organization_name,
        sales_org.default_currency,
        sales_org.company_code,
        sales_org.purchasing_organization_id,
        sales_org.default_plant_id,
        greatest(sales_org.source_recordstamp, sales_org_text.source_recordstamp) as source_recordstamp
    from sales_org
    left join sales_org_text
        on sales_org.client_id = sales_org_text.client_id
       and sales_org.sales_organization_id = sales_org_text.sales_organization_id
    qualify row_number() over (
        partition by sales_org.client_id || '|' || sales_org.sales_organization_id
        order by greatest(sales_org.source_recordstamp, sales_org_text.source_recordstamp) desc, sales_organization_name asc
    ) = 1
),
clients as (
    select distinct client_id from {{ ref('stg_sap__tvko') }}
    union
    select distinct client_id from {{ ref('stg_sap__vbak') }}
    union
    select distinct client_id from {{ ref('stg_sap__vbrk') }}
)

select
    sales_org_key,
    client_id,
    sales_organization_id,
    sales_organization_name,
    default_currency,
    company_code,
    purchasing_organization_id,
    default_plant_id,
    source_recordstamp
from resolved_sales_org

union all

select
    client_id || '|__UNKNOWN__' as sales_org_key,
    client_id,
    '__UNKNOWN__' as sales_organization_id,
    'Unknown Sales Organization' as sales_organization_name,
    null as default_currency,
    null as company_code,
    null as purchasing_organization_id,
    null as default_plant_id,
    null as source_recordstamp
from clients
