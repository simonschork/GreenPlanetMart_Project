# Report-Only Relational Model Content Pack

## Purpose

This document contains the remaining report-only content needed to close the reviewer comment about the missing bridge between the BI star schema and the relational database solution.

It is written as a self-contained content pack so it can be used in the report without opening the project implementation.

## What Was Already Completed in the Implementation

The project implementation already supports the report claim that the data model is relationally consistent at the analytical layer:

- the common dimensions were widened so that they cover all observed business keys used by the fact tables, not only keys present in master tables
- date coverage was widened so the calendar dimension spans the actual dates used in the marts
- dbt referential-integrity tests were added for major fact-to-dimension relationships
- read-only DuckDB validation showed that the previously missing non-null references for inventory, sales billing, and order fulfillment were resolved after the dimension updates

This means the remaining gap is now primarily documentation in the report itself.

## Recommended Placement in the Report

Insert the following content in the report section on technical architecture and data modeling, before the current BI star-schema discussion. The recommended order is:

1. relational model narrative
2. relational model table
3. relationship and cardinality summary
4. relational-to-dimensional mapping table
5. short integrity constraints and indexing note

## Ready-to-Use Relational Model Narrative

The GreenPlanetMart solution is based on a layered data architecture that starts from operational SAP-style relational source entities and ends in a dimensional BI model. Before the star schema is introduced, the underlying source structure can be understood as a normalized relational model consisting of master-data tables, document-header tables, document-item tables, schedule-line tables, delivery tables, and pricing-condition tables.

The master-data entities include materials, customers, suppliers, plants, sales organizations, and distribution channels. These entities provide reusable descriptive context for operational transactions. The transactional entities include inventory positions, sales orders, sales-order schedule lines, billing documents, billing items, purchase orders, purchase-order items, purchase-order schedule lines, delivery documents, and pricing conditions. In the source system, the structure is normalized because descriptive attributes are separated from transactional events and because business documents are split into headers, items, and schedule lines.

This relational structure is preserved conceptually in the DuckDB and dbt pipeline. The raw schema stores the original source entities. The staging layer standardizes types and names. The intermediate layer resolves business joins and prepares reusable relational combinations such as billing items with customer context, order-fulfillment items with requested and actual delivery dates, and procurement schedule lines with supplier and material context. Only after this relational integration step does the project transform the data into conformed dimensions and fact tables for BI reporting.

The relational model is therefore not replaced by the star schema. Instead, it is the structural foundation from which the star schema is derived. The dimensional model is a reporting-oriented representation of the operational relational entities.

## Ready-to-Use Relational Model Table

Use the following table in the report.

