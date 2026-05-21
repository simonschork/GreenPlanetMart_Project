# Relational Model Coverage Assessment and Gap Closure Plan

## Context

A review comment requested the following addition:

> Add a relational model table. Include entities, primary keys, foreign keys, relationship/cardinality, and purpose. This will close the gap between "BI star schema" and "relational database solution."

This note consolidates two assessment steps:

1. evaluation of the current report/documentation
2. evaluation of the actual DuckDB and dbt implementation

## Overall Outcome

The current implementation and report document the BI star schema well enough to show an analytical solution, but they do not yet fully document or demonstrate a separate relational database solution.

The gap identified by the reviewer is therefore still open.

## Assessment Against the Report/Documentation

### What is already covered

- The report explains the layered architecture from SAP CSV extracts to DuckDB, dbt, and Evidence.
- The report documents the dimensional BI model with conformed dimensions and fact tables.
- The report includes the analytical grain of the implemented fact tables.
- The report explains the purpose of the reports and the role of the marts in the BI layer.

### What is only partially covered

- Entities are partially covered through dimensions and fact tables.
- Primary keys are partially covered through named business keys in the marts and dbt documentation.
- Foreign keys are partially covered because fact tables clearly contain dimension key columns.
- Purpose is partially covered through model descriptions and narrative text.

### What is missing in the report

- No explicit relational model table with columns such as `entity`, `primary key`, `foreign key`, `relationship/cardinality`, and `purpose`.
- No explicit relationship/cardinality documentation such as `1:n`, `n:1`, or `1:1`.
- No clear separation between the normalized or relational design and the BI star schema.
- No dedicated relational model diagram or screenshot.
- No explicit integrity-constraint discussion tied to named entity relationships.
- No explicit indexing strategy section for the relational database solution.

### Report Verdict

The report currently supports the "BI star schema" side of the project well, but it does not yet close the documentation gap to a "relational database solution."

## Assessment Against the DuckDB Implementation

### What is already implemented

- The DuckDB warehouse has a clear layered structure with `raw`, `staging`, `intermediate`, and `marts` schemas.
- The dbt project materializes `staging` and `intermediate` as views and `marts` as tables.
- The marts include clear dimension and fact entities such as `dim_material`, `dim_customer`, `dim_supplier`, `dim_plant`, `fct_sales_billing`, `fct_procurement_schedule`, and `fct_order_fulfillment`.
- dbt model documentation defines purpose statements for the marts.
- dbt tests enforce `not_null` and `unique` checks for dimension keys and `not_null` checks for fact foreign-key-style columns.

### What is only partially implemented

- Primary-key behavior is only partially represented because key columns exist and are tested in dbt, but they are not enforced by DuckDB constraints.
- Foreign-key behavior is only partially represented because foreign-key-style columns exist in facts, but they are not enforced as database foreign keys.
- Relationship semantics are implicit in SQL joins and star-schema structure, but not formalized in warehouse metadata.

### What is missing in the physical implementation

- No registered DuckDB `PRIMARY KEY` constraints.
- No registered DuckDB `FOREIGN KEY` constraints.
- No `relationships` tests in dbt to validate referential integrity between facts and dimensions.
- No registered indexes in DuckDB metadata.
- No separate persisted normalized relational layer that is clearly distinct from the BI marts.

### Implementation Verdict

The physical implementation is a functioning analytical warehouse pipeline, not a fully expressed relational database design with enforced relational constraints.

## Coverage Matrix

| Review requirement | Report/documentation | DuckDB/dbt implementation | Status |
|---|---|---|---|
| Entities | Partially covered through dimensions, facts, and source tables | Covered as schemas, views, and marts | Partial |
| Primary keys | Partially documented | Present as key columns and dbt uniqueness tests, not database constraints | Partial |
| Foreign keys | Partially implied in fact-to-dimension structure | Present as columns, not enforced as database foreign keys | Partial |
| Relationship/cardinality | Not explicitly documented | Only implicit in model structure and joins | Missing |
| Purpose | Mostly covered in report narrative and dbt descriptions | Covered in dbt model descriptions | Mostly covered |
| Relational model table | Missing | Missing | Missing |
| Integrity constraints | Weakly covered | Not enforced in DuckDB metadata | Missing |
| Indexing strategy | Missing | Missing | Missing |
| Clear bridge between relational model and BI star schema | Missing | Missing | Missing |

