import{s as Oe,d as _,i as m,a as ge,b as f,c as v,h as xe,e as E,f as $e,g as _e,j as y,k as C,l as Ee,m as Pe,o as Ue,n as Ne,p as Qe,q as ce,r as Be,t as je,u as Ge}from"../chunks/scheduler.X7OS_J9P.js";import{S as Ve,i as Ke,d as F,t as h,a as c,c as fe,m as I,b as D,e as S,g as ve}from"../chunks/index.C6P9XCO6.js";import{D as Ae,s as Xe,Q as ye,p as Ye,a as Ce,r as He,C as ze}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.Ctolcug1.js";import{w as Je}from"../chunks/entry.B_-faIPT.js";import{e as We,h as re,p as Ze}from"../chunks/setTrackProxy.CMsgEsmN.js";import{p as et}from"../chunks/stores.D3xal7oF.js";import{G as be,B as we}from"../chunks/BigValue.BjUeM6Ml.js";import{Q as he}from"../chunks/QueryViewer.BQtLL5Do.js";import{B as tt}from"../chunks/BarChart.D8tusg_Q.js";import{L as Me}from"../chunks/LineChart.BX2cSArq.js";function rt(i){let r,o=d.title+"",e;return{c(){r=C("h1"),e=Ge(o),this.h()},l(u){r=E(u,"H1",{class:!0});var n=Be(r);e=je(n,o),n.forEach(_),this.h()},h(){f(r,"class","title")},m(u,n){m(u,r,n),ge(r,e)},p:ce,d(u){u&&_(r)}}}function nt(i){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:ce,p:ce,d:ce}}function lt(i){let r,o,e,u,n;return document.title=r=d.title,{c(){o=y(),e=C("meta"),u=y(),n=C("meta"),this.h()},l(l){o=v(l),e=E(l,"META",{property:!0,content:!0}),u=v(l),n=E(l,"META",{name:!0,content:!0}),this.h()},h(){var l,a;f(e,"property","og:title"),f(e,"content",((l=d.og)==null?void 0:l.title)??d.title),f(n,"name","twitter:title"),f(n,"content",((a=d.og)==null?void 0:a.title)??d.title)},m(l,a){m(l,o,a),m(l,e,a),m(l,u,a),m(l,n,a)},p(l,a){a&0&&r!==(r=d.title)&&(document.title=r)},d(l){l&&(_(o),_(e),_(u),_(n))}}}function ot(i){var n,l;let r,o,e=(d.description||((n=d.og)==null?void 0:n.description))&&ut(),u=((l=d.og)==null?void 0:l.image)&&at();return{c(){e&&e.c(),r=y(),u&&u.c(),o=$e()},l(a){e&&e.l(a),r=v(a),u&&u.l(a),o=$e()},m(a,p){e&&e.m(a,p),m(a,r,p),u&&u.m(a,p),m(a,o,p)},p(a,p){var T,X;(d.description||(T=d.og)!=null&&T.description)&&e.p(a,p),(X=d.og)!=null&&X.image&&u.p(a,p)},d(a){a&&(_(r),_(o)),e&&e.d(a),u&&u.d(a)}}}function ut(i){let r,o,e,u,n;return{c(){r=C("meta"),o=y(),e=C("meta"),u=y(),n=C("meta"),this.h()},l(l){r=E(l,"META",{name:!0,content:!0}),o=v(l),e=E(l,"META",{property:!0,content:!0}),u=v(l),n=E(l,"META",{name:!0,content:!0}),this.h()},h(){var l,a,p;f(r,"name","description"),f(r,"content",d.description??((l=d.og)==null?void 0:l.description)),f(e,"property","og:description"),f(e,"content",((a=d.og)==null?void 0:a.description)??d.description),f(n,"name","twitter:description"),f(n,"content",((p=d.og)==null?void 0:p.description)??d.description)},m(l,a){m(l,r,a),m(l,o,a),m(l,e,a),m(l,u,a),m(l,n,a)},p:ce,d(l){l&&(_(r),_(o),_(e),_(u),_(n))}}}function at(i){let r,o,e;return{c(){r=C("meta"),o=y(),e=C("meta"),this.h()},l(u){r=E(u,"META",{property:!0,content:!0}),o=v(u),e=E(u,"META",{name:!0,content:!0}),this.h()},h(){var u,n;f(r,"property","og:image"),f(r,"content",Ce((u=d.og)==null?void 0:u.image)),f(e,"name","twitter:image"),f(e,"content",Ce((n=d.og)==null?void 0:n.image))},m(u,n){m(u,r,n),m(u,o,n),m(u,e,n)},p:ce,d(u){u&&(_(r),_(o),_(e))}}}function Fe(i){let r,o;return r=new he({props:{queryID:"procurement_kpis",queryResult:i[0]}}),{c(){S(r.$$.fragment)},l(e){D(r.$$.fragment,e)},m(e,u){I(r,e,u),o=!0},p(e,u){const n={};u[0]&1&&(n.queryResult=e[0]),r.$set(n)},i(e){o||(c(r.$$.fragment,e),o=!0)},o(e){h(r.$$.fragment,e),o=!1},d(e){F(r,e)}}}function st(i){let r,o,e,u,n,l;return r=new we({props:{data:i[0],value:"open_quantity",title:"Open Quantity"}}),e=new we({props:{data:i[0],value:"overdue_rate_pct",title:"Overdue Rate (%)"}}),n=new we({props:{data:i[0],value:"fully_received_rate_pct",title:"Fully Received Rate (%)"}}),{c(){S(r.$$.fragment),o=y(),S(e.$$.fragment),u=y(),S(n.$$.fragment)},l(a){D(r.$$.fragment,a),o=v(a),D(e.$$.fragment,a),u=v(a),D(n.$$.fragment,a)},m(a,p){I(r,a,p),m(a,o,p),I(e,a,p),m(a,u,p),I(n,a,p),l=!0},p(a,p){const T={};p[0]&1&&(T.data=a[0]),r.$set(T);const X={};p[0]&1&&(X.data=a[0]),e.$set(X);const O={};p[0]&1&&(O.data=a[0]),n.$set(O)},i(a){l||(c(r.$$.fragment,a),c(e.$$.fragment,a),c(n.$$.fragment,a),l=!0)},o(a){h(r.$$.fragment,a),h(e.$$.fragment,a),h(n.$$.fragment,a),l=!1},d(a){a&&(_(o),_(u)),F(r,a),F(e,a),F(n,a)}}}function Ie(i){let r,o;return r=new he({props:{queryID:"procurement_monthly_open",queryResult:i[1]}}),{c(){S(r.$$.fragment)},l(e){D(r.$$.fragment,e)},m(e,u){I(r,e,u),o=!0},p(e,u){const n={};u[0]&2&&(n.queryResult=e[1]),r.$set(n)},i(e){o||(c(r.$$.fragment,e),o=!0)},o(e){h(r.$$.fragment,e),o=!1},d(e){F(r,e)}}}function De(i){let r,o;return r=new he({props:{queryID:"procurement_monthly_overdue",queryResult:i[2]}}),{c(){S(r.$$.fragment)},l(e){D(r.$$.fragment,e)},m(e,u){I(r,e,u),o=!0},p(e,u){const n={};u[0]&4&&(n.queryResult=e[2]),r.$set(n)},i(e){o||(c(r.$$.fragment,e),o=!0)},o(e){h(r.$$.fragment,e),o=!1},d(e){F(r,e)}}}function it(i){let r,o,e,u;return r=new Me({props:{data:i[1],x:"planned_delivery_month",y:"open_quantity"}}),e=new Me({props:{data:i[2],x:"planned_delivery_month",y:"overdue_rate"}}),{c(){S(r.$$.fragment),o=y(),S(e.$$.fragment)},l(n){D(r.$$.fragment,n),o=v(n),D(e.$$.fragment,n)},m(n,l){I(r,n,l),m(n,o,l),I(e,n,l),u=!0},p(n,l){const a={};l[0]&2&&(a.data=n[1]),r.$set(a);const p={};l[0]&4&&(p.data=n[2]),e.$set(p)},i(n){u||(c(r.$$.fragment,n),c(e.$$.fragment,n),u=!0)},o(n){h(r.$$.fragment,n),h(e.$$.fragment,n),u=!1},d(n){n&&_(o),F(r,n),F(e,n)}}}function Se(i){let r,o;return r=new he({props:{queryID:"procurement_top_suppliers",queryResult:i[3]}}),{c(){S(r.$$.fragment)},l(e){D(r.$$.fragment,e)},m(e,u){I(r,e,u),o=!0},p(e,u){const n={};u[0]&8&&(n.queryResult=e[3]),r.$set(n)},i(e){o||(c(r.$$.fragment,e),o=!0)},o(e){h(r.$$.fragment,e),o=!1},d(e){F(r,e)}}}function _t(i){let r,o,e,u;return r=new tt({props:{data:i[3],x:"supplier_exposure_label",y:"scheduled_net_value"}}),e=new Ae({props:{data:i[3]}}),{c(){S(r.$$.fragment),o=y(),S(e.$$.fragment)},l(n){D(r.$$.fragment,n),o=v(n),D(e.$$.fragment,n)},m(n,l){I(r,n,l),m(n,o,l),I(e,n,l),u=!0},p(n,l){const a={};l[0]&8&&(a.data=n[3]),r.$set(a);const p={};l[0]&8&&(p.data=n[3]),e.$set(p)},i(n){u||(c(r.$$.fragment,n),c(e.$$.fragment,n),u=!0)},o(n){h(r.$$.fragment,n),h(e.$$.fragment,n),u=!1},d(n){n&&_(o),F(r,n),F(e,n)}}}function Le(i){let r,o;return r=new he({props:{queryID:"procurement_overdue_commitments",queryResult:i[4]}}),{c(){S(r.$$.fragment)},l(e){D(r.$$.fragment,e)},m(e,u){I(r,e,u),o=!0},p(e,u){const n={};u[0]&16&&(n.queryResult=e[4]),r.$set(n)},i(e){o||(c(r.$$.fragment,e),o=!0)},o(e){h(r.$$.fragment,e),o=!1},d(e){F(r,e)}}}function mt(i){let r,o,e,u,n,l,a='<a href="#procurement-performance-and-supplier-reliability">Procurement Performance and Supplier Reliability</a>',p,T,X="This page addresses the supply chain question: which suppliers deliver reliably, and where are procurement delays or open commitments accumulating?",O,H,Y='<p class="markdown">Use case scope: the procurement mart is strong enough for comparative supplier and backlog analysis, but the underlying extract contains very large nominal quantities and values. Interpret the charts directionally for reliability and exposure patterns rather than as audited finance outputs.</p>',z,J,N,le,R,W='<a href="#monthly-procurement-exposure">Monthly Procurement Exposure</a>',Z,ee,te,Q,B,x,L,me='<a href="#supplier-exposure">Supplier Exposure</a>',oe,j,G,P,A,pe='<a href="#largest-overdue-commitments">Largest Overdue Commitments</a>',ue,V,K,M,ae='<a href="/" class="markdown">Back to Overview</a>',se,U=typeof d<"u"&&d.title&&d.hide_title!==!0&&rt();function de(t,s){return typeof d<"u"&&d.title?lt:nt}let ie=de()(i),ne=typeof d=="object"&&ot(),$=i[0]&&Fe(i);N=new be({props:{cols:3,$$slots:{default:[st]},$$scope:{ctx:i}}});let b=i[1]&&Ie(i),w=i[2]&&De(i);Q=new be({props:{cols:2,$$slots:{default:[it]},$$scope:{ctx:i}}});let q=i[3]&&Se(i);j=new be({props:{cols:2,$$slots:{default:[_t]},$$scope:{ctx:i}}});let k=i[4]&&Le(i);return V=new Ae({props:{data:i[4]}}),{c(){U&&U.c(),r=y(),ie.c(),o=C("meta"),e=C("meta"),ne&&ne.c(),u=$e(),n=y(),l=C("h1"),l.innerHTML=a,p=y(),T=C("p"),T.textContent=X,O=y(),H=C("blockquote"),H.innerHTML=Y,z=y(),$&&$.c(),J=y(),S(N.$$.fragment),le=y(),R=C("h2"),R.innerHTML=W,Z=y(),b&&b.c(),ee=y(),w&&w.c(),te=y(),S(Q.$$.fragment),B=y(),q&&q.c(),x=y(),L=C("h2"),L.innerHTML=me,oe=y(),S(j.$$.fragment),G=y(),k&&k.c(),P=y(),A=C("h2"),A.innerHTML=pe,ue=y(),S(V.$$.fragment),K=y(),M=C("p"),M.innerHTML=ae,this.h()},l(t){U&&U.l(t),r=v(t);const s=xe("svelte-6lktun",document.head);ie.l(s),o=E(s,"META",{name:!0,content:!0}),e=E(s,"META",{name:!0,content:!0}),ne&&ne.l(s),u=$e(),s.forEach(_),n=v(t),l=E(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),_e(l)!=="svelte-1yjvfsl"&&(l.innerHTML=a),p=v(t),T=E(t,"P",{class:!0,"data-svelte-h":!0}),_e(T)!=="svelte-onlda8"&&(T.textContent=X),O=v(t),H=E(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),_e(H)!=="svelte-c8d1ol"&&(H.innerHTML=Y),z=v(t),$&&$.l(t),J=v(t),D(N.$$.fragment,t),le=v(t),R=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),_e(R)!=="svelte-1prch20"&&(R.innerHTML=W),Z=v(t),b&&b.l(t),ee=v(t),w&&w.l(t),te=v(t),D(Q.$$.fragment,t),B=v(t),q&&q.l(t),x=v(t),L=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),_e(L)!=="svelte-1k70wwx"&&(L.innerHTML=me),oe=v(t),D(j.$$.fragment,t),G=v(t),k&&k.l(t),P=v(t),A=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),_e(A)!=="svelte-6bh9sq"&&(A.innerHTML=pe),ue=v(t),D(V.$$.fragment,t),K=v(t),M=E(t,"P",{class:!0,"data-svelte-h":!0}),_e(M)!=="svelte-1ld9pf"&&(M.innerHTML=ae),this.h()},h(){f(o,"name","twitter:card"),f(o,"content","summary"),f(e,"name","twitter:site"),f(e,"content","@evidence_dev"),f(l,"class","markdown"),f(l,"id","procurement-performance-and-supplier-reliability"),f(T,"class","markdown"),f(H,"class","markdown"),f(R,"class","markdown"),f(R,"id","monthly-procurement-exposure"),f(L,"class","markdown"),f(L,"id","supplier-exposure"),f(A,"class","markdown"),f(A,"id","largest-overdue-commitments"),f(M,"class","markdown")},m(t,s){U&&U.m(t,s),m(t,r,s),ie.m(document.head,null),ge(document.head,o),ge(document.head,e),ne&&ne.m(document.head,null),ge(document.head,u),m(t,n,s),m(t,l,s),m(t,p,s),m(t,T,s),m(t,O,s),m(t,H,s),m(t,z,s),$&&$.m(t,s),m(t,J,s),I(N,t,s),m(t,le,s),m(t,R,s),m(t,Z,s),b&&b.m(t,s),m(t,ee,s),w&&w.m(t,s),m(t,te,s),I(Q,t,s),m(t,B,s),q&&q.m(t,s),m(t,x,s),m(t,L,s),m(t,oe,s),I(j,t,s),m(t,G,s),k&&k.m(t,s),m(t,P,s),m(t,A,s),m(t,ue,s),I(V,t,s),m(t,K,s),m(t,M,s),se=!0},p(t,s){typeof d<"u"&&d.title&&d.hide_title!==!0&&U.p(t,s),ie.p(t,s),typeof d=="object"&&ne.p(t,s),t[0]?$?($.p(t,s),s[0]&1&&c($,1)):($=Fe(t),$.c(),c($,1),$.m(J.parentNode,J)):$&&(ve(),h($,1,1,()=>{$=null}),fe());const qe={};s[0]&1|s[1]&2048&&(qe.$$scope={dirty:s,ctx:t}),N.$set(qe),t[1]?b?(b.p(t,s),s[0]&2&&c(b,1)):(b=Ie(t),b.c(),c(b,1),b.m(ee.parentNode,ee)):b&&(ve(),h(b,1,1,()=>{b=null}),fe()),t[2]?w?(w.p(t,s),s[0]&4&&c(w,1)):(w=De(t),w.c(),c(w,1),w.m(te.parentNode,te)):w&&(ve(),h(w,1,1,()=>{w=null}),fe());const ke={};s[0]&6|s[1]&2048&&(ke.$$scope={dirty:s,ctx:t}),Q.$set(ke),t[3]?q?(q.p(t,s),s[0]&8&&c(q,1)):(q=Se(t),q.c(),c(q,1),q.m(x.parentNode,x)):q&&(ve(),h(q,1,1,()=>{q=null}),fe());const Te={};s[0]&8|s[1]&2048&&(Te.$$scope={dirty:s,ctx:t}),j.$set(Te),t[4]?k?(k.p(t,s),s[0]&16&&c(k,1)):(k=Le(t),k.c(),c(k,1),k.m(P.parentNode,P)):k&&(ve(),h(k,1,1,()=>{k=null}),fe());const Re={};s[0]&16&&(Re.data=t[4]),V.$set(Re)},i(t){se||(c($),c(N.$$.fragment,t),c(b),c(w),c(Q.$$.fragment,t),c(q),c(j.$$.fragment,t),c(k),c(V.$$.fragment,t),se=!0)},o(t){h($),h(N.$$.fragment,t),h(b),h(w),h(Q.$$.fragment,t),h(q),h(j.$$.fragment,t),h(k),h(V.$$.fragment,t),se=!1},d(t){t&&(_(r),_(n),_(l),_(p),_(T),_(O),_(H),_(z),_(J),_(le),_(R),_(Z),_(ee),_(te),_(B),_(x),_(L),_(oe),_(G),_(P),_(A),_(ue),_(K),_(M)),U&&U.d(t),ie.d(t),_(o),_(e),ne&&ne.d(t),_(u),$&&$.d(t),F(N,t),b&&b.d(t),w&&w.d(t),F(Q,t),q&&q.d(t),F(j,t),k&&k.d(t),F(V,t)}}}const d={title:"Procurement Performance"};function pt(i,r,o){let e,u;Ee(i,et,g=>o(27,e=g)),Ee(i,He,g=>o(33,u=g));let{data:n}=r,{data:l={},customFormattingSettings:a,__db:p,inputs:T}=n;Pe(He,u="4ece5bafedf858bf0aa0fa6aa0fcf9a7",u);let X=We(Je(T));Ue(X.subscribe(g=>T=g)),Ne(ze,{getCustomFormats:()=>a.customFormats||[]});const O=(g,ie)=>Ze(p.query,g,{query_name:ie});Xe(O),e.params,Qe(()=>!0);let H={initialData:void 0,initialError:void 0},Y=re`select
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct,
    round(avg(case when is_fully_received then 1 else 0 end), 4) as fully_received_rate_pct