| Entity | Primary key | Foreign key(s) | Relationship/cardinality | Purpose |
|---|---|---|---|---|
| `mara` material master | `client_id + material_id` | none | one material can appear in many inventory, sales, procurement, and pricing rows | Stores core material attributes such as type, group, base unit, division, and weight fields. |
| `makt` material text | `client_id + material_id + language_code` | `client_id + material_id -> mara` | many text rows per material because one material can have multiple language-dependent descriptions | Stores language-specific material descriptions. |
| `kna1` customer master | `client_id + customer_id` | none | one customer can be referenced by many sales orders and billing documents | Stores descriptive customer attributes such as name, location, industry, and account group. |
| `lfa1` supplier master | `client_id + supplier_id` | none | one supplier can be referenced by many purchase orders | Stores descriptive supplier attributes such as name, location, industry, and account group. |
| `t001w` plant master | `client_id + plant_id` | none | one plant can be referenced by many inventory, procurement, sales, and fulfillment rows | Stores plant-level descriptive attributes such as plant name, location, and assigned sales structure. |
| `mard` inventory positions | `client_id + material_id + plant_id + storage_location_id` | `material_id -> mara`, `plant_id -> t001w` | many inventory rows per material and many rows per plant; each row represents one material-location stock position | Stores stock balances by material, plant, and storage location. |
| `vbak` sales order header | `client_id + sales_order_id` | `customer_id -> kna1`, `sales_organization_id -> tvko`, `distribution_channel_id -> tvtw` | one sales-order header to many sales-order items | Stores order-level information such as order date, customer, sales organization, and distribution channel. |
| `vbap` sales order item | `client_id + sales_order_id + sales_order_item_id` | `sales_order_id -> vbak`, `material_id -> mara`, `plant_id -> t001w` | many items belong to one sales-order header | Stores item-level material, quantity, plant, and shipping information for sales orders. |
| `vbep` sales order schedule line | `client_id + sales_order_id + sales_order_item_id + schedule_line_id` | `sales_order_id + sales_order_item_id -> vbap` | one sales-order item can have many schedule lines | Stores requested, scheduled, and confirmed delivery quantities and dates for order items. |
| `likp` delivery header | `client_id + delivery_document_id` | none | one delivery header to many delivery items | Stores delivery-level dates and shipping execution attributes. |
| `lips` delivery item | `client_id + delivery_document_id + delivery_item_id` | `delivery_document_id -> likp`, `reference_sales_order_id + reference_sales_order_item_id -> vbap` | many delivery items belong to one delivery; one sales-order item can be fulfilled by one or more delivery items | Stores delivered quantities and the link from deliveries back to sales-order items. |
| `vbrk` billing header | `client_id + billing_document_id` | `sold_to_customer_id -> kna1`, `payer_customer_id -> kna1`, `sales_organization_id -> tvko`, `distribution_channel_id -> tvtw` | one billing header to many billing items | Stores invoice-level metadata such as billing date, customer references, currency, and sales structure. |
| `vbrp` billing item | `client_id + billing_document_id + billing_item_id` | `billing_document_id -> vbrk`, `material_id -> mara`, `plant_id -> t001w` | many billing items belong to one billing header | Stores billed quantities, billed values, material references, and plant references. |
| `ekko` purchase order header | `client_id + purchase_order_id` | `supplier_id -> lfa1` | one purchase-order header to many purchase-order items | Stores purchase-order-level attributes such as supplier, organization, currency, and purchasing terms. |
| `ekpo` purchase order item | `client_id + purchase_order_id + purchase_order_item_id` | `purchase_order_id -> ekko`, `material_id -> mara`, `plant_id -> t001w` | many items belong to one purchase-order header | Stores material, plant, quantity, and price information for procurement items. |
| `eket` purchase order schedule line | `client_id + purchase_order_id + purchase_order_item_id + schedule_line_id` | `purchase_order_id + purchase_order_item_id -> ekpo` | one purchase-order item can have many schedule lines | Stores planned-delivery dates and schedule-line quantities for procurement. |
| `konv` pricing condition | technical pricing-record key at source level; analytically resolved by `client_id + billing_document_id + billing_item_id + condition_type` | billing context via pricing or reference document linkage; condition type context by condition code | one billing item can have many pricing-condition rows | Stores discounts, surcharges, and other pricing-condition amounts used to explain billed value composition. |
| `tvko` sales organization master | `client_id + sales_organization_id` | none | one sales organization can be referenced by many sales and billing documents | Stores sales-organization attributes such as default currency and organizational assignment. |
| `tvtw` distribution channel master | `client_id + distribution_channel_id` | none | one distribution channel can be referenced by many sales and billing documents | Stores the distribution channel codes used in commercial transactions. |

## Ready-to-Use Relationship and Cardinality Summary

Use the following explicit statements in the report:

- One customer can place many sales orders, but each sales order header belongs to one customer.
- One sales-order header can contain many sales-order items, but each sales-order item belongs to one sales-order header.
- One sales-order item can contain many schedule lines, but each schedule line belongs to one sales-order item.
- One delivery header can contain many delivery items, but each delivery item belongs to one delivery header.
- One sales-order item can be linked to one or more delivery items when fulfillment is split across deliveries.
- One billing header can contain many billing items, but each billing item belongs to one billing header.
- One purchase-order header can contain many purchase-order items, but each purchase-order item belongs to one purchase-order header.
- One purchase-order item can contain many schedule lines, but each schedule line belongs to one purchase-order item.
- One material can appear in many inventory, sales, procurement, fulfillment, and pricing rows.
- One plant can appear in many inventory, sales, procurement, and fulfillment rows.
- One supplier can be linked to many purchase orders, but each purchase-order header refers to one supplier.
- One sales organization and one distribution channel can each be linked to many sales and billing documents.

## Ready-to-Use Normalization Explanation

Use the following paragraph in the report:

