# GreenPlanetMart Evidence Reports

This directory contains the reporting layer for the GreenPlanetMart PoC. The pages are aligned to the reporting use cases and research areas defined in the project report notes:

- supply chain management
- business analytics
- operational efficiency

## Current Report Coverage

- `Inventory Position` answers the stock visibility use case.
- `Sales Performance` answers the revenue by customer, product, and region use case.
- `Procurement Performance` answers the supplier reliability and open commitment use case.
- `Order Fulfillment` answers the delivery timeliness and bottleneck use case.
- `Pricing Coverage` keeps the pricing use case visible, but documents that `fct_sales_pricing` currently has no rows in the mart.

## Project Structure

- `pages/`: Evidence markdown pages
- `sources/greenplanetmart/`: reusable DuckDB-backed source queries for reporting
- `package.json`: local Evidence scripts
- `evidence.plugins.yaml`: Evidence component and datasource plugins

## Local Run

From this directory:

```bash
npm install
npm run sources
npm run dev
```

## Reporting Design Notes

- Reporting queries deduplicate repeated ERP extract rows back to business grain before aggregation.
- Sales, procurement, and fulfillment pages use the most recent available operational window instead of the full historical range, which avoids old outliers dominating the visuals.
- Unknown or unmapped members are preserved so the report remains consistent with the data-integration narrative in the written project report.
