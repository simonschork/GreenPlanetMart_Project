# Academic Project Report Source Documentation

## Purpose

This document is an in-depth source pack for writing the academic project report for **Task 1: GreenPlanetMart - Relational Modeling and Reporting**. It consolidates the project brief, implementation decisions, validated outcomes, modeling logic, report structure, and argumentation points into one self-contained report-writing basis.

It is not the final academic report itself. Instead, it is intended to provide enough structured material that the final report can be written directly from this file without needing to reconstruct the project from the implementation repository.

## How to Use This Document

Use this file as the main drafting basis for the report. It contains:

- a section-by-section academic report blueprint
- ready-to-use analytical arguments and formulations
- the relational model to BI model bridge
- implementation details that can be converted into academic prose
- validated KPI results and correction outcomes
- evidence suggestions for figures, tables, and appendices

The final report should still be written in formal academic language and adapted to the required citation style, page limit, and formatting standard.

## Project Positioning

### Working title

Use a title such as:

**Design and Implementation of a Relational Database and BI Reporting PoC for GreenPlanetMart**

Alternative:

**Relational Data Modeling, Data Integration, and Business Intelligence Reporting for GreenPlanetMart: A DuckDB, dbt, and Evidence Proof of Concept**

### Academic positioning

The report should position the work as:

- a practical implementation project
- a master-level project report
- a proof of concept rather than a production enterprise platform
- a relational database and BI reporting solution for business decision support

### Core project objective

The central project objective can be stated as follows:

The project aimed to design and implement a reproducible data-management and reporting solution for GreenPlanetMart that transforms heterogeneous SAP-style CSV exports into a structured relational data foundation and a dimensional BI model supporting management-relevant reporting in the domains of supply chain management, business analytics, and operational efficiency.

### Author role

The report should frame the author as a substantially involved project participant. A suitable phrasing is:

The author contributed to the requirement analysis, data modeling, implementation of the DuckDB and dbt pipeline, validation of the BI outputs, and preparation of the reporting structure.

## Scope and Boundary Conditions

### Project scope

The implemented solution covers:

- ingestion of SAP-style CSV extracts into DuckDB
- relational structuring through layered dbt transformations
- creation of conformed dimensions and fact tables
- implementation of BI reporting pages in Evidence
- validation and correction of KPI logic and data-model fanout issues

### Out of scope

The report should explicitly note the following as out of scope:

- enterprise-grade transactional processing
- concurrent multi-user OLTP workloads
- full SAP integration with live interfaces
- role-based security architecture
- automated production scheduling
- FX conversion services for cross-currency normalization
- production DevOps orchestration and deployment platform

### PoC framing

Use wording such as:

The project was intentionally scoped as a local analytical proof of concept using the available source extracts. The objective was not to replicate a complete enterprise data platform, but to demonstrate a technically coherent database and BI workflow that is methodologically defensible and practically useful for GreenPlanetMart’s reporting needs.

## Suggested Report Structure and Target Weighting

Use the following approximate weight distribution:

| Section | Recommended weight |
|---|---|
| Introduction | 10-15% |
| Requirement analysis | 10-15% |
| Technical architecture and technology selection | 10-15% |
| Relational data modeling | 10-15% |
| Data integration and preparation | 15-20% |
| BI data model and reporting | 15-20% |
| Project management and implementation process | 10-15% |
| Challenges, strategies, outcomes, and reflection | 15-20% |
| Conclusion | 10-15% |

## 1. Introduction: Project Objectives and Preparation

### Main function of the section

The introduction should establish:

- the business problem
- why relational data management matters for GreenPlanetMart
- the concrete project objective
- the practical implementation character of the project
- the methodological and technical foundation

### Key content points

- GreenPlanetMart required a reporting solution capable of transforming fragmented, operational SAP-style source data into consistent management information.
- The available source data was heterogeneous, CSV-based, and operationally oriented rather than analytics-ready.
- Relational data management was relevant because the raw source structure contained multiple connected business entities such as materials, customers, suppliers, orders, deliveries, billing records, and inventory positions.
- The project objective was to create a relational data-processing foundation and a BI reporting model that would support decision-making across supply chain management, business analytics, and operational efficiency.
- The selected method combined relational modeling, staged data transformation, dimensional modeling, and BI reporting.
- The technical foundation of the work draws on relational modeling, normalization, ETL/ELT logic, dimensional modeling, data quality management, and project management.

