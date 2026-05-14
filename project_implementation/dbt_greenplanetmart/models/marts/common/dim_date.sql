with bounds as (
    select
        coalesce(min(created_on), current_date) as min_date,
        current_date as max_date
    from {{ ref('stg_sap__mard') }}
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

