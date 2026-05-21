---
title: GreenPlanetMart Executive Reporting
---

# GreenPlanetMart Executive Reporting

This reporting experience is designed for business users who need a quick view of stock exposure, sales performance, supplier reliability, and delivery execution.

Each page focuses on a practical management question and highlights where attention, follow-up, or action is most likely needed.

```sql readiness_overview
select
    count(*) as dashboard_pages,
    count(distinct research_area) as business_focus_areas,
    count(distinct use_case) as key_management_views
from greenplanetmart.reporting_readiness
```

<Grid cols={3}>
    <BigValue data={readiness_overview} value="dashboard_pages" title="Dashboard Pages" />
    <BigValue data={readiness_overview} value="business_focus_areas" title="Business Focus Areas" />
    <BigValue data={readiness_overview} value="key_management_views" title="Management Views" />
</Grid>

## Dashboard Overview

```sql readiness_detail
select
    research_area,
    use_case,
    analytical_scope,
    reporting_note
from greenplanetmart.reporting_readiness
order by research_area, use_case
```

<DataTable data={readiness_detail} />

## Report Pages

- [Inventory Position](/inventory)
- [Sales Performance](/sales)
- [Procurement Performance](/procurement)
- [Order Fulfillment](/fulfillment)

## How To Use The Dashboards

- Use the inventory view to identify where stock is concentrated and where availability gaps may affect service.
- Use the sales view to understand which customers, products, and regions contribute the most billed revenue.
- Use the procurement and fulfillment views to spot supplier delays, open commitments, and customer orders that need intervention.