### Ready-to-use academic formulation

GreenPlanetMart faced the challenge that operational business data existed in a fragmented and analysis-unfriendly form. SAP-style CSV exports contained relevant information for inventory, sales, procurement, supplier management, and fulfillment, but the data was not directly suitable for management reporting. The project therefore focused on designing and implementing a relational and analytical proof of concept that could transform these heterogeneous extracts into a structured and reusable reporting foundation. The implementation combined DuckDB as a local analytical database, dbt as the transformation and testing layer, and Evidence as the reporting layer. The project addressed both technical and methodological questions by linking relational data modeling, dimensional BI design, data-quality handling, and implementation validation.

### Theory and concept anchors to cite in the final report

- relational database design
- normalization
- dimensional modeling and star schema
- ETL/ELT architecture
- data quality management
- BI architecture and reporting design

## 2. Requirement Analysis

### Main function of the section

This section must convert the project brief into explicit technical and business requirements.

### Business requirement domains

The report should analyze requirements in three domains:

- supply chain management
- business analytics
- operational efficiency

### Derived reporting needs

From the project brief and implementation, the following reporting needs were derived:

- inventory visibility by plant, storage location, and material
- sales performance by customer, material, sales organization, distribution channel, and time
- procurement performance and supplier exposure
- order-fulfillment reliability and delivery timeliness

### Derived data requirements

The report should explicitly mention requirements such as:

- preservation of business keys from SAP-style source tables
- integration of master and transactional entities
- handling of header-item-schedule structures
- support for descriptive dimensions and measurable facts
- stable date handling across multiple business processes
- consistent numeric typing
- survivorship handling for repeated historical source rows
- preservation of incomplete but business-relevant transactional records

### Derived system requirements

The system needed to be:

- reproducible
- low-cost
- SQL-based
- maintainable
- transparent in transformation logic
- fast enough for local analytical PoC workloads
- extensible toward additional analytical slices

### Explicit assumptions to state

The report should clearly state assumptions because the task brief is intentionally incomplete. Important assumptions include:

- suppliers are represented through supplier master and procurement documents
- warehouses, distribution centers, and retail stores are approximated through plant and storage-location structures because no separate explicit retail-store entity is available in the source extracts
- sales organizations and distribution channels are treated as key commercial structures for business analytics
- the project focuses on the available data, not on missing operational entities that would exist in a full enterprise environment

### Ready-to-use academic formulation

Because the project brief described business domains rather than a fully specified source architecture, the requirement analysis translated broad managerial needs into concrete data and system requirements. Supply chain management required visibility into stock positions, procurement commitments, supplier reliability, and delivery execution. Business analytics required revenue insight by customer, product, and sales structure. Operational efficiency required metrics that could be derived consistently from transactional records without repeated manual preparation. These business needs were transformed into technical requirements for entity integration, key preservation, grain definition, data cleansing, date standardization, and the creation of reusable analytical structures.

## 3. Technical Architecture and Technology Selection

### Architecture overview

The implemented architecture consists of:

- SAP-style CSV extracts as source data
- DuckDB as the local database layer
- dbt as the staged transformation and testing layer
- Evidence as the reporting and presentation layer

### Layer model

Use the following layered architecture description:

- `raw`: direct ingestion of source CSV files into DuckDB
- `staging`: type conversion, renaming, trimming, and basic standardization
- `intermediate`: reusable business joins and integrated relational logic
- `marts`: final dimensions and fact tables for reporting
- `Evidence`: BI presentation layer consuming curated marts

### Why DuckDB was selected

The report should justify DuckDB as follows:

- suitable for analytical SQL workloads
- lightweight, file-based, and easy to initialize
- low setup complexity for a PoC
- strong local performance on structured transformations
- appropriate when the goal is reproducible analytical processing rather than concurrent OLTP workloads

### Why dbt was selected

- SQL-based transformation management
- layered model structure
- versionable logic
- built-in testing support
- transparent lineage and maintainability

### Why Evidence was selected

- suitable for report-style BI pages
- direct connection to analytical outputs
- fast iteration for dashboard pages
- useful for static or lightweight presentation-oriented reporting

### Comparison logic to mention

The report should explain that the selected tools were more appropriate than heavier enterprise alternatives because:

