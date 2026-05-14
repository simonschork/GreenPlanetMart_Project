---
title: GreenPlanetMart Reporting Layer
---

# GreenPlanetMart Reporting Layer

This Evidence app translates the PoC marts into report pages aligned to the research areas in the project brief: supply chain management, business analytics, and operational efficiency.

> Reporting approach: the report layer uses the DuckDB marts as its single source of truth, deduplicates repeated transactional rows back to business grain before aggregation, and keeps the pricing use case visible even though the pricing mart is currently empty.

```sql readiness_overview
select
    sum(case when status = 'active' then 1 else 0 end) as active_use_cases,
    count(distinct research_area) as research_areas_covered,
    sum(case when status = 'blocked' then 1 else 0 end) as constrained_use_cases
from greenplanetmart.reporting_readiness
```

<Grid cols={3}>
    <BigValue data={readiness_overview} value="active_use_cases" title="Active Use Cases" />
    <BigValue data={readiness_overview} value="research_areas_covered" title="Research Areas Covered" />
    <BigValue data={readiness_overview} value="constrained_use_cases" title="Constrained Use Cases" />
</Grid>

## Use Case Readiness

```sql readiness_detail
select *
from greenplanetmart.reporting_readiness
order by research_area, use_case
```

<DataTable data={readiness_detail} />

## Report Pages

- [Inventory Position](/inventory)
- [Sales Performance](/sales)
- [Procurement Performance](/procurement)
- [Order Fulfillment](/fulfillment)
- [Pricing Coverage](/pricing)

## Interpretation Notes

- Inventory is modeled as a current-state snapshot rather than a stock-movement history.
- Sales, procurement, and fulfillment metrics are intentionally aggregated from deduplicated business grain because the ERP extract contains repeated transactional rows.
- Unknown members and unmapped joins are preserved so the report layer stays consistent with the implementation narrative around real-world source quality constraints.
