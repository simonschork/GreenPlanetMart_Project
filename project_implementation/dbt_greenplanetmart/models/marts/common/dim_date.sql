with observed_dates as (
    select current_date as calendar_date

    union all

    select created_on as calendar_date
    from {{ ref('stg_sap__mard') }}
    where created_on is not null

    union all

    select billing_date as calendar_date
    from {{ ref('int_sales_billing_items') }}
    where billing_date is not null

    union all

    select billing_date as calendar_date
    from {{ ref('int_sales_pricing_conditions') }}
    where billing_date is not null

    union all

    select order_date as calendar_date
    from {{ ref('int_order_fulfillment') }}
    where order_date is not null

    union all

    select requested_delivery_date as calendar_date
    from {{ ref('int_order_fulfillment') }}
    where requested_delivery_date is not null

    union all

    select actual_delivery_date as calendar_date
    from {{ ref('int_order_fulfillment') }}
    where actual_delivery_date is not null

    union all

    select purchase_order_date as calendar_date
    from {{ ref('int_procurement_schedule_lines') }}
    where purchase_order_date is not null

    union all

    select planned_delivery_date as calendar_date
    from {{ ref('int_procurement_schedule_lines') }}
    where planned_delivery_date is not null

),
bounds as (
    select
        coalesce(min(calendar_date), current_date) as min_date,
        greatest(coalesce(max(calendar_date), current_date), current_date) as max_date
    from observed_dates
),
dates as (
    select
        generated_date
    from bounds,
    generate_series(min_date, max_date, interval 1 day) as date_series(generated_date)
)

select
    cast(strftime(generated_date, '%Y%m%d') as integer) as date_key,
    generated_date as calendar_date,
    cast(strftime(generated_date, '%Y') as integer) as calendar_year,
    cast(strftime(generated_date, '%m') as integer) as calendar_month,
    cast(strftime(generated_date, '%d') as integer) as calendar_day,
    strftime(generated_date, '%Y-%m') as year_month,
    cast(strftime(generated_date, '%V') as integer) as iso_week_of_year,
    dayname(generated_date) as day_name,
    monthname(generated_date) as month_name,
    case when dayofweek(generated_date) in (0, 6) then true else false end as is_weekend
from dates
