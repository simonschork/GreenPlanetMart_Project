with observed_materials as (
    select distinct
        client_id,
        material_id
    from {{ ref('stg_sap__mara') }}
    where material_id is not null
      and material_id != ''

    union

    select distinct
        client_id,
        material_id
    from {{ ref('int_inventory_current') }}
    where material_id is not null
      and material_id != ''

    union

    select distinct
        client_id,
        material_id
    from {{ ref('int_sales_billing_items') }}
    where material_id is not null
      and material_id != ''

    union

    select distinct
        client_id,
        material_id
    from {{ ref('int_sales_pricing_conditions') }}
    where material_id is not null
      and material_id != ''

    union

    select distinct
        client_id,
        material_id
    from {{ ref('int_order_fulfillment') }}
    where material_id is not null
      and material_id != ''

    union

    select distinct
        client_id,
        material_id
    from {{ ref('int_procurement_schedule_lines') }}
    where material_id is not null
      and material_id != ''
),
materials as (
    select * from {{ ref('stg_sap__mara') }}
),
material_text as (
    select *
    from {{ ref('stg_sap__makt') }}
    where language_code = 'E'
),
joined as (
    select
        observed_materials.client_id || '|' || observed_materials.material_id as material_key,
        observed_materials.client_id,
        observed_materials.material_id,
        coalesce(material_text.material_name, materials.material_id, observed_materials.material_id) as material_name,
        materials.material_type,
        materials.material_group,
        materials.base_unit,
        materials.division,
        materials.gross_weight,
        materials.net_weight,
        materials.weight_unit,
        coalesce(material_text.source_recordstamp, materials.source_recordstamp) as text_recordstamp,
        materials.source_recordstamp
    from observed_materials
    left join materials
        on observed_materials.client_id = materials.client_id
       and observed_materials.material_id = materials.material_id
    left join material_text
        on observed_materials.client_id = material_text.client_id
       and observed_materials.material_id = material_text.material_id
),
deduplicated as (
    select
        material_key,
        client_id,
        material_id,
        material_name,
        material_type,
        material_group,
        base_unit,
        division,
        gross_weight,
        net_weight,
        weight_unit,
        greatest(source_recordstamp, text_recordstamp) as source_recordstamp
    from joined
    qualify row_number() over (
        partition by material_key
        order by greatest(source_recordstamp, text_recordstamp) desc, material_name asc
    ) = 1
)

select
    material_key,
    client_id,
    material_id,
    material_name,
    material_type,
    material_group,
    base_unit,
    division,
    gross_weight,
    net_weight,
    weight_unit,
    source_recordstamp
from deduplicated

union all

select distinct
    client_id || '|__UNKNOWN__' as material_key,
    client_id,
    '__UNKNOWN__' as material_id,
    'Unknown Material' as material_name,
    null as material_type,
    null as material_group,
    null as base_unit,
    null as division,
    null as gross_weight,
    null as net_weight,
    null as weight_unit,
    max(source_recordstamp) over (partition by client_id) as source_recordstamp
from materials