- the project was a PoC, not a full enterprise rollout
- cost and setup effort needed to remain low
- local reproducibility mattered more than enterprise concurrency
- transformation transparency and maintainability were more important than highly specialized OLTP features

### Limitation to mention

The report should explicitly state:

DuckDB is appropriate for a local analytical proof of concept, but it is not intended here as a replacement for a multi-user transactional enterprise DBMS. During implementation, open interactive DuckDB sessions could block dbt execution because the database file was locked, which underlines its role as an analytical rather than a write-concurrent operational platform.

### Ready-to-use academic formulation

The technical architecture follows a layered analytical pipeline from operational source extracts to final reporting outputs. CSV files were ingested into a DuckDB raw schema, transformed through dbt staging and intermediate models, and materialized into final marts that serve as the source for Evidence dashboards. DuckDB was selected because it offers an efficient and low-overhead analytical database environment suitable for local proof-of-concept work. dbt was selected because it enables transformations to be modeled, documented, tested, and versioned in a structured SQL-centric workflow. Evidence was selected because it provides a lightweight reporting layer for management-oriented dashboards. Together, these tools form a coherent architecture that balances transparency, reproducibility, and implementation speed.

## 4. Relational Data Modeling

### Main function of the section

This section must show that the project includes a relational data model, not only a BI star schema.

### Core relational design logic

The operational data model is normalized around:

- master data
- transaction headers
- transaction items
- schedule lines
- delivery execution records

### Ready-to-use relational model table

| Entity | Primary key | Foreign key(s) | Relationship/cardinality | Purpose |
|---|---|---|---|---|
| Material master (`mara`) | `client_id + material_id` | none | one material to many inventory, sales, procurement, and fulfillment rows | Stores material attributes such as type, group, unit, and division. |
| Material text (`makt`) | `client_id + material_id + language_code` | `material_id -> mara` | one material to many text rows | Stores language-dependent material descriptions. |
| Customer master (`kna1`) | `client_id + customer_id` | none | one customer to many sales orders and billing documents | Stores customer descriptions and business classification attributes. |
| Supplier master (`lfa1`) | `client_id + supplier_id` | none | one supplier to many purchase orders | Stores supplier identity and descriptive attributes. |
| Plant master (`t001w`) | `client_id + plant_id` | none | one plant to many operational rows | Represents plant-level organizational and location context. |
| Inventory positions (`mard`) | `client_id + material_id + plant_id + storage_location_id` | `material_id -> mara`, `plant_id -> t001w` | one material and one plant can each relate to many inventory rows | Stores stock quantities by material, plant, and storage location. |
| Sales order header (`vbak`) | `client_id + sales_order_id` | `customer_id -> kna1`, `sales_organization_id -> tvko`, `distribution_channel_id -> tvtw` | one sales-order header to many sales-order items | Stores commercial header attributes for sales orders. |
| Sales order item (`vbap`) | `client_id + sales_order_id + sales_order_item_id` | `sales_order_id -> vbak`, `material_id -> mara`, `plant_id -> t001w` | one header to many items | Stores ordered material, quantity, plant, and shipping context. |
| Sales order schedule line (`vbep`) | `client_id + sales_order_id + sales_order_item_id + schedule_line_id` | `sales_order_item_id -> vbap` | one sales-order item to many schedule lines | Stores requested and confirmed schedule details. |
| Delivery header (`likp`) | `client_id + delivery_document_id` | none | one delivery header to many delivery items | Stores shipment and delivery date attributes. |
| Delivery item (`lips`) | `client_id + delivery_document_id + delivery_item_id` | `delivery_document_id -> likp`, `reference_sales_order_id + reference_sales_order_item_id -> vbap` | one delivery to many items; one order item to one or more delivery items | Stores delivered quantities and document links back to order items. |
| Billing header (`vbrk`) | `client_id + billing_document_id` | customer and sales-structure references | one billing header to many billing items | Stores invoice-level commercial metadata and currency. |
| Billing item (`vbrp`) | `client_id + billing_document_id + billing_item_id` | `billing_document_id -> vbrk`, `material_id -> mara`, `plant_id -> t001w` | one billing header to many items | Stores billed quantity, billed value, and material-level invoice detail. |
| Purchase-order header (`ekko`) | `client_id + purchase_order_id` | `supplier_id -> lfa1` | one purchase-order header to many items | Stores supplier, currency, and organizational procurement data. |
| Purchase-order item (`ekpo`) | `client_id + purchase_order_id + purchase_order_item_id` | `purchase_order_id -> ekko`, `material_id -> mara`, `plant_id -> t001w` | one purchase-order header to many items | Stores ordered materials, quantities, and price data. |
| Purchase-order schedule line (`eket`) | `client_id + purchase_order_id + purchase_order_item_id + schedule_line_id` | `purchase_order_item_id -> ekpo` | one purchase-order item to many schedule lines | Stores schedule-level planned delivery detail. |
| Sales organization (`tvko`) | `client_id + sales_organization_id` | none | one sales organization to many sales and billing documents | Stores commercial organizational context. |
| Distribution channel (`tvtw`) | `client_id + distribution_channel_id` | none | one distribution channel to many sales and billing documents | Stores route-to-market channel codes. |

