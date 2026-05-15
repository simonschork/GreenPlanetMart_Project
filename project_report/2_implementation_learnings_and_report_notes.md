# GreenPlanetMart Implementation Learnings and Report Notes

## Purpose

This document summarizes the most relevant learnings from creating, testing, and refining the GreenPlanetMart PoC implementation. It is intended as source material for the project report and focuses on points that map directly to the project brief:

- technical architecture
- data integration
- data modeling
- implementation decisions
- challenges and mitigation strategies
- performance and scalability considerations
- implementation evidence that can be shown in the report

## 1. Technical Architecture

The implemented stack is:

- `DuckDB` as the local analytical database
- `dbt` as the transformation, testing, and modeling layer
- `Evidence` reserved as the reporting layer

### Why this architecture was chosen

This project is explicitly a PoC with existing CSV exports, not a production multi-user operational system. Because of that, the selected stack optimizes for:

- low setup cost
- reproducibility
- local execution
- fast iteration on SQL models
- clear transformation lineage
- easy screenshot-based evidence for the report

### Practical architecture flow

```text
SAP CSV extracts
-> DuckDB raw schema
-> dbt staging models
-> dbt intermediate models
-> dbt marts / star schema
-> Evidence reports
```

### Implemented physical/logical layers

- `raw`: direct CSV ingestion tables in DuckDB
- `staging`: type-casting, renaming, and basic cleanup
- `intermediate`: reusable business-ready joins
- `marts`: final fact and dimension tables for reporting

### Important architectural observation

DuckDB works well for this PoC, but it is not a good fit for concurrent write-heavy usage. During implementation, dbt builds failed whenever an interactive DuckDB session still held a write lock on the database file. This is an important point for the report:

- `DuckDB` is appropriate for a local analytical PoC
- it should not be framed as a direct substitute for a multi-user enterprise OLTP database

## 2. Implemented Analytical Data Model

### Shared dimensions

The implementation converged on a conformed-dimension approach:

- `dim_date`
- `dim_material`
- `dim_customer`
- `dim_supplier`
- `dim_plant`
- `dim_storage_location`
- `dim_sales_org`
- `dim_distribution_channel`
- `dim_pricing_condition_type`

### Implemented fact tables

- `fct_inventory_snapshot`
- `fct_sales_billing`
- `fct_procurement_schedule`
- `fct_order_fulfillment`
- `fct_sales_pricing`

### Why this model is strong for the brief

This structure supports:

- supply chain reporting
- business analytics
- operational efficiency analysis

It also matches standard BI practice more closely than a single flattened table because descriptive attributes are reused through dimensions while measures stay in fact tables.

## 3. Report-to-Mart Mapping

### 1. Inventory Position by Plant, Storage Location, and Material

- fact: `fct_inventory_snapshot`
- dimensions: `dim_material`, `dim_plant`, `dim_storage_location`, `dim_date`

### 2. Sales Performance by Customer, Product, and Region

- fact: `fct_sales_billing`
- dimensions: `dim_customer`, `dim_material`, `dim_sales_org`, `dim_distribution_channel`, `dim_date`

### 3. Procurement Performance and Supplier Reliability

- fact: `fct_procurement_schedule`
- dimensions: `dim_supplier`, `dim_material`, `dim_plant`, `dim_storage_location`, `dim_date`

### 4. Order Fulfillment and Delivery Timeliness

- fact: `fct_order_fulfillment`
- dimensions: `dim_customer`, `dim_material`, `dim_plant`, `dim_sales_org`, `dim_distribution_channel`, `dim_date`

### 5. Sales Price, Discount, and Billing Quality Analysis

- fact: `fct_sales_pricing`
- dimensions: `dim_customer`, `dim_material`, `dim_sales_org`, `dim_distribution_channel`, `dim_pricing_condition_type`, `dim_date`

## 4. Data Integration Learnings

### Raw SAP CSVs were not clean enough for direct typed ingestion

