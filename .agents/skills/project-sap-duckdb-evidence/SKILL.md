---
name: project-sap-duckdb-evidence
description: Use for this project's SAP CSV source tables, DuckDB/dbt modeling conventions, and Evidence dashboard outputs.
---

# Project conventions

This project uses CSV extracts from SAP source tables, modeled with dbt on DuckDB, then consumed by Evidence dashboards.

## Source assumptions

- Treat raw SAP CSV files as immutable source extracts.
- Preserve original SAP keys and codes in staging models.
- Do not strip leading zeros from IDs such as customer, vendor, material, company code, plant, cost center, profit center, or document numbers.
- Explicitly cast dates, timestamps, numerics, and booleans; do not rely on implicit inference.
- Keep raw source column names traceable, but expose clean semantic names in intermediate and mart models.
- Document SAP client/language/company-code fields where relevant.

## dbt workflow

- Use layered models: source → staging → intermediate → marts.
- Prefer `source()` for raw SAP CSV-backed objects and `ref()` for dbt models.
- Run scoped commands only:
  - `dbt parse`
  - `dbt run --select <model>+`
  - `dbt test --select <model>+`
  - `dbt show --select <model> --limit 20`
- Do not run the entire project unless explicitly requested.
- Add schema tests for primary keys, foreign keys, accepted values, and not-null fields where business logic requires them.
- Add unit tests for SAP status mappings, date logic, sign handling, currency/amount logic, and deduplication rules.

## DuckDB conventions

- Prefer DuckDB-compatible SQL.
- Avoid warehouse-specific SQL from BigQuery, Snowflake, Redshift, or Postgres unless confirmed compatible.
- Be careful with CSV type inference; inspect raw data before casting.
- Prefer Parquet or DuckDB tables for modeled outputs when performance matters.
- Keep transformations reproducible from local files.

## Evidence conventions

- Evidence should query clean marts, not raw SAP extracts.
- Dashboard queries should be simple and presentation-focused.
- Business logic belongs in dbt models, not Evidence pages.
- Use Evidence for charts, filters, tables, and narrative explanation.
- If a dashboard query becomes complex, move the logic back into dbt.

## Data quality risks

Watch for:

- leading-zero identifiers
- duplicate SAP document lines
- reversal documents
- debit/credit sign conventions
- currency fields and decimal scaling
- SAP date placeholders like `00000000`
- language-dependent text tables
- client fields such as `MANDT`
- slowly changing master data