## Main Conclusion

The current project demonstrates:

- a working ingestion and transformation pipeline
- a well-defined BI star schema
- usable dashboards and analytical outputs

The current project does not yet demonstrate:

- a separately documented relational model artifact
- explicit entity relationship cardinalities
- enforced relational constraints in DuckDB
- a documented bridge from normalized relational design to analytical marts

## Plan to Close the Identified Gaps

### Priority 1: Add the missing relational model table to the report

Create a table in the report with at least these columns:

| Entity | Primary key | Foreign key(s) | Relationship/cardinality | Purpose |
|---|---|---|---|---|

Recommended entities to include:

- `raw.mara` or staged material master representation
- `raw.kna1` or staged customer master representation
- `raw.lfa1` or staged supplier master representation
- `raw.t001w` or staged plant representation
- `raw.mard` or current inventory representation
- `raw.vbak` and `raw.vbap` for sales orders
- `raw.vbrk` and `raw.vbrp` for billing
- `raw.ekko`, `raw.ekpo`, and `raw.eket` for procurement
- `raw.likp` and `raw.lips` for delivery

Outcome:

- closes the exact wording of the review request
- makes the relational layer visible before the star schema discussion

### Priority 2: Add an explicit relational model narrative before the BI model section

Add a subsection that explains:

- which source entities represent master data
- which source entities represent transactional data
- how header-item relationships work in SAP tables
- which business keys are preserved
- which entities are normalized and why
- how this relational structure is transformed into marts

Outcome:

- creates the missing bridge between operational relational structure and BI design

### Priority 3: Add explicit relationship and cardinality statements

Document examples such as:

- one customer to many sales orders
- one sales order header to many sales order items
- one billing header to many billing items
- one purchase order header to many purchase order items
- one purchase order item to many schedule lines
- one plant to many storage-location inventory records
- one material to many inventory, sales, procurement, and fulfillment records

Outcome:

- satisfies the "relationship/cardinality" requirement directly

### Priority 4: Add referential-integrity validation in dbt

Add `relationships` tests for important fact-to-dimension links such as:

- `fct_sales_billing.customer_key -> dim_customer.customer_key`
- `fct_sales_billing.material_key -> dim_material.material_key`
- `fct_procurement_schedule.supplier_key -> dim_supplier.supplier_key`
- `fct_order_fulfillment.plant_key -> dim_plant.plant_key`
- `fct_inventory_snapshot.storage_location_key -> dim_storage_location.storage_location_key`

Outcome:

- does not create physical foreign keys in DuckDB, but gives test-based relational integrity evidence

### Priority 5: Add a short integrity-constraints and indexing section

Document that:

- DuckDB is used here primarily as an analytical engine for a PoC
- dbt tests currently provide logical integrity checks instead of database-enforced PK/FK constraints
- the current implementation does not define explicit indexes
- this is acceptable for the local PoC, but a production relational database would normally define PK/FK constraints and indexing on join keys

Outcome:

- closes two explicit report requirements without overstating what the implementation does

### Priority 6: Add a relational-to-dimensional mapping table

Create a second table such as:

| Relational entity | Transformation layer | Target BI entity |
|---|---|---|

Examples:

- `mara` + `makt` -> `staging/intermediate` -> `dim_material`
- `kna1` -> `staging/intermediate` -> `dim_customer`
- `ekko` + `ekpo` + `eket` -> `intermediate` -> `fct_procurement_schedule`
- `vbrk` + `vbrp` -> `intermediate` -> `fct_sales_billing`

Outcome:

- makes the transition from relational source model to analytical target model explicit

## Recommended Execution Order

1. Add the relational model table to the report.
2. Add the relational narrative and cardinality statements.
3. Add the relational-to-dimensional mapping table.
4. Add dbt `relationships` tests for key fact-to-dimension joins.
5. Add a short limitations note about missing physical PK/FK constraints and indexes in DuckDB.

## Final Recommendation

If the goal is to satisfy the reviewer efficiently, the highest-value change is not a major redesign of the warehouse. The most effective next step is to add explicit relational-model documentation and dbt-based referential-integrity evidence, while clearly stating that the current DuckDB implementation is optimized as an analytical PoC rather than as a fully constrained OLTP-style relational database.