The most important practical lesson was that the SAP CSV exports could not be treated as stable, strongly typed input files.

Observed issues:

- inconsistent inferred data types
- malformed rows in some files
- mixed representations of boolean-like fields
- sparse or partially empty business keys

### Specific examples

#### `vbrk.csv`

DuckDB auto-detection inferred incompatible types for some columns and later encountered inconsistent values and row shapes. A typed auto-ingest failed.

#### `makt.csv`

Some identifier-like columns were inferred as numeric, which broke string operations such as `trim()`.

#### multiple SAP business tables

The `is_deleted` field could not be treated as a guaranteed boolean during the full ingestion flow.

### Resulting integration strategy

The ingestion strategy was changed to:

1. load raw CSVs into DuckDB as `all_varchar`
2. use tolerant CSV parsing options
3. perform all type-casting in dbt staging models

This was the correct decision for the PoC because it moved data quality control into versioned SQL transformations instead of relying on fragile file auto-detection.

### Final raw-loading design

The raw loader was adjusted to:

- read all columns as text
- allow null padding
- relax strict CSV parsing
- preserve malformed but still usable records for downstream cleanup

This is a strong point for the report because it demonstrates a realistic ETL design response to imperfect source data.

### How the integration issues were addressed

The integration issues were addressed in a sequence of concrete implementation steps rather than with one single fix.

#### 1. Stable raw-ingestion layer was introduced

Instead of ingesting CSV files with automatic typed detection, the raw loader was redesigned so that:

- all columns are loaded as text
- problematic rows are tolerated instead of aborting the whole load
- missing trailing values are padded with nulls
- quoted text fields with embedded commas are handled more safely

This created a stable landing zone in the `raw` schema even when source files were imperfect.

#### 2. Type conversion was moved into dbt staging models

All important typing decisions were centralized in the staging layer:

- IDs and codes were cast to `varchar`
- numeric measures were cast with `try_cast`
- date fields were parsed in SQL
- trimming and normalization were performed after explicit casting

This made transformations deterministic and version-controlled. It also meant that typing logic could be corrected without re-engineering the raw ingestion step.

#### 3. Deletion and status handling was standardized

The source files did not represent status fields consistently. To avoid brittle assumptions:

- `is_deleted` and similar status-style fields were treated as normalized text values
- filtering logic was implemented with defensive conditions such as lowercasing, trimming, and comparing against string values

This prevented failures caused by mixed boolean/text representations.

#### 4. Source duplicates were handled in dimension models

Master data extracts contained duplicate business keys. These duplicates were not ignored; instead they were addressed by:

- defining business keys explicitly in dimensions
- using a latest-record rule based on source record timestamps
- materializing only one surviving row per business key in the marts layer

This ensured that dimensions were analytically usable and passed uniqueness tests.

#### 5. Missing references were preserved through unknown members

Some transactional rows had missing references to master data, for example:

- billing rows without material IDs
- fulfillment rows with missing customer, plant, sales organization, or distribution channel
- procurement rows without a supplier because the source represented an internal transfer scenario

These cases were addressed by introducing `__UNKNOWN__` members in the affected dimensions. Facts were then redirected to those surrogate members instead of being dropped.

This approach preserved reporting completeness and avoided losing business events during integration.

#### 6. Incomplete operational dates were resolved with fallback logic

Not every domain had one perfectly reliable date column. The fulfillment slice required explicit fallback logic:

- requested delivery dates came from schedule lines when available
- otherwise the requested header date was used
- actual delivery logic prioritized actual goods issue or delivery dates and then fell back to planned delivery-related dates when necessary

This made KPI derivation possible even when the source exports were partially sparse.

#### 7. Integration fixes were validated through dbt tests

The integration process was not considered complete until model tests passed. The team addressed issues iteratively:

- failed uniqueness tests led to dimension deduplication rules
- failed not-null tests led to unknown-member handling
- schema/test mismatches were corrected when tests revealed them

