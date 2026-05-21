with inventory as (
    select
        'Supply chain management' as research_area,
        'Inventory Position by Plant, Storage Location, and Material' as use_case,
        'Current stock visibility across plants, storage locations, and materials.' as analytical_scope,
        'Best used to review where inventory is concentrated and where availability gaps may need action.' as reporting_note
),
sales as (
    select
        'Business analytics' as research_area,
        'Sales Performance by Customer, Product, and Region' as use_case,
        'Revenue and billed volume by customer, product, and sales organization.' as analytical_scope,
        'Useful for identifying concentration, commercial momentum, and the accounts or products driving performance.' as reporting_note
),
procurement as (
    select
        'Supply chain management' as research_area,
        'Procurement Performance and Supplier Reliability' as use_case,
        'Open commitments, overdue receipts, and supplier exposure.' as analytical_scope,
        'Best used to prioritize supplier follow-up and understand where procurement delays may affect operations.' as reporting_note
),
fulfillment as (
    select
        'Operational efficiency' as research_area,
        'Order Fulfillment and Delivery Timeliness' as use_case,
        'On-time delivery, delay patterns, and open order exposure.' as analytical_scope,
        'Useful for monitoring service reliability and focusing teams on the orders that need intervention.' as reporting_note
)

select
    research_area,
    use_case,
    analytical_scope,
    reporting_note
from inventory

union all

select
    research_area,
    use_case,
    analytical_scope,
    reporting_note
from sales

union all

select
    research_area,
    use_case,
    analytical_scope,
    reporting_note
from procurement

union all

select
    research_area,
    use_case,
    analytical_scope,
    reporting_note
from fulfillment
