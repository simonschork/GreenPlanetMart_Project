# GreenPlanetMart Report Backlog and Data Model Draft

## Purpose

This document defines the initial reporting backlog, source-to-report mappings, and a first-pass analytical data model for the GreenPlanetMart PoC. It is intended to guide implementation in DuckDB, dbt, and Evidence.

The scope is intentionally limited to reports that are realistic with the available source data and aligned with the project brief:

- supply chain management
- business analytics
- operational efficiency

## Recommended Report Set

### 1. Inventory Position by Plant, Storage Location, and Material

**Business question**  
Where is stock currently held, and which materials are overstocked, inactive, or missing at relevant locations?

**Why this report matters**  
This supports supply chain visibility and operational planning. It is also a good first implementation slice because the model is relatively simple.

**Main source tables**

- `mard` for stock by material, plant, and storage location
- `mara` for material master attributes
- `makt` for material descriptions
- `t001w` for plant attributes

**Main KPIs**

- current stock quantity
- stock by plant
- stock by storage location
- count of zero-stock materials
- count of low-stock materials
- stock concentration by material group

**Suggested dimensions**

- date
- material
- plant
- storage location

**Suggested grain**

One row per `material x plant x storage_location` snapshot.

## 2. Sales Performance by Customer, Product, and Region

**Business question**  
Which customers, materials, and sales organizations generate the most revenue over time?

**Why this report matters**  
This covers the business analytics part of the brief and establishes the core sales mart.

**Main source tables**

- `vbrk` for billing header
- `vbrp` for billing item
- `vbak` for sales order header
- `vbap` for sales order item
- `kna1` for customer master
- `mara` for material attributes
- `makt` for material descriptions
- `tvko` for sales organization
- `tvtw` for distribution channel text

**Main KPIs**

- billed revenue
- billed quantity
- average billing value
- revenue by month
- revenue by customer
- revenue by material
- revenue by sales organization

**Suggested dimensions**

- date
- customer
- material
- sales organization
- distribution channel

**Suggested grain**

One row per billing item.

## 3. Procurement Performance and Supplier Reliability

**Business question**  
Which suppliers deliver reliably, and where are procurement delays or open commitments accumulating?

**Why this report matters**  
This directly supports supply chain management and exposes procurement efficiency.

**Main source tables**

- `ekko` for purchase order header
- `ekpo` for purchase order item
- `eket` for purchase order schedule line
- `ekbe` for purchasing document history
- `lfa1` for supplier master
- `mara` for material attributes
- `makt` for material descriptions

**Main KPIs**

- ordered quantity
- received quantity
- open quantity
- purchase order value
- on-time supplier delivery rate
- average delay in days
- overdue purchase order items

**Suggested dimensions**

- date
- supplier
- material
- purchasing organization
- plant

**Suggested grain**

Prefer one row per `purchase_order_item x schedule_line`, with a derived received quantity and delay status.

## 4. Order Fulfillment and Delivery Timeliness

**Business question**  
Are customer orders delivered on time, and where do fulfillment bottlenecks occur?

**Why this report matters**  
This is the strongest report for the operational efficiency requirement in the project brief.

**Main source tables**

- `vbak` for sales order header
- `vbap` for sales order item
- `vbep` for sales order schedule lines
- `likp` for delivery header
- `lips` for delivery item
- `vbfa` for document flow
- `kna1` for customer master
- `makt` for material descriptions

**Main KPIs**

- requested delivery date
- actual delivery date
- on-time delivery rate
- average delivery delay
- open quantity vs delivered quantity
- delayed orders by customer
- delayed orders by material

**Suggested dimensions**

- date
- customer
- material
- plant
- shipping point

**Suggested grain**

One row per deliverable sales order item or per sales schedule line, depending on data completeness after profiling.

## 5. Sales Price, Discount, and Billing Quality Analysis

**Business question**  
How much billed value is influenced by discounts, surcharges, and pricing conditions?

**Why this report matters**  
This adds analytical depth beyond simple sales totals and makes good use of pricing data in SAP.

**Main source tables**

- `vbak` for sales order header and pricing document number
- `vbap` for sales order item
- `vbrk` for billing header
- `vbrp` for billing item
- `konv` for pricing conditions
- `kna1` for customer master
- `mara` for material attributes
- `makt` for material descriptions

**Main KPIs**

- gross value
- net billed value
- discount amount
- surcharge amount
- discount rate
- pricing condition mix by customer
- pricing condition mix by material

**Suggested dimensions**

- date
- customer
- material
- sales organization
- pricing condition type

**Suggested grain**

