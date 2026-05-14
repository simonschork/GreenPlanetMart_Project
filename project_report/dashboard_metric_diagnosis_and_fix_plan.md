# Dashboard Metric Diagnosis and Ranked Fix Plan

Date: 2026-05-14  
Status: Completed on 2026-05-14. dbt and Evidence fixes were implemented, revalidated, and the remaining Evidence empty-dataset warning was removed.

## Scope

Reviewed end-to-end:

- raw CSV inputs
- DuckDB warehouse tables and views
- dbt staging, intermediate, and mart models
- Evidence source SQL and dashboard pages

Metrics and symptoms checked:

- On-Time Rate
- Fully Delivered Rate
- Unrestricted Stock
- CYMBAL plant stock
- Supplier Exposure
- Procurement sample row:
  `Tyranex Solution | 2021-03-03 | open_quantity 22,924,859.00 | scheduled_net_value 10,316,186,550.00`

## Confirmed Issues

### 1. Evidence KPI cards double-format percent values

- Metric name:
  `On-Time Rate (%)`, `Fully Delivered Rate (%)`, `Overdue Rate (%)`, `Fully Received Rate (%)`
- Expected value:
  - On-Time Rate: `50.30`
  - Fully Delivered Rate: `66.50`
  - Overdue Rate: `99.90`
  - Fully Received Rate: `74.00`
- Actual value shown by the KPI cards:
  - On-Time Rate: `5030.00`
  - Fully Delivered Rate: `6650.00`
  - Overdue Rate: `9990.00`
  - Fully Received Rate: `7400.00`
- Difference:
  - On-Time Rate: `4979.70`
  - Fully Delivered Rate: `6583.50`
  - Overdue Rate: `9890.10`
  - Fully Received Rate: `7326.00`
- First divergent layer:
  Evidence display formatting
- Responsible file / model / page:
  - `project_implementation/evidence_greenplanetmart/pages/fulfillment.md:13-15`
  - `project_implementation/evidence_greenplanetmart/pages/procurement.md:14-15`
  - `project_implementation/evidence_greenplanetmart/node_modules/@evidence-dev/component-utilities/src/formatting.js:24-50`
  - `project_implementation/evidence_greenplanetmart/node_modules/@evidence-dev/component-utilities/src/builtInFormats.js:426-446`
- Relevant SQL snippet:
  - `round(100 * avg(case when is_on_time_delivery then 1 else 0 end), 1) as on_time_rate_pct`
  - `round(100 * avg(case when is_fully_delivered then 1 else 0 end), 1) as fully_delivered_rate_pct`
- Root cause:
  The page SQL already converts ratios into percent-scaled numbers by multiplying by `100`. Evidence then auto-detects the `_pct` suffix and applies percent formatting again, which multiplies the displayed value by `100` a second time.
- Proposed minimal fix:
  Keep the `_pct` column names and remove `* 100` from the KPI SQL, or keep the SQL as-is and rename the output columns so Evidence does not auto-apply percent formatting.
- Validation SQL:

```sql
select
    round(100 * avg(case when is_on_time_delivery then 1 else 0 end), 1) as on_time_rate_pct,
    round(100 * avg(case when is_fully_delivered then 1 else 0 end), 1) as fully_delivered_rate_pct
from greenplanetmart.order_fulfillment_items;
```

- Risk of the fix:
  Low

### 2. Inventory totals are inflated by dbt join fanout, then Evidence keeps historical peaks

- Metric name:
  `Unrestricted Stock`, `CYMBAL plant stock`
- Expected value:
  - Total unrestricted stock from deterministic latest-row raw baseline: `5,799,633,574.75`
  - `CYMBAL NY`: `951,155,226.00`
- Actual value:
  - Dashboard source total: `144,483,052,839.75`
  - `CYMBAL NY`: `33,941,414,536.00`
- Difference:
  - Total: `138,683,419,265.00`
  - `CYMBAL NY`: `32,990,259,310.00`
- First divergent layer:
  `intermediate.int_inventory_current`
- Responsible file / model / page:
  - `project_implementation/dbt_greenplanetmart/models/staging/sap_inventory/stg_sap__mard.sql:1-15`
  - `project_implementation/dbt_greenplanetmart/models/staging/sap_master_data/stg_sap__mara.sql:1-12`
  - `project_implementation/dbt_greenplanetmart/models/staging/sap_master_data/stg_sap__makt.sql:1-8`
  - `project_implementation/dbt_greenplanetmart/models/staging/sap_master_data/stg_sap__t001w.sql:1-13`
  - `project_implementation/dbt_greenplanetmart/models/intermediate/int_inventory_current.sql:37-46`
  - `project_implementation/dbt_greenplanetmart/models/marts/inventory/fct_inventory_snapshot.sql:1-14`
  - `project_implementation/evidence_greenplanetmart/sources/greenplanetmart/inventory_positions.sql:1-15`
  - `project_implementation/evidence_greenplanetmart/pages/inventory.md:11-16`