from greenplanetmart.procurement_schedule_lines`,z=`select
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct,
    round(avg(case when is_fully_received then 1 else 0 end), 4) as fully_received_rate_pct
from greenplanetmart.procurement_schedule_lines`;l.procurement_kpis_data&&(l.procurement_kpis_data instanceof Error?H.initialError=l.procurement_kpis_data:H.initialData=l.procurement_kpis_data,l.procurement_kpis_columns&&(H.knownColumns=l.procurement_kpis_columns));let J,N=!1;const le=ye.createReactive({callback:g=>{o(0,J=g)},execFn:O},{id:"procurement_kpis",...H});le(z,{noResolve:Y,...H}),globalThis[Symbol.for("procurement_kpis")]={get value(){return J}};let R={initialData:void 0,initialError:void 0},W=re`select
    planned_delivery_month,
    round(sum(open_quantity), 0) as open_quantity
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`,Z=`select
    planned_delivery_month,
    round(sum(open_quantity), 0) as open_quantity
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`;l.procurement_monthly_open_data&&(l.procurement_monthly_open_data instanceof Error?R.initialError=l.procurement_monthly_open_data:R.initialData=l.procurement_monthly_open_data,l.procurement_monthly_open_columns&&(R.knownColumns=l.procurement_monthly_open_columns));let ee,te=!1;const Q=ye.createReactive({callback:g=>{o(1,ee=g)},execFn:O},{id:"procurement_monthly_open",...R});Q(Z,{noResolve:W,...R}),globalThis[Symbol.for("procurement_monthly_open")]={get value(){return ee}};let B={initialData:void 0,initialError:void 0},x=re`select
    planned_delivery_month,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`,L=`select
    planned_delivery_month,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`;l.procurement_monthly_overdue_data&&(l.procurement_monthly_overdue_data instanceof Error?B.initialError=l.procurement_monthly_overdue_data:B.initialData=l.procurement_monthly_overdue_data,l.procurement_monthly_overdue_columns&&(B.knownColumns=l.procurement_monthly_overdue_columns));let me,oe=!1;const j=ye.createReactive({callback:g=>{o(2,me=g)},execFn:O},{id:"procurement_monthly_overdue",...B});j(L,{noResolve:x,...B}),globalThis[Symbol.for("procurement_monthly_overdue")]={get value(){return me}};let G={initialData:void 0,initialError:void 0},P=re`select
    supplier_name,
    document_currency,
    supplier_name || ' (' || document_currency || ')' as supplier_exposure_label,
    round(sum(scheduled_net_value), 0) as scheduled_net_value,
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct
from greenplanetmart.procurement_schedule_lines
group by 1, 2
order by scheduled_net_value desc
limit 15`,A=`select
    supplier_name,
    document_currency,
    supplier_name || ' (' || document_currency || ')' as supplier_exposure_label,
    round(sum(scheduled_net_value), 0) as scheduled_net_value,
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct
from greenplanetmart.procurement_schedule_lines
group by 1, 2
order by scheduled_net_value desc
limit 15`;l.procurement_top_suppliers_data&&(l.procurement_top_suppliers_data instanceof Error?G.initialError=l.procurement_top_suppliers_data:G.initialData=l.procurement_top_suppliers_data,l.procurement_top_suppliers_columns&&(G.knownColumns=l.procurement_top_suppliers_columns));let pe,ue=!1;const V=ye.createReactive({callback:g=>{o(3,pe=g)},execFn:O},{id:"procurement_top_suppliers",...G});V(A,{noResolve:P,...G}),globalThis[Symbol.for("procurement_top_suppliers")]={get value(){return pe}};let K={initialData:void 0,initialError:void 0},M=re`select
    supplier_name,
    material_name,
    plant_name,
    planned_delivery_date,
    round(open_quantity, 0) as open_quantity,
    round(scheduled_net_value, 0) as scheduled_net_value
