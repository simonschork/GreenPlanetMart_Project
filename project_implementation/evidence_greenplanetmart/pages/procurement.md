---
title: Procurement Performance
---

# Procurement Performance and Supplier Reliability

This page addresses the supply chain question: which suppliers deliver reliably, and where are procurement delays or open commitments accumulating?

> Use case scope: the procurement mart is strong enough for comparative supplier and backlog analysis, but the underlying extract contains very large nominal quantities and values. Interpret the charts directionally for reliability and exposure patterns rather than as audited finance outputs.

```sql procurement_kpis
select
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct,
    round(avg(case when is_fully_received then 1 else 0 end), 4) as fully_received_rate_pct
from greenplanetmart.procurement_schedule_lines
```

<Grid cols={3}>
    <BigValue data={procurement_kpis} value="open_quantity" title="Open Quantity" />
    <BigValue data={procurement_kpis} value="overdue_rate_pct" title="Overdue Rate (%)" />
    <BigValue data={procurement_kpis} value="fully_received_rate_pct" title="Fully Received Rate (%)" />
</Grid>

## Monthly Procurement Exposure

```sql procurement_monthly_open
select
    planned_delivery_month,
    round(sum(open_quantity), 0) as open_quantity
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
    <LineChart data={procurement_monthly_open} x="planned_delivery_month" y="open_quantity" />
    <LineChart data={procurement_monthly_overdue} x="planned_delivery_month" y="overdue_rate" />
</Grid>

```sql procurement_top_suppliers
select
    supplier_name,
    document_currency,
    supplier_name || ' (' || document_currency || ')' as supplier_exposure_label,
    round(sum(scheduled_net_value), 0) as scheduled_net_value,
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct
from greenplanetmart.procurement_schedule_lines
group by 1, 2
order by scheduled_net_value desc
limit 15
```

## Supplier Exposure

<Grid cols={2}>
    <BarChart data={procurement_top_suppliers} x="supplier_exposure_label" y="scheduled_net_value" />
    <DataTable data={procurement_top_suppliers} />
</Grid>

```sql procurement_overdue_commitments
select
    supplier_name,
    material_name,
    plant_name,
    planned_delivery_date,
    round(open_quantity, 0) as open_quantity,
    round(scheduled_net_value, 0) as scheduled_net_value
from greenplanetmart.procurement_schedule_lines
where is_overdue
order by scheduled_net_value desc, open_quantity desc
limit 20
```

## Largest Overdue Commitments

<DataTable data={procurement_overdue_commitments} />

[Back to Overview](/)