### Cardinality statements to include

- One customer can be linked to many sales orders and many billing documents.
- One sales-order header can contain many sales-order items.
- One sales-order item can contain many schedule lines.
- One delivery header can contain many delivery items.
- One sales-order item can be fulfilled by one or more delivery items.
- One billing header can contain many billing items.
- One purchase-order header can contain many purchase-order items.
- One purchase-order item can contain many schedule lines.
- One material can appear in many inventory, billing, procurement, and fulfillment events.
- One plant can appear in many inventory, sales, procurement, and fulfillment records.

### Normalization decisions to mention

- master data is separated from transactional events
- header/item/schedule structures are preserved
- language-dependent texts are separated from the core business key
- descriptive entities are not duplicated into every transaction row at the relational layer

### Integrity and indexing note for the relational section

Use wording such as:

The proof-of-concept implementation preserves relational business keys and validates important relationships through dbt tests and model logic. However, it does not implement a full production-style set of physical primary-key, foreign-key, and index definitions within DuckDB. This reflects the analytical PoC scope of the project. In a production relational environment, key constraints and join-key indexing would be formalized more strictly.

### Ready-to-use academic formulation

The source-oriented data model is relational and normalized. Master data such as materials, customers, suppliers, and plants is separated from transactional data such as orders, billing documents, deliveries, and procurement schedule lines. Business documents follow typical SAP-style hierarchical structures in which headers, items, and schedule lines are stored in separate entities. This design reduces redundancy in the operational structure and preserves process semantics. The later BI model does not replace the relational model, but is derived from it for analytical usability.

## 5. Data Integration and Preparation

### Main function of the section

This section should explain how source data was loaded, cleaned, standardized, and integrated.

### Source data basis

The project used SAP-style CSV extracts including:

- `mard`, `mara`, `makt`, `t001w`
- `vbak`, `vbap`, `vbep`
- `vbrk`, `vbrp`
- `likp`, `lips`, `vbfa`
- `ekko`, `ekpo`, `eket`, `ekbe`
- `kna1`, `lfa1`
- `tvko`, `tvkot`, `tvtw`, `tvtwt`

### Ingestion strategy

One of the key implementation decisions was to load raw CSV columns as text rather than relying on automatic typed ingestion. This should be explained clearly:

- CSV auto-detection produced incompatible types
- malformed rows and inconsistent shapes occurred
- identifier-like fields were sometimes inferred as numeric
- SAP status-style fields could not be assumed to be stable booleans

### Cleansing and transformation strategy

The report should explain the staged approach:

- ingestion into `raw`
- type casting and cleaning in `staging`
- business joins and reusable logic in `intermediate`
- final dimensions and facts in `marts`

### Important cleansing and integration rules to mention

- all raw source columns loaded as `varchar` for stability
- explicit numeric and date casting in dbt staging models
- trimming and normalization after type control
- handling of `00000000`-style invalid dates through SQL logic
- deterministic survivorship for duplicated or historical source rows
- preservation of incomplete transactions through `__UNKNOWN__` members in dimensions
- use of source record timestamps for latest-row selection

### Major data quality issues encountered

Use these as explicit examples:

- inconsistent CSV typing
- malformed row shapes
- historical duplicates causing join fanout
- missing master-data references
- date incompleteness in fulfillment
- mixed currencies in supplier exposure
- mixed units in procurement backlog interpretation

### Ready-to-use academic formulation