The source-oriented relational model is normalized because master data is separated from transactional data and because business documents are divided into hierarchical entities such as headers, items, and schedule lines. This reduces redundancy in the operational structure and reflects how SAP-style transaction processing records business events. For example, customer attributes are stored once in the customer master instead of being repeated in every sales document row, and purchase-order schedule lines are separated from purchase-order items because one item can have several delivery commitments over time. The BI model later denormalizes selected parts of this structure into facts and dimensions in order to simplify reporting and KPI calculation.

## Ready-to-Use Relational-to-Dimensional Mapping Table

Use the following table in the report.

| Relational entity or entity group | Transformation layer | Target BI entity |
|---|---|---|
| `mara` + `makt` | staging -> intermediate enrichment | `dim_material` |
| `kna1` plus observed customer keys from sales and billing transactions | staging -> intermediate enrichment | `dim_customer` |
| `lfa1` plus observed supplier keys from procurement transactions | staging -> intermediate enrichment | `dim_supplier` |
| `t001w` plus observed plant keys from inventory, sales, fulfillment, and procurement transactions | staging -> intermediate enrichment | `dim_plant` |
| `tvko` + `tvkot` plus observed sales-organization keys from sales and billing transactions | staging -> intermediate enrichment | `dim_sales_org` |
| `tvtw` + `tvtwt` plus observed distribution-channel keys from sales and billing transactions | staging -> intermediate enrichment | `dim_distribution_channel` |
| observed storage-location keys from inventory, sales, fulfillment, and procurement transactions | staging -> intermediate enrichment | `dim_storage_location` |
| all observed transactional dates from inventory, sales, pricing, fulfillment, and procurement | staging -> intermediate enrichment | `dim_date` |
| `mard` current inventory positions | intermediate | `fct_inventory_snapshot` |
| `vbrk` + `vbrp` + customer and sales-structure enrichment | intermediate | `fct_sales_billing` |
| `vbrk` + `vbrp` + `konv` + customer and sales-structure enrichment | intermediate | `fct_sales_pricing` |
| `vbak` + `vbap` + `vbep` + `likp` + `lips` | intermediate | `fct_order_fulfillment` |
| `ekko` + `ekpo` + `eket` + supplier enrichment | intermediate | `fct_procurement_schedule` |

## Ready-to-Use Integrity Constraints and Indexing Note

Use the following text in the report:

In the implemented PoC, DuckDB is used primarily as an analytical database rather than as a transactional OLTP platform. For this reason, referential integrity is validated mainly through dbt tests and model logic rather than through a full set of database-enforced primary-key and foreign-key constraints. The implementation preserves business keys consistently and validates important fact-to-dimension relationships through dbt. Explicit physical indexes were not defined in the current PoC because the solution is file-based, local, and optimized for analytical transformation and reporting rather than concurrent transaction processing. In a production relational database solution, primary-key constraints, foreign-key constraints, and join-key indexing would normally be added more formally.

## Ready-to-Use Bridge Paragraph to the BI Star Schema

Use the following transition paragraph at the end of the relational-model section:

Based on this normalized relational structure, the project then derives a dimensional reporting model. The operational entities are not reported directly because their normalized form is efficient for source representation but less suitable for business reporting. Therefore, the integrated relational entities are transformed into conformed dimensions and fact tables. The star schema is thus the reporting-oriented layer built on top of the relational operational structure, not a replacement for it.

## Recommended Table and Figure Captions

Use captions such as:

- `Relational source model of the GreenPlanetMart solution`
- `Core entities, keys, relationships, and purposes in the operational data model`
- `Mapping from relational source entities to dimensional BI entities`

If a screenshot or diagram is added, use a caption such as:

- `Relational data structure and transition to the dimensional reporting model`

## Remaining Actions for the Report Author

Only the following actions still need to be done in the report itself:

1. Insert the narrative subsection.
2. Insert the relational model table.
3. Insert the explicit relationship/cardinality summary.
4. Insert the relational-to-dimensional mapping table.
5. Insert the integrity constraints and indexing note.
6. Add or replace a figure placeholder with a relational model diagram or screenshot if available.

## Final Note

If the report includes the content above, the reviewer comment should be addressed directly because the report will then contain:

- named relational entities
- primary keys
- foreign-key relationships
- explicit cardinalities
- entity purposes
- a clear bridge from the relational model to the BI star schema
