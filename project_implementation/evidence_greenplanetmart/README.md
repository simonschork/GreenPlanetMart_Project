# GreenPlanetMart Evidence Reports

This directory contains the business-facing reporting layer for the GreenPlanetMart PoC. The pages are aligned to the reporting use cases and research areas defined in the project report notes:

- supply chain management
- business analytics
- operational efficiency

## Current Report Coverage

- `Inventory Position` answers the stock visibility use case.
- `Sales Performance` answers the revenue by customer, product, and region use case.
- `Procurement Performance` answers the supplier reliability and open commitment use case.
- `Order Fulfillment` answers the delivery timeliness and bottleneck use case.

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

- The dashboards are written for business users and focus on commercial, supply chain, and service decisions.
- Inventory is presented as a current-position view, which makes it suitable for stock visibility and availability reviews.
- Procurement values should be compared within the same currency, and procurement quantities should be interpreted within the same unit of measure.
