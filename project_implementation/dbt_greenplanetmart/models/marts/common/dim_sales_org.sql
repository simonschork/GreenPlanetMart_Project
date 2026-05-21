with observed_sales_org as (
    select distinct
        client_id,
        sales_organization_id
    from {{ ref('stg_sap__tvko') }}
    where sales_organization_id is not null
      and sales_organization_id != ''

    union

    select distinct
        client_id,
        sales_organization_id
    from {{ ref('int_sales_billing_items') }}
    where sales_organization_id is not null
      and sales_organization_id != ''

    union

    select distinct
        client_id,
        sales_organization_id
    from {{ ref('int_sales_pricing_conditions') }}
    where sales_organization_id is not null
      and sales_organization_id != ''

    union

    select distinct
        client_id,
        sales_organization_id
    from {{ ref('int_order_fulfillment') }}
    where sales_organization_id is not null
      and sales_organization_id != ''
),
sales_org as (
    select * from {{ ref('stg_sap__tvko') }}
),
sales_org_text as (
    select *
    from {{ ref('stg_sap__tvkot') }}
    where language_code in ('E', 'D')
),
resolved_sales_org as (
    select
        observed_sales_org.client_id || '|' || observed_sales_org.sales_organization_id as sales_org_key,
        observed_sales_org.client_id,
        observed_sales_org.sales_organization_id,
        coalesce(sales_org_text.sales_organization_name, sales_org.sales_organization_id, observed_sales_org.sales_organization_id) as sales_organization_name,
        sales_org.default_currency,
        sales_org.company_code,
        sales_org.purchasing_organization_id,
        sales_org.default_plant_id,
        greatest(sales_org.source_recordstamp, sales_org_text.source_recordstamp) as source_recordstamp
    from observed_sales_org
    left join sales_org
        on observed_sales_org.client_id = sales_org.client_id
       and observed_sales_org.sales_organization_id = sales_org.sales_organization_id
    left join sales_org_text
        on observed_sales_org.client_id = sales_org_text.client_id
       and observed_sales_org.sales_organization_id = sales_org_text.sales_organization_id
    qualify row_number() over (
        partition by observed_sales_org.client_id || '|' || observed_sales_org.sales_organization_id
        order by greatest(sales_org.source_recordstamp, sales_org_text.source_recordstamp) desc, sales_organization_name asc
    ) = 1
),
clients as (
    select distinct client_id from observed_sales_org
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
