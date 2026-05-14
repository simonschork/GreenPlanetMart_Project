import{s as le,d as o,i as u,a as G,b as m,c as w,h as oe,e as g,f as V,g as R,j as k,k as b,l as J,m as ce,o as ue,n as _e,p as me,q as O,r as pe,t as de,u as fe}from"../chunks/scheduler.X7OS_J9P.js";import{S as he,i as ge,d as ie,t as K,a as I,c as be,m as se,b as ae,e as ne,g as ye}from"../chunks/index.C6P9XCO6.js";import{D as we,s as ke,Q as ve,p as Te,a as W,r as Z,C as Me}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.CWnLcCpx.js";import{w as xe}from"../chunks/entry.BQLYhwJJ.js";import{e as Ce,h as ee,p as He}from"../chunks/setTrackProxy.C4EKu_rV.js";import{p as Ee}from"../chunks/stores.gaqmSQjM.js";import{Q as qe}from"../chunks/QueryViewer.gW2yrJcX.js";function Le(p){let a,n=_.title+"",t;return{c(){a=b("h1"),t=fe(n),this.h()},l(s){a=g(s,"H1",{class:!0});var r=pe(a);t=de(r,n),r.forEach(o),this.h()},h(){m(a,"class","title")},m(s,r){u(s,a,r),G(a,t)},p:O,d(s){s&&o(a)}}}function Ae(p){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:O,p:O,d:O}}function Se(p){let a,n,t,s,r;return document.title=a=_.title,{c(){n=k(),t=b("meta"),s=k(),r=b("meta"),this.h()},l(i){n=w(i),t=g(i,"META",{property:!0,content:!0}),s=w(i),r=g(i,"META",{name:!0,content:!0}),this.h()},h(){var i,l;m(t,"property","og:title"),m(t,"content",((i=_.og)==null?void 0:i.title)??_.title),m(r,"name","twitter:title"),m(r,"content",((l=_.og)==null?void 0:l.title)??_.title)},m(i,l){u(i,n,l),u(i,t,l),u(i,s,l),u(i,r,l)},p(i,l){l&0&&a!==(a=_.title)&&(document.title=a)},d(i){i&&(o(n),o(t),o(s),o(r))}}}function Fe(p){var r,i;let a,n,t=(_.description||((r=_.og)==null?void 0:r.description))&&Qe(),s=((i=_.og)==null?void 0:i.image)&&Re();return{c(){t&&t.c(),a=k(),s&&s.c(),n=V()},l(l){t&&t.l(l),a=w(l),s&&s.l(l),n=V()},m(l,f){t&&t.m(l,f),u(l,a,f),s&&s.m(l,f),u(l,n,f)},p(l,f){var v,F;(_.description||(v=_.og)!=null&&v.description)&&t.p(l,f),(F=_.og)!=null&&F.image&&s.p(l,f)},d(l){l&&(o(a),o(n)),t&&t.d(l),s&&s.d(l)}}}function Qe(p){let a,n,t,s,r;return{c(){a=b("meta"),n=k(),t=b("meta"),s=k(),r=b("meta"),this.h()},l(i){a=g(i,"META",{name:!0,content:!0}),n=w(i),t=g(i,"META",{property:!0,content:!0}),s=w(i),r=g(i,"META",{name:!0,content:!0}),this.h()},h(){var i,l,f;m(a,"name","description"),m(a,"content",_.description??((i=_.og)==null?void 0:i.description)),m(t,"property","og:description"),m(t,"content",((l=_.og)==null?void 0:l.description)??_.description),m(r,"name","twitter:description"),m(r,"content",((f=_.og)==null?void 0:f.description)??_.description)},m(i,l){u(i,a,l),u(i,n,l),u(i,t,l),u(i,s,l),u(i,r,l)},p:O,d(i){i&&(o(a),o(n),o(t),o(s),o(r))}}}function Re(p){let a,n,t;return{c(){a=b("meta"),n=k(),t=b("meta"),this.h()},l(s){a=g(s,"META",{property:!0,content:!0}),n=w(s),t=g(s,"META",{name:!0,content:!0}),this.h()},h(){var s,r;m(a,"property","og:image"),m(a,"content",W((s=_.og)==null?void 0:s.image)),m(t,"name","twitter:image"),m(t,"content",W((r=_.og)==null?void 0:r.image))},m(s,r){u(s,a,r),u(s,n,r),u(s,t,r)},p:O,d(s){s&&(o(a),o(n),o(t))}}}function te(p){let a,n;return a=new qe({props:{queryID:"pricing_readiness",queryResult:p[0]}}),{c(){ne(a.$$.fragment)},l(t){ae(a.$$.fragment,t)},m(t,s){se(a,t,s),n=!0},p(t,s){const r={};s&1&&(r.queryResult=t[0]),a.$set(r)},i(t){n||(I(a.$$.fragment,t),n=!0)},o(t){K(a.$$.fragment,t),n=!1},d(t){ie(a,t)}}}function De(p){let a,n,t,s,r,i,l='<a href="#sales-price-discount-and-billing-quality-analysis">Sales Price, Discount, and Billing Quality Analysis</a>',f,v,F="This page keeps the pricing use case tied to the research questions, even though the underlying mart is not yet populated.",Q,y,M='<p class="markdown">Current status: <code class="markdown">fct_sales_pricing</code> currently contains zero rows. That means the pricing and discount use case is documented in the reporting layer, but it should not yet be presented as an implemented analytical result.</p>',x,C,T,D='<a href="#pricing-use-case-status">Pricing Use Case Status</a>',h,H,U,E,$='<a href="#recommended-next-steps">Recommended Next Steps</a>',j,A,z='<li class="markdown">validate <code class="markdown">konv</code> source completeness in the raw and staging layers</li> <li class="markdown">confirm the billing-document to pricing-condition join coverage in the intermediate model</li> <li class="markdown">activate a pricing page only after the mart contains stable rows</li>',N,S,X='<a href="/" class="markdown">Back to Overview</a>',B,q=typeof _<"u"&&_.title&&_.hide_title!==!0&&Le();function re(e,c){return typeof _<"u"&&_.title?Se:Ae}let P=re()(p),L=typeof _=="object"&&Fe(),d=p[0]&&te(p);return H=new we({props:{data:p[0]}}),{c(){q&&q.c(),a=k(),P.c(),n=b("meta"),t=b("meta"),L&&L.c(),s=V(),r=k(),i=b("h1"),i.innerHTML=l,f=k(),v=b("p"),v.textContent=F,Q=k(),y=b("blockquote"),y.innerHTML=M,x=k(),d&&d.c(),C=k(),T=b("h2"),T.innerHTML=D,h=k(),ne(H.$$.fragment),U=k(),E=b("h2"),E.innerHTML=$,j=k(),A=b("ul"),A.innerHTML=z,N=k(),S=b("p"),S.innerHTML=X,this.h()},l(e){q&&q.l(e),a=w(e);const c=oe("svelte-6lktun",document.head);P.l(c),n=g(c,"META",{name:!0,content:!0}),t=g(c,"META",{name:!0,content:!0}),L&&L.l(c),s=V(),c.forEach(o),r=w(e),i=g(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),R(i)!=="svelte-1o49hc1"&&(i.innerHTML=l),f=w(e),v=g(e,"P",{class:!0,"data-svelte-h":!0}),R(v)!=="svelte-129665r"&&(v.textContent=F),Q=w(e),y=g(e,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),R(y)!=="svelte-1v7kk87"&&(y.innerHTML=M),x=w(e),d&&d.l(e),C=w(e),T=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),R(T)!=="svelte-9nfhh7"&&(T.innerHTML=D),h=w(e),ae(H.$$.fragment,e),U=w(e),E=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),R(E)!=="svelte-g50bvl"&&(E.innerHTML=$),j=w(e),A=g(e,"UL",{class:!0,"data-svelte-h":!0}),R(A)!=="svelte-u0q46r"&&(A.innerHTML=z),N=w(e),S=g(e,"P",{class:!0,"data-svelte-h":!0}),R(S)!=="svelte-1ld9pf"&&(S.innerHTML=X),this.h()},h(){m(n,"name","twitter:card"),m(n,"content","summary"),m(t,"name","twitter:site"),m(t,"content","@evidence_dev"),m(i,"class","markdown"),m(i,"id","sales-price-discount-and-billing-quality-analysis"),m(v,"class","markdown"),m(y,"class","markdown"),m(T,"class","markdown"),m(T,"id","pricing-use-case-status"),m(E,"class","markdown"),m(E,"id","recommended-next-steps"),m(A,"class","markdown"),m(S,"class","markdown")},m(e,c){q&&q.m(e,c),u(e,a,c),P.m(document.head,null),G(document.head,n),G(document.head,t),L&&L.m(document.head,null),G(document.head,s),u(e,r,c),u(e,i,c),u(e,f,c),u(e,v,c),u(e,Q,c),u(e,y,c),u(e,x,c),d&&d.m(e,c),u(e,C,c),u(e,T,c),u(e,h,c),se(H,e,c),u(e,U,c),u(e,E,c),u(e,j,c),u(e,A,c),u(e,N,c),u(e,S,c),B=!0},p(e,[c]){typeof _<"u"&&_.title&&_.hide_title!==!0&&q.p(e,c),P.p(e,c),typeof _=="object"&&L.p(e,c),e[0]?d?(d.p(e,c),c&1&&I(d,1)):(d=te(e),d.c(),I(d,1),d.m(C.parentNode,C)):d&&(ye(),K(d,1,1,()=>{d=null}),be());const Y={};c&1&&(Y.data=e[0]),H.$set(Y)},i(e){B||(I(d),I(H.$$.fragment,e),B=!0)},o(e){K(d),K(H.$$.fragment,e),B=!1},d(e){e&&(o(a),o(r),o(i),o(f),o(v),o(Q),o(y),o(x),o(C),o(T),o(h),o(U),o(E),o(j),o(A),o(N),o(S)),q&&q.d(e),P.d(e),o(n),o(t),L&&L.d(e),o(s),d&&d.d(e),ie(H,e)}}}const _={title:"Pricing Coverage"};function Oe(p,a,n){let t,s;J(p,Ee,h=>n(7,t=h)),J(p,Z,h=>n(13,s=h));let{data:r}=a,{data:i={},customFormattingSettings:l,__db:f,inputs:v}=r;ce(Z,s="1741e146f4bde3037f76caa22118935b",s);let F=Ce(xe(v));ue(F.subscribe(h=>v=h)),_e(Me,{getCustomFormats:()=>l.customFormats||[]});const Q=(h,H)=>He(f.query,h,{query_name:H});ke(Q),t.params,me(()=>!0);let y={initialData:void 0,initialError:void 0},M=ee`select
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
where primary_mart = 'fct_sales_pricing'`,x=`select
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
where primary_mart = 'fct_sales_pricing'`;i.pricing_readiness_data&&(i.pricing_readiness_data instanceof Error?y.initialError=i.pricing_readiness_data:y.initialData=i.pricing_readiness_data,i.pricing_readiness_columns&&(y.knownColumns=i.pricing_readiness_columns));let C,T=!1;const D=ve.createReactive({callback:h=>{n(0,C=h)},execFn:Q},{id:"pricing_readiness",...y});return D(x,{noResolve:M,...y}),globalThis[Symbol.for("pricing_readiness")]={get value(){return C}},p.$$set=h=>{"data"in h&&n(1,r=h.data)},p.$$.update=()=>{p.$$.dirty&2&&n(2,{data:i={},customFormattingSettings:l,__db:f}=r,i),p.$$.dirty&4&&Te.set(Object.keys(i).length>0),p.$$.dirty&128&&t.params,p.$$.dirty&120&&(M||!T?M||(D(x,{noResolve:M,...y}),n(6,T=!0)):D(x,{noResolve:M}))},n(4,M=ee`select
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
where primary_mart = 'fct_sales_pricing'`),n(5,x=`select
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
where primary_mart = 'fct_sales_pricing'`),[C,r,i,y,M,x,T,t]}class Ve extends he{constructor(a){super(),ge(this,a,Oe,De,le,{data:1})}}export{Ve as component};