The data integration process followed a layered ELT logic. Source CSV files were first loaded into the DuckDB raw schema without strong typing assumptions. This decision was necessary because automatic CSV type inference proved unreliable for several SAP-style extracts. In the staging layer, fields were cast explicitly, identifiers were standardized, dates were parsed, and basic cleanup logic was applied. The intermediate layer then integrated master and transactional entities into reusable relational combinations such as billing items with customer context, order-fulfillment items with requested and actual delivery dates, and procurement schedule lines with supplier and material attributes. This approach separated ingestion stability from business integration logic and improved maintainability.

### Evidence items to capture

- screenshot of DuckDB schemas: `raw`, `staging`, `intermediate`, `marts`
- example raw CSV rows
- example staging model output
- example intermediate model output
- dbt project tree
- dbt run or build output
- evidence of unknown-member rows in dimensions

## 6. BI Data Model and Reporting

### Main function of the section

This section explains how the relationally integrated data became a reporting-friendly star schema.

### Why a star schema was chosen

- dimensions improve reuse across analytical domains
- facts separate measures from descriptive attributes
- grain can be stated explicitly
- reporting logic becomes simpler and more maintainable

### Implemented dimensions

- `dim_date`
- `dim_material`
- `dim_customer`
- `dim_supplier`
- `dim_plant`
- `dim_storage_location`
- `dim_sales_org`
- `dim_distribution_channel`

### Implemented facts and grains

| Fact table | Grain |
|---|---|
| `fct_inventory_snapshot` | material + plant + storage location + snapshot date |
| `fct_sales_billing` | billing item |
| `fct_procurement_schedule` | purchase-order item + schedule line |
| `fct_order_fulfillment` | sales-order item |

### Relational-to-dimensional bridge paragraph

Use wording such as:

The dimensional reporting model was derived from the integrated relational entities rather than from the raw source tables directly. Master-data entities were transformed into conformed dimensions, while transactional structures were transformed into fact tables at business-readable analytical grains. This approach created a clear bridge between the normalized operational structure and the denormalized reporting layer.

### Report portfolio

The project implemented four report domains:

1. Inventory Position
2. Sales Performance
3. Procurement Performance
4. Order Fulfillment

### Report documentation table for the final report

| Report | Purpose | Target stakeholder | Main source/fact | Key metrics | Business value | Main limitation |
|---|---|---|---|---|---|---|
| Inventory Position | show where stock is held and where concentration or inactivity exists | operations and supply chain management | `fct_inventory_snapshot` | unrestricted stock, stock by plant, stock by storage location | improves visibility into stock placement and operational planning | no direct cost valuation layer |
| Sales Performance | analyze revenue and billed quantity by customer, material, and sales structure | management and commercial analytics | `fct_sales_billing` | billed net value, billed quantity, revenue by customer, revenue by month | identifies high-value customers and commercial performance | no profitability or margin model |
| Procurement Performance | evaluate open schedule lines, overdue commitments, and supplier exposure | procurement and supply chain users | `fct_procurement_schedule` | open schedule lines, overdue ratio, fully received ratio, exposure by supplier and currency | supports follow-up on delays and supplier management | mixed units require careful interpretation of open quantities |
| Order Fulfillment | analyze delivery timeliness and completion status | operations and service management | `fct_order_fulfillment` | on-time ratio, fully delivered ratio, average delay, not delivered yet count | supports customer-service and delivery-performance monitoring | date completeness required fallback logic |

### Validated KPI outcomes to include

Use the validated post-correction values:

- fulfillment on-time ratio: `0.5028`, corresponding to `50.3%`
- fulfillment fully delivered ratio: `0.6654`, corresponding to `66.5%`
- average fulfillment delay: `7.8 days`
- inventory unrestricted stock total: `5,799,633,574.75`
- `CYMBAL NY (250/1000)`: `951,155,226.00`
- `CYMBAL NY (200/1000)`: `172.00`
- procurement open schedule lines: `4,617`
- procurement overdue ratio: `0.26`, corresponding to `26.0%`
- procurement fully received ratio: `0.74`, corresponding to `74.0%`
- supplier exposure for `Tyranex Solution`: `935,908,143,795.00 USD` and `888,786,588,800.00 EUR`

### Important analytical semantics to explain

- percentages must not be double-formatted
- supplier exposure must be currency-aware
- backlog interpretation must consider mixed units
- undelivered fulfillment rows must not be misclassified as on-time

### Ready-to-use academic formulation

