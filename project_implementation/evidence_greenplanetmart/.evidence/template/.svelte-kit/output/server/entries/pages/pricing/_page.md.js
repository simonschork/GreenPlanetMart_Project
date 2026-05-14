import{s as T,a as Q}from"../../../chunks/utils.js";import{c as R,o as d,s as H,h as x,d as a,v as q}from"../../../chunks/ssr.js";import"dequal";import"../../../chunks/VennDiagram.svelte_svelte_type_style_lang.js";import{w as I}from"../../../chunks/index2.js";import"clsx";import{r as C,Q as D,p as A}from"../../../chunks/stores.js";import{h as S,p as N}from"../../../chunks/profile.js";import{a as F}from"../../../chunks/index5.js";import{p as O}from"../../../chunks/stores2.js";import{C as P,s as U,D as j}from"../../../chunks/DataTable.js";import"ssf";import"deep-object-diff";import"@uwdata/mosaic-sql";import"yaml";import"@astronautlabs/jsonpath";import"tua-body-scroll-lock";import"lodash/merge.js";import"export-to-csv";import{e as B,Q as V}from"../../../chunks/QueryViewer.js";import"prismjs";import"echarts";import"debounce";import"downloadjs";import"chroma-js";import"echarts-stat";const e={title:"Pricing Coverage"},we=R((r,_,u,G)=>{let l,g,c,h;g=T(O,t=>l=t),h=T(C,t=>c=t);let{data:n}=_,{data:w={},customFormattingSettings:y,__db:b,inputs:v}=n;Q(C,c="1741e146f4bde3037f76caa22118935b",c);let f=B(I(v));d(f.subscribe(t=>v=t)),H(P,{getCustomFormats:()=>y.customFormats||[]}),d(()=>D.emptyCache());const k=(t,E)=>N(b.query,t,{query_name:E});U(k),l.params;let m={initialData:void 0,initialError:void 0},s=S`select
    research_area,
    use_case,
    primary_mart,
    status,
    mart_row_count,
    business_grain_rows,
    duplicate_like_rows,
    unknown_member_rows,
    min_business_date,
    max_business_date,
    analytical_scope,
    reporting_note
from greenplanetmart.reporting_readiness
where primary_mart = 'fct_sales_pricing'`,o=`select
    research_area,
    use_case,
    primary_mart,
    status,
    mart_row_count,
    business_grain_rows,
    duplicate_like_rows,
    unknown_member_rows,
    min_business_date,
    max_business_date,
    analytical_scope,
    reporting_note
from greenplanetmart.reporting_readiness
where primary_mart = 'fct_sales_pricing'`,i,$=!1;const p=D.createReactive({callback:t=>{i=t},execFn:k},{id:"pricing_readiness",...m});return p(o,{noResolve:s,...m}),globalThis[Symbol.for("pricing_readiness")]={get value(){return i}},d(f.subscribe(t=>{})),_.data===void 0&&u.data&&n!==void 0&&u.data(n),{data:w={},customFormattingSettings:y,__db:b}=n,A.set(Object.keys(w).length>0),l.params,s=S`select
    research_area,
    use_case,
    primary_mart,
    status,
    mart_row_count,
    business_grain_rows,
    duplicate_like_rows,
    unknown_member_rows,
    min_business_date,
    max_business_date,
    analytical_scope,
    reporting_note
from greenplanetmart.reporting_readiness
where primary_mart = 'fct_sales_pricing'`,o=`select
    research_area,
    use_case,
    primary_mart,
    status,
    mart_row_count,
    business_grain_rows,
    duplicate_like_rows,
    unknown_member_rows,
    min_business_date,
    max_business_date,
    analytical_scope,
    reporting_note
from greenplanetmart.reporting_readiness
where primary_mart = 'fct_sales_pricing'`,s||!$?s||(p(o,{noResolve:s,...m}),$=!0):p(o,{noResolve:s}),g(),h(),`  ${typeof e<"u"&&e.title&&e.hide_title!==!0?`<h1 class="title">${x(e.title)}</h1>`:""} ${r.head+=`<!-- HEAD_svelte-6lktun_START -->${typeof e<"u"&&e.title?`${r.title=`<title>${x(e.title)}</title>`,""} <meta property="og:title"${a("content",e.og?.title??e.title,0)}> <meta name="twitter:title"${a("content",e.og?.title??e.title,0)}>`:` ${r.title="<title>Evidence</title>",""}`}<meta name="twitter:card" content="summary"><meta name="twitter:site" content="@evidence_dev">${typeof e=="object"?`${e.description||e.og?.description?`<meta name="description"${a("content",e.description??e.og?.description,0)}> <meta property="og:description"${a("content",e.og?.description??e.description,0)}> <meta name="twitter:description"${a("content",e.og?.description??e.description,0)}>`:""} ${e.og?.image?`<meta property="og:image"${a("content",F(e.og?.image),0)}> <meta name="twitter:image"${a("content",F(e.og?.image),0)}>`:""}`:""}<!-- HEAD_svelte-6lktun_END -->`,""}   <h1 class="markdown" id="sales-price-discount-and-billing-quality-analysis" data-svelte-h="svelte-1o49hc1"><a href="#sales-price-discount-and-billing-quality-analysis">Sales Price, Discount, and Billing Quality Analysis</a></h1> <p class="markdown" data-svelte-h="svelte-129665r">This page keeps the pricing use case tied to the research questions, even though the underlying mart is not yet populated.</p> <blockquote class="markdown" data-svelte-h="svelte-1v7kk87"><p class="markdown">Current status: <code class="markdown">fct_sales_pricing</code> currently contains zero rows. That means the pricing and discount use case is documented in the reporting layer, but it should not yet be presented as an implemented analytical result.</p></blockquote> ${i?`${q(V,"QueryViewer").$$render(r,{queryID:"pricing_readiness",queryResult:i},{},{})}`:""} <h2 class="markdown" id="pricing-use-case-status" data-svelte-h="svelte-9nfhh7"><a href="#pricing-use-case-status">Pricing Use Case Status</a></h2> ${q(j,"DataTable").$$render(r,{data:i},{},{})} <h2 class="markdown" id="recommended-next-steps" data-svelte-h="svelte-g50bvl"><a href="#recommended-next-steps">Recommended Next Steps</a></h2> <ul class="markdown" data-svelte-h="svelte-u0q46r"><li class="markdown">validate <code class="markdown">konv</code> source completeness in the raw and staging layers</li> <li class="markdown">confirm the billing-document to pricing-condition join coverage in the intermediate model</li> <li class="markdown">activate a pricing page only after the mart contains stable rows</li></ul> <p class="markdown" data-svelte-h="svelte-1ld9pf"><a href="/" class="markdown">Back to Overview</a></p>`});export{we as default};
