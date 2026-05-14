# Dashboard Fix Progress Handoff

Date: 2026-05-14
Status: Progress stored for later continuation

## Scope

This file captures the implementation progress for the dashboard metric fix plan in:

- `project_report/dashboard_metric_diagnosis_and_fix_plan.md`

The goal was to apply the reviewed fixes across dbt and Evidence, validate the corrected metrics, and leave a resumable state.

## Completed Work

### 1. Upstream dbt grain fixes

Latest-row survivorship logic was added to the affected staging models so joins no longer fan out across historical duplicates:

- `project_implementation/dbt_greenplanetmart/models/staging/sap_inventory/stg_sap__mard.sql`
- `project_implementation/dbt_greenplanetmart/models/staging/sap_master_data/stg_sap__mara.sql`
- `project_implementation/dbt_greenplanetmart/models/staging/sap_master_data/stg_sap__makt.sql`
- `project_implementation/dbt_greenplanetmart/models/staging/sap_master_data/stg_sap__t001w.sql`
- `project_implementation/dbt_greenplanetmart/models/staging/sap_procurement/stg_sap__eket.sql`
- `project_implementation/dbt_greenplanetmart/models/staging/sap_procurement/stg_sap__ekpo.sql`
- `project_implementation/dbt_greenplanetmart/models/staging/sap_procurement/stg_sap__ekko.sql`
- `project_implementation/dbt_greenplanetmart/models/staging/sap_master_data/stg_sap__lfa1.sql`

Implementation pattern:

- cast `recordstamp` to `timestamp with time zone`
- use `row_number() over (...)`
- partition by business key
- order by latest `source_recordstamp desc` plus deterministic tie-breakers
- keep only `row_number() = 1`

### 2. Evidence source fixes

Removed stale downstream survivorship logic that was keeping historical maxima after the fact tables were corrected:

- `project_implementation/evidence_greenplanetmart/sources/greenplanetmart/inventory_positions.sql`
- `project_implementation/evidence_greenplanetmart/sources/greenplanetmart/procurement_schedule_lines.sql`

Changes made:

- inventory source now reads directly from `marts.fct_inventory_snapshot`
- procurement source now reads directly from `marts.fct_procurement_schedule`
- `source_recordstamp` is exposed in both sources
- the previous `max(...)` aggregation layers were removed

### 3. Evidence page fixes

#### Fulfillment

File:

- `project_implementation/evidence_greenplanetmart/pages/fulfillment.md`

Fix:

- KPI SQL now returns ratios for `_pct` fields instead of pre-multiplying by `100`
- this avoids Evidence percent auto-formatting from multiplying the display by `100` again

#### Procurement

File:

- `project_implementation/evidence_greenplanetmart/pages/procurement.md`

Fixes:

- KPI SQL now returns ratios for `_pct` fields
- supplier exposure is grouped by `supplier_name, document_currency`
- chart label now uses `supplier_name || ' (' || document_currency || ')'`

#### Inventory

File:

- `project_implementation/evidence_greenplanetmart/pages/inventory.md`

Fix:

- plant aggregation now groups by `client_id, plant_id, plant_name`
- chart labels include `client_id/plant_id`
- this avoids blending multiple clients that share the same plant name, such as `CYMBAL NY`

### 4. Added regression tests

Added dbt uniqueness tests to catch the same class of fanout regression in the future:

- `project_implementation/dbt_greenplanetmart/tests/fct_inventory_snapshot_unique_grain.sql`
- `project_implementation/dbt_greenplanetmart/tests/fct_procurement_schedule_unique_grain.sql`

### 5. Updated review status

Updated:

- `project_report/dashboard_metric_diagnosis_and_fix_plan.md`

Change:

- status now says the fixes were implemented on `2026-05-14` and validated

## Validation Completed

### dbt commands

Executed successfully:

```bash
project_implementation/scripts/run_dbt.sh parse
project_implementation/scripts/run_dbt.sh build --select +fct_inventory_snapshot +fct_procurement_schedule
```

Result:

- `dbt parse` passed
- `dbt build` passed
- new uniqueness tests passed

### Evidence build

Executed successfully:

```bash
cd project_implementation/evidence_greenplanetmart
npm run build
```

Result:

- static build completed successfully
- Evidence printed existing empty-dataset warnings during build
- build artifact was still written to `project_implementation/evidence_greenplanetmart/build`

## KPI Checkpoints Verified

### Fulfillment

Validated KPI inputs now resolve correctly:

- on-time ratio: `0.5028`
- fully delivered ratio: `0.6654`

Expected display with Evidence percent formatting:

- on-time rate: `50.3%`
- fully delivered rate: `66.5%`

This fixes the prior `5030` / `6650` display issue.

### Inventory

Validated totals:

- unrestricted stock total: `5,799,633,574.75`

Validated plant split:

- `CYMBAL NY (250/1000)`: `951,155,226.00`
- `CYMBAL NY (200/1000)`: `172.00`

Important note:

- the previously quoted single `CYMBAL NY` value from the diagnosis was being blended across same-name plants
- the page fix now separates those rows cleanly by client and plant

### Procurement

Validated corrected 15-month dashboard window metrics:

- open quantity: `20,680,299,711.00`
- overdue rate: `26.0%`
- fully received rate: `74.0%`

Validated contradiction check:

- contradictory fully-received-and-open-or-overdue rows: `0`

### Supplier Exposure

Validated currency split for `Tyranex Solution`:

- `USD`: `935,908,143,795.00`
- `EUR`: `888,786,588,800.00`

## Known Remaining Follow-Up

### 1. Evidence empty-dataset warnings

Evidence build still emitted:

- `Error in Data Table: Dataset is empty - query ran successfully, but no data was returned from the database`

This did not fail the build, but the warning source was not isolated yet in the last turn.

Likely next step:

- inspect pages with `DataTable` components and identify which query returns zero rows in the current build context

### 2. Optional broader validation

The implemented validation focused on the metrics and marts named in the diagnosis document.

If continuing later, a good next pass would be:

- rebuild and spot-check all Evidence pages end to end
- open the built pages locally and visually verify KPI cards and charts
- add more dbt tests if additional high-risk marts are identified

## Suggested Resume Steps

If continuing later, start from this sequence:

```bash
project_implementation/scripts/run_dbt.sh build --select +fct_inventory_snapshot +fct_procurement_schedule
cd project_implementation/evidence_greenplanetmart
npm run build
```

Then:

1. inspect the page(s) causing the empty-dataset build warnings
2. visually review `inventory`, `procurement`, and `fulfillment`
3. confirm the rendered KPI cards match the validated values above

## Notes

- The workspace root used in this session was not a git repository, so `git status` could not be used from the top-level project folder.
- The warehouse file could be queried read-only while another DuckDB process held a lock, but dbt build was still able to run later and succeeded.
