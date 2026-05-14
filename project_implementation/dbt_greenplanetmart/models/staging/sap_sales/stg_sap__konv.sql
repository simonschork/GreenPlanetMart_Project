select
    trim(cast(mandt as varchar)) as client_id,
    trim(cast(knumv as varchar)) as pricing_document_id,
    trim(cast(kposn as varchar)) as pricing_item_id,
    try_cast(trim(cast(kposn as varchar)) as integer) as pricing_item_number,
    try_cast(stunr as integer) as condition_step_number,
    try_cast(zaehk as integer) as condition_counter,
    trim(cast(kappl as varchar)) as condition_application,
    trim(cast(kschl as varchar)) as condition_type,
    try_cast(kdatu as date) as condition_date,
    trim(cast(krech as varchar)) as calculation_type,
    try_cast(kawrt as double) as condition_base_amount,
    try_cast(kbetr as double) as condition_rate,
    trim(cast(waers as varchar)) as condition_currency,
    try_cast(kwert as double) as condition_amount,
    trim(cast(koaid as varchar)) as condition_category,
    recordstamp as source_recordstamp,
    trim(cast(operation_flag as varchar)) as operation_flag
from {{ source('raw', 'konv') }}
where upper(coalesce(trim(cast(operation_flag as varchar)), 'I')) != 'D'

