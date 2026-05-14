import{s as Oe,d as o,i as m,a as be,b as c,c as p,h as Ue,e as E,f as $e,g as oe,j as v,k as M,l as Ee,m as Ne,o as Be,n as Qe,p as Pe,q as de,r as je,t as Ge,u as Ke}from"../chunks/scheduler.X7OS_J9P.js";import{S as Ve,i as ze,d as D,t as g,a as d,c as ce,m as F,b as I,e as S,g as pe}from"../chunks/index.C6P9XCO6.js";import{D as Ae,s as Xe,Q as ve,p as Ye,a as Me,r as He,C as Je}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.DMiG6vRl.js";import{w as We}from"../chunks/entry.BnqFG2jr.js";import{e as Ze,h as le,p as xe}from"../chunks/setTrackProxy.Cr5vAU3m.js";import{p as et}from"../chunks/stores.BKO22N_6.js";import{G as he,B as ke}from"../chunks/BigValue.BctVQyou.js";import{Q as ge}from"../chunks/QueryViewer.BBNyDzgN.js";import{B as tt}from"../chunks/BarChart.CA6oez3I.js";import{L as Ce}from"../chunks/LineChart.C8onOsCO.js";function lt(f){let l,i=y.title+"",e;return{c(){l=M("h1"),e=Ke(i),this.h()},l(n){l=E(n,"H1",{class:!0});var r=je(l);e=Ge(r,i),r.forEach(o),this.h()},h(){c(l,"class","title")},m(n,r){m(n,l,r),be(l,e)},p:de,d(n){n&&o(l)}}}function rt(f){return{c(){this.h()},l(l){this.h()},h(){document.title="Evidence"},m:de,p:de,d:de}}function at(f){let l,i,e,n,r;return document.title=l=y.title,{c(){i=v(),e=M("meta"),n=v(),r=M("meta"),this.h()},l(a){i=p(a),e=E(a,"META",{property:!0,content:!0}),n=p(a),r=E(a,"META",{name:!0,content:!0}),this.h()},h(){var a,s;c(e,"property","og:title"),c(e,"content",((a=y.og)==null?void 0:a.title)??y.title),c(r,"name","twitter:title"),c(r,"content",((s=y.og)==null?void 0:s.title)??y.title)},m(a,s){m(a,i,s),m(a,e,s),m(a,n,s),m(a,r,s)},p(a,s){s&0&&l!==(l=y.title)&&(document.title=l)},d(a){a&&(o(i),o(e),o(n),o(r))}}}function it(f){var r,a;let l,i,e=(y.description||((r=y.og)==null?void 0:r.description))&&nt(),n=((a=y.og)==null?void 0:a.image)&&st();return{c(){e&&e.c(),l=v(),n&&n.c(),i=$e()},l(s){e&&e.l(s),l=p(s),n&&n.l(s),i=$e()},m(s,u){e&&e.m(s,u),m(s,l,u),n&&n.m(s,u),m(s,i,u)},p(s,u){var T,X;(y.description||(T=y.og)!=null&&T.description)&&e.p(s,u),(X=y.og)!=null&&X.image&&n.p(s,u)},d(s){s&&(o(l),o(i)),e&&e.d(s),n&&n.d(s)}}}function nt(f){let l,i,e,n,r;return{c(){l=M("meta"),i=v(),e=M("meta"),n=v(),r=M("meta"),this.h()},l(a){l=E(a,"META",{name:!0,content:!0}),i=p(a),e=E(a,"META",{property:!0,content:!0}),n=p(a),r=E(a,"META",{name:!0,content:!0}),this.h()},h(){var a,s,u;c(l,"name","description"),c(l,"content",y.description??((a=y.og)==null?void 0:a.description)),c(e,"property","og:description"),c(e,"content",((s=y.og)==null?void 0:s.description)??y.description),c(r,"name","twitter:description"),c(r,"content",((u=y.og)==null?void 0:u.description)??y.description)},m(a,s){m(a,l,s),m(a,i,s),m(a,e,s),m(a,n,s),m(a,r,s)},p:de,d(a){a&&(o(l),o(i),o(e),o(n),o(r))}}}function st(f){let l,i,e;return{c(){l=M("meta"),i=v(),e=M("meta"),this.h()},l(n){l=E(n,"META",{property:!0,content:!0}),i=p(n),e=E(n,"META",{name:!0,content:!0}),this.h()},h(){var n,r;c(l,"property","og:image"),c(l,"content",Me((n=y.og)==null?void 0:n.image)),c(e,"name","twitter:image"),c(e,"content",Me((r=y.og)==null?void 0:r.image))},m(n,r){m(n,l,r),m(n,i,r),m(n,e,r)},p:de,d(n){n&&(o(l),o(i),o(e))}}}function De(f){let l,i;return l=new ge({props:{queryID:"fulfillment_kpis",queryResult:f[0]}}),{c(){S(l.$$.fragment)},l(e){I(l.$$.fragment,e)},m(e,n){F(l,e,n),i=!0},p(e,n){const r={};n[0]&1&&(r.queryResult=e[0]),l.$set(r)},i(e){i||(d(l.$$.fragment,e),i=!0)},o(e){g(l.$$.fragment,e),i=!1},d(e){D(l,e)}}}function _t(f){let l,i,e,n,r,a;return l=new ke({props:{data:f[0],value:"on_time_rate_pct",title:"On-Time Rate (%)"}}),e=new ke({props:{data:f[0],value:"average_delay_days",title:"Average Delay (Days)"}}),r=new ke({props:{data:f[0],value:"fully_delivered_rate_pct",title:"Fully Delivered Rate (%)"}}),{c(){S(l.$$.fragment),i=v(),S(e.$$.fragment),n=v(),S(r.$$.fragment)},l(s){I(l.$$.fragment,s),i=p(s),I(e.$$.fragment,s),n=p(s),I(r.$$.fragment,s)},m(s,u){F(l,s,u),m(s,i,u),F(e,s,u),m(s,n,u),F(r,s,u),a=!0},p(s,u){const T={};u[0]&1&&(T.data=s[0]),l.$set(T);const X={};u[0]&1&&(X.data=s[0]),e.$set(X);const O={};u[0]&1&&(O.data=s[0]),r.$set(O)},i(s){a||(d(l.$$.fragment,s),d(e.$$.fragment,s),d(r.$$.fragment,s),a=!0)},o(s){g(l.$$.fragment,s),g(e.$$.fragment,s),g(r.$$.fragment,s),a=!1},d(s){s&&(o(i),o(n)),D(l,s),D(e,s),D(r,s)}}}function Fe(f){let l,i;return l=new ge({props:{queryID:"fulfillment_monthly_on_time",queryResult:f[1]}}),{c(){S(l.$$.fragment)},l(e){I(l.$$.fragment,e)},m(e,n){F(l,e,n),i=!0},p(e,n){const r={};n[0]&2&&(r.queryResult=e[1]),l.$set(r)},i(e){i||(d(l.$$.fragment,e),i=!0)},o(e){g(l.$$.fragment,e),i=!1},d(e){D(l,e)}}}function Ie(f){let l,i;return l=new ge({props:{queryID:"fulfillment_monthly_delay",queryResult:f[2]}}),{c(){S(l.$$.fragment)},l(e){I(l.$$.fragment,e)},m(e,n){F(l,e,n),i=!0},p(e,n){const r={};n[0]&4&&(r.queryResult=e[2]),l.$set(r)},i(e){i||(d(l.$$.fragment,e),i=!0)},o(e){g(l.$$.fragment,e),i=!1},d(e){D(l,e)}}}function ft(f){let l,i,e,n;return l=new Ce({props:{data:f[1],x:"requested_delivery_month",y:"on_time_rate"}}),e=new Ce({props:{data:f[2],x:"requested_delivery_month",y:"average_delay_days"}}),{c(){S(l.$$.fragment),i=v(),S(e.$$.fragment)},l(r){I(l.$$.fragment,r),i=p(r),I(e.$$.fragment,r)},m(r,a){F(l,r,a),m(r,i,a),F(e,r,a),n=!0},p(r,a){const s={};a[0]&2&&(s.data=r[1]),l.$set(s);const u={};a[0]&4&&(u.data=r[2]),e.$set(u)},i(r){n||(d(l.$$.fragment,r),d(e.$$.fragment,r),n=!0)},o(r){g(l.$$.fragment,r),g(e.$$.fragment,r),n=!1},d(r){r&&o(i),D(l,r),D(e,r)}}}function Se(f){let l,i;return l=new ge({props:{queryID:"fulfillment_delay_buckets",queryResult:f[3]}}),{c(){S(l.$$.fragment)},l(e){I(l.$$.fragment,e)},m(e,n){F(l,e,n),i=!0},p(e,n){const r={};n[0]&8&&(r.queryResult=e[3]),l.$set(r)},i(e){i||(d(l.$$.fragment,e),i=!0)},o(e){g(l.$$.fragment,e),i=!1},d(e){D(l,e)}}}function ot(f){let l,i,e,n;return l=new tt({props:{data:f[3],x:"delay_bucket",y:"order_items"}}),e=new Ae({props:{data:f[3]}}),{c(){S(l.$$.fragment),i=v(),S(e.$$.fragment)},l(r){I(l.$$.fragment,r),i=p(r),I(e.$$.fragment,r)},m(r,a){F(l,r,a),m(r,i,a),F(e,r,a),n=!0},p(r,a){const s={};a[0]&8&&(s.data=r[3]),l.$set(s);const u={};a[0]&8&&(u.data=r[3]),e.$set(u)},i(r){n||(d(l.$$.fragment,r),d(e.$$.fragment,r),n=!0)},o(r){g(l.$$.fragment,r),g(e.$$.fragment,r),n=!1},d(r){r&&o(i),D(l,r),D(e,r)}}}function Le(f){let l,i;return l=new ge({props:{queryID:"fulfillment_worst_delays",queryResult:f[4]}}),{c(){S(l.$$.fragment)},l(e){I(l.$$.fragment,e)},m(e,n){F(l,e,n),i=!0},p(e,n){const r={};n[0]&16&&(r.queryResult=e[4]),l.$set(r)},i(e){i||(d(l.$$.fragment,e),i=!0)},o(e){g(l.$$.fragment,e),i=!1},d(e){D(l,e)}}}function mt(f){let l,i,e,n,r,a,s='<a href="#order-fulfillment-and-delivery-timeliness">Order Fulfillment and Delivery Timeliness</a>',u,T,X="This page addresses the operational-efficiency question: are customer orders delivered on time, and where do fulfillment bottlenecks occur?",O,H,Y='<p class="markdown">Use case scope: the page uses <code class="markdown">fct_order_fulfillment</code> at sales-order-item grain. Requested and actual delivery dates already include fallback logic from the mart layer so that incomplete operational date fields still support KPI reporting.</p>',J,W,Q,ae,R,Z='<a href="#timeliness-trend">Timeliness Trend</a>',x,ee,te,P,j,U,L,me='<a href="#delay-mix">Delay Mix</a>',ie,G,K,N,A,ue='<a href="#most-delayed-order-items">Most Delayed Order Items</a>',ne,V,z,C,se='<a href="/" class="markdown">Back to Overview</a>',_e,B=typeof y<"u"&&y.title&&y.hide_title!==!0&&lt();function ye(t,_){return typeof y<"u"&&y.title?at:rt}let fe=ye()(f),re=typeof y=="object"&&it(),$=f[0]&&De(f);Q=new he({props:{cols:3,$$slots:{default:[_t]},$$scope:{ctx:f}}});let h=f[1]&&Fe(f),k=f[2]&&Ie(f);P=new he({props:{cols:2,$$slots:{default:[ft]},$$scope:{ctx:f}}});let w=f[3]&&Se(f);G=new he({props:{cols:2,$$slots:{default:[ot]},$$scope:{ctx:f}}});let q=f[4]&&Le(f);return V=new Ae({props:{data:f[4]}}),{c(){B&&B.c(),l=v(),fe.c(),i=M("meta"),e=M("meta"),re&&re.c(),n=$e(),r=v(),a=M("h1"),a.innerHTML=s,u=v(),T=M("p"),T.textContent=X,O=v(),H=M("blockquote"),H.innerHTML=Y,J=v(),$&&$.c(),W=v(),S(Q.$$.fragment),ae=v(),R=M("h2"),R.innerHTML=Z,x=v(),h&&h.c(),ee=v(),k&&k.c(),te=v(),S(P.$$.fragment),j=v(),w&&w.c(),U=v(),L=M("h2"),L.innerHTML=me,ie=v(),S(G.$$.fragment),K=v(),q&&q.c(),N=v(),A=M("h2"),A.innerHTML=ue,ne=v(),S(V.$$.fragment),z=v(),C=M("p"),C.innerHTML=se,this.h()},l(t){B&&B.l(t),l=p(t);const _=Ue("svelte-6lktun",document.head);fe.l(_),i=E(_,"META",{name:!0,content:!0}),e=E(_,"META",{name:!0,content:!0}),re&&re.l(_),n=$e(),_.forEach(o),r=p(t),a=E(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),oe(a)!=="svelte-1wmehhy"&&(a.innerHTML=s),u=p(t),T=E(t,"P",{class:!0,"data-svelte-h":!0}),oe(T)!=="svelte-ud0li5"&&(T.textContent=X),O=p(t),H=E(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),oe(H)!=="svelte-dbxazs"&&(H.innerHTML=Y),J=p(t),$&&$.l(t),W=p(t),I(Q.$$.fragment,t),ae=p(t),R=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(R)!=="svelte-1gkqw2y"&&(R.innerHTML=Z),x=p(t),h&&h.l(t),ee=p(t),k&&k.l(t),te=p(t),I(P.$$.fragment,t),j=p(t),w&&w.l(t),U=p(t),L=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(L)!=="svelte-172cirp"&&(L.innerHTML=me),ie=p(t),I(G.$$.fragment,t),K=p(t),q&&q.l(t),N=p(t),A=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),oe(A)!=="svelte-7c6sp7"&&(A.innerHTML=ue),ne=p(t),I(V.$$.fragment,t),z=p(t),C=E(t,"P",{class:!0,"data-svelte-h":!0}),oe(C)!=="svelte-1ld9pf"&&(C.innerHTML=se),this.h()},h(){c(i,"name","twitter:card"),c(i,"content","summary"),c(e,"name","twitter:site"),c(e,"content","@evidence_dev"),c(a,"class","markdown"),c(a,"id","order-fulfillment-and-delivery-timeliness"),c(T,"class","markdown"),c(H,"class","markdown"),c(R,"class","markdown"),c(R,"id","timeliness-trend"),c(L,"class","markdown"),c(L,"id","delay-mix"),c(A,"class","markdown"),c(A,"id","most-delayed-order-items"),c(C,"class","markdown")},m(t,_){B&&B.m(t,_),m(t,l,_),fe.m(document.head,null),be(document.head,i),be(document.head,e),re&&re.m(document.head,null),be(document.head,n),m(t,r,_),m(t,a,_),m(t,u,_),m(t,T,_),m(t,O,_),m(t,H,_),m(t,J,_),$&&$.m(t,_),m(t,W,_),F(Q,t,_),m(t,ae,_),m(t,R,_),m(t,x,_),h&&h.m(t,_),m(t,ee,_),k&&k.m(t,_),m(t,te,_),F(P,t,_),m(t,j,_),w&&w.m(t,_),m(t,U,_),m(t,L,_),m(t,ie,_),F(G,t,_),m(t,K,_),q&&q.m(t,_),m(t,N,_),m(t,A,_),m(t,ne,_),F(V,t,_),m(t,z,_),m(t,C,_),_e=!0},p(t,_){typeof y<"u"&&y.title&&y.hide_title!==!0&&B.p(t,_),fe.p(t,_),typeof y=="object"&&re.p(t,_),t[0]?$?($.p(t,_),_[0]&1&&d($,1)):($=De(t),$.c(),d($,1),$.m(W.parentNode,W)):$&&(pe(),g($,1,1,()=>{$=null}),ce());const we={};_[0]&1|_[1]&2048&&(we.$$scope={dirty:_,ctx:t}),Q.$set(we),t[1]?h?(h.p(t,_),_[0]&2&&d(h,1)):(h=Fe(t),h.c(),d(h,1),h.m(ee.parentNode,ee)):h&&(pe(),g(h,1,1,()=>{h=null}),ce()),t[2]?k?(k.p(t,_),_[0]&4&&d(k,1)):(k=Ie(t),k.c(),d(k,1),k.m(te.parentNode,te)):k&&(pe(),g(k,1,1,()=>{k=null}),ce());const qe={};_[0]&6|_[1]&2048&&(qe.$$scope={dirty:_,ctx:t}),P.$set(qe),t[3]?w?(w.p(t,_),_[0]&8&&d(w,1)):(w=Se(t),w.c(),d(w,1),w.m(U.parentNode,U)):w&&(pe(),g(w,1,1,()=>{w=null}),ce());const Te={};_[0]&8|_[1]&2048&&(Te.$$scope={dirty:_,ctx:t}),G.$set(Te),t[4]?q?(q.p(t,_),_[0]&16&&d(q,1)):(q=Le(t),q.c(),d(q,1),q.m(N.parentNode,N)):q&&(pe(),g(q,1,1,()=>{q=null}),ce());const Re={};_[0]&16&&(Re.data=t[4]),V.$set(Re)},i(t){_e||(d($),d(Q.$$.fragment,t),d(h),d(k),d(P.$$.fragment,t),d(w),d(G.$$.fragment,t),d(q),d(V.$$.fragment,t),_e=!0)},o(t){g($),g(Q.$$.fragment,t),g(h),g(k),g(P.$$.fragment,t),g(w),g(G.$$.fragment,t),g(q),g(V.$$.fragment,t),_e=!1},d(t){t&&(o(l),o(r),o(a),o(u),o(T),o(O),o(H),o(J),o(W),o(ae),o(R),o(x),o(ee),o(te),o(j),o(U),o(L),o(ie),o(K),o(N),o(A),o(ne),o(z),o(C)),B&&B.d(t),fe.d(t),o(i),o(e),re&&re.d(t),o(n),$&&$.d(t),D(Q,t),h&&h.d(t),k&&k.d(t),D(P,t),w&&w.d(t),D(G,t),q&&q.d(t),D(V,t)}}}const y={title:"Order Fulfillment"};function ut(f,l,i){let e,n;Ee(f,et,b=>i(27,e=b)),Ee(f,He,b=>i(33,n=b));let{data:r}=l,{data:a={},customFormattingSettings:s,__db:u,inputs:T}=r;Ne(He,n="81404f941e775b54a6184421387e618e",n);let X=Ze(We(T));Be(X.subscribe(b=>T=b)),Qe(Je,{getCustomFormats:()=>s.customFormats||[]});const O=(b,fe)=>xe(u.query,b,{query_name:fe});Xe(O),e.params,Pe(()=>!0);let H={initialData:void 0,initialError:void 0},Y=le`select
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate_pct,
    round(avg(delivery_delay_days), 1) as average_delay_days,
    round(avg(case when is_fully_delivered then 1 else 0 end), 4) as fully_delivered_rate_pct