- Relevant SQL snippet:
  - dbt join:
    `from stock left join materials ... left join material_text ... left join plants`
  - Evidence dedup:
    `max(coalesce(unrestricted_stock_qty, 0)) as unrestricted_stock_qty`
- Root cause:
  `mard` history is never reduced to one latest stock row per business key. That history is then joined to non-unique master data, which expands `44,663` stock rows into `242,388` intermediate rows for only `30,016` stock keys. Evidence then does not recover latest state; it keeps the historical maximum stock quantity per key.
- Evidence:
  - `stg_sap__mard`: `44,663` rows, `30,016` distinct stock keys
  - `int_inventory_current`: `242,388` rows, `30,016` distinct stock keys
  - Example key `250|000000006666666689|2100|2101`:
    - latest raw unrestricted stock: `32,196,576.00`
    - dashboard source unrestricted stock: `4,036,196,927.00`
    - intermediate rows for the key: `2960`
- Proposed minimal fix:
  Deduplicate latest rows in dbt for `mard`, `mara`, `makt`, and `t001w` before joining. After the mart is unique at stock grain, replace the Evidence `max(...)` dedup with latest `source_recordstamp`, or remove the dedup layer entirely if no longer needed.
- Validation SQL:

```sql
with latest_mard as (
    select
        *,
        row_number() over (
            partition by client_id, material_id, plant_id, storage_location_id
            order by source_recordstamp desc,
                     unrestricted_stock_qty desc nulls last,
                     stock_in_transfer_qty desc nulls last,
                     quality_inspection_qty desc nulls last,
                     restricted_use_qty desc nulls last,
                     blocked_stock_qty desc nulls last,
                     returns_qty desc nulls last
        ) as rn
    from staging.stg_sap__mard
)
select round(sum(unrestricted_stock_qty) filter (where rn = 1), 2) as expected_unrestricted_stock
from latest_mard;
```

- Risk of the fix:
  Medium. `225` stock keys share the same latest `recordstamp`, so a deterministic tie-breaker must be defined.

### 3. Procurement backlog and overdue rate are inflated by dbt join fanout, then Evidence keeps stale maxima

- Metric name:
  `Open Quantity`, `Overdue Rate (%)`, `Fully Received Rate (%)`
- Expected value:
  - Open quantity from strict latest-row raw reconstruction over the current 15-month dashboard window: `20,680,299,711.00`
  - Overdue rate: `26.00`
  - Fully received rate: `74.00`
- Actual value:
  - Open quantity: `54,728,513,386.00`
  - Overdue rate: `99.90`
  - Fully received rate: `74.00`
- Difference:
  - Open quantity: `34,048,213,675.00`
  - Overdue rate: `73.90`
  - Fully received rate: `0.00`
- First divergent layer:
  `intermediate.int_procurement_schedule_lines`
- Responsible file / model / page:
  - `project_implementation/dbt_greenplanetmart/models/staging/sap_procurement/stg_sap__eket.sql:1-11`
  - `project_implementation/dbt_greenplanetmart/models/staging/sap_procurement/stg_sap__ekpo.sql:1-18`
  - `project_implementation/dbt_greenplanetmart/models/staging/sap_procurement/stg_sap__ekko.sql:1-13`
  - `project_implementation/dbt_greenplanetmart/models/staging/sap_master_data/stg_sap__lfa1.sql`
  - `project_implementation/dbt_greenplanetmart/models/intermediate/int_procurement_schedule_lines.sql:71-80`
  - `project_implementation/dbt_greenplanetmart/models/marts/procurement/fct_procurement_schedule.sql:1-45`
  - `project_implementation/evidence_greenplanetmart/sources/greenplanetmart/procurement_schedule_lines.sql:1-39`
  - `project_implementation/evidence_greenplanetmart/pages/procurement.md:11-16`
- Relevant SQL snippet:
  - dbt join:
    `from schedule_lines inner join purchase_order_items ... inner join purchase_order_header ... left join suppliers`
  - Evidence dedup:
    `max(coalesce(open_quantity, 0)) as open_quantity`
    `max(case when is_overdue then 1 else 0 end) as is_overdue`
- Root cause:
  Procurement history is not survivorship-filtered before the dbt joins. `69,512` schedule-line keys become `3,240,584` intermediate rows. Evidence then chooses the maximum historical `open_quantity` and overdue flag per schedule line, which reopens lines that are closed in the latest raw state.
