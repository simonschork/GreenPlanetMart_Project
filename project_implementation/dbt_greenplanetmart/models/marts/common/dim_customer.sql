with observed_customers as (
    select distinct
        client_id,
        customer_id
    from {{ ref('stg_sap__kna1') }}
    where customer_id is not null
      and customer_id != ''

    union

    select distinct
        client_id,
        customer_id
    from {{ ref('int_sales_billing_items') }}
    where customer_id is not null
      and customer_id != ''

    union

    select distinct
        client_id,
        customer_id
    from {{ ref('int_order_fulfillment') }}
    where customer_id is not null
      and customer_id != ''
),
customer_master as (
    select * from {{ ref('stg_sap__kna1') }}
),
resolved_customers as (
    select
        observed_customers.client_id || '|' || observed_customers.customer_id as customer_key,
        observed_customers.client_id,
        observed_customers.customer_id,
        coalesce(customer_master.customer_name, observed_customers.customer_id) as customer_name,
        customer_master.country_code,
        customer_master.region_code,
        customer_master.city_name,
        customer_master.industry_code,
        customer_master.account_group,
        customer_master.company_group_id,
        customer_master.source_recordstamp
    from observed_customers
    left join customer_master
        on observed_customers.client_id = customer_master.client_id
       and observed_customers.customer_id = customer_master.customer_id
),
deduplicated as (
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
    from resolved_customers
    qualify row_number() over (
        partition by customer_key
        order by source_recordstamp desc nulls last, customer_name asc
    ) = 1
),
clients as (
    select distinct client_id from observed_customers
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
from deduplicated

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