from greenplanetmart.order_fulfillment_items`,J=`select
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate_pct,
    round(avg(delivery_delay_days), 1) as average_delay_days,
    round(avg(case when is_fully_delivered then 1 else 0 end), 4) as fully_delivered_rate_pct
from greenplanetmart.order_fulfillment_items`;a.fulfillment_kpis_data&&(a.fulfillment_kpis_data instanceof Error?H.initialError=a.fulfillment_kpis_data:H.initialData=a.fulfillment_kpis_data,a.fulfillment_kpis_columns&&(H.knownColumns=a.fulfillment_kpis_columns));let W,Q=!1;const ae=ve.createReactive({callback:b=>{i(0,W=b)},execFn:O},{id:"fulfillment_kpis",...H});ae(J,{noResolve:Y,...H}),globalThis[Symbol.for("fulfillment_kpis")]={get value(){return W}};let R={initialData:void 0,initialError:void 0},Z=le`select
    requested_delivery_month,
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate
from greenplanetmart.order_fulfillment_items
group by 1
order by 1`,x=`select
    requested_delivery_month,
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate
from greenplanetmart.order_fulfillment_items
group by 1
order by 1`;a.fulfillment_monthly_on_time_data&&(a.fulfillment_monthly_on_time_data instanceof Error?R.initialError=a.fulfillment_monthly_on_time_data:R.initialData=a.fulfillment_monthly_on_time_data,a.fulfillment_monthly_on_time_columns&&(R.knownColumns=a.fulfillment_monthly_on_time_columns));let ee,te=!1;const P=ve.createReactive({callback:b=>{i(1,ee=b)},execFn:O},{id:"fulfillment_monthly_on_time",...R});P(x,{noResolve:Z,...R}),globalThis[Symbol.for("fulfillment_monthly_on_time")]={get value(){return ee}};let j={initialData:void 0,initialError:void 0},U=le`select
    requested_delivery_month,
    round(avg(delivery_delay_days), 2) as average_delay_days
