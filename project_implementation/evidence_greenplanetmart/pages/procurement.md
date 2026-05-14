---
title: Procurement Performance
---

# Procurement Performance and Supplier Reliability

This page addresses the supply chain question: which suppliers deliver reliably, and where are procurement delays or open commitments accumulating?

> Use case scope: the procurement mart is strong enough for supplier reliability and backlog analysis, but two reporting constraints remain important. Open quantities span multiple order units such as `KG`, `L`, and `EA`, so they should not be collapsed into one universal quantity KPI. Scheduled values also remain in raw document currencies, so comparisons are only meaningful within the same currency.

```sql procurement_kpis
select
    count(*) filter (where open_quantity > 0) as open_schedule_lines,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct,
    round(avg(case when is_fully_received then 1 else 0 end), 4) as fully_received_rate_pct
from greenplanetmart.procurement_schedule_lines
```

<Grid cols={3}>
    <BigValue data={procurement_kpis} value="open_schedule_lines" title="Open Schedule Lines" />
    <BigValue data={procurement_kpis} value="overdue_rate_pct" title="Overdue Rate (%)" />
    <BigValue data={procurement_kpis} value="fully_received_rate_pct" title="Fully Received Rate (%)" />
</Grid>

## Monthly Procurement Backlog

```sql procurement_monthly_open
select
    planned_delivery_month,
    count(*) filter (where open_quantity > 0) as open_schedule_lines
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1
```

```sql procurement_monthly_overdue
select
    planned_delivery_month,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1
```

<Grid cols={2}>
    <LineChart data={procurement_monthly_open} x="planned_delivery_month" y="open_schedule_lines" />
    <LineChart data={procurement_monthly_overdue} x="planned_delivery_month" y="overdue_rate" />
</Grid>

```sql procurement_open_by_unit
select
    order_unit,
    count(*) filter (where open_quantity > 0) as open_schedule_lines,
    round(sum(open_quantity) filter (where open_quantity > 0), 2) as raw_open_quantity,
    round(
        case
            when order_unit = 'KG' then sum(open_quantity) filter (where open_quantity > 0) / 1000
            when order_unit = 'L' then sum(open_quantity) filter (where open_quantity > 0) / 1000
            else sum(open_quantity) filter (where open_quantity > 0)
        end,
        2
    ) as comparable_open_quantity,
    case
        when order_unit = 'KG' then 'Metric tons'
        when order_unit = 'L' then 'Kiloliters'
        when order_unit = 'EA' then 'Units'
        else order_unit
    end as comparable_unit
from greenplanetmart.procurement_schedule_lines
group by 1
order by raw_open_quantity desc nulls last
```

## Open Backlog by Unit

<Grid cols={2}>
    <BarChart data={procurement_open_by_unit} x="order_unit" y="open_schedule_lines" />
    <DataTable data={procurement_open_by_unit} />
</Grid>

```sql procurement_top_suppliers
select
    supplier_name,
    document_currency,
    supplier_name || ' (' || document_currency || ')' as supplier_exposure_label,
    count(*) filter (where open_quantity > 0) as open_schedule_lines,
    round(sum(scheduled_net_value) / 1000000, 2) as scheduled_net_value_m,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct
from greenplanetmart.procurement_schedule_lines
group by 1, 2
order by scheduled_net_value_m desc
limit 15
```

## Supplier Exposure in Millions by Currency

<Grid cols={2}>
    <BarChart data={procurement_top_suppliers} x="supplier_exposure_label" y="scheduled_net_value_m" />
    <DataTable data={procurement_top_suppliers} />
</Grid>

```sql procurement_overdue_commitments
select
    supplier_name,
    material_name,
    plant_name,
    planned_delivery_date,
    order_unit,
    document_currency,
    round(open_quantity, 0) as open_quantity,
    round(scheduled_net_value / 1000000, 2) as scheduled_net_value_m
from greenplanetmart.procurement_schedule_lines
where is_overdue
order by scheduled_net_value desc, open_quantity desc
limit 20
```

## Largest Overdue Commitments

<DataTable data={procurement_overdue_commitments} />

[Back to Overview](/)
