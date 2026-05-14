import{s as ee,a as se}from"../../../chunks/utils.js";import{c as ue,o as B,s as ie,h as te,d as l,v as n}from"../../../chunks/ssr.js";import"dequal";import"../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";import{w as _e}from"../../../chunks/index2.js";import"clsx";import{r as re,Q as m,p as de}from"../../../chunks/stores.js";import{h as a,p as pe}from"../../../chunks/profile.js";import{a as ne}from"../../../chunks/index5.js";import{p as ce}from"../../../chunks/stores2.js";import{C as me,s as ve,D as ae}from"../../../chunks/DataTable.js";import"ssf";import"deep-object-diff";import{G as O,B as U}from"../../../chunks/BigValue.js";import"@uwdata/mosaic-sql";import"yaml";import"@astronautlabs/jsonpath";import"tua-body-scroll-lock";import"lodash/merge.js";import"export-to-csv";import{e as ye,Q as g}from"../../../chunks/QueryViewer.js";import"prismjs";import"echarts";import"debounce";import"downloadjs";import{B as he}from"../../../chunks/BarChart.js";import"chroma-js";import"echarts-stat";import{L as oe}from"../../../chunks/LineChart.js";const e={title:"Procurement Performance"},Xe=ue((t,G,P,ge)=>{let R,L,x,A;L=ee(ce,r=>R=r),A=ee(re,r=>x=r);let{data:f}=G,{data:N={},customFormattingSettings:j,__db:M,inputs:K}=f;se(re,x="4ece5bafedf858bf0aa0fa6aa0fcf9a7",x);let X=ye(_e(K));B(X.subscribe(r=>K=r)),ie(me,{getCustomFormats:()=>j.customFormats||[]}),B(()=>m.emptyCache());const s=(r,le)=>pe(M.query,r,{query_name:le});ve(s),R.params;let T={initialData:void 0,initialError:void 0},u=a`select
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct,
    round(avg(case when is_fully_received then 1 else 0 end), 4) as fully_received_rate_pct
from greenplanetmart.procurement_schedule_lines`,b=`select
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct,
    round(avg(case when is_fully_received then 1 else 0 end), 4) as fully_received_rate_pct
from greenplanetmart.procurement_schedule_lines`,o,Y=!1;const F=m.createReactive({callback:r=>{o=r},execFn:s},{id:"procurement_kpis",...T});F(b,{noResolve:u,...T}),globalThis[Symbol.for("procurement_kpis")]={get value(){return o}};let I={initialData:void 0,initialError:void 0},i=a`select
    planned_delivery_month,
    round(sum(open_quantity), 0) as open_quantity
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`,q=`select
    planned_delivery_month,
    round(sum(open_quantity), 0) as open_quantity
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`,v,z=!1;const D=m.createReactive({callback:r=>{v=r},execFn:s},{id:"procurement_monthly_open",...I});D(q,{noResolve:i,...I}),globalThis[Symbol.for("procurement_monthly_open")]={get value(){return v}};let S={initialData:void 0,initialError:void 0},_=a`select
    planned_delivery_month,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`,w=`select
    planned_delivery_month,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`,y,J=!1;const E=m.createReactive({callback:r=>{y=r},execFn:s},{id:"procurement_monthly_overdue",...S});E(w,{noResolve:_,...S}),globalThis[Symbol.for("procurement_monthly_overdue")]={get value(){return y}};let C={initialData:void 0,initialError:void 0},d=a`select
    supplier_name,
    document_currency,
    supplier_name || ' (' || document_currency || ')' as supplier_exposure_label,
    round(sum(scheduled_net_value), 0) as scheduled_net_value,
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct
from greenplanetmart.procurement_schedule_lines
group by 1, 2
order by scheduled_net_value desc
limit 15`,$=`select
    supplier_name,
    document_currency,
    supplier_name || ' (' || document_currency || ')' as supplier_exposure_label,
    round(sum(scheduled_net_value), 0) as scheduled_net_value,
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct
from greenplanetmart.procurement_schedule_lines
group by 1, 2
order by scheduled_net_value desc
limit 15`,p,W=!1;const Q=m.createReactive({callback:r=>{p=r},execFn:s},{id:"procurement_top_suppliers",...C});Q($,{noResolve:d,...C}),globalThis[Symbol.for("procurement_top_suppliers")]={get value(){return p}};let H={initialData:void 0,initialError:void 0},c=a`select
    supplier_name,
    material_name,
    plant_name,
    planned_delivery_date,
    round(open_quantity, 0) as open_quantity,
    round(scheduled_net_value, 0) as scheduled_net_value
from greenplanetmart.procurement_schedule_lines
where is_overdue
order by scheduled_net_value desc, open_quantity desc
limit 20`,k=`select
    supplier_name,
    material_name,
    plant_name,
    planned_delivery_date,
    round(open_quantity, 0) as open_quantity,
    round(scheduled_net_value, 0) as scheduled_net_value
from greenplanetmart.procurement_schedule_lines
where is_overdue
order by scheduled_net_value desc, open_quantity desc
limit 20`,h,Z=!1;const V=m.createReactive({callback:r=>{h=r},execFn:s},{id:"procurement_overdue_commitments",...H});return V(k,{noResolve:c,...H}),globalThis[Symbol.for("procurement_overdue_commitments")]={get value(){return h}},B(X.subscribe(r=>{})),G.data===void 0&&P.data&&f!==void 0&&P.data(f),{data:N={},customFormattingSettings:j,__db:M}=f,de.set(Object.keys(N).length>0),R.params,u=a`select
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct,
    round(avg(case when is_fully_received then 1 else 0 end), 4) as fully_received_rate_pct
from greenplanetmart.procurement_schedule_lines`,b=`select
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct,
    round(avg(case when is_fully_received then 1 else 0 end), 4) as fully_received_rate_pct
from greenplanetmart.procurement_schedule_lines`,u||!Y?u||(F(b,{noResolve:u,...T}),Y=!0):F(b,{noResolve:u}),i=a`select
    planned_delivery_month,
    round(sum(open_quantity), 0) as open_quantity
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`,q=`select
    planned_delivery_month,
    round(sum(open_quantity), 0) as open_quantity
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`,i||!z?i||(D(q,{noResolve:i,...I}),z=!0):D(q,{noResolve:i}),_=a`select
    planned_delivery_month,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`,w=`select
    planned_delivery_month,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`,_||!J?_||(E(w,{noResolve:_,...S}),J=!0):E(w,{noResolve:_}),d=a`select
    supplier_name,
    document_currency,
    supplier_name || ' (' || document_currency || ')' as supplier_exposure_label,
    round(sum(scheduled_net_value), 0) as scheduled_net_value,
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct
from greenplanetmart.procurement_schedule_lines
group by 1, 2
order by scheduled_net_value desc
limit 15`,$=`select
    supplier_name,
    document_currency,
    supplier_name || ' (' || document_currency || ')' as supplier_exposure_label,
    round(sum(scheduled_net_value), 0) as scheduled_net_value,
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct
from greenplanetmart.procurement_schedule_lines
group by 1, 2
order by scheduled_net_value desc
limit 15`,d||!W?d||(Q($,{noResolve:d,...C}),W=!0):Q($,{noResolve:d}),c=a`select
    supplier_name,
    material_name,
    plant_name,
    planned_delivery_date,
    round(open_quantity, 0) as open_quantity,
    round(scheduled_net_value, 0) as scheduled_net_value
from greenplanetmart.procurement_schedule_lines
where is_overdue
order by scheduled_net_value desc, open_quantity desc
limit 20`,k=`select
    supplier_name,
    material_name,
    plant_name,
    planned_delivery_date,
    round(open_quantity, 0) as open_quantity,
    round(scheduled_net_value, 0) as scheduled_net_value
from greenplanetmart.procurement_schedule_lines
where is_overdue
order by scheduled_net_value desc, open_quantity desc
limit 20`,c||!Z?c||(V(k,{noResolve:c,...H}),Z=!0):V(k,{noResolve:c}),L(),A(),`  ${typeof e<"u"&&e.title&&e.hide_title!==!0?`<h1 class="title">${te(e.title)}</h1>`:""} ${t.head+=`<!-- HEAD_svelte-6lktun_START -->${typeof e<"u"&&e.title?`${t.title=`<title>${te(e.title)}</title>`,""} <meta property="og:title"${l("content",e.og?.title??e.title,0)}> <meta name="twitter:title"${l("content",e.og?.title??e.title,0)}>`:` ${t.title="<title>Evidence</title>",""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof e=="object"?`${e.description||e.og?.description?`<meta name="description"${l("content",e.description??e.og?.description,0)}> <meta property="og:description"${l("content",e.og?.description??e.description,0)}> <meta name="twitter:description"${l("content",e.og?.description??e.description,0)}>`:""} ${e.og?.image?`<meta property="og:image"${l("content",ne(e.og?.image),0)}> <meta name="twitter:image"${l("content",ne(e.og?.image),0)}>`:""}`:""}<!-- HEAD_svelte-6lktun_END -->`,""}   <h1 class="markdown" id="procurement-performance-and-supplier-reliability" data-svelte-h="svelte-1yjvfsl"><a href="#procurement-performance-and-supplier-reliability">Procurement Performance and Supplier Reliability</a></h1> <p class="markdown" data-svelte-h="svelte-onlda8">This page addresses the supply chain question: which suppliers deliver reliably, and where are procurement delays or open commitments accumulating?</p> <blockquote class="markdown" data-svelte-h="svelte-c8d1ol"><p class="markdown">Use case scope: the procurement mart is strong enough for comparative supplier and backlog analysis, but the underlying extract contains very large nominal quantities and values. Interpret the charts directionally for reliability and exposure patterns rather than as audited finance outputs.</p></blockquote> ${o?`${n(g,"QueryViewer").$$render(t,{queryID:"procurement_kpis",queryResult:o},{},{})}`:""} ${n(O,"Grid").$$render(t,{cols:3},{},{default:()=>`${n(U,"BigValue").$$render(t,{data:o,value:"open_quantity",title:"Open Quantity"},{},{})} ${n(U,"BigValue").$$render(t,{data:o,value:"overdue_rate_pct",title:"Overdue Rate (%)"},{},{})} ${n(U,"BigValue").$$render(t,{data:o,value:"fully_received_rate_pct",title:"Fully Received Rate (%)"},{},{})}`})} <h2 class="markdown" id="monthly-procurement-exposure" data-svelte-h="svelte-1prch20"><a href="#monthly-procurement-exposure">Monthly Procurement Exposure</a></h2> ${v?`${n(g,"QueryViewer").$$render(t,{queryID:"procurement_monthly_open",queryResult:v},{},{})}`:""} ${y?`${n(g,"QueryViewer").$$render(t,{queryID:"procurement_monthly_overdue",queryResult:y},{},{})}`:""} ${n(O,"Grid").$$render(t,{cols:2},{},{default:()=>`${n(oe,"LineChart").$$render(t,{data:v,x:"planned_delivery_month",y:"open_quantity"},{},{})} ${n(oe,"LineChart").$$render(t,{data:y,x:"planned_delivery_month",y:"overdue_rate"},{},{})}`})} ${p?`${n(g,"QueryViewer").$$render(t,{queryID:"procurement_top_suppliers",queryResult:p},{},{})}`:""} <h2 class="markdown" id="supplier-exposure" data-svelte-h="svelte-1k70wwx"><a href="#supplier-exposure">Supplier Exposure</a></h2> ${n(O,"Grid").$$render(t,{cols:2},{},{default:()=>`${n(he,"BarChart").$$render(t,{data:p,x:"supplier_exposure_label",y:"scheduled_net_value"},{},{})} ${n(ae,"DataTable").$$render(t,{data:p},{},{})}`})} ${h?`${n(g,"QueryViewer").$$render(t,{queryID:"procurement_overdue_commitments",queryResult:h},{},{})}`:""} <h2 class="markdown" id="largest-overdue-commitments" data-svelte-h="svelte-6bh9sq"><a href="#largest-overdue-commitments">Largest Overdue Commitments</a></h2> ${n(ae,"DataTable").$$render(t,{data:h},{},{})} <p class="markdown" data-svelte-h="svelte-1ld9pf"><a href="/" class="markdown">Back to Overview</a></p>`});export{Xe as default};