from greenplanetmart.order_fulfillment_items
group by 1
order by 1`,L=`select
    requested_delivery_month,
    round(avg(delivery_delay_days), 2) as average_delay_days
from greenplanetmart.order_fulfillment_items
group by 1
order by 1`;a.fulfillment_monthly_delay_data&&(a.fulfillment_monthly_delay_data instanceof Error?j.initialError=a.fulfillment_monthly_delay_data:j.initialData=a.fulfillment_monthly_delay_data,a.fulfillment_monthly_delay_columns&&(j.knownColumns=a.fulfillment_monthly_delay_columns));let me,ie=!1;const G=ve.createReactive({callback:b=>{i(2,me=b)},execFn:O},{id:"fulfillment_monthly_delay",...j});G(L,{noResolve:U,...j}),globalThis[Symbol.for("fulfillment_monthly_delay")]={get value(){return me}};let K={initialData:void 0,initialError:void 0},N=le`select
    delay_bucket,
    count(*) as order_items
from greenplanetmart.order_fulfillment_items
group by 1
order by order_items desc`,A=`select
    delay_bucket,
    count(*) as order_items
from greenplanetmart.order_fulfillment_items
group by 1
order by order_items desc`;a.fulfillment_delay_buckets_data&&(a.fulfillment_delay_buckets_data instanceof Error?K.initialError=a.fulfillment_delay_buckets_data:K.initialData=a.fulfillment_delay_buckets_data,a.fulfillment_delay_buckets_columns&&(K.knownColumns=a.fulfillment_delay_buckets_columns));let ue,ne=!1;const V=ve.createReactive({callback:b=>{i(3,ue=b)},execFn:O},{id:"fulfillment_delay_buckets",...K});V(A,{noResolve:N,...K}),globalThis[Symbol.for("fulfillment_delay_buckets")]={get value(){return ue}};let z={initialData:void 0,initialError:void 0},C=le`select
    customer_name,
    material_name,
    plant_name,
    requested_delivery_date,
    actual_delivery_date,
    round(delivery_delay_days, 1) as delivery_delay_days,
    round(open_quantity, 0) as open_quantity
