with inventory as (
    select
        'Supply chain management' as research_area,
        'Inventory Position by Plant, Storage Location, and Material' as use_case,
        'fct_inventory_snapshot' as primary_mart,
        'active' as status,
        count(*) as mart_row_count,
        count(distinct concat_ws('|', material_key, plant_key, storage_location_key, cast(snapshot_date as varchar))) as business_grain_rows,
        min(snapshot_date) as min_business_date,
        max(snapshot_date) as max_business_date,
        0 as unknown_member_rows,
        'Current stock visibility at material, plant, and storage-location grain.' as analytical_scope,
        'Snapshot-only inventory view; stock movements are not modeled in this PoC.' as reporting_note
    from marts.fct_inventory_snapshot
),
sales as (
    select
        'Business analytics' as research_area,
        'Sales Performance by Customer, Product, and Region' as use_case,
        'fct_sales_billing' as primary_mart,
        'active' as status,
        count(*) as mart_row_count,
        count(distinct concat_ws('|', billing_document_id, billing_item_id, customer_key, material_key, sales_org_key, distribution_channel_key, cast(billing_date as varchar))) as business_grain_rows,
        min(billing_date) as min_business_date,
        max(billing_date) as max_business_date,
        sum(case when material_key like '%|__UNKNOWN__' then 1 else 0 end) as unknown_member_rows,
        'Billed revenue and quantity with customer, material, sales-organization, and channel context.' as analytical_scope,
        'Report pages aggregate at deduplicated billing-item grain to reduce extract repetition.' as reporting_note
    from marts.fct_sales_billing
),
procurement as (
    select
        'Supply chain management' as research_area,
        'Procurement Performance and Supplier Reliability' as use_case,
        'fct_procurement_schedule' as primary_mart,
        'active' as status,
        count(*) as mart_row_count,
        count(distinct concat_ws('|', purchase_order_id, purchase_order_item_id, schedule_line_id, supplier_key, material_key, plant_key, cast(planned_delivery_date as varchar))) as business_grain_rows,
        min(planned_delivery_date) as min_business_date,
        max(planned_delivery_date) as max_business_date,
        sum(case when supplier_key like '%|__UNKNOWN__' then 1 else 0 end) as unknown_member_rows,
        'Open commitments, received quantity, and overdue supplier exposure at schedule-line grain.' as analytical_scope,
        'Schedule-line reporting is active, but KPI interpretation should remain directional because the ERP extract contains very large nominal quantities.' as reporting_note
    from marts.fct_procurement_schedule
),
fulfillment as (
    select
        'Operational efficiency' as research_area,
        'Order Fulfillment and Delivery Timeliness' as use_case,
        'fct_order_fulfillment' as primary_mart,
        'active' as status,
        count(*) as mart_row_count,
        count(distinct concat_ws('|', sales_order_id, sales_order_item_id, customer_key, material_key, sales_org_key, distribution_channel_key, plant_key, cast(requested_delivery_date as varchar), coalesce(cast(actual_delivery_date as varchar), ''))) as business_grain_rows,
        min(requested_delivery_date) as min_business_date,
        max(coalesce(actual_delivery_date, requested_delivery_date)) as max_business_date,
        sum(
            case
                when customer_key like '%|__UNKNOWN__'
                  or material_key like '%|__UNKNOWN__'
                  or sales_org_key like '%|__UNKNOWN__'
                  or distribution_channel_key like '%|__UNKNOWN__'
                  or plant_key like '%|__UNKNOWN__'
                then 1
                else 0
            end
        ) as unknown_member_rows,
        'Requested versus actual delivery performance, open quantity, and delivery delay at order-item grain.' as analytical_scope,
        'Actual and requested dates rely on fallback logic already resolved in the mart layer.' as reporting_note
    from marts.fct_order_fulfillment
),
pricing as (
    select
        'Business analytics' as research_area,
        'Sales Price, Discount, and Billing Quality Analysis' as use_case,
        'fct_sales_pricing' as primary_mart,
        case when count(*) = 0 then 'blocked' else 'active' end as status,
        count(*) as mart_row_count,
        count(distinct concat_ws('|', billing_document_id, billing_item_id, pricing_condition_type_key, cast(billing_date as varchar))) as business_grain_rows,
        min(billing_date) as min_business_date,
        max(billing_date) as max_business_date,
        sum(case when pricing_condition_type_key like '%|__UNKNOWN__' then 1 else 0 end) as unknown_member_rows,
        'Pricing-condition mix and billed-value composition at billing-item by condition-type grain.' as analytical_scope,
        case
            when count(*) = 0 then 'Pricing use case is documented, but inactive because the mart currently contains no rows.'
            else 'Pricing mart is populated and can be activated as a report page.'
        end as reporting_note
    from marts.fct_sales_pricing
)

select
    research_area,
    use_case,
    primary_mart,
    status,
    mart_row_count,
    business_grain_rows,
    mart_row_count - business_grain_rows as duplicate_like_rows,
    unknown_member_rows,
    min_business_date,
    max_business_date,
    analytical_scope,
    reporting_note
from inventory

union all

select
    research_area,
    use_case,
    primary_mart,
    status,
    mart_row_count,
    business_grain_rows,
    mart_row_count - business_grain_rows as duplicate_like_rows,
    unknown_member_rows,
    min_business_date,
    max_business_date,
    analytical_scope,
    reporting_note
from sales

union all

select
    research_area,
    use_case,
    primary_mart,
    status,
    mart_row_count,
    business_grain_rows,
    mart_row_count - business_grain_rows as duplicate_like_rows,
    unknown_member_rows,
    min_business_date,
    max_business_date,
    analytical_scope,
    reporting_note
from procurement

union all

select
    research_area,
    use_case,
    primary_mart,
    status,
    mart_row_count,
    business_grain_rows,
    mart_row_count - business_grain_rows as duplicate_like_rows,
    unknown_member_rows,
    min_business_date,
    max_business_date,
    analytical_scope,
    reporting_note
from fulfillment

union all

select
    research_area,
    use_case,
    primary_mart,
    status,
    mart_row_count,
    business_grain_rows,
    mart_row_count - business_grain_rows as duplicate_like_rows,
    unknown_member_rows,
    min_business_date,
    max_business_date,
    analytical_scope,
    reporting_note
from pricing