One row per billing item, with rolled-up pricing condition amounts, or one row per `billing_item x condition_type` for the detailed mart.

## Recommended Build Order

The implementation should proceed in thin vertical slices:

1. Inventory Position
2. Sales Performance
3. Procurement Performance
4. Order Fulfillment
5. Pricing and Discount Analysis

This order starts with the least join-heavy model, establishes reusable dimensions, and postpones the pricing-condition complexity until the pipeline is stable.

## Source-to-Report Mapping

| Source table | Inventory | Sales | Procurement | Fulfillment | Pricing |
|---|---|---|---|---|---|
| `mard` | X |  |  |  |  |
| `mara` | X | X | X |  | X |
| `makt` | X | X | X | X | X |
| `t001w` | X |  | X | X |  |
| `vbak` |  | X |  | X | X |
| `vbap` |  | X |  | X | X |
| `vbep` |  |  |  | X |  |
| `vbrk` |  | X |  |  | X |
| `vbrp` |  | X |  |  | X |
| `likp` |  |  |  | X |  |
| `lips` |  |  |  | X |  |
| `vbfa` |  |  |  | X |  |
| `kna1` |  | X |  | X | X |
| `ekko` |  |  | X |  |  |
| `ekpo` |  |  | X |  |  |
| `eket` |  |  | X |  |  |
| `ekbe` |  |  | X |  |  |
| `lfa1` |  |  | X |  |  |
| `konv` |  |  |  |  | X |
| `tvko` |  | X |  |  | X |
| `tvtw` |  | X |  |  |  |

## First-Pass Star Schema

The BI layer should be centered around a shared set of conformed dimensions and a small number of fact tables.

### Shared dimensions

- `dim_date`
- `dim_material`
- `dim_customer`
- `dim_supplier`
- `dim_plant`
- `dim_storage_location`
- `dim_sales_org`
- `dim_distribution_channel`
- `dim_pricing_condition_type`

### Fact tables

- `fct_inventory_snapshot`
  - grain: `material x plant x storage_location x snapshot_date`
- `fct_sales_billing`
  - grain: billing item
- `fct_procurement_schedule`
  - grain: purchase order item schedule line
- `fct_order_fulfillment`
  - grain: sales order item or schedule line
- `fct_sales_pricing`
  - grain: billing item or `billing_item x condition_type`

## Proposed dbt Model Layers

### Staging

Clean, type-cast, and rename raw SAP tables:

- `stg_sap__mard`
- `stg_sap__mara`
- `stg_sap__makt`
- `stg_sap__t001w`
- `stg_sap__vbak`
- `stg_sap__vbap`
- `stg_sap__vbep`
- `stg_sap__vbrk`
- `stg_sap__vbrp`
- `stg_sap__likp`
- `stg_sap__lips`
- `stg_sap__vbfa`
- `stg_sap__ekko`
- `stg_sap__ekpo`
- `stg_sap__eket`
- `stg_sap__ekbe`
- `stg_sap__kna1`
- `stg_sap__lfa1`
- `stg_sap__konv`

### Intermediate

Business-ready joins and reusable transformations:

- `int_material_master`
- `int_customer_master`
- `int_supplier_master`
- `int_inventory_current`
- `int_sales_billing_items`
- `int_sales_order_items`
- `int_procurement_schedule_lines`
- `int_delivery_flow`
- `int_pricing_conditions`

### Marts

Final analytical models for reporting:

- `dim_date`
- `dim_material`
- `dim_customer`
- `dim_supplier`
- `dim_plant`
- `dim_storage_location`
- `dim_sales_org`
- `dim_distribution_channel`
- `dim_pricing_condition_type`
- `fct_inventory_snapshot`
- `fct_sales_billing`
- `fct_procurement_schedule`
- `fct_order_fulfillment`
- `fct_sales_pricing`

## Key Assumptions

- The project is a PoC for analytical use, not an operational multi-user transaction system.
- The CSV exports are sufficiently complete for reporting after cleaning and profiling.
- Some SAP tables may contain sparse or partially deleted records, so filtering by `is_deleted` and validating business keys will be necessary.
- Date completeness must be profiled before finalizing the exact grain of the fulfillment mart.
- Currency handling may need simplification for the PoC unless a consistent conversion approach is required by the report narrative.

## Immediate Next Steps

1. Profile the 5 report domains for row counts, null rates, and key completeness.
2. Confirm the exact KPI definitions for each report.
3. Create the raw DuckDB ingestion layer.
4. Build dbt staging models for the highest-priority sources.
5. Implement `fct_inventory_snapshot` and the first Evidence report.
