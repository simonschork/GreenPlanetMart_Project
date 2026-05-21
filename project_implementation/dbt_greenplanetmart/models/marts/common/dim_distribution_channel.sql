with observed_channels as (
    select distinct
        client_id,
        distribution_channel_id
    from {{ ref('stg_sap__tvtw') }}
    where distribution_channel_id is not null
      and distribution_channel_id != ''

    union

    select distinct
        client_id,
        distribution_channel_id
    from {{ ref('int_sales_billing_items') }}
    where distribution_channel_id is not null
      and distribution_channel_id != ''

    union

    select distinct
        client_id,
        distribution_channel_id
    from {{ ref('int_sales_pricing_conditions') }}
    where distribution_channel_id is not null
      and distribution_channel_id != ''

    union

    select distinct
        client_id,
        distribution_channel_id
    from {{ ref('int_order_fulfillment') }}
    where distribution_channel_id is not null
      and distribution_channel_id != ''
),
channels as (
    select * from {{ ref('stg_sap__tvtw') }}
),
channel_text as (
    select *
    from {{ ref('stg_sap__tvtwt') }}
    where language_code in ('E', 'D')
),
resolved_channels as (
    select
        observed_channels.client_id || '|' || observed_channels.distribution_channel_id as distribution_channel_key,
        observed_channels.client_id,
        observed_channels.distribution_channel_id,
        coalesce(channel_text.distribution_channel_name, channels.distribution_channel_id, observed_channels.distribution_channel_id) as distribution_channel_name,
        greatest(channels.source_recordstamp, channel_text.source_recordstamp) as source_recordstamp
    from observed_channels
    left join channels
        on observed_channels.client_id = channels.client_id
       and observed_channels.distribution_channel_id = channels.distribution_channel_id
    left join channel_text
        on observed_channels.client_id = channel_text.client_id
       and observed_channels.distribution_channel_id = channel_text.distribution_channel_id
    qualify row_number() over (
        partition by observed_channels.client_id || '|' || observed_channels.distribution_channel_id
        order by greatest(channels.source_recordstamp, channel_text.source_recordstamp) desc, distribution_channel_name asc
    ) = 1
),
clients as (
    select distinct client_id from observed_channels
)

select
    distribution_channel_key,
    client_id,
    distribution_channel_id,
    distribution_channel_name,
    source_recordstamp
from resolved_channels

union all

select
    client_id || '|__UNKNOWN__' as distribution_channel_key,
    client_id,
    '__UNKNOWN__' as distribution_channel_id,
    'Unknown Distribution Channel' as distribution_channel_name,
    null as source_recordstamp
from clients
