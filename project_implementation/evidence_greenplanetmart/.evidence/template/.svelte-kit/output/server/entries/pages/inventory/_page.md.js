import{s as Z,a as et}from"../../../chunks/utils.js";import{c as ot,o as D,s as nt,h as K,d as a,v as n}from"../../../chunks/ssr.js";import"dequal";import"../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";import{w as st}from"../../../chunks/index2.js";import"clsx";import{r as L,Q as y,p as rt}from"../../../chunks/stores.js";import{h as s,p as at}from"../../../chunks/profile.js";import{a as X}from"../../../chunks/index5.js";import{p as it}from"../../../chunks/stores2.js";import{C as lt,s as _t,D as Y}from"../../../chunks/DataTable.js";import"ssf";import"deep-object-diff";import{G as J,B}from"../../../chunks/BigValue.js";import"@uwdata/mosaic-sql";import"yaml";import"@astronautlabs/jsonpath";import"tua-body-scroll-lock";import"lodash/merge.js";import"export-to-csv";import{e as ct,Q as f}from"../../../chunks/QueryViewer.js";import"prismjs";import"echarts";import"debounce";import"downloadjs";import{B as W}from"../../../chunks/BarChart.js";import"chroma-js";import"echarts-stat";const t={title:"Inventory Position"},Vt=ot((e,P,U,pt)=>{let q,C,w,E;C=Z(it,o=>q=o),E=Z(L,o=>w=o);let{data:k}=P,{data:H={},customFormattingSettings:Q,__db:V,inputs:G}=k;et(L,w="9b2e879e05917512d39e38f087aab860",w);let M=ct(st(G));D(M.subscribe(o=>G=o)),nt(lt,{getCustomFormats:()=>Q.customFormats||[]}),D(()=>y.emptyCache());const d=(o,tt)=>at(V.query,o,{query_name:tt});_t(d),q.params;let z={initialData:void 0,initialError:void 0},i=s`select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions`,v=`select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions`,r,O=!1;const $=y.createReactive({callback:o=>{r=o},execFn:d},{id:"inventory_kpis",...z});$(v,{noResolve:i,...z}),globalThis[Symbol.for("inventory_kpis")]={get value(){return r}};let R={initialData:void 0,initialError:void 0},l=s`select
    client_id,
    plant_id,
    plant_name,
    plant_name || ' (' || client_id || '/' || plant_id || ')' as plant_label,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty
from greenplanetmart.inventory_positions
where plant_name != 'Unmapped Plant'
group by 1, 2, 3, 4
order by unrestricted_stock_qty desc
limit 10`,g=`select
    client_id,
    plant_id,
    plant_name,
    plant_name || ' (' || client_id || '/' || plant_id || ')' as plant_label,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty
from greenplanetmart.inventory_positions
where plant_name != 'Unmapped Plant'
group by 1, 2, 3, 4
order by unrestricted_stock_qty desc
limit 10`,m,A=!1;const T=y.createReactive({callback:o=>{m=o},execFn:d},{id:"inventory_plant_stock",...R});T(g,{noResolve:l,...R}),globalThis[Symbol.for("inventory_plant_stock")]={get value(){return m}};let x={initialData:void 0,initialError:void 0},_=s`select
    material_group,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty,
    count(*) as stock_positions
from greenplanetmart.inventory_positions
group by 1
order by unrestricted_stock_qty desc
limit 15`,h=`select
    material_group,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty,
    count(*) as stock_positions
from greenplanetmart.inventory_positions
group by 1
order by unrestricted_stock_qty desc
limit 15`,c,N=!1;const S=y.createReactive({callback:o=>{c=o},execFn:d},{id:"inventory_material_groups",...x});S(h,{noResolve:_,...x}),globalThis[Symbol.for("inventory_material_groups")]={get value(){return c}};let F={initialData:void 0,initialError:void 0},p=s`select
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
limit 20`,b=`select
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
limit 20`,u,j=!1;const I=y.createReactive({callback:o=>{u=o},execFn:d},{id:"inventory_zero_stock_hotspots",...F});return I(b,{noResolve:p,...F}),globalThis[Symbol.for("inventory_zero_stock_hotspots")]={get value(){return u}},D(M.subscribe(o=>{})),P.data===void 0&&U.data&&k!==void 0&&U.data(k),{data:H={},customFormattingSettings:Q,__db:V}=k,rt.set(Object.keys(H).length>0),q.params,i=s`select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions`,v=`select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions`,i||!O?i||($(v,{noResolve:i,...z}),O=!0):$(v,{noResolve:i}),l=s`select
    client_id,
    plant_id,
    plant_name,
    plant_name || ' (' || client_id || '/' || plant_id || ')' as plant_label,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty
from greenplanetmart.inventory_positions
where plant_name != 'Unmapped Plant'
group by 1, 2, 3, 4
order by unrestricted_stock_qty desc
limit 10`,g=`select
    client_id,
    plant_id,
    plant_name,
    plant_name || ' (' || client_id || '/' || plant_id || ')' as plant_label,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty
from greenplanetmart.inventory_positions
where plant_name != 'Unmapped Plant'
group by 1, 2, 3, 4
order by unrestricted_stock_qty desc
limit 10`,l||!A?l||(T(g,{noResolve:l,...R}),A=!0):T(g,{noResolve:l}),_=s`select
    material_group,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty,
    count(*) as stock_positions
from greenplanetmart.inventory_positions
group by 1
order by unrestricted_stock_qty desc
limit 15`,h=`select
    material_group,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty,
    count(*) as stock_positions
from greenplanetmart.inventory_positions
group by 1
order by unrestricted_stock_qty desc
limit 15`,_||!N?_||(S(h,{noResolve:_,...x}),N=!0):S(h,{noResolve:_}),p=s`select
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
limit 20`,b=`select
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
limit 20`,p||!j?p||(I(b,{noResolve:p,...F}),j=!0):I(b,{noResolve:p}),C(),E(),`  ${typeof t<"u"&&t.title&&t.hide_title!==!0?`<h1 class="title">${K(t.title)}</h1>`:""} ${e.head+=`<!-- HEAD_svelte-6lktun_START -->${typeof t<"u"&&t.title?`${e.title=`<title>${K(t.title)}</title>`,""} <meta property="og:title"${a("content",t.og?.title??t.title,0)}> <meta name="twitter:title"${a("content",t.og?.title??t.title,0)}>`:` ${e.title="<title>Evidence</title>",""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof t=="object"?`${t.description||t.og?.description?`<meta name="description"${a("content",t.description??t.og?.description,0)}> <meta property="og:description"${a("content",t.og?.description??t.description,0)}> <meta name="twitter:description"${a("content",t.og?.description??t.description,0)}>`:""} ${t.og?.image?`<meta property="og:image"${a("content",X(t.og?.image),0)}> <meta name="twitter:image"${a("content",X(t.og?.image),0)}>`:""}`:""}<!-- HEAD_svelte-6lktun_END -->`,""}   <h1 class="markdown" id="inventory-position-by-plant-storage-location-and-material" data-svelte-h="svelte-1unpgyv"><a href="#inventory-position-by-plant-storage-location-and-material">Inventory Position by Plant, Storage Location, and Material</a></h1> <p class="markdown" data-svelte-h="svelte-1hp8hy0">This page addresses the supply chain question: where is stock currently held, and which materials are overstocked, inactive, or missing at relevant locations?</p> <blockquote class="markdown" data-svelte-h="svelte-5png3e"><p class="markdown">Use case scope: the page uses <code class="markdown">fct_inventory_snapshot</code> at <code class="markdown">material x plant x storage_location</code> grain. Because the source is a snapshot extract, the analysis shows current position only and not stock movement history.</p></blockquote> ${r?`${n(f,"QueryViewer").$$render(e,{queryID:"inventory_kpis",queryResult:r},{},{})}`:""} ${n(J,"Grid").$$render(e,{cols:3},{},{default:()=>`${n(B,"BigValue").$$render(e,{data:r,value:"unrestricted_stock",title:"Unrestricted Stock"},{},{})} ${n(B,"BigValue").$$render(e,{data:r,value:"stock_positions",title:"Stock Positions"},{},{})} ${n(B,"BigValue").$$render(e,{data:r,value:"zero_stock_positions",title:"Zero-Stock Positions"},{},{})}`})} <h2 class="markdown" id="stock-concentration-by-plant" data-svelte-h="svelte-1a0muzz"><a href="#stock-concentration-by-plant">Stock Concentration by Plant</a></h2> ${m?`${n(f,"QueryViewer").$$render(e,{queryID:"inventory_plant_stock",queryResult:m},{},{})}`:""} ${n(W,"BarChart").$$render(e,{data:m,x:"plant_label",y:"unrestricted_stock_qty"},{},{})} ${c?`${n(f,"QueryViewer").$$render(e,{queryID:"inventory_material_groups",queryResult:c},{},{})}`:""} <h2 class="markdown" id="material-group-mix" data-svelte-h="svelte-19a3ew"><a href="#material-group-mix">Material Group Mix</a></h2> ${n(J,"Grid").$$render(e,{cols:2},{},{default:()=>`${n(W,"BarChart").$$render(e,{data:c,x:"material_group",y:"unrestricted_stock_qty"},{},{})} ${n(Y,"DataTable").$$render(e,{data:c},{},{})}`})} ${u?`${n(f,"QueryViewer").$$render(e,{queryID:"inventory_zero_stock_hotspots",queryResult:u},{},{})}`:""} <h2 class="markdown" id="zero-stock-hotspots" data-svelte-h="svelte-ihu3ir"><a href="#zero-stock-hotspots">Zero-Stock Hotspots</a></h2> ${n(Y,"DataTable").$$render(e,{data:u},{},{})} <p class="markdown" data-svelte-h="svelte-1ld9pf"><a href="/" class="markdown">Back to Overview</a></p>`});export{Vt as default};
