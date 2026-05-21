---
title: Sales Performance
---

# Sales Performance by Customer, Product, and Region

This page shows where billed revenue is coming from and where commercial momentum is strongest across customers, products, and sales organizations.

Use it to identify the accounts that matter most, the materials driving volume, and the parts of the sales organization carrying the business.

```sql sales_kpis
select
    round(sum(billed_net_value), 0) as net_billed_value,
    round(sum(billed_quantity), 0) as billed_quantity,
    count(distinct customer_key) as active_customers
from greenplanetmart.sales_billing_items
```

<Grid cols={3}>
    <BigValue data={sales_kpis} value="net_billed_value" title="Net Billed Value" />
    <BigValue data={sales_kpis} value="billed_quantity" title="Billed Quantity" />
    <BigValue data={sales_kpis} value="active_customers" title="Active Customers" />
</Grid>

## Revenue Trend

```sql sales_monthly_revenue
select
    billing_month,
    round(sum(billed_net_value), 0) as billed_net_value
from greenplanetmart.sales_billing_items
group by 1
order by 1
```

<LineChart data={sales_monthly_revenue} x="billing_month" y="billed_net_value" />

```sql sales_top_customers
select
    customer_name,
    sales_organization_name,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 15
```

## Highest-Value Customers

<Grid cols={2}>
    <BarChart data={sales_top_customers} x="customer_name" y="billed_net_value" />
    <DataTable data={sales_top_customers} />
</Grid>

```sql sales_top_materials
select
    material_name,
    material_group,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 20
```

## Best-Performing Materials

<DataTable data={sales_top_materials} />

[Back to Overview](/)