The BI layer was modeled as a conformed dimensional schema to support cross-domain reporting. Shared dimensions such as material, customer, supplier, plant, sales organization, and date allow multiple fact tables to be analyzed consistently. Fact tables were defined at explicit analytical grains that reflect business-readable events rather than raw technical source structure. This was particularly important because direct reporting on normalized source tables would have exposed header-item-schedule complexity and source-specific semantics to report users. The dimensional model therefore improved reuse, maintainability, and clarity in the reporting layer.

## 7. Project Management and Implementation Process

### Main function of the section

This section must demonstrate a coherent project process rather than only a final technical result.

### Suggested phase structure

| Phase | Main deliverable |
|---|---|
| Requirement analysis | business needs, reporting backlog, and scope definition |
| Data-model planning | relational entity identification and BI target design |
| Architecture selection | DuckDB, dbt, and Evidence toolchain |
| Raw ingestion | stable loading of source CSVs into DuckDB |
| Transformation implementation | staging, intermediate, and mart models |
| BI development | Evidence report pages and source SQL |
| Validation and correction | dbt tests, dashboard diagnosis, and KPI corrections |
| Documentation and reflection | report writing and implementation evidence preparation |

### Roles and responsibilities

The report can state:

- the project team selected the architecture and analytical scope
- the author contributed to requirement analysis, transformation logic, data modeling, validation, and reporting design

### Resource planning

Important resource arguments:

- low infrastructure cost due to local tooling
- SQL-centric workflow reduced implementation complexity
- scoped dbt builds improved execution efficiency
- Evidence offered a lightweight reporting surface

### Stakeholder groups

- management users
- operational users
- technical users

### Risks that should be documented

- unstable source data types
- hidden duplicate histories
- semantic KPI errors
- stale BI source cache
- database file locking in a local analytical environment

### Ready-to-use academic formulation

The project followed an iterative implementation process rather than a linear one-shot build. Requirement analysis led to a reporting backlog and an initial data-model concept. The technical architecture was then selected with explicit regard to PoC constraints. Implementation progressed through raw ingestion, staging, intermediate integration, marts, and reporting pages. Validation played a central role because several data-model and KPI issues only became visible after dashboards were generated and compared against raw baselines. This iterative process reflects a realistic analytical-engineering workflow in which data modeling, testing, and reporting design influence each other continuously.

## 8. Challenges and Strategies

### Main function of the section

This section should connect concrete implementation problems with the strategies used to solve them.

### Challenge 1: CSV instability and typing

Problem:

- source files were inconsistent in type behavior and row structure

Strategy:

- ingest all raw columns as text
- move type conversion into dbt staging models

### Challenge 2: Historical duplicates and join fanout

Problem:

- historical rows in source tables inflated downstream joins and metrics

Strategy:

- implement deterministic latest-row survivorship
- add grain-focused dbt tests
- simplify BI source logic after fixing marts

### Challenge 3: Missing master-data references

Problem:

- dropping incomplete transactions would distort business reporting

Strategy:

- introduce `__UNKNOWN__` members in dimensions
- preserve transactional completeness while making data quality visible

### Challenge 4: Fulfillment date semantics

Problem:

- requested and actual delivery dates were incomplete or spread across several source entities

Strategy:

- use fallback date logic from schedule lines, header dates, and delivery dates
- preserve null semantics where no actual delivery occurred

### Challenge 5: KPI semantic errors

Problem:

- percent scaling, mixed currencies, and mixed units created misleading dashboard outputs

Strategy:

- correct percent formatting logic
- split supplier exposure by currency
- emphasize unit-aware line counts and semantics in procurement

### Challenge 6: Local analytical DBMS constraints

Problem:

- DuckDB file locking could block dbt execution

Strategy:

- treat DuckDB as an analytical single-user PoC engine
- avoid open interactive sessions during dbt runs

### Ready-to-use academic formulation

The project encountered several realistic challenges that are common in analytics engineering. Source data was heterogeneous and not consistently typed, historical duplicates created major join-fanout effects, and KPI semantics became distorted when source complexity was oversimplified in the reporting layer. The mitigation strategy was to make the transformation logic more explicit rather than more opaque. Type conversion was centralized in staging models, latest-row survivorship was implemented before downstream joins, missing references were preserved through unknown members, and dashboard metrics were revalidated against raw baselines. These corrections improved both technical correctness and reporting interpretability.

