# GreenPlanetMart ERD Model

This version uses Mermaid `classDiagram` syntax because it is more reliable in older or extension-based VS Code Mermaid previews and supports end-cardinalities on plain relationships.

## Analytical Star Schema

```mermaid
classDiagram
    class dim_date
    class dim_material
    class dim_customer
    class dim_supplier
    class dim_plant
    class dim_storage_location
    class dim_sales_org
    class dim_distribution_channel

    class fct_inventory_snapshot
    class fct_sales_billing
    class fct_order_fulfillment
    class fct_procurement_schedule

    dim_plant "1" -- "0..*" dim_storage_location

    dim_date "1" -- "0..*" fct_inventory_snapshot
    dim_material "1" -- "0..*" fct_inventory_snapshot
    dim_plant "1" -- "0..*" fct_inventory_snapshot
    dim_storage_location "1" -- "0..*" fct_inventory_snapshot

    dim_date "1" -- "0..*" fct_sales_billing
    dim_customer "1" -- "0..*" fct_sales_billing
    dim_material "1" -- "0..*" fct_sales_billing
    dim_sales_org "1" -- "0..*" fct_sales_billing
    dim_distribution_channel "1" -- "0..*" fct_sales_billing
    dim_plant "1" -- "0..*" fct_sales_billing
    dim_storage_location "0..1" -- "0..*" fct_sales_billing

    dim_date "1" -- "0..*" fct_order_fulfillment
    dim_date "1" -- "0..*" fct_order_fulfillment
    dim_date "0..1" -- "0..*" fct_order_fulfillment
    dim_customer "1" -- "0..*" fct_order_fulfillment
    dim_material "1" -- "0..*" fct_order_fulfillment
    dim_sales_org "1" -- "0..*" fct_order_fulfillment
    dim_distribution_channel "1" -- "0..*" fct_order_fulfillment
    dim_plant "1" -- "0..*" fct_order_fulfillment
    dim_storage_location "0..1" -- "0..*" fct_order_fulfillment

    dim_date "1" -- "0..*" fct_procurement_schedule
    dim_date "1" -- "0..*" fct_procurement_schedule
    dim_supplier "1" -- "0..*" fct_procurement_schedule
    dim_material "1" -- "0..*" fct_procurement_schedule
    dim_plant "1" -- "0..*" fct_procurement_schedule
    dim_storage_location "0..1" -- "0..*" fct_procurement_schedule
```

### Fact Grains

- `fct_inventory_snapshot`: one row per `material x plant x storage_location x snapshot_date`
- `fct_sales_billing`: one row per billing item
- `fct_order_fulfillment`: one row per sales order item in the implemented mart
- `fct_procurement_schedule`: one row per `purchase_order_item x schedule_line`

## Core Operational Source Model

```mermaid
classDiagram
    class mara
    class makt
    class kna1
    class lfa1
    class t001w
    class tvko
    class tvtw

    class mard
    class vbak
    class vbap
    class vbep
    class likp
    class lips
    class vbrk
    class vbrp
    class ekko
    class ekpo
    class eket

    mara "1" -- "0..*" makt
    mara "1" -- "0..*" mard
    t001w "1" -- "0..*" mard

    kna1 "1" -- "0..*" vbak
    tvko "1" -- "0..*" vbak
    tvtw "1" -- "0..*" vbak
    vbak "1" -- "0..*" vbap
    mara "1" -- "0..*" vbap
    t001w "1" -- "0..*" vbap
    vbap "1" -- "0..*" vbep

    likp "1" -- "0..*" lips
    vbap "1" -- "0..*" lips

    kna1 "1" -- "0..*" vbrk
    tvko "1" -- "0..*" vbrk
    tvtw "1" -- "0..*" vbrk
    vbrk "1" -- "0..*" vbrp
    mara "1" -- "0..*" vbrp
    t001w "1" -- "0..*" vbrp

    lfa1 "1" -- "0..*" ekko
    ekko "1" -- "0..*" ekpo
    mara "1" -- "0..*" ekpo
    t001w "1" -- "0..*" ekpo
    ekpo "1" -- "0..*" eket
```

## Relational Summary

- One customer can have many sales orders and billing documents.
- One sales order header can have many sales order items.
- One sales order item can have many schedule lines.
- One delivery header can have many delivery items.
- One billing header can have many billing items.
- One purchase order header can have many purchase order items.
- One purchase order item can have many schedule lines.
- One material can appear in inventory, sales, billing, fulfillment, and procurement rows.
- One plant can appear in inventory, sales, billing, fulfillment, and procurement rows.
- One supplier can have many purchase orders.

## Notes

- The analytical model is implemented in `project_implementation/dbt_greenplanetmart/models/marts`.
- `dim_date` is reused in multiple roles for billing, order, requested delivery, actual delivery, purchase order, and planned delivery dates.
- `dim_storage_location` depends on plant and is keyed by `client_id + plant_id + storage_location_id`.
- In DuckDB, referential integrity is validated mainly by dbt tests and model logic instead of database-enforced foreign keys.