This is important for the project report because it shows that data integration quality was verified empirically rather than only assumed.

#### 8. Integration design outcome

The final integration design can be described as:

```text
messy operational CSV exports
-> tolerant raw landing layer
-> explicit staging cleanup and typing
-> intermediate business integration models
-> dimensional marts with tested keys and measures
```

This sequence is one of the strongest technical justifications in the project because it shows how raw operational extracts were systematically transformed into a reliable analytical model.

## 5. Modeling Learnings by Layer

### Staging layer

Key lessons:

- explicit casting is mandatory
- identifiers should be cast to `varchar` before trimming
- dates and numeric measures should be parsed only in staging
- deletion/status filters should be normalized as text-based conditions

The staging layer became the main technical boundary between unstable source data and reliable analytical models.

### Intermediate layer

The intermediate models were useful because they separated business logic from source cleanup.

Examples:

- `int_inventory_current`
- `int_sales_billing_items`
- `int_procurement_schedule_lines`
- `int_order_fulfillment`
- `int_sales_pricing_conditions`

Main benefit:

- facts remained simpler because cross-source joins and reusable logic were already resolved upstream

### Mart layer

The marts started as simpler wide tables, but the implementation quickly showed that a proper star schema was better for:

- reuse across reports
- clearer semantics
- cleaner report design
- easier testing

This is important for the report: the design evolved from a proof-of-concept wide-table approach toward a more robust dimensional model.

## 6. Important Grain Decisions

### Inventory

`fct_inventory_snapshot`

- grain: `material x plant x storage_location x snapshot_date`

Rationale:

- direct fit for stock-position analysis
- stable enough for the available `mard` snapshot-style source

### Sales billing

`fct_sales_billing`

- grain: billing item

Rationale:

- natural level for billed revenue and quantity
- aligns well with customer/product/channel reporting

### Procurement

`fct_procurement_schedule`

- grain: `purchase_order_item x schedule_line`

Rationale:

- best level for planned vs received vs open quantity
- supports overdue and supplier reliability metrics

### Order fulfillment

`fct_order_fulfillment`

- grain: sales order item

Rationale:

- cleaner for requested vs delivered performance than pure delivery-item grain
- easier to communicate in a business report

### Pricing

`fct_sales_pricing`

- grain: `billing_item x pricing_condition_type`

Rationale:

- necessary to analyze discounts, surcharges, and pricing composition
- retains detail without exploding to a less interpretable raw condition-record level

## 7. Data Quality Problems and Solutions

### 1. Duplicate business keys in source master data

Observed in:

- material master
- plant master

Solution:

- dimensions were deduplicated using a latest-record rule based on source record timestamp

Report relevance:

- shows that operational extracts may contain multiple versions of the same business object
- justifies use of deterministic survivorship logic in the BI layer

### 2. Missing dimension references in transactional data

Observed in:

- billing items without material IDs
- fulfillment rows missing customer, plant, sales org, or distribution channel in some cases
- procurement rows without suppliers for internal transfer scenarios

Solution:

- added `__UNKNOWN__` dimension members for affected conformed dimensions

Used in:

- `dim_material`
- `dim_customer`
- `dim_supplier`
- `dim_plant`
- `dim_sales_org`
- `dim_distribution_channel`
- `dim_pricing_condition_type`

Report relevance:

- this is a standard warehouse technique
- preserves fact completeness
- avoids dropping otherwise valid business activity from the analytical model

### 3. Partial incompleteness in delivery/schedule data

Observed in:

- `vbep`
- `likp`
- `lips`

Solution:

- fulfillment logic used fallback date logic
- requested dates came from schedule lines first, then header date fallback
- actual delivery date used delivery actual date first, then planned delivery alternatives

Report relevance:

- demonstrates robust operational KPI design under incomplete source availability

## 8. Testing Strategy and Learnings

dbt tests were used as implementation controls, not only as final checks.

