---
title: Pricing Coverage
---

# Sales Price, Discount, and Billing Quality Analysis

This page keeps the pricing use case tied to the research questions, even though the underlying mart is not yet populated.

> Current status: `fct_sales_pricing` currently contains zero rows. That means the pricing and discount use case is documented in the reporting layer, but it should not yet be presented as an implemented analytical result.

```sql pricing_readiness
select
    research_area,
    use_case,
    primary_mart,
    status,
    mart_row_count,
    business_grain_rows,
    duplicate_like_rows,
    unknown_member_rows,
    min_business_date,
    max_business_date,
    analytical_scope,
    reporting_note
from greenplanetmart.reporting_readiness
where primary_mart = 'fct_sales_pricing'
```

## Pricing Use Case Status

<DataTable data={pricing_readiness} />

## Recommended Next Steps

- validate `konv` source completeness in the raw and staging layers
- confirm the billing-document to pricing-condition join coverage in the intermediate model
- activate a pricing page only after the mart contains stable rows

[Back to Overview](/)
