with base as (
    select
        trim(cast(mandt as varchar)) as client_id,
        trim(cast(ebeln as varchar)) as purchase_order_id,
        trim(cast(bukrs as varchar)) as company_code,
        trim(cast(bsart as varchar)) as purchasing_document_type,
        trim(cast(lifnr as varchar)) as supplier_id,
        trim(cast(ekorg as varchar)) as purchasing_organization_id,
        trim(cast(ekgrp as varchar)) as purchasing_group_id,
        trim(cast(waers as varchar)) as document_currency,
        try_cast(bedat as date) as purchase_order_date,
        trim(cast(inco1 as varchar)) as incoterm_part_1,
        trim(cast(inco2 as varchar)) as incoterm_part_2,
        try_cast(recordstamp as timestamp with time zone) as source_recordstamp
    from {{ source('raw', 'ekko') }}
    where lower(trim(coalesce(cast(is_deleted as varchar), 'false'))) != 'true'
),
deduplicated as (
    select
        client_id,
        purchase_order_id,
        company_code,
        purchasing_document_type,
        supplier_id,
        purchasing_organization_id,
        purchasing_group_id,
        document_currency,
        purchase_order_date,
        incoterm_part_1,
        incoterm_part_2,
        source_recordstamp
    from base
    qualify row_number() over (
        partition by client_id, purchase_order_id
        order by source_recordstamp desc nulls last,
            purchase_order_date desc nulls last,
            company_code asc nulls last,
            purchasing_document_type asc nulls last,
            supplier_id asc nulls last,
            purchasing_organization_id asc nulls last,
            purchasing_group_id asc nulls last,
            document_currency asc nulls last,
            incoterm_part_1 asc nulls last,
            incoterm_part_2 asc nulls last
    ) = 1
)

select
    client_id,
    purchase_order_id,
    company_code,
    purchasing_document_type,
    supplier_id,
    purchasing_organization_id,
    purchasing_group_id,
    document_currency,
    purchase_order_date,
    incoterm_part_1,
    incoterm_part_2,
    source_recordstamp
from deduplicated
