with condition_types as (
    select
        client_id,
        condition_application,
        condition_type,
        calculation_type,
        condition_category,
        source_recordstamp
    from {{ ref('stg_sap__konv') }}
    where condition_type is not null
      and condition_type != ''
),
deduplicated as (
    select
        client_id || '|' || condition_type as pricing_condition_type_key,
        client_id,
        condition_type,
        condition_application,
        calculation_type,
        condition_category,
        source_recordstamp
    from condition_types
    qualify row_number() over (
        partition by client_id || '|' || condition_type
        order by source_recordstamp desc nulls last, condition_application asc
    ) = 1
),
clients as (
    select distinct client_id from {{ ref('stg_sap__konv') }}
)

select
    pricing_condition_type_key,
    client_id,
    condition_type,
    condition_application,
    calculation_type,
    condition_category,
    source_recordstamp
from deduplicated

union all

select
    client_id || '|__UNKNOWN__' as pricing_condition_type_key,
    client_id,
    '__UNKNOWN__' as condition_type,
    null as condition_application,
    null as calculation_type,
    null as condition_category,
    null as source_recordstamp
from clients

