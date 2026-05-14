# GreenPlanetMart Project

This repository contains the GreenPlanetMart data pipeline and reporting layer:

- `project_implementation/dbt_greenplanetmart/`: dbt models for staging, intermediate, and mart layers
- `project_implementation/evidence_greenplanetmart/`: Evidence reporting app
- `project_implementation/source_data/`: raw SAP CSV extracts
- `project_implementation/warehouse/greenplanetmart.duckdb`: local DuckDB warehouse
- `project_implementation/scripts/`: helper scripts for loading data and running dbt

## Prerequisites

- Python virtual environment available at `.venv`
- dbt installed in `.venv`
- Node.js and npm installed for Evidence
- DuckDB CLI available

## When Source Data Changes

If CSV files in `project_implementation/source_data/` were updated, run the pipeline in this order:

1. Load the updated CSVs into the DuckDB `raw` schema.
2. Rebuild the affected dbt models and tests.
3. Refresh Evidence sources and rebuild or run the reporting app.

## 1. Load Updated Raw Data

Load all CSV files:

```bash
project_implementation/scripts/load_raw_sources.sh
```

Load only specific tables:

```bash
project_implementation/scripts/load_raw_sources.sh mard mara makt t001w
```

If the warehouse does not exist yet, initialize it first:

```bash
project_implementation/scripts/init_duckdb.sh
```

## 2. Run dbt Pipelines

Validate the project:

```bash
project_implementation/scripts/run_dbt.sh parse
```

Run a scoped dbt build for a specific mart and its upstream dependencies:

```bash
project_implementation/scripts/run_dbt.sh build --select +fct_inventory_snapshot
```

Common reporting marts:

- `fct_inventory_snapshot`
- `fct_sales_billing`
- `fct_sales_pricing`
- `fct_order_fulfillment`
- `fct_procurement_schedule`

Examples:

```bash
project_implementation/scripts/run_dbt.sh build --select +fct_procurement_schedule
project_implementation/scripts/run_dbt.sh build --select +fct_order_fulfillment
```

To refresh the marts currently used by the Evidence reports in one run:

```bash
project_implementation/scripts/run_dbt.sh build --select +fct_inventory_snapshot +fct_sales_billing +fct_order_fulfillment +fct_procurement_schedule +fct_sales_pricing
```

Notes:

- `build` runs models and tests together.
- Prefer scoped `--select` runs instead of rebuilding the entire dbt project.
- The wrapper script uses the repository `.venv` automatically.

## 3. Run Evidence Reporting

Change into the Evidence app directory:

```bash
cd project_implementation/evidence_greenplanetmart
```

Install dependencies once if needed:

```bash
npm install
```

Refresh source extracts manually:

```bash
npm run sources
```

Run the local development server:

```bash
npm run dev
```

Build the static report:

```bash
npm run build
```

Important:

- `npm run build` now runs `evidence sources` first via `prebuild`.
- This keeps the Evidence parquet source cache aligned with the latest dbt outputs and avoids stale dashboard numbers.

Preview the built report locally:

```bash
npm run preview
```

## Recommended Update Workflow

For a normal data refresh affecting reporting:

```bash
project_implementation/scripts/load_raw_sources.sh
project_implementation/scripts/run_dbt.sh parse
project_implementation/scripts/run_dbt.sh build --select +fct_inventory_snapshot +fct_sales_billing +fct_order_fulfillment +fct_procurement_schedule +fct_sales_pricing
cd project_implementation/evidence_greenplanetmart
npm run build
```

For inventory-only updates:

```bash
project_implementation/scripts/load_raw_sources.sh mard mara makt t001w
project_implementation/scripts/run_dbt.sh build --select +fct_inventory_snapshot
cd project_implementation/evidence_greenplanetmart
npm run build
```

## Existing Subproject Docs

- [project_implementation/README.md](project_implementation/README.md)
- [project_implementation/evidence_greenplanetmart/README.md](project_implementation/evidence_greenplanetmart/README.md)