from greenplanetmart.procurement_schedule_lines
where is_overdue
order by scheduled_net_value desc, open_quantity desc
limit 20`,ae=`select
    supplier_name,
    material_name,
    plant_name,
    planned_delivery_date,
    round(open_quantity, 0) as open_quantity,
    round(scheduled_net_value, 0) as scheduled_net_value
from greenplanetmart.procurement_schedule_lines
where is_overdue
order by scheduled_net_value desc, open_quantity desc
limit 20`;l.procurement_overdue_commitments_data&&(l.procurement_overdue_commitments_data instanceof Error?K.initialError=l.procurement_overdue_commitments_data:K.initialData=l.procurement_overdue_commitments_data,l.procurement_overdue_commitments_columns&&(K.knownColumns=l.procurement_overdue_commitments_columns));let se,U=!1;const de=ye.createReactive({callback:g=>{o(4,se=g)},execFn:O},{id:"procurement_overdue_commitments",...K});return de(ae,{noResolve:M,...K}),globalThis[Symbol.for("procurement_overdue_commitments")]={get value(){return se}},i.$$set=g=>{"data"in g&&o(5,n=g.data)},i.$$.update=()=>{i.$$.dirty[0]&32&&o(6,{data:l={},customFormattingSettings:a,__db:p}=n,l),i.$$.dirty[0]&64&&Ye.set(Object.keys(l).length>0),i.$$.dirty[0]&134217728&&e.params,i.$$.dirty[0]&1920&&(Y||!N?Y||(le(z,{noResolve:Y,...H}),o(10,N=!0)):le(z,{noResolve:Y})),i.$$.dirty[0]&30720&&(W||!te?W||(Q(Z,{noResolve:W,...R}),o(14,te=!0)):Q(Z,{noResolve:W})),i.$$.dirty[0]&491520&&(x||!oe?x||(j(L,{noResolve:x,...B}),o(18,oe=!0)):j(L,{noResolve:x})),i.$$.dirty[0]&7864320&&(P||!ue?P||(V(A,{noResolve:P,...G}),o(22,ue=!0)):V(A,{noResolve:P})),i.$$.dirty[0]&125829120&&(M||!U?M||(de(ae,{noResolve:M,...K}),o(26,U=!0)):de(ae,{noResolve:M}))},o(8,Y=re`select
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct,
    round(avg(case when is_fully_received then 1 else 0 end), 4) as fully_received_rate_pct