### Test types applied

- `not_null`
- `unique`

### What the tests revealed

- duplicate keys in dimensions
- missing references caused by real source sparsity
- an invalid schema test definition on the procurement fact

### How tests changed the design

The models were improved after test failures by:

- deduplicating dimensions
- introducing unknown members
- correcting model/test alignment

This is very relevant for the report because it shows iterative validation and quality assurance during implementation rather than only after the fact.

## 9. Key Challenges and Mitigation Strategies

### Challenge: source inconsistency

Problem:

- CSV structure and typing were not fully reliable

Mitigation:

- raw ingestion as text
- explicit dbt casting
- tolerant loader configuration

### Challenge: local database locking

Problem:

- open DuckDB shell sessions blocked dbt builds

Mitigation:

- close interactive DuckDB sessions before dbt runs
- understand DuckDB as a single-user analytical engine for this PoC

### Challenge: sparse SAP transactional fields

Problem:

- not every transaction row had complete master-data references

Mitigation:

- unknown-member dimension pattern
- fallback logic in fulfillment and pricing models

### Challenge: choosing the right grain

Problem:

- some source tables were too technical or too granular for direct reporting

Mitigation:

- choose business-meaningful grains for each fact
- use intermediate models to bridge raw SAP complexity and BI usability

## 10. Performance and Scalability Notes

For the PoC, performance was acceptable and development iteration was fast.

Observations:

- DuckDB handled local transformations and mart builds quickly
- dbt runs for the implemented slices completed in seconds
- fact builds remained manageable even with multiple joins

Limitations to mention in the report:

- concurrency is limited
- this approach is suitable for a PoC or local analytical workflow
- a production-scale enterprise implementation would likely require a different multi-user database platform

## 11. Implementation Decisions Worth Justifying in the Report

### Why raw tables were not typed on load

Because the source files were inconsistent enough that reliable typing at ingest time would have been fragile.

### Why dimensions include unknown members

Because dropping incomplete transactional rows would distort business reporting more than preserving them with explicit unknown references.

### Why some facts use fallback dates

Because SAP operational exports were not uniformly complete, but the report KPIs still required a consistent date logic.

### Why a dimensional model was preferred over fully denormalized final tables

Because dimensions improve reuse, clarity, and BI maintainability while still supporting the required reports.

## 12. Evidence to Capture for the Final Report

The following artifacts should be captured as screenshots or exports:

- DuckDB schemas: `raw`, `staging`, `intermediate`, `marts`
- example rows from each fact table
- example rows from each major dimension table
- dbt project structure
- dbt test results showing successful builds
- SQL lineage or dependency screenshots if available
- sample raw source records showing data quality issues
- evidence of unknown-member handling
- report screenshots once Evidence pages are built

## 13. Suggested Narrative for the Report

A strong report narrative would be:

1. the source data was heterogeneous and operationally oriented rather than analytics-ready
2. a layered DuckDB + dbt architecture was chosen to create a reproducible analytical pipeline
3. the implementation started with raw ingestion and evolved into a conformed star schema
4. repeated testing exposed realistic data-quality issues that required design adaptation
5. the final result is a PoC analytical warehouse that supports inventory, sales, procurement, fulfillment, and pricing reports

## 14. Current State of Implementation

### Implemented dimensions

- `dim_date`
- `dim_material`
- `dim_customer`
- `dim_supplier`
- `dim_plant`
- `dim_storage_location`
- `dim_sales_org`
- `dim_distribution_channel`
- `dim_pricing_condition_type`

### Implemented facts

- `fct_inventory_snapshot`
- `fct_sales_billing`
- `fct_procurement_schedule`
- `fct_order_fulfillment`
- `fct_sales_pricing`

### Final outcome

The five planned analytical slices were implemented successfully and validated with dbt tests. The resulting warehouse is technically coherent, appropriately scoped for a PoC, and directly aligned with the reporting requirements in the project brief.
