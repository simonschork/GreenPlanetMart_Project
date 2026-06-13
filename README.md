# GreenPlanetMart Project

GreenPlanetMart is an academic proof-of-concept data warehouse and reporting project. It starts from SAP-style CSV extracts, loads them into a local DuckDB warehouse, transforms them with dbt, and serves business dashboards with Evidence.

The repository is organized so the whole implementation can be recreated locally from the source CSV files.

## Repository Structure

```text
.
├── project_implementation/
│   ├── source_data/                 # external SAP CSV extracts; ignored by git
│   ├── warehouse/                   # DuckDB init SQL and generated local warehouse
│   ├── dbt_greenplanetmart/         # dbt project: staging, intermediate, marts
│   ├── evidence_greenplanetmart/    # Evidence dashboard application
│   └── scripts/                     # helper scripts for DuckDB and dbt
└── project_report/                  # report notes and modelling notes
```

Main implementation layers:

- Raw layer: SAP CSV files loaded as all-varchar tables in DuckDB schema `raw`.
- Staging layer: dbt models clean, cast, and rename SAP source fields.
- Intermediate layer: dbt models combine related business entities.
- Mart layer: dbt tables expose reporting-ready dimensions and facts.
- Reporting layer: Evidence pages query the mart tables from DuckDB.

## What You Need

Install these tools before recreating the project:

- Python 3.10 or newer
- DuckDB CLI, available as `duckdb`
- Node.js 18 or newer
- npm 7 or newer

The repository expects Python dependencies inside a local `.venv` directory and Evidence dependencies inside `project_implementation/evidence_greenplanetmart/node_modules/`. Both are ignored by git and should be recreated locally.

## Source Data

The source extracts are intentionally kept outside git. To rebuild the warehouse, place the SAP CSV files ([Kaggle SAP Dataset](https://www.kaggle.com/datasets/mustafakeser4/sap-dataset-bigquery-dataset)) in:

```text
project_implementation/source_data/
```

The expected filenames are:

```text
ekbe.csv
eket.csv
ekko.csv
ekpo.csv
kna1.csv
lfa1.csv
likp.csv
lips.csv
makt.csv
mara.csv
mard.csv
t001w.csv
tvko.csv
tvkot.csv
tvtw.csv
tvtwt.csv
vbak.csv
vbap.csv
vbep.csv
vbfa.csv
vbrk.csv
vbrp.csv
```

The loader preserves the SAP identifiers as strings, including leading zeros. This is important for document numbers, material numbers, customer numbers, vendor numbers, company codes, plants, and storage locations.

## First-Time Setup

From the repository root:

```bash
python3 -m venv .venv
.venv/bin/python -m pip install --upgrade pip
.venv/bin/python -m pip install dbt-duckdb
```

Install Evidence dependencies:

```bash
cd project_implementation/evidence_greenplanetmart
npm install
cd ../..
```

Portability note: `project_implementation/dbt_greenplanetmart/profiles.yml` defines the DuckDB file path used by dbt. If the file contains a path from another machine, update it for your local checkout. When using the provided `run_dbt.sh` script, this relative path is appropriate:

```yaml
path: ../warehouse/greenplanetmart.duckdb
```

## Recreate the Project

Run these commands from the repository root.

### 1. Initialize DuckDB

```bash
project_implementation/scripts/init_duckdb.sh
```

This creates or updates:

```text
project_implementation/warehouse/greenplanetmart.duckdb
```

The DuckDB database is generated locally and ignored by git.

### 2. Load Raw SAP CSV Tables

Load all CSV files from `project_implementation/source_data/`:

```bash
project_implementation/scripts/load_raw_sources.sh
```

You can also load only selected source tables:

```bash
project_implementation/scripts/load_raw_sources.sh mard mara makt t001w
```

### 3. Validate dbt

```bash
project_implementation/scripts/run_dbt.sh debug
project_implementation/scripts/run_dbt.sh parse
```

The wrapper script runs dbt from `.venv` and uses the profile stored in `project_implementation/dbt_greenplanetmart/`.

### 4. Build the Reporting Marts

To rebuild the marts used by the dashboards:

```bash
project_implementation/scripts/run_dbt.sh build --select +fct_inventory_snapshot +fct_sales_billing +fct_order_fulfillment +fct_procurement_schedule +fct_sales_pricing
```

The main fact tables are:

- `fct_inventory_snapshot`
- `fct_sales_billing`
- `fct_sales_pricing`
- `fct_order_fulfillment`
- `fct_procurement_schedule`

Useful scoped examples:

```bash
project_implementation/scripts/run_dbt.sh build --select +fct_inventory_snapshot
project_implementation/scripts/run_dbt.sh build --select +fct_procurement_schedule
project_implementation/scripts/run_dbt.sh build --select +fct_order_fulfillment
```

`dbt build` runs the selected models and their tests.

### 5. Run the Evidence Dashboards

```bash
cd project_implementation/evidence_greenplanetmart
npm run sources
npm run dev
```

Evidence starts a local development server and opens the dashboard home page. The dashboard pages are:

- Inventory Position
- Sales Performance
- Procurement Performance
- Order Fulfillment

To build a static version:

```bash
npm run build
npm run preview
```

`npm run build` automatically refreshes Evidence sources first through the `prebuild` script.

## Standard Refresh Workflow

Use this workflow after replacing or updating the SAP CSV extracts:

```bash
project_implementation/scripts/init_duckdb.sh
project_implementation/scripts/load_raw_sources.sh
project_implementation/scripts/run_dbt.sh parse
project_implementation/scripts/run_dbt.sh build --select +fct_inventory_snapshot +fct_sales_billing +fct_order_fulfillment +fct_procurement_schedule +fct_sales_pricing
cd project_implementation/evidence_greenplanetmart
npm run build
```

For an inventory-only refresh:

```bash
project_implementation/scripts/load_raw_sources.sh mard mara makt t001w
project_implementation/scripts/run_dbt.sh build --select +fct_inventory_snapshot
cd project_implementation/evidence_greenplanetmart
npm run build
```

## Generated Files

These files and directories are generated locally and are not expected to be committed:

- `.venv/`
- `project_implementation/source_data/`
- `project_implementation/warehouse/*.duckdb`
- `project_implementation/dbt_greenplanetmart/target/`
- `project_implementation/evidence_greenplanetmart/node_modules/`
- `project_implementation/evidence_greenplanetmart/.evidence/`
- `project_implementation/evidence_greenplanetmart/build/`

## Troubleshooting

- `dbt is not installed in .venv`: create the virtual environment and install `dbt-duckdb`.
- `Missing source file`: place the required CSV in `project_implementation/source_data/` or pass only the tables you want to load.
- DuckDB path errors in dbt: update `project_implementation/dbt_greenplanetmart/profiles.yml` for your local checkout.
- Stale dashboard values: run `npm run sources` in `project_implementation/evidence_greenplanetmart/`, or use `npm run build`.
- Evidence install errors: confirm Node.js is version 18 or newer with `node --version`.

## Further Documentation

- [Implementation README](project_implementation/README.md)
- [Evidence README](project_implementation/evidence_greenplanetmart/README.md)
- [Report notes](project_report/)
- [ERD notes](project_report/7_greenplanetmart_erd_model.md)
