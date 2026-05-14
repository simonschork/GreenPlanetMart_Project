# Project Implementation

This directory contains the technical implementation for the GreenPlanetMart PoC.

## Structure

- `source_data/`: raw SAP CSV exports
- `warehouse/`: local DuckDB database and SQL setup files
- `dbt_greenplanetmart/`: dbt project for staging, transformations, and marts
- `evidence_greenplanetmart/`: reporting app scaffold for Evidence
- `scripts/`: helper scripts for local setup and execution

## Local Workflow

1. Initialize the DuckDB warehouse:

```bash
project_implementation/scripts/init_duckdb.sh
```

2. Load selected raw CSVs into the `raw` schema:

```bash
project_implementation/scripts/load_raw_sources.sh mard mara makt t001w
```

3. Activate the Python environment:

```bash
source .venv/bin/activate
```

4. Validate dbt connectivity:

```bash
project_implementation/scripts/run_dbt.sh debug
```

5. Build the first inventory mart:

```bash
project_implementation/scripts/run_dbt.sh build --select +fct_inventory_snapshot
```

6. Parse the dbt project:

```bash
project_implementation/scripts/run_dbt.sh parse
```
