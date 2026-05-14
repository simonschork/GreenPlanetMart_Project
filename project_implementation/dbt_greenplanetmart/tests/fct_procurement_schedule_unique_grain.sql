select
    purchase_order_id,
    purchase_order_item_id,
    schedule_line_id,
    supplier_key,
    material_key,
    plant_key,
    count(*) as row_count
from {{ ref('fct_procurement_schedule') }}
group by 1, 2, 3, 4, 5, 6
having count(*) > 1