from greenplanetmart.order_fulfillment_items
order by delivery_delay_days desc
limit 20`,se=`select
    customer_name,
    material_name,
    plant_name,
    requested_delivery_date,
    actual_delivery_date,
    round(delivery_delay_days, 1) as delivery_delay_days,
    round(open_quantity, 0) as open_quantity
from greenplanetmart.order_fulfillment_items
order by delivery_delay_days desc
limit 20`;a.fulfillment_worst_delays_data&&(a.fulfillment_worst_delays_data instanceof Error?z.initialError=a.fulfillment_worst_delays_data:z.initialData=a.fulfillment_worst_delays_data,a.fulfillment_worst_delays_columns&&(z.knownColumns=a.fulfillment_worst_delays_columns));let _e,B=!1;const ye=ve.createReactive({callback:b=>{i(4,_e=b)},execFn:O},{id:"fulfillment_worst_delays",...z});return ye(se,{noResolve:C,...z}),globalThis[Symbol.for("fulfillment_worst_delays")]={get value(){return _e}},f.$$set=b=>{"data"in b&&i(5,r=b.data)},f.$$.update=()=>{f.$$.dirty[0]&32&&i(6,{data:a={},customFormattingSettings:s,__db:u}=r,a),f.$$.dirty[0]&64&&Ye.set(Object.keys(a).length>0),f.$$.dirty[0]&134217728&&e.params,f.$$.dirty[0]&1920&&(Y||!Q?Y||(ae(J,{noResolve:Y,...H}),i(10,Q=!0)):ae(J,{noResolve:Y})),f.$$.dirty[0]&30720&&(Z||!te?Z||(P(x,{noResolve:Z,...R}),i(14,te=!0)):P(x,{noResolve:Z})),f.$$.dirty[0]&491520&&(U||!ie?U||(G(L,{noResolve:U,...j}),i(18,ie=!0)):G(L,{noResolve:U})),f.$$.dirty[0]&7864320&&(N||!ne?N||(V(A,{noResolve:N,...K}),i(22,ne=!0)):V(A,{noResolve:N})),f.$$.dirty[0]&125829120&&(C||!B?C||(ye(se,{noResolve:C,...z}),i(26,B=!0)):ye(se,{noResolve:C}))},i(8,Y=le`select
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate_pct,
    round(avg(delivery_delay_days), 1) as average_delay_days,
    round(avg(case when is_fully_delivered then 1 else 0 end), 4) as fully_delivered_rate_pct
