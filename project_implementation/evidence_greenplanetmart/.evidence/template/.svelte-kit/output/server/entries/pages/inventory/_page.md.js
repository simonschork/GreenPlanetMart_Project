import{s as Z,a as et}from"../../../chunks/utils.js";import{c as ot,o as I,s as st,h as K,d as i,v as s}from"../../../chunks/ssr.js";import"dequal";import"../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";import{w as nt}from"../../../chunks/index2.js";import"clsx";import{r as L,Q as y,p as at}from"../../../chunks/stores.js";import{h as n,p as it}from"../../../chunks/profile.js";import{a as X}from"../../../chunks/index5.js";import{p as rt}from"../../../chunks/stores2.js";import{C as _t,s as lt,D as Y}from"../../../chunks/DataTable.js";import"ssf";import"deep-object-diff";import{G as J,B as A}from"../../../chunks/BigValue.js";import"@uwdata/mosaic-sql";import"yaml";import"@astronautlabs/jsonpath";import"tua-body-scroll-lock";import"lodash/merge.js";import"export-to-csv";import{e as ct,Q as f}from"../../../chunks/QueryViewer.js";import"prismjs";import"echarts";import"debounce";import"downloadjs";import{B as W}from"../../../chunks/BarChart.js";import"chroma-js";import"echarts-stat";const t={title:"Inventory Position"},Ht=ot((e,D,B,pt)=>{let z,P,w,U;P=Z(rt,o=>z=o),U=Z(L,o=>w=o);let{data:k}=D,{data:C={},customFormattingSettings:E,__db:H,inputs:Q}=k;et(L,w="9b2e879e05917512d39e38f087aab860",w);let V=ct(nt(Q));I(V.subscribe(o=>Q=o)),st(_t,{getCustomFormats:()=>E.customFormats||[]}),I(()=>y.emptyCache());const d=(o,tt)=>it(H.query,o,{query_name:tt});lt(d),z.params;let q={initialData:void 0,initialError:void 0},r=n`select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions`,v=`select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions`,a,G=!1;const $=y.createReactive({callback:o=>{a=o},execFn:d},{id:"inventory_kpis",...q});$(v,{noResolve:r,...q}),globalThis[Symbol.for("inventory_kpis")]={get value(){return a}};let N={initialData:void 0,initialError:void 0},_=n`select
    client_id,
    plant_id,
    plant_name,
    plant_name || ' (' || client_id || '/' || plant_id || ')' as plant_label,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty
from greenplanetmart.inventory_positions
where plant_name != 'Unmapped Plant'
group by 1, 2, 3, 4
order by unrestricted_stock_qty desc
limit 10`,h=`select
    client_id,
    plant_id,
    plant_name,
    plant_name || ' (' || client_id || '/' || plant_id || ')' as plant_label,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty
from greenplanetmart.inventory_positions
where plant_name != 'Unmapped Plant'
group by 1, 2, 3, 4
order by unrestricted_stock_qty desc
limit 10`,m,M=!1;const x=y.createReactive({callback:o=>{m=o},execFn:d},{id:"inventory_plant_stock",...N});x(h,{noResolve:_,...N}),globalThis[Symbol.for("inventory_plant_stock")]={get value(){return m}};let R={initialData:void 0,initialError:void 0},l=n`select
    material_group,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty,
    count(*) as stock_positions
from greenplanetmart.inventory_positions
group by 1
order by unrestricted_stock_qty desc
limit 15`,g=`select
    material_group,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty,
    count(*) as stock_positions
from greenplanetmart.inventory_positions
group by 1
order by unrestricted_stock_qty desc
limit 15`,c,O=!1;const T=y.createReactive({callback:o=>{c=o},execFn:d},{id:"inventory_material_groups",...R});T(g,{noResolve:l,...R}),globalThis[Symbol.for("inventory_material_groups")]={get value(){return c}};let S={initialData:void 0,initialError:void 0},p=n`with zero_stock_hotspots as (
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
)`,b=`with zero_stock_hotspots as (
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
)`,u,j=!1;const F=y.createReactive({callback:o=>{u=o},execFn:d},{id:"inventory_zero_stock_hotspots",...S});return F(b,{noResolve:p,...S}),globalThis[Symbol.for("inventory_zero_stock_hotspots")]={get value(){return u}},I(V.subscribe(o=>{})),D.data===void 0&&B.data&&k!==void 0&&B.data(k),{data:C={},customFormattingSettings:E,__db:H}=k,at.set(Object.keys(C).length>0),z.params,r=n`select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions`,v=`select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions`,r||!G?r||($(v,{noResolve:r,...q}),G=!0):$(v,{noResolve:r}),_=n`select
    client_id,
    plant_id,
    plant_name,
    plant_name || ' (' || client_id || '/' || plant_id || ')' as plant_label,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty
from greenplanetmart.inventory_positions
where plant_name != 'Unmapped Plant'
group by 1, 2, 3, 4
order by unrestricted_stock_qty desc
limit 10`,h=`select
    client_id,
    plant_id,
    plant_name,
    plant_name || ' (' || client_id || '/' || plant_id || ')' as plant_label,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty
from greenplanetmart.inventory_positions
where plant_name != 'Unmapped Plant'
group by 1, 2, 3, 4
order by unrestricted_stock_qty desc
limit 10`,_||!M?_||(x(h,{noResolve:_,...N}),M=!0):x(h,{noResolve:_}),l=n`select
    material_group,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty,
    count(*) as stock_positions
from greenplanetmart.inventory_positions
group by 1
order by unrestricted_stock_qty desc
limit 15`,g=`select
    material_group,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty,
    count(*) as stock_positions
from greenplanetmart.inventory_positions
group by 1
order by unrestricted_stock_qty desc
limit 15`,l||!O?l||(T(g,{noResolve:l,...R}),O=!0):T(g,{noResolve:l}),p=n`with zero_stock_hotspots as (
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
)`,b=`with zero_stock_hotspots as (
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
)`,p||!j?p||(F(b,{noResolve:p,...S}),j=!0):F(b,{noResolve:p}),P(),U(),`  ${typeof t<"u"&&t.title&&t.hide_title!==!0?`<h1 class="title">${K(t.title)}</h1>`:""} ${e.head+=`<!-- HEAD_svelte-6lktun_START -->${typeof t<"u"&&t.title?`${e.title=`<title>${K(t.title)}</title>`,""} <meta property="og:title"${i("content",t.og?.title??t.title,0)}> <meta name="twitter:title"${i("content",t.og?.title??t.title,0)}>`:` ${e.title="<title>Evidence</title>",""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof t=="object"?`${t.description||t.og?.description?`<meta name="description"${i("content",t.description??t.og?.description,0)}> <meta property="og:description"${i("content",t.og?.description??t.description,0)}> <meta name="twitter:description"${i("content",t.og?.description??t.description,0)}>`:""} ${t.og?.image?`<meta property="og:image"${i("content",X(t.og?.image),0)}> <meta name="twitter:image"${i("content",X(t.og?.image),0)}>`:""}`:""}<!-- HEAD_svelte-6lktun_END -->`,""}   <h1 class="markdown" id="inventory-position-by-plant-storage-location-and-material" data-svelte-h="svelte-1unpgyv"><a href="#inventory-position-by-plant-storage-location-and-material">Inventory Position by Plant, Storage Location, and Material</a></h1> <p class="markdown" data-svelte-h="svelte-1hp8hy0">This page addresses the supply chain question: where is stock currently held, and which materials are overstocked, inactive, or missing at relevant locations?</p> <blockquote class="markdown" data-svelte-h="svelte-5png3e"><p class="markdown">Use case scope: the page uses <code class="markdown">fct_inventory_snapshot</code> at <code class="markdown">material x plant x storage_location</code> grain. Because the source is a snapshot extract, the analysis shows current position only and not stock movement history.</p></blockquote> ${a?`${s(f,"QueryViewer").$$render(e,{queryID:"inventory_kpis",queryResult:a},{},{})}`:""} ${s(J,"Grid").$$render(e,{cols:3},{},{default:()=>`${s(A,"BigValue").$$render(e,{data:a,value:"unrestricted_stock",title:"Unrestricted Stock"},{},{})} ${s(A,"BigValue").$$render(e,{data:a,value:"stock_positions",title:"Stock Positions"},{},{})} ${s(A,"BigValue").$$render(e,{data:a,value:"zero_stock_positions",title:"Zero-Stock Positions"},{},{})}`})} <h2 class="markdown" id="stock-concentration-by-plant" data-svelte-h="svelte-1a0muzz"><a href="#stock-concentration-by-plant">Stock Concentration by Plant</a></h2> ${m?`${s(f,"QueryViewer").$$render(e,{queryID:"inventory_plant_stock",queryResult:m},{},{})}`:""} ${s(W,"BarChart").$$render(e,{data:m,x:"plant_label",y:"unrestricted_stock_qty"},{},{})} ${c?`${s(f,"QueryViewer").$$render(e,{queryID:"inventory_material_groups",queryResult:c},{},{})}`:""} <h2 class="markdown" id="material-group-mix" data-svelte-h="svelte-19a3ew"><a href="#material-group-mix">Material Group Mix</a></h2> ${s(J,"Grid").$$render(e,{cols:2},{},{default:()=>`${s(W,"BarChart").$$render(e,{data:c,x:"material_group",y:"unrestricted_stock_qty"},{},{})} ${s(Y,"DataTable").$$render(e,{data:c},{},{})}`})} ${u?`${s(f,"QueryViewer").$$render(e,{queryID:"inventory_zero_stock_hotspots",queryResult:u},{},{})}`:""} <h2 class="markdown" id="zero-stock-hotspots" data-svelte-h="svelte-ihu3ir"><a href="#zero-stock-hotspots">Zero-Stock Hotspots</a></h2> ${s(Y,"DataTable").$$render(e,{data:u},{},{})} <p class="markdown" data-svelte-h="svelte-1ld9pf"><a href="/" class="markdown">Back to Overview</a></p>`});export{Ht as default};
