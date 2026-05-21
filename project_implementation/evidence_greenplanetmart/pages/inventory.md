---
title: Inventory Position
---

# Inventory Position by Plant, Storage Location, and Material

This page shows where inventory is currently sitting and where stock imbalances may create either working-capital pressure or service risk.

Use it to see which plants hold the most stock, which material groups dominate the portfolio, and where empty positions may need attention.

```sql inventory_kpis
select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions
```

<Grid cols={3}>
    <BigValue data={inventory_kpis} value="unrestricted_stock" title="Unrestricted Stock" />
    <BigValue data={inventory_kpis} value="stock_positions" title="Stock Positions" />
    <BigValue data={inventory_kpis} value="zero_stock_positions" title="Zero-Stock Positions" />
</Grid>

The inventory view reflects the current stock position, which makes it best suited for availability and concentration decisions.

## Stock Concentration by Plant

```sql inventory_plant_stock
select
    client_id,
    plant_id,
    plant_name,
    plant_name || ' (' || client_id || '/' || plant_id || ')' as plant_label,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty
from greenplanetmart.inventory_positions
where plant_name != 'Unmapped Plant'
group by 1, 2, 3, 4
order by unrestricted_stock_qty desc
limit 10
```

<BarChart data={inventory_plant_stock} x="plant_label" y="unrestricted_stock_qty" />

```sql inventory_material_groups
select
    material_group,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty,
    count(*) as stock_positions
from greenplanetmart.inventory_positions
group by 1
order by unrestricted_stock_qty desc
limit 15
```

## Inventory Mix by Material Group

<Grid cols={2}>
    <BarChart data={inventory_material_groups} x="material_group" y="unrestricted_stock_qty" />
    <DataTable data={inventory_material_groups} />
</Grid>

```sql inventory_zero_stock_hotspots
with zero_stock_hotspots as (
    select
        client_id,
        plant_id,
        plant_name,
        plant_name || ' (' || client_id || '/' || plant_id || ')' as plant_label,
        storage_location_id,
        count(*) as zero_stock_positions
    from greenplanetmart.inventory_positions
    where is_zero_stock
    group by 1, 2, 3, 4, 5
    order by zero_stock_positions desc, plant_label
    limit 20
)

select
    client_id,
    plant_id,
    plant_name,
    plant_label,
    storage_location_id,
    zero_stock_positions
from zero_stock_hotspots

union all

select
    'N/A' as client_id,
    'N/A' as plant_id,
    'No zero-stock positions found in the current snapshot' as plant_name,
    'No zero-stock positions found in the current snapshot' as plant_label,
    'N/A' as storage_location_id,
    0 as zero_stock_positions
where not exists (
    select 1
    from zero_stock_hotspots
)
```

## Zero-Stock Hotspots

<DataTable data={inventory_zero_stock_hotspots} />

[Back to Overview](/)
