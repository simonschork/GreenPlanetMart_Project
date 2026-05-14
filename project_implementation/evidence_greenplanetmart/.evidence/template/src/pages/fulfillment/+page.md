---
title: Order Fulfillment
---

# Order Fulfillment and Delivery Timeliness

This page addresses the operational-efficiency question: are customer orders delivered on time, and where do fulfillment bottlenecks occur?

> Use case scope: the page uses `fct_order_fulfillment` at sales-order-item grain. Requested and actual delivery dates already include fallback logic from the mart layer so that incomplete operational date fields still support KPI reporting.

```sql fulfillment_kpis
select
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate_pct,
    round(avg(delivery_delay_days), 1) as average_delay_days,
    round(avg(case when is_fully_delivered then 1 else 0 end), 4) as fully_delivered_rate_pct
from greenplanetmart.order_fulfillment_items
```

<Grid cols={3}>
    <BigValue data={fulfillment_kpis} value="on_time_rate_pct" title="On-Time Rate (%)" />
    <BigValue data={fulfillment_kpis} value="average_delay_days" title="Average Delay (Days)" />
    <BigValue data={fulfillment_kpis} value="fully_delivered_rate_pct" title="Fully Delivered Rate (%)" />
</Grid>

## Timeliness Trend

```sql fulfillment_monthly_on_time
select
    requested_delivery_month,
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate
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
    <LineChart data={fulfillment_monthly_on_time} x="requested_delivery_month" y="on_time_rate" />
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

## Most Delayed Order Items

<DataTable data={fulfillment_worst_delays} />

[Back to Overview](/)
