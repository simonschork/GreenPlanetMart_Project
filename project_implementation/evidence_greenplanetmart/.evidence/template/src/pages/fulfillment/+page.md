---
title: Order Fulfillment
---

# Order Fulfillment and Delivery Timeliness

This page highlights how reliably customer demand is being fulfilled and where service issues are most likely to affect the customer experience.

Use it to monitor service levels, recurring delay patterns, and the orders that need operational follow-up.

```sql fulfillment_kpis
select
    round(
        avg(
            case
                when actual_delivery_date is not null then case when is_on_time_delivery then 1 else 0 end
            end
        ),
        4
    ) as on_time_delivered_rate_pct,
    round(avg(case when actual_delivery_date is null then 1 else 0 end), 4) as not_delivered_yet_rate_pct,
    round(avg(delivery_delay_days), 1) as average_delay_days,
    round(avg(case when is_fully_delivered then 1 else 0 end), 4) as fully_delivered_rate_pct
from greenplanetmart.order_fulfillment_items
```

<Grid cols={4}>
    <BigValue data={fulfillment_kpis} value="on_time_delivered_rate_pct" title="On-Time Delivered Rate (%)" />
    <BigValue data={fulfillment_kpis} value="not_delivered_yet_rate_pct" title="Not Delivered Yet (%)" />
    <BigValue data={fulfillment_kpis} value="average_delay_days" title="Average Delay (Days)" />
    <BigValue data={fulfillment_kpis} value="fully_delivered_rate_pct" title="Fully Delivered Rate (%)" />
</Grid>

The service view now separates completed delivery performance from open backlog. Early deliveries still count as on time.

## Service Trend

```sql fulfillment_monthly_service
select
    requested_delivery_month,
    round(
        avg(
            case
                when actual_delivery_date is not null then case when is_on_time_delivery then 1 else 0 end
            end
        ),
        4
    ) as on_time_delivered_rate,
    round(avg(case when actual_delivery_date is null then 1 else 0 end), 4) as not_delivered_yet_rate
from greenplanetmart.order_fulfillment_items
group by 1
order by 1
```

```sql fulfillment_monthly_delay
select
    requested_delivery_month,
    round(avg(delivery_delay_days), 2) as average_delay_days
from greenplanetmart.order_fulfillment_items
group by 1
order by 1
```

<Grid cols={2}>
    <LineChart data={fulfillment_monthly_service} x="requested_delivery_month" y="on_time_delivered_rate" />
    <LineChart data={fulfillment_monthly_service} x="requested_delivery_month" y="not_delivered_yet_rate" />
</Grid>

## Delay Trend

<Grid cols={1}>
    <LineChart data={fulfillment_monthly_delay} x="requested_delivery_month" y="average_delay_days" />
</Grid>

```sql fulfillment_delay_buckets
select
    delay_bucket,
    count(*) as order_items
from greenplanetmart.order_fulfillment_items
group by 1
order by order_items desc
```

## Delay Mix

<Grid cols={2}>
    <BarChart data={fulfillment_delay_buckets} x="delay_bucket" y="order_items" />
    <DataTable data={fulfillment_delay_buckets} />
</Grid>

```sql fulfillment_worst_delays
select
    customer_name,
    material_name,
    plant_name,
    requested_delivery_date,
    actual_delivery_date,
    round(delivery_delay_days, 1) as delivery_delay_days,
    round(open_quantity, 0) as open_quantity
from greenplanetmart.order_fulfillment_items
order by delivery_delay_days desc
limit 20
```

## Orders Requiring Attention

<DataTable data={fulfillment_worst_delays} />

[Back to Overview](/)
