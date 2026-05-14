import{s as M,a as ee}from"../../../chunks/utils.js";import{c as te,o as C,s as ae,h as K,d as r,v as l}from"../../../chunks/ssr.js";import"dequal";import"../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";import{w as le}from"../../../chunks/index2.js";import"clsx";import{r as X,Q as p,p as se}from"../../../chunks/stores.js";import{h as s,p as ie}from"../../../chunks/profile.js";import{a as Y}from"../../../chunks/index5.js";import{p as re}from"../../../chunks/stores2.js";import{C as ne,s as oe,D as J}from"../../../chunks/DataTable.js";import"ssf";import"deep-object-diff";import{G as W,B}from"../../../chunks/BigValue.js";import"@uwdata/mosaic-sql";import"yaml";import"@astronautlabs/jsonpath";import"tua-body-scroll-lock";import"lodash/merge.js";import"export-to-csv";import{e as _e,Q as q}from"../../../chunks/QueryViewer.js";import"prismjs";import"echarts";import"debounce";import"downloadjs";import{B as ue}from"../../../chunks/BarChart.js";import"chroma-js";import"echarts-stat";import{L as me}from"../../../chunks/LineChart.js";const e={title:"Sales Performance"},Ne=te((t,E,Q,de)=>{let k,V,$,H;V=M(re,a=>k=a),H=M(X,a=>$=a);let{data:v}=E,{data:U={},customFormattingSettings:z,__db:G,inputs:A}=v;ee(X,$="b6c1e1557fc0a9a1e3a0b220257fd6d9",$);let N=_e(le(A));C(N.subscribe(a=>A=a)),ae(ne,{getCustomFormats:()=>z.customFormats||[]}),C(()=>p.emptyCache());const d=(a,Z)=>ie(G.query,a,{query_name:Z});oe(d),k.params;let w={initialData:void 0,initialError:void 0},n=s`select
    round(sum(billed_net_value), 0) as net_billed_value,
    round(sum(billed_quantity), 0) as billed_quantity,
    count(distinct customer_key) as active_customers
from greenplanetmart.sales_billing_items`,y=`select
    round(sum(billed_net_value), 0) as net_billed_value,
    round(sum(billed_quantity), 0) as billed_quantity,
    count(distinct customer_key) as active_customers
from greenplanetmart.sales_billing_items`,i,O=!1;const R=p.createReactive({callback:a=>{i=a},execFn:d},{id:"sales_kpis",...w});R(y,{noResolve:n,...w}),globalThis[Symbol.for("sales_kpis")]={get value(){return i}};let T={initialData:void 0,initialError:void 0},o=s`select
    billing_month,
    round(sum(billed_net_value), 0) as billed_net_value
from greenplanetmart.sales_billing_items
group by 1
order by 1`,g=`select
    billing_month,
    round(sum(billed_net_value), 0) as billed_net_value
from greenplanetmart.sales_billing_items
group by 1
order by 1`,c,P=!1;const F=p.createReactive({callback:a=>{c=a},execFn:d},{id:"sales_monthly_revenue",...T});F(g,{noResolve:o,...T}),globalThis[Symbol.for("sales_monthly_revenue")]={get value(){return c}};let x={initialData:void 0,initialError:void 0},_=s`select
    customer_name,
    sales_organization_name,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 15`,f=`select
    customer_name,
    sales_organization_name,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 15`,u,j=!1;const D=p.createReactive({callback:a=>{u=a},execFn:d},{id:"sales_top_customers",...x});D(f,{noResolve:_,...x}),globalThis[Symbol.for("sales_top_customers")]={get value(){return u}};let I={initialData:void 0,initialError:void 0},m=s`select
    material_name,
    material_group,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 20`,h=`select
    material_name,
    material_group,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 20`,b,L=!1;const S=p.createReactive({callback:a=>{b=a},execFn:d},{id:"sales_top_materials",...I});return S(h,{noResolve:m,...I}),globalThis[Symbol.for("sales_top_materials")]={get value(){return b}},C(N.subscribe(a=>{})),E.data===void 0&&Q.data&&v!==void 0&&Q.data(v),{data:U={},customFormattingSettings:z,__db:G}=v,se.set(Object.keys(U).length>0),k.params,n=s`select
    round(sum(billed_net_value), 0) as net_billed_value,
    round(sum(billed_quantity), 0) as billed_quantity,
    count(distinct customer_key) as active_customers
from greenplanetmart.sales_billing_items`,y=`select
    round(sum(billed_net_value), 0) as net_billed_value,
    round(sum(billed_quantity), 0) as billed_quantity,
    count(distinct customer_key) as active_customers
from greenplanetmart.sales_billing_items`,n||!O?n||(R(y,{noResolve:n,...w}),O=!0):R(y,{noResolve:n}),o=s`select
    billing_month,
    round(sum(billed_net_value), 0) as billed_net_value
from greenplanetmart.sales_billing_items
group by 1
order by 1`,g=`select
    billing_month,
    round(sum(billed_net_value), 0) as billed_net_value
from greenplanetmart.sales_billing_items
group by 1
order by 1`,o||!P?o||(F(g,{noResolve:o,...T}),P=!0):F(g,{noResolve:o}),_=s`select
    customer_name,
    sales_organization_name,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 15`,f=`select
    customer_name,
    sales_organization_name,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 15`,_||!j?_||(D(f,{noResolve:_,...x}),j=!0):D(f,{noResolve:_}),m=s`select
    material_name,
    material_group,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 20`,h=`select
    material_name,
    material_group,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 20`,m||!L?m||(S(h,{noResolve:m,...I}),L=!0):S(h,{noResolve:m}),V(),H(),`  ${typeof e<"u"&&e.title&&e.hide_title!==!0?`<h1 class="title">${K(e.title)}</h1>`:""} ${t.head+=`<!-- HEAD_svelte-6lktun_START -->${typeof e<"u"&&e.title?`${t.title=`<title>${K(e.title)}</title>`,""} <meta property="og:title"${r("content",e.og?.title??e.title,0)}> <meta name="twitter:title"${r("content",e.og?.title??e.title,0)}>`:` ${t.title="<title>Evidence</title>",""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof e=="object"?`${e.description||e.og?.description?`<meta name="description"${r("content",e.description??e.og?.description,0)}> <meta property="og:description"${r("content",e.og?.description??e.description,0)}> <meta name="twitter:description"${r("content",e.og?.description??e.description,0)}>`:""} ${e.og?.image?`<meta property="og:image"${r("content",Y(e.og?.image),0)}> <meta name="twitter:image"${r("content",Y(e.og?.image),0)}>`:""}`:""}<!-- HEAD_svelte-6lktun_END -->`,""}   <h1 class="markdown" id="sales-performance-by-customer-product-and-region" data-svelte-h="svelte-1ciyzit"><a href="#sales-performance-by-customer-product-and-region">Sales Performance by Customer, Product, and Region</a></h1> <p class="markdown" data-svelte-h="svelte-1ajalob">This page answers the business analytics question: which customers, materials, and sales organizations generate the most billed revenue over time?</p> <blockquote class="markdown" data-svelte-h="svelte-svwxxm"><p class="markdown">Use case scope: the report uses billing-item facts deduplicated to business grain and limits the trend window to the most recent 15 months available in the mart so that old historical outliers do not dominate the visuals.</p></blockquote> ${i?`${l(q,"QueryViewer").$$render(t,{queryID:"sales_kpis",queryResult:i},{},{})}`:""} ${l(W,"Grid").$$render(t,{cols:3},{},{default:()=>`${l(B,"BigValue").$$render(t,{data:i,value:"net_billed_value",title:"Net Billed Value"},{},{})} ${l(B,"BigValue").$$render(t,{data:i,value:"billed_quantity",title:"Billed Quantity"},{},{})} ${l(B,"BigValue").$$render(t,{data:i,value:"active_customers",title:"Active Customers"},{},{})}`})} <h2 class="markdown" id="revenue-trend" data-svelte-h="svelte-eo4nyf"><a href="#revenue-trend">Revenue Trend</a></h2> ${c?`${l(q,"QueryViewer").$$render(t,{queryID:"sales_monthly_revenue",queryResult:c},{},{})}`:""} ${l(me,"LineChart").$$render(t,{data:c,x:"billing_month",y:"billed_net_value"},{},{})} ${u?`${l(q,"QueryViewer").$$render(t,{queryID:"sales_top_customers",queryResult:u},{},{})}`:""} <h2 class="markdown" id="top-customers" data-svelte-h="svelte-1g1bqdw"><a href="#top-customers">Top Customers</a></h2> ${l(W,"Grid").$$render(t,{cols:2},{},{default:()=>`${l(ue,"BarChart").$$render(t,{data:u,x:"customer_name",y:"billed_net_value"},{},{})} ${l(J,"DataTable").$$render(t,{data:u},{},{})}`})} ${b?`${l(q,"QueryViewer").$$render(t,{queryID:"sales_top_materials",queryResult:b},{},{})}`:""} <h2 class="markdown" id="top-materials" data-svelte-h="svelte-1ir9xfx"><a href="#top-materials">Top Materials</a></h2> ${l(J,"DataTable").$$render(t,{data:b},{},{})} <p class="markdown" data-svelte-h="svelte-1ld9pf"><a href="/" class="markdown">Back to Overview</a></p>`});export{Ne as default};