from greenplanetmart.procurement_schedule_lines`),o(9,z=`select
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct,
    round(avg(case when is_fully_received then 1 else 0 end), 4) as fully_received_rate_pct
from greenplanetmart.procurement_schedule_lines`),o(12,W=re`select
    planned_delivery_month,
    round(sum(open_quantity), 0) as open_quantity
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`),o(13,Z=`select
    planned_delivery_month,
    round(sum(open_quantity), 0) as open_quantity
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`),o(16,x=re`select
    planned_delivery_month,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`),o(17,L=`select
    planned_delivery_month,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`),o(20,P=re`select
    supplier_name,
    document_currency,
    supplier_name || ' (' || document_currency || ')' as supplier_exposure_label,
    round(sum(scheduled_net_value), 0) as scheduled_net_value,
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct
from greenplanetmart.procurement_schedule_lines
group by 1, 2
order by scheduled_net_value desc
limit 15`),o(21,A=`select
    supplier_name,
    document_currency,
    supplier_name || ' (' || document_currency || ')' as supplier_exposure_label,
    round(sum(scheduled_net_value), 0) as scheduled_net_value,
    round(sum(open_quantity), 0) as open_quantity,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct
from greenplanetmart.procurement_schedule_lines
group by 1, 2
order by scheduled_net_value desc
limit 15`),o(24,M=re`select
    supplier_name,
    material_name,
    plant_name,
    planned_delivery_date,
    round(open_quantity, 0) as open_quantity,
    round(scheduled_net_value, 0) as scheduled_net_value
from greenplanetmart.procurement_schedule_lines
where is_overdue
order by scheduled_net_value desc, open_quantity desc
limit 20`),o(25,ae=`select
    supplier_name,
    material_name,
    plant_name,
    planned_delivery_date,
    round(open_quantity, 0) as open_quantity,
    round(scheduled_net_value, 0) as scheduled_net_value
from greenplanetmart.procurement_schedule_lines
where is_overdue
order by scheduled_net_value desc, open_quantity desc
limit 20`),[J,ee,me,pe,se,n,l,H,Y,z,N,R,W,Z,te,B,x,L,oe,G,P,A,ue,K,M,ae,U,e]}class qt extends Ve{constructor(r){super(),Ke(this,r,pt,mt,Oe,{data:5},null,[-1,-1])}}export{qt as component};