from greenplanetmart.order_fulfillment_items`),i(9,J=`select
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate_pct,
    round(avg(delivery_delay_days), 1) as average_delay_days,
    round(avg(case when is_fully_delivered then 1 else 0 end), 4) as fully_delivered_rate_pct
from greenplanetmart.order_fulfillment_items`),i(12,Z=le`select
    requested_delivery_month,
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate
from greenplanetmart.order_fulfillment_items
group by 1
order by 1`),i(13,x=`select
    requested_delivery_month,
    round(avg(case when is_on_time_delivery then 1 else 0 end), 4) as on_time_rate
from greenplanetmart.order_fulfillment_items
group by 1
order by 1`),i(16,U=le`select
    requested_delivery_month,
    round(avg(delivery_delay_days), 2) as average_delay_days
from greenplanetmart.order_fulfillment_items
group by 1
order by 1`),i(17,L=`select
    requested_delivery_month,
    round(avg(delivery_delay_days), 2) as average_delay_days
from greenplanetmart.order_fulfillment_items
group by 1
order by 1`),i(20,N=le`select
    delay_bucket,
    count(*) as order_items
from greenplanetmart.order_fulfillment_items
group by 1
order by order_items desc`),i(21,A=`select
    delay_bucket,
    count(*) as order_items
from greenplanetmart.order_fulfillment_items
group by 1
order by order_items desc`),i(24,C=le`select
    customer_name,
    material_name,
    plant_name,
    requested_delivery_date,
    actual_delivery_date,
    round(delivery_delay_days, 1) as delivery_delay_days,
    round(open_quantity, 0) as open_quantity
from greenplanetmart.order_fulfillment_items
order by delivery_delay_days desc
limit 20`),i(25,se=`select
    customer_name,
    material_name,
    plant_name,
    requested_delivery_date,
    actual_delivery_date,
    round(delivery_delay_days, 1) as delivery_delay_days,
    round(open_quantity, 0) as open_quantity
from greenplanetmart.order_fulfillment_items
order by delivery_delay_days desc
limit 20`),[W,ee,me,ue,_e,r,a,H,Y,J,Q,R,Z,x,te,j,U,L,ie,K,N,A,ne,z,C,se,B,e]}class wt extends Ve{constructor(l){super(),ze(this,l,ut,mt,Oe,{data:5},null,[-1,-1])}}export{wt as component};