## 9. Outcomes, Evaluation, and Reflection

### Main function of the section

This section evaluates whether the project achieved its practical and academic objectives.

### Outcome statement

The project achieved its main objective by delivering:

- a working DuckDB warehouse with layered schemas
- a dbt transformation project with staging, intermediate, and mart layers
- conformed dimensions and fact tables across five analytical domains
- Evidence reporting pages for the selected use cases
- validated corrections for major KPI and fanout issues

### Benefits for GreenPlanetMart

The report should explain improvements in:

- transparency of data transformations
- consistency of KPI calculation
- reduced manual reconciliation effort
- operational visibility into inventory, procurement, sales, and fulfillment
- stronger basis for decision-making

### ROI or benefit discussion

Because this is a PoC, the report should avoid claiming a fully measured financial ROI. A strong phrasing is:

Although a full financial ROI cannot be measured within the PoC scope, the expected benefit can be assessed through process efficiency, reporting consistency, transparency of transformation logic, and improved decision support. The solution reduces repeated manual preparation, exposes data-quality issues earlier, and provides a reusable reporting structure that can be extended further.

### Limitations

- no enterprise-grade production deployment
- no enforced production-style physical constraints and indexing
- no full FX-conversion model
- mixed-unit metrics require careful interpretation
- business completeness is limited by available source extracts

### Reflection angle

The reflection should connect practice and theory:

- normalization is useful for operational structure, but dimensional modeling is superior for reporting usability
- data quality management is central to BI credibility
- testing is not only a final validation step but a design instrument
- analytical value depends on grain, join correctness, and semantic clarity, not only on tool choice

### Ready-to-use academic formulation

The project achieved a technically coherent proof of concept that demonstrates how operational SAP-style extracts can be transformed into a structured reporting solution. The final result is not merely a database file, but a layered analytical pipeline with explicit transformations, reusable dimensions, validated fact tables, and decision-oriented reports. The most important lesson is that analytical quality depends less on dashboard appearance than on the correctness of the relational and dimensional model beneath it. In this sense, the project confirms theoretical concepts from relational modeling, dimensional modeling, and data-quality management through practical implementation experience.

## 10. Conclusion

### Main function of the section

The conclusion should:

- restate the project result
- summarize the most important findings
- emphasize business value
- acknowledge limitations
- point to future improvement potential

### Ready-to-use academic formulation

The project demonstrated that GreenPlanetMart’s heterogeneous operational source data can be transformed into a coherent relational and analytical reporting solution through a layered DuckDB, dbt, and Evidence architecture. The resulting proof of concept provides reusable data structures for inventory, sales, procurement, and fulfillment analysis. The work also showed that successful BI delivery depends not only on tool selection, but on careful relational modeling, explicit grain design, survivorship handling, and metric validation. Although the solution remains a PoC and therefore has limitations in terms of enterprise deployment, indexing, and production governance, it provides a defensible and practically useful foundation for future data-management and reporting improvements.

## Report Figures, Tables, and Evidence Checklist

### Recommended figures

- architecture diagram from source CSVs to Evidence
- relational model diagram or structured entity screenshot
- dimensional model diagram
- DuckDB schema screenshot
- dbt project structure or lineage screenshot
- representative dashboard screenshots
- validation screenshot from dbt parse/build/test

### Recommended tables

- project phases and implementation contribution
- relational model table
- fact tables and analytical grains
- report-to-mart mapping
- relational-to-dimensional mapping
- risk and mitigation table

### Recommended appendices

- sample source records
- SQL snippets for staging or intermediate logic
- dbt model listings
- test outputs
- BI screenshots
- metadata exports

## Suggested Writing Order

1. Write the introduction and requirement analysis.
2. Write architecture and relational modeling together so the bridge is clear.
3. Write data integration with concrete source and transformation examples.
4. Write BI modeling and reports using the validated KPI results.
5. Write project management, challenges, and reflection after the technical chapters.
6. Write the conclusion last.

## Final Guidance

If the final report is written from this source document and supplemented with:

- academic citations for relational modeling, dimensional modeling, ETL/ELT, BI architecture, and project management
- screenshots and evidence artifacts from the actual implementation
- consistent academic phrasing and formatting

then it should be sufficient to create a strong master-level academic project report for the GreenPlanetMart assignment.