- Evidence:
  - `stg_sap__eket`: `168,442` rows, `69,512` distinct schedule-line keys
  - `int_procurement_schedule_lines`: `3,240,584` rows, `69,512` distinct schedule-line keys
  - `13,124` current dashboard rows are both fully received and still open or overdue
  - Those contradictory rows carry `34,048,213,565.00` open quantity
- Concrete sample:
  - The suspicious large line is real in raw data, not a scaling bug:
    - `project_implementation/source_data/ekpo.csv:99276`
    - `project_implementation/source_data/eket.csv:162713`
  - Sample values:
    - `purchase_order_id 4500045061`
    - `material 000000006666666689`
    - `planned_delivery_date 2021-03-03`
    - `open_quantity 22,924,859.00`
    - `scheduled_net_value 10,316,186,550.00`
- Proposed minimal fix:
  Deduplicate latest `eket`, `ekpo`, `ekko`, and `lfa1` rows in dbt before calculating procurement metrics. Then replace the Evidence `max(...)` survivorship logic with latest `source_recordstamp`, or remove it if the mart becomes unique.
- Validation SQL:

```sql
select
    count(*) as contradictory_rows,
    round(sum(open_quantity), 2) as contradictory_open_qty
from greenplanetmart.procurement_schedule_lines
where is_fully_received
  and (is_overdue or open_quantity > 0);
```

- Risk of the fix:
  Medium. A secondary reconstruction using latest rows from the already-inflated intermediate layer produced different corrected totals, but all reconstructions agree the current dashboard is materially overstated.

### 4. Supplier exposure is aggregated across mixed currencies

- Metric name:
  `Supplier Exposure`
- Expected value:
  No single correct value unless the metric is split by currency or converted by FX.
  For `Tyranex Solution` in the current 15-month dashboard window:
  - `USD`: `935,908,143,795.00`
  - `EUR`: `888,786,588,800.00`
- Actual value:
  `1,824,694,732,595.00` as one blended supplier total
- Difference:
  Not meaningful as a single-currency comparison
- First divergent layer:
  Evidence page aggregation
- Responsible file / model / page:
  - `project_implementation/evidence_greenplanetmart/pages/procurement.md:50-59`
- Relevant SQL snippet:
  `select supplier_name, round(sum(scheduled_net_value), 0) as scheduled_net_value ... group by 1`
- Root cause:
  The page groups only by `supplier_name` and sums `scheduled_net_value` across different `document_currency` values.
- Proposed minimal fix:
  Group supplier exposure by `supplier_name, document_currency`, or add explicit FX conversion before aggregation.
- Validation SQL:

```sql
select
    supplier_name,
    document_currency,
    round(sum(scheduled_net_value), 2) as scheduled_net_value
from greenplanetmart.procurement_schedule_lines
group by 1, 2
order by scheduled_net_value desc;
```

- Risk of the fix:
  Low if split by currency. High if a full FX-conversion solution is required now.

## Secondary Observation

### Fulfillment KPI denominator semantics may need confirmation

- Responsible file / model / page:
  - `project_implementation/evidence_greenplanetmart/sources/greenplanetmart/order_fulfillment_items.sql:21-23`
  - `project_implementation/evidence_greenplanetmart/sources/greenplanetmart/order_fulfillment_items.sql:69-75`
  - `project_implementation/evidence_greenplanetmart/pages/fulfillment.md:11-16`
- Relevant SQL snippet:
  - `avg(coalesce(delivery_delay_days, 0)) as delivery_delay_days`
  - `case when items.is_on_time_delivery = 1 then true else false end as is_on_time_delivery`
  - `when items.delivery_delay_days <= 0 then 'On time or early'`
- Observation:
  Evidence treats undelivered items as not on time and also buckets null actual-delivery rows into `On time or early`.
- Values:
  - Current dashboard query value: `50.30`
  - Delivered-only recent on-time rate: `75.37`
  - Recent rows with `actual_delivery_date is null`: `6193`
- Interpretation:
  This is a real semantic divergence in Evidence, but it is separate from the `>1000%` card-display bug. I am not ranking it as a mandatory fix without KPI-definition confirmation.

## Merged Findings and Conflicts

- Merged duplicate findings from the three read-only subagents.
- No stale Evidence cache issue was found. The built query metadata matched the current page SQL.
- Inventory expected totals depend on a deterministic tie-breaker because some stock keys share the same latest `recordstamp`.
- Procurement corrected backlog depends on the survivorship rule used. The ranked fix plan uses raw-latest survivorship, not latest rows from the already-fanned-out intermediate layer.
- No evidence was found for a procurement unit-price scaling bug in the suspicious Tyranex rows. Those large values already exist in the raw extract.

