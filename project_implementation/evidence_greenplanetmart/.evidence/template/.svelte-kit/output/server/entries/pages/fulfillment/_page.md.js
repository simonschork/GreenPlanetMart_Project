import{s as ee,a as de}from"../../../chunks/utils.js";import{c as oe,o as B,s as se,h as te,d as n,v as a}from"../../../chunks/ssr.js";import"dequal";import"../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";import{w as _e}from"../../../chunks/index2.js";import"clsx";import{r as le,Q as f,p as me}from"../../../chunks/stores.js";import{h as r,p as ye}from"../../../chunks/profile.js";import{a as ae}from"../../../chunks/index5.js";import{p as ue}from"../../../chunks/stores2.js";import{C as fe,s as ce,D as re}from"../../../chunks/DataTable.js";import"ssf";import"deep-object-diff";import{G as O,B as U}from"../../../chunks/BigValue.js";import"@uwdata/mosaic-sql";import"yaml";import"@astronautlabs/jsonpath";import"tua-body-scroll-lock";import"lodash/merge.js";import"export-to-csv";import{e as ve,Q as g}from"../../../chunks/QueryViewer.js";import"prismjs";import"echarts";import"debounce";import"downloadjs";import{B as pe}from"../../../chunks/BarChart.js";import"chroma-js";import"echarts-stat";import{L as ie}from"../../../chunks/LineChart.js";const e={title:"Order Fulfillment"},ze=oe((t,G,A,ge)=>{let R,L,T,M;L=ee(ue,l=>R=l),M=ee(le,l=>T=l);let{data:h}=G,{data:N={},customFormattingSettings:P,__db:j,inputs:K}=h;de(le,T="81404f941e775b54a6184421387e618e",T);let z=ve(_e(K));B(z.subscribe(l=>K=l)),se(fe,{getCustomFormats:()=>P.customFormats||[]}),B(()=>f.emptyCache());const d=(l,ne)=>ye(j.query,l,{query_name:ne});ce(d),R.params;let D={initialData:void 0,initialError:void 0},o=r`select
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate_pct,
    round(avg(delivery_delay_days), 1) as average_delay_days,
    round(avg(case when is_fully_delivered then 1 else 0 end), 4) as fully_delivered_rate_pct
from greenplanetmart.order_fulfillment_items`,b=`select
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate_pct,
    round(avg(delivery_delay_days), 1) as average_delay_days,
    round(avg(case when is_fully_delivered then 1 else 0 end), 4) as fully_delivered_rate_pct
from greenplanetmart.order_fulfillment_items`,i,X=!1;const F=f.createReactive({callback:l=>{i=l},execFn:d},{id:"fulfillment_kpis",...D});F(b,{noResolve:o,...D}),globalThis[Symbol.for("fulfillment_kpis")]={get value(){return i}};let x={initialData:void 0,initialError:void 0},s=r`select
    requested_delivery_month,
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate
from greenplanetmart.order_fulfillment_items
group by 1
order by 1`,w=`select
    requested_delivery_month,
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate
from greenplanetmart.order_fulfillment_items
group by 1
order by 1`,c,Y=!1;const I=f.createReactive({callback:l=>{c=l},execFn:d},{id:"fulfillment_monthly_on_time",...x});I(w,{noResolve:s,...x}),globalThis[Symbol.for("fulfillment_monthly_on_time")]={get value(){return c}};let S={initialData:void 0,initialError:void 0},_=r`select
    requested_delivery_month,
    round(avg(delivery_delay_days), 2) as average_delay_days
from greenplanetmart.order_fulfillment_items
group by 1
order by 1`,k=`select
    requested_delivery_month,
    round(avg(delivery_delay_days), 2) as average_delay_days
from greenplanetmart.order_fulfillment_items
group by 1
order by 1`,v,J=!1;const C=f.createReactive({callback:l=>{v=l},execFn:d},{id:"fulfillment_monthly_delay",...S});C(k,{noResolve:_,...S}),globalThis[Symbol.for("fulfillment_monthly_delay")]={get value(){return v}};let E={initialData:void 0,initialError:void 0},m=r`select
    delay_bucket,
    count(*) as order_items
from greenplanetmart.order_fulfillment_items
group by 1
order by order_items desc`,q=`select
    delay_bucket,
    count(*) as order_items
from greenplanetmart.order_fulfillment_items
group by 1
order by order_items desc`,y,W=!1;const H=f.createReactive({callback:l=>{y=l},execFn:d},{id:"fulfillment_delay_buckets",...E});H(q,{noResolve:m,...E}),globalThis[Symbol.for("fulfillment_delay_buckets")]={get value(){return y}};let Q={initialData:void 0,initialError:void 0},u=r`select
    customer_name,
    material_name,
    plant_name,
    requested_delivery_date,
    actual_delivery_date,
    round(delivery_delay_days, 1) as delivery_delay_days,
    round(open_quantity, 0) as open_quantity
from greenplanetmart.order_fulfillment_items
order by delivery_delay_days desc
limit 20`,$=`select
    customer_name,
    material_name,
    plant_name,
    requested_delivery_date,
    actual_delivery_date,
    round(delivery_delay_days, 1) as delivery_delay_days,
    round(open_quantity, 0) as open_quantity
from greenplanetmart.order_fulfillment_items
order by delivery_delay_days desc
limit 20`,p,Z=!1;const V=f.createReactive({callback:l=>{p=l},execFn:d},{id:"fulfillment_worst_delays",...Q});return V($,{noResolve:u,...Q}),globalThis[Symbol.for("fulfillment_worst_delays")]={get value(){return p}},B(z.subscribe(l=>{})),G.data===void 0&&A.data&&h!==void 0&&A.data(h),{data:N={},customFormattingSettings:P,__db:j}=h,me.set(Object.keys(N).length>0),R.params,o=r`select
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate_pct,
    round(avg(delivery_delay_days), 1) as average_delay_days,
    round(avg(case when is_fully_delivered then 1 else 0 end), 4) as fully_delivered_rate_pct
from greenplanetmart.order_fulfillment_items`,b=`select
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate_pct,
    round(avg(delivery_delay_days), 1) as average_delay_days,
    round(avg(case when is_fully_delivered then 1 else 0 end), 4) as fully_delivered_rate_pct
from greenplanetmart.order_fulfillment_items`,o||!X?o||(F(b,{noResolve:o,...D}),X=!0):F(b,{noResolve:o}),s=r`select
    requested_delivery_month,
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate
from greenplanetmart.order_fulfillment_items
group by 1
order by 1`,w=`select
    requested_delivery_month,
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate
from greenplanetmart.order_fulfillment_items
group by 1
order by 1`,s||!Y?s||(I(w,{noResolve:s,...x}),Y=!0):I(w,{noResolve:s}),_=r`select
    requested_delivery_month,
    round(avg(delivery_delay_days), 2) as average_delay_days
from greenplanetmart.order_fulfillment_items
group by 1
order by 1`,k=`select
    requested_delivery_month,
    round(avg(delivery_delay_days), 2) as average_delay_days
from greenplanetmart.order_fulfillment_items
group by 1
order by 1`,_||!J?_||(C(k,{noResolve:_,...S}),J=!0):C(k,{noResolve:_}),m=r`select
    delay_bucket,
    count(*) as order_items
from greenplanetmart.order_fulfillment_items
group by 1
order by order_items desc`,q=`select
    delay_bucket,
    count(*) as order_items
from greenplanetmart.order_fulfillment_items
group by 1
order by order_items desc`,m||!W?m||(H(q,{noResolve:m,...E}),W=!0):H(q,{noResolve:m}),u=r`select
    customer_name,
    material_name,
    plant_name,
    requested_delivery_date,
    actual_delivery_date,
    round(delivery_delay_days, 1) as delivery_delay_days,
    round(open_quantity, 0) as open_quantity
from greenplanetmart.order_fulfillment_items
order by delivery_delay_days desc
limit 20`,$=`select
    customer_name,
    material_name,
    plant_name,
    requested_delivery_date,
    actual_delivery_date,
    round(delivery_delay_days, 1) as delivery_delay_days,
    round(open_quantity, 0) as open_quantity
from greenplanetmart.order_fulfillment_items
order by delivery_delay_days desc
limit 20`,u||!Z?u||(V($,{noResolve:u,...Q}),Z=!0):V($,{noResolve:u}),L(),M(),`  ${typeof e<"u"&&e.title&&e.hide_title!==!0?`<h1 class="title">${te(e.title)}</h1>`:""} ${t.head+=`<!-- HEAD_svelte-6lktun_START -->${typeof e<"u"&&e.title?`${t.title=`<title>${te(e.title)}</title>`,""} <meta property="og:title"${n("content",e.og?.title??e.title,0)}> <meta name="twitter:title"${n("content",e.og?.title??e.title,0)}>`:` ${t.title="<title>Evidence</title>",""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof e=="object"?`${e.description||e.og?.description?`<meta name="description"${n("content",e.description??e.og?.description,0)}> <meta property="og:description"${n("content",e.og?.description??e.description,0)}> <meta name="twitter:description"${n("content",e.og?.description??e.description,0)}>`:""} ${e.og?.image?`<meta property="og:image"${n("content",ae(e.og?.image),0)}> <meta name="twitter:image"${n("content",ae(e.og?.image),0)}>`:""}`:""}<!-- HEAD_svelte-6lktun_END -->`,""}   <h1 class="markdown" id="order-fulfillment-and-delivery-timeliness" data-svelte-h="svelte-1wmehhy"><a href="#order-fulfillment-and-delivery-timeliness">Order Fulfillment and Delivery Timeliness</a></h1> <p class="markdown" data-svelte-h="svelte-ud0li5">This page addresses the operational-efficiency question: are customer orders delivered on time, and where do fulfillment bottlenecks occur?</p> <blockquote class="markdown" data-svelte-h="svelte-dbxazs"><p class="markdown">Use case scope: the page uses <code class="markdown">fct_order_fulfillment</code> at sales-order-item grain. Requested and actual delivery dates already include fallback logic from the mart layer so that incomplete operational date fields still support KPI reporting.</p></blockquote> ${i?`${a(g,"QueryViewer").$$render(t,{queryID:"fulfillment_kpis",queryResult:i},{},{})}`:""} ${a(O,"Grid").$$render(t,{cols:3},{},{default:()=>`${a(U,"BigValue").$$render(t,{data:i,value:"on_time_rate_pct",title:"On-Time Rate (%)"},{},{})} ${a(U,"BigValue").$$render(t,{data:i,value:"average_delay_days",title:"Average Delay (Days)"},{},{})} ${a(U,"BigValue").$$render(t,{data:i,value:"fully_delivered_rate_pct",title:"Fully Delivered Rate (%)"},{},{})}`})} <h2 class="markdown" id="timeliness-trend" data-svelte-h="svelte-1gkqw2y"><a href="#timeliness-trend">Timeliness Trend</a></h2> ${c?`${a(g,"QueryViewer").$$render(t,{queryID:"fulfillment_monthly_on_time",queryResult:c},{},{})}`:""} ${v?`${a(g,"QueryViewer").$$render(t,{queryID:"fulfillment_monthly_delay",queryResult:v},{},{})}`:""} ${a(O,"Grid").$$render(t,{cols:2},{},{default:()=>`${a(ie,"LineChart").$$render(t,{data:c,x:"requested_delivery_month",y:"on_time_rate"},{},{})} ${a(ie,"LineChart").$$render(t,{data:v,x:"requested_delivery_month",y:"average_delay_days"},{},{})}`})} ${y?`${a(g,"QueryViewer").$$render(t,{queryID:"fulfillment_delay_buckets",queryResult:y},{},{})}`:""} <h2 class="markdown" id="delay-mix" data-svelte-h="svelte-172cirp"><a href="#delay-mix">Delay Mix</a></h2> ${a(O,"Grid").$$render(t,{cols:2},{},{default:()=>`${a(pe,"BarChart").$$render(t,{data:y,x:"delay_bucket",y:"order_items"},{},{})} ${a(re,"DataTable").$$render(t,{data:y},{},{})}`})} ${p?`${a(g,"QueryViewer").$$render(t,{queryID:"fulfillment_worst_delays",queryResult:p},{},{})}`:""} <h2 class="markdown" id="most-delayed-order-items" data-svelte-h="svelte-7c6sp7"><a href="#most-delayed-order-items">Most Delayed Order Items</a></h2> ${a(re,"DataTable").$$render(t,{data:p},{},{})} <p class="markdown" data-svelte-h="svelte-1ld9pf"><a href="/" class="markdown">Back to Overview</a></p>`});export{ze as default};