## Ranked Fix Plan

1. Fix the percent double-formatting on fulfillment and procurement KPI cards.
   Impact: immediate  
   Confidence: very high  
   Risk: low

2. Fix procurement survivorship in dbt, then remove `max(...)`-based stale-state recovery from the Evidence procurement source.
   Impact: very high  
   Confidence: very high  
   Risk: medium

3. Fix inventory survivorship and master-data join fanout in dbt, then simplify the Evidence inventory source.
   Impact: very high  
   Confidence: very high  
   Risk: medium

4. Make supplier exposure currency-aware.
   Impact: medium  
   Confidence: high  
   Risk: low if split by currency

5. Add dbt uniqueness tests for fact grain so duplicate explosions fail early.
   Impact: high  
   Confidence: high  
   Risk: low

## Implemented Changes

### dbt survivorship and grain fixes

- Added latest-row survivorship filtering to the affected SAP staging models before downstream joins:
  - `stg_sap__mard`
  - `stg_sap__mara`
  - `stg_sap__makt`
  - `stg_sap__t001w`
  - `stg_sap__eket`
  - `stg_sap__ekpo`
  - `stg_sap__ekko`
  - `stg_sap__lfa1`
- Applied deterministic `row_number()` tie-breaking on business keys ordered by latest `source_recordstamp` and relevant quantity/date columns.
- Added regression tests:
  - `project_implementation/dbt_greenplanetmart/tests/fct_inventory_snapshot_unique_grain.sql`
  - `project_implementation/dbt_greenplanetmart/tests/fct_procurement_schedule_unique_grain.sql`

### Evidence source and page fixes

- Removed stale `max(...)`-based survivorship logic from:
  - `project_implementation/evidence_greenplanetmart/sources/greenplanetmart/inventory_positions.sql`
  - `project_implementation/evidence_greenplanetmart/sources/greenplanetmart/procurement_schedule_lines.sql`
- Corrected KPI card percent handling on:
  - `project_implementation/evidence_greenplanetmart/pages/fulfillment.md`
  - `project_implementation/evidence_greenplanetmart/pages/procurement.md`
- Split supplier exposure by `supplier_name, document_currency` on the procurement page.
- Split same-name plants by `client_id, plant_id` on the inventory page.
- Reworked the inventory zero-stock table empty state so the Evidence build no longer logs empty-dataset warnings when the current snapshot has zero zero-stock positions.

### dbt execution wrapper fix

- Updated `project_implementation/scripts/run_dbt.sh` to invoke `.venv/bin/python .venv/bin/dbt` directly.
- This avoids failures from stale virtualenv shebang paths when the project folder is moved or renamed.

## Validation Results

### dbt validation

Executed successfully:

```bash
project_implementation/scripts/run_dbt.sh parse
project_implementation/scripts/run_dbt.sh build --select +fct_inventory_snapshot +fct_procurement_schedule
```

Result:

- `dbt parse` passed
- scoped `dbt build` passed
- both new uniqueness tests passed

### Evidence validation

Executed successfully:

```bash
cd project_implementation/evidence_greenplanetmart
npm run build
```

Result:

- static build completed successfully
- the prior empty-dataset warning no longer appears
- build artifact was written to `project_implementation/evidence_greenplanetmart/build`

### Revalidated KPI checkpoints

Fulfillment:

- on-time ratio: `0.5028` -> expected display `50.3%`
- fully delivered ratio: `0.6654` -> expected display `66.5%`
- average delay days: `7.8`

Inventory:

- unrestricted stock total: `5,799,633,574.75`
- zero-stock positions: `0`
- `CYMBAL NY (250/1000)`: `951,155,226.00`
- `CYMBAL NY (200/1000)`: `172.00`

Procurement:

- open quantity: `20,680,299,711.00`
- overdue ratio: `0.26` -> expected display `26.0%`
- fully received ratio: `0.74` -> expected display `74.0%`
- contradictory fully-received-and-open-or-overdue rows: `0`

Supplier exposure:

- `Tyranex Solution (USD)`: `935,908,143,795.00`
- `Tyranex Solution (EUR)`: `888,786,588,800.00`

## Final Outcome

- The percent double-formatting defect is fixed.
- Inventory and procurement fanout inflation from historical duplicates is fixed at the dbt layer.
- Evidence now reads the corrected marts directly instead of trying to recover latest state with `max(...)`.
- Supplier exposure is no longer blended across currencies.
- The remaining Evidence build warning was resolved by handling the empty zero-stock result explicitly.
