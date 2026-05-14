import{s as Ve,d as _,i as p,a as Ee,b as d,c as y,h as Xe,e as C,f as Me,g as fe,j as h,k as L,l as Ke,m as Ye,o as Je,n as We,p as Ze,q as qe,r as xe,t as et,u as tt}from"../chunks/scheduler.X7OS_J9P.js";import{S as nt,i as rt,d as R,t as f,a as m,c as $e,m as E,b as M,e as H,g as ge}from"../chunks/index.C6P9XCO6.js";import{D as Ce,s as ot,Q as we,p as lt,a as Ae,r as Ue,C as ut}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.gaVcxOJf.js";import{w as it}from"../chunks/entry.jvnPIWWb.js";import{e as at,h as x,p as st}from"../chunks/setTrackProxy.B6qHb5Vk.js";import{p as _t}from"../chunks/stores.DdaiEy6r.js";import{G as Re,B as He}from"../chunks/BigValue.B6yKEeRT.js";import{Q as ke}from"../chunks/QueryViewer.BLgg6vsr.js";import{B as ze}from"../chunks/BarChart.J_r_eNvT.js";import{L as Ge}from"../chunks/LineChart.Diaycu7-.js";function pt(s){let n,l=v.title+"",e;return{c(){n=L("h1"),e=tt(l),this.h()},l(u){n=C(u,"H1",{class:!0});var r=xe(n);e=et(r,l),r.forEach(_),this.h()},h(){d(n,"class","title")},m(u,r){p(u,n,r),Ee(n,e)},p:qe,d(u){u&&_(n)}}}function mt(s){return{c(){this.h()},l(n){this.h()},h(){document.title="Evidence"},m:qe,p:qe,d:qe}}function ct(s){let n,l,e,u,r;return document.title=n=v.title,{c(){l=h(),e=L("meta"),u=h(),r=L("meta"),this.h()},l(o){l=y(o),e=C(o,"META",{property:!0,content:!0}),u=y(o),r=C(o,"META",{name:!0,content:!0}),this.h()},h(){var o,i;d(e,"property","og:title"),d(e,"content",((o=v.og)==null?void 0:o.title)??v.title),d(r,"name","twitter:title"),d(r,"content",((i=v.og)==null?void 0:i.title)??v.title)},m(o,i){p(o,l,i),p(o,e,i),p(o,u,i),p(o,r,i)},p(o,i){i&0&&n!==(n=v.title)&&(document.title=n)},d(o){o&&(_(l),_(e),_(u),_(r))}}}function dt(s){var r,o;let n,l,e=(v.description||((r=v.og)==null?void 0:r.description))&&ft(),u=((o=v.og)==null?void 0:o.image)&&yt();return{c(){e&&e.c(),n=h(),u&&u.c(),l=Me()},l(i){e&&e.l(i),n=y(i),u&&u.l(i),l=Me()},m(i,c){e&&e.m(i,c),p(i,n,c),u&&u.m(i,c),p(i,l,c)},p(i,c){var F,ee;(v.description||(F=v.og)!=null&&F.description)&&e.p(i,c),(ee=v.og)!=null&&ee.image&&u.p(i,c)},d(i){i&&(_(n),_(l)),e&&e.d(i),u&&u.d(i)}}}function ft(s){let n,l,e,u,r;return{c(){n=L("meta"),l=h(),e=L("meta"),u=h(),r=L("meta"),this.h()},l(o){n=C(o,"META",{name:!0,content:!0}),l=y(o),e=C(o,"META",{property:!0,content:!0}),u=y(o),r=C(o,"META",{name:!0,content:!0}),this.h()},h(){var o,i,c;d(n,"name","description"),d(n,"content",v.description??((o=v.og)==null?void 0:o.description)),d(e,"property","og:description"),d(e,"content",((i=v.og)==null?void 0:i.description)??v.description),d(r,"name","twitter:description"),d(r,"content",((c=v.og)==null?void 0:c.description)??v.description)},m(o,i){p(o,n,i),p(o,l,i),p(o,e,i),p(o,u,i),p(o,r,i)},p:qe,d(o){o&&(_(n),_(l),_(e),_(u),_(r))}}}function yt(s){let n,l,e;return{c(){n=L("meta"),l=h(),e=L("meta"),this.h()},l(u){n=C(u,"META",{property:!0,content:!0}),l=y(u),e=C(u,"META",{name:!0,content:!0}),this.h()},h(){var u,r;d(n,"property","og:image"),d(n,"content",Ae((u=v.og)==null?void 0:u.image)),d(e,"name","twitter:image"),d(e,"content",Ae((r=v.og)==null?void 0:r.image))},m(u,r){p(u,n,r),p(u,l,r),p(u,e,r)},p:qe,d(u){u&&(_(n),_(l),_(e))}}}function Oe(s){let n,l;return n=new ke({props:{queryID:"procurement_kpis",queryResult:s[0]}}),{c(){H(n.$$.fragment)},l(e){M(n.$$.fragment,e)},m(e,u){E(n,e,u),l=!0},p(e,u){const r={};u[0]&1&&(r.queryResult=e[0]),n.$set(r)},i(e){l||(m(n.$$.fragment,e),l=!0)},o(e){f(n.$$.fragment,e),l=!1},d(e){R(n,e)}}}function ht(s){let n,l,e,u,r,o;return n=new He({props:{data:s[0],value:"open_schedule_lines",title:"Open Schedule Lines"}}),e=new He({props:{data:s[0],value:"overdue_rate_pct",title:"Overdue Rate (%)"}}),r=new He({props:{data:s[0],value:"fully_received_rate_pct",title:"Fully Received Rate (%)"}}),{c(){H(n.$$.fragment),l=h(),H(e.$$.fragment),u=h(),H(r.$$.fragment)},l(i){M(n.$$.fragment,i),l=y(i),M(e.$$.fragment,i),u=y(i),M(r.$$.fragment,i)},m(i,c){E(n,i,c),p(i,l,c),E(e,i,c),p(i,u,c),E(r,i,c),o=!0},p(i,c){const F={};c[0]&1&&(F.data=i[0]),n.$set(F);const ee={};c[0]&1&&(ee.data=i[0]),e.$set(ee);const K={};c[0]&1&&(K.data=i[0]),r.$set(K)},i(i){o||(m(n.$$.fragment,i),m(e.$$.fragment,i),m(r.$$.fragment,i),o=!0)},o(i){f(n.$$.fragment,i),f(e.$$.fragment,i),f(r.$$.fragment,i),o=!1},d(i){i&&(_(l),_(u)),R(n,i),R(e,i),R(r,i)}}}function Pe(s){let n,l;return n=new ke({props:{queryID:"procurement_monthly_open",queryResult:s[1]}}),{c(){H(n.$$.fragment)},l(e){M(n.$$.fragment,e)},m(e,u){E(n,e,u),l=!0},p(e,u){const r={};u[0]&2&&(r.queryResult=e[1]),n.$set(r)},i(e){l||(m(n.$$.fragment,e),l=!0)},o(e){f(n.$$.fragment,e),l=!1},d(e){R(n,e)}}}function Be(s){let n,l;return n=new ke({props:{queryID:"procurement_monthly_overdue",queryResult:s[2]}}),{c(){H(n.$$.fragment)},l(e){M(n.$$.fragment,e)},m(e,u){E(n,e,u),l=!0},p(e,u){const r={};u[0]&4&&(r.queryResult=e[2]),n.$set(r)},i(e){l||(m(n.$$.fragment,e),l=!0)},o(e){f(n.$$.fragment,e),l=!1},d(e){R(n,e)}}}function vt(s){let n,l,e,u;return n=new Ge({props:{data:s[1],x:"planned_delivery_month",y:"open_schedule_lines"}}),e=new Ge({props:{data:s[2],x:"planned_delivery_month",y:"overdue_rate"}}),{c(){H(n.$$.fragment),l=h(),H(e.$$.fragment)},l(r){M(n.$$.fragment,r),l=y(r),M(e.$$.fragment,r)},m(r,o){E(n,r,o),p(r,l,o),E(e,r,o),u=!0},p(r,o){const i={};o[0]&2&&(i.data=r[1]),n.$set(i);const c={};o[0]&4&&(c.data=r[2]),e.$set(c)},i(r){u||(m(n.$$.fragment,r),m(e.$$.fragment,r),u=!0)},o(r){f(n.$$.fragment,r),f(e.$$.fragment,r),u=!1},d(r){r&&_(l),R(n,r),R(e,r)}}}function Ne(s){let n,l;return n=new ke({props:{queryID:"procurement_open_by_unit",queryResult:s[3]}}),{c(){H(n.$$.fragment)},l(e){M(n.$$.fragment,e)},m(e,u){E(n,e,u),l=!0},p(e,u){const r={};u[0]&8&&(r.queryResult=e[3]),n.$set(r)},i(e){l||(m(n.$$.fragment,e),l=!0)},o(e){f(n.$$.fragment,e),l=!1},d(e){R(n,e)}}}function bt(s){let n,l,e,u;return n=new ze({props:{data:s[3],x:"order_unit",y:"open_schedule_lines"}}),e=new Ce({props:{data:s[3]}}),{c(){H(n.$$.fragment),l=h(),H(e.$$.fragment)},l(r){M(n.$$.fragment,r),l=y(r),M(e.$$.fragment,r)},m(r,o){E(n,r,o),p(r,l,o),E(e,r,o),u=!0},p(r,o){const i={};o[0]&8&&(i.data=r[3]),n.$set(i);const c={};o[0]&8&&(c.data=r[3]),e.$set(c)},i(r){u||(m(n.$$.fragment,r),m(e.$$.fragment,r),u=!0)},o(r){f(n.$$.fragment,r),f(e.$$.fragment,r),u=!1},d(r){r&&_(l),R(n,r),R(e,r)}}}function Qe(s){let n,l;return n=new ke({props:{queryID:"procurement_top_suppliers",queryResult:s[4]}}),{c(){H(n.$$.fragment)},l(e){M(n.$$.fragment,e)},m(e,u){E(n,e,u),l=!0},p(e,u){const r={};u[0]&16&&(r.queryResult=e[4]),n.$set(r)},i(e){l||(m(n.$$.fragment,e),l=!0)},o(e){f(n.$$.fragment,e),l=!1},d(e){R(n,e)}}}function $t(s){let n,l,e,u;return n=new ze({props:{data:s[4],x:"supplier_exposure_label",y:"scheduled_net_value_m"}}),e=new Ce({props:{data:s[4]}}),{c(){H(n.$$.fragment),l=h(),H(e.$$.fragment)},l(r){M(n.$$.fragment,r),l=y(r),M(e.$$.fragment,r)},m(r,o){E(n,r,o),p(r,l,o),E(e,r,o),u=!0},p(r,o){const i={};o[0]&16&&(i.data=r[4]),n.$set(i);const c={};o[0]&16&&(c.data=r[4]),e.$set(c)},i(r){u||(m(n.$$.fragment,r),m(e.$$.fragment,r),u=!0)},o(r){f(n.$$.fragment,r),f(e.$$.fragment,r),u=!1},d(r){r&&_(l),R(n,r),R(e,r)}}}function je(s){let n,l;return n=new ke({props:{queryID:"procurement_overdue_commitments",queryResult:s[5]}}),{c(){H(n.$$.fragment)},l(e){M(n.$$.fragment,e)},m(e,u){E(n,e,u),l=!0},p(e,u){const r={};u[0]&32&&(r.queryResult=e[5]),n.$set(r)},i(e){l||(m(n.$$.fragment,e),l=!0)},o(e){f(n.$$.fragment,e),l=!1},d(e){R(n,e)}}}function gt(s){let n,l,e,u,r,o,i='<a href="#procurement-performance-and-supplier-reliability">Procurement Performance and Supplier Reliability</a>',c,F,ee="This page addresses the supply chain question: which suppliers deliver reliably, and where are procurement delays or open commitments accumulating?",K,S,te='<p class="markdown">Use case scope: the procurement mart is strong enough for supplier reliability and backlog analysis, but two reporting constraints remain important. Open quantities span multiple order units such as <code class="markdown">KG</code>, <code class="markdown">L</code>, and <code class="markdown">EA</code>, so they should not be collapsed into one universal quantity KPI. Scheduled values also remain in raw document currencies, so comparisons are only meaningful within the same currency.</p>',ne,re,Q,se,I,oe='<a href="#monthly-procurement-backlog">Monthly Procurement Backlog</a>',le,ue,ie,j,z,O,A,he='<a href="#open-backlog-by-unit">Open Backlog by Unit</a>',_e,V,X,P,U,ve='<a href="#supplier-exposure-in-millions-by-currency">Supplier Exposure in Millions by Currency</a>',pe,Y,J,B,G,be='<a href="#largest-overdue-commitments">Largest Overdue Commitments</a>',me,W,Z,D,ce='<a href="/" class="markdown">Back to Overview</a>',de,N=typeof v<"u"&&v.title&&v.hide_title!==!0&&pt();function Te(t,a){return typeof v<"u"&&v.title?ct:mt}let ye=Te()(s),ae=typeof v=="object"&&dt(),$=s[0]&&Oe(s);Q=new Re({props:{cols:3,$$slots:{default:[ht]},$$scope:{ctx:s}}});let g=s[1]&&Pe(s),w=s[2]&&Be(s);j=new Re({props:{cols:2,$$slots:{default:[vt]},$$scope:{ctx:s}}});let q=s[3]&&Ne(s);V=new Re({props:{cols:2,$$slots:{default:[bt]},$$scope:{ctx:s}}});let k=s[4]&&Qe(s);Y=new Re({props:{cols:2,$$slots:{default:[$t]},$$scope:{ctx:s}}});let T=s[5]&&je(s);return W=new Ce({props:{data:s[5]}}),{c(){N&&N.c(),n=h(),ye.c(),l=L("meta"),e=L("meta"),ae&&ae.c(),u=Me(),r=h(),o=L("h1"),o.innerHTML=i,c=h(),F=L("p"),F.textContent=ee,K=h(),S=L("blockquote"),S.innerHTML=te,ne=h(),$&&$.c(),re=h(),H(Q.$$.fragment),se=h(),I=L("h2"),I.innerHTML=oe,le=h(),g&&g.c(),ue=h(),w&&w.c(),ie=h(),H(j.$$.fragment),z=h(),q&&q.c(),O=h(),A=L("h2"),A.innerHTML=he,_e=h(),H(V.$$.fragment),X=h(),k&&k.c(),P=h(),U=L("h2"),U.innerHTML=ve,pe=h(),H(Y.$$.fragment),J=h(),T&&T.c(),B=h(),G=L("h2"),G.innerHTML=be,me=h(),H(W.$$.fragment),Z=h(),D=L("p"),D.innerHTML=ce,this.h()},l(t){N&&N.l(t),n=y(t);const a=Xe("svelte-6lktun",document.head);ye.l(a),l=C(a,"META",{name:!0,content:!0}),e=C(a,"META",{name:!0,content:!0}),ae&&ae.l(a),u=Me(),a.forEach(_),r=y(t),o=C(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),fe(o)!=="svelte-1yjvfsl"&&(o.innerHTML=i),c=y(t),F=C(t,"P",{class:!0,"data-svelte-h":!0}),fe(F)!=="svelte-onlda8"&&(F.textContent=ee),K=y(t),S=C(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),fe(S)!=="svelte-ia89fp"&&(S.innerHTML=te),ne=y(t),$&&$.l(t),re=y(t),M(Q.$$.fragment,t),se=y(t),I=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(I)!=="svelte-ost1zs"&&(I.innerHTML=oe),le=y(t),g&&g.l(t),ue=y(t),w&&w.l(t),ie=y(t),M(j.$$.fragment,t),z=y(t),q&&q.l(t),O=y(t),A=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(A)!=="svelte-zs1gim"&&(A.innerHTML=he),_e=y(t),M(V.$$.fragment,t),X=y(t),k&&k.l(t),P=y(t),U=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(U)!=="svelte-ezoeuz"&&(U.innerHTML=ve),pe=y(t),M(Y.$$.fragment,t),J=y(t),T&&T.l(t),B=y(t),G=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),fe(G)!=="svelte-6bh9sq"&&(G.innerHTML=be),me=y(t),M(W.$$.fragment,t),Z=y(t),D=C(t,"P",{class:!0,"data-svelte-h":!0}),fe(D)!=="svelte-1ld9pf"&&(D.innerHTML=ce),this.h()},h(){d(l,"name","twitter:card"),d(l,"content","summary"),d(e,"name","twitter:site"),d(e,"content","@evidence_dev"),d(o,"class","markdown"),d(o,"id","procurement-performance-and-supplier-reliability"),d(F,"class","markdown"),d(S,"class","markdown"),d(I,"class","markdown"),d(I,"id","monthly-procurement-backlog"),d(A,"class","markdown"),d(A,"id","open-backlog-by-unit"),d(U,"class","markdown"),d(U,"id","supplier-exposure-in-millions-by-currency"),d(G,"class","markdown"),d(G,"id","largest-overdue-commitments"),d(D,"class","markdown")},m(t,a){N&&N.m(t,a),p(t,n,a),ye.m(document.head,null),Ee(document.head,l),Ee(document.head,e),ae&&ae.m(document.head,null),Ee(document.head,u),p(t,r,a),p(t,o,a),p(t,c,a),p(t,F,a),p(t,K,a),p(t,S,a),p(t,ne,a),$&&$.m(t,a),p(t,re,a),E(Q,t,a),p(t,se,a),p(t,I,a),p(t,le,a),g&&g.m(t,a),p(t,ue,a),w&&w.m(t,a),p(t,ie,a),E(j,t,a),p(t,z,a),q&&q.m(t,a),p(t,O,a),p(t,A,a),p(t,_e,a),E(V,t,a),p(t,X,a),k&&k.m(t,a),p(t,P,a),p(t,U,a),p(t,pe,a),E(Y,t,a),p(t,J,a),T&&T.m(t,a),p(t,B,a),p(t,G,a),p(t,me,a),E(W,t,a),p(t,Z,a),p(t,D,a),de=!0},p(t,a){typeof v<"u"&&v.title&&v.hide_title!==!0&&N.p(t,a),ye.p(t,a),typeof v=="object"&&ae.p(t,a),t[0]?$?($.p(t,a),a[0]&1&&m($,1)):($=Oe(t),$.c(),m($,1),$.m(re.parentNode,re)):$&&(ge(),f($,1,1,()=>{$=null}),$e());const Le={};a[0]&1|a[1]&131072&&(Le.$$scope={dirty:a,ctx:t}),Q.$set(Le),t[1]?g?(g.p(t,a),a[0]&2&&m(g,1)):(g=Pe(t),g.c(),m(g,1),g.m(ue.parentNode,ue)):g&&(ge(),f(g,1,1,()=>{g=null}),$e()),t[2]?w?(w.p(t,a),a[0]&4&&m(w,1)):(w=Be(t),w.c(),m(w,1),w.m(ie.parentNode,ie)):w&&(ge(),f(w,1,1,()=>{w=null}),$e());const Fe={};a[0]&6|a[1]&131072&&(Fe.$$scope={dirty:a,ctx:t}),j.$set(Fe),t[3]?q?(q.p(t,a),a[0]&8&&m(q,1)):(q=Ne(t),q.c(),m(q,1),q.m(O.parentNode,O)):q&&(ge(),f(q,1,1,()=>{q=null}),$e());const Ie={};a[0]&8|a[1]&131072&&(Ie.$$scope={dirty:a,ctx:t}),V.$set(Ie),t[4]?k?(k.p(t,a),a[0]&16&&m(k,1)):(k=Qe(t),k.c(),m(k,1),k.m(P.parentNode,P)):k&&(ge(),f(k,1,1,()=>{k=null}),$e());const Se={};a[0]&16|a[1]&131072&&(Se.$$scope={dirty:a,ctx:t}),Y.$set(Se),t[5]?T?(T.p(t,a),a[0]&32&&m(T,1)):(T=je(t),T.c(),m(T,1),T.m(B.parentNode,B)):T&&(ge(),f(T,1,1,()=>{T=null}),$e());const De={};a[0]&32&&(De.data=t[5]),W.$set(De)},i(t){de||(m($),m(Q.$$.fragment,t),m(g),m(w),m(j.$$.fragment,t),m(q),m(V.$$.fragment,t),m(k),m(Y.$$.fragment,t),m(T),m(W.$$.fragment,t),de=!0)},o(t){f($),f(Q.$$.fragment,t),f(g),f(w),f(j.$$.fragment,t),f(q),f(V.$$.fragment,t),f(k),f(Y.$$.fragment,t),f(T),f(W.$$.fragment,t),de=!1},d(t){t&&(_(n),_(r),_(o),_(c),_(F),_(K),_(S),_(ne),_(re),_(se),_(I),_(le),_(ue),_(ie),_(z),_(O),_(A),_(_e),_(X),_(P),_(U),_(pe),_(J),_(B),_(G),_(me),_(Z),_(D)),N&&N.d(t),ye.d(t),_(l),_(e),ae&&ae.d(t),_(u),$&&$.d(t),R(Q,t),g&&g.d(t),w&&w.d(t),R(j,t),q&&q.d(t),R(V,t),k&&k.d(t),R(Y,t),T&&T.d(t),R(W,t)}}}const v={title:"Procurement Performance"};function wt(s,n,l){let e,u;Ke(s,_t,b=>l(32,e=b)),Ke(s,Ue,b=>l(38,u=b));let{data:r}=n,{data:o={},customFormattingSettings:i,__db:c,inputs:F}=r;Ye(Ue,u="4ece5bafedf858bf0aa0fa6aa0fcf9a7",u);let ee=at(it(F));Je(ee.subscribe(b=>F=b)),We(ut,{getCustomFormats:()=>i.customFormats||[]});const K=(b,ye)=>st(c.query,b,{query_name:ye});ot(K),e.params,Ze(()=>!0);let S={initialData:void 0,initialError:void 0},te=x`select
    count(*) filter (where open_quantity > 0) as open_schedule_lines,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct,
    round(avg(case when is_fully_received then 1 else 0 end), 4) as fully_received_rate_pct
from greenplanetmart.procurement_schedule_lines`,ne=`select
    count(*) filter (where open_quantity > 0) as open_schedule_lines,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct,
    round(avg(case when is_fully_received then 1 else 0 end), 4) as fully_received_rate_pct
from greenplanetmart.procurement_schedule_lines`;o.procurement_kpis_data&&(o.procurement_kpis_data instanceof Error?S.initialError=o.procurement_kpis_data:S.initialData=o.procurement_kpis_data,o.procurement_kpis_columns&&(S.knownColumns=o.procurement_kpis_columns));let re,Q=!1;const se=we.createReactive({callback:b=>{l(0,re=b)},execFn:K},{id:"procurement_kpis",...S});se(ne,{noResolve:te,...S}),globalThis[Symbol.for("procurement_kpis")]={get value(){return re}};let I={initialData:void 0,initialError:void 0},oe=x`select
    planned_delivery_month,
    count(*) filter (where open_quantity > 0) as open_schedule_lines
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`,le=`select
    planned_delivery_month,
    count(*) filter (where open_quantity > 0) as open_schedule_lines
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`;o.procurement_monthly_open_data&&(o.procurement_monthly_open_data instanceof Error?I.initialError=o.procurement_monthly_open_data:I.initialData=o.procurement_monthly_open_data,o.procurement_monthly_open_columns&&(I.knownColumns=o.procurement_monthly_open_columns));let ue,ie=!1;const j=we.createReactive({callback:b=>{l(1,ue=b)},execFn:K},{id:"procurement_monthly_open",...I});j(le,{noResolve:oe,...I}),globalThis[Symbol.for("procurement_monthly_open")]={get value(){return ue}};let z={initialData:void 0,initialError:void 0},O=x`select
    planned_delivery_month,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`,A=`select
    planned_delivery_month,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`;o.procurement_monthly_overdue_data&&(o.procurement_monthly_overdue_data instanceof Error?z.initialError=o.procurement_monthly_overdue_data:z.initialData=o.procurement_monthly_overdue_data,o.procurement_monthly_overdue_columns&&(z.knownColumns=o.procurement_monthly_overdue_columns));let he,_e=!1;const V=we.createReactive({callback:b=>{l(2,he=b)},execFn:K},{id:"procurement_monthly_overdue",...z});V(A,{noResolve:O,...z}),globalThis[Symbol.for("procurement_monthly_overdue")]={get value(){return he}};let X={initialData:void 0,initialError:void 0},P=x`select
    order_unit,
    count(*) filter (where open_quantity > 0) as open_schedule_lines,
    round(sum(open_quantity) filter (where open_quantity > 0), 2) as raw_open_quantity,
    round(
        case
            when order_unit = 'KG' then sum(open_quantity) filter (where open_quantity > 0) / 1000
            when order_unit = 'L' then sum(open_quantity) filter (where open_quantity > 0) / 1000
            else sum(open_quantity) filter (where open_quantity > 0)
        end,
        2
    ) as comparable_open_quantity,
    case
        when order_unit = 'KG' then 'Metric tons'
        when order_unit = 'L' then 'Kiloliters'
        when order_unit = 'EA' then 'Units'
        else order_unit
    end as comparable_unit
from greenplanetmart.procurement_schedule_lines
group by 1
order by raw_open_quantity desc nulls last`,U=`select
    order_unit,
    count(*) filter (where open_quantity > 0) as open_schedule_lines,
    round(sum(open_quantity) filter (where open_quantity > 0), 2) as raw_open_quantity,
    round(
        case
            when order_unit = 'KG' then sum(open_quantity) filter (where open_quantity > 0) / 1000
            when order_unit = 'L' then sum(open_quantity) filter (where open_quantity > 0) / 1000
            else sum(open_quantity) filter (where open_quantity > 0)
        end,
        2
    ) as comparable_open_quantity,
    case
        when order_unit = 'KG' then 'Metric tons'
        when order_unit = 'L' then 'Kiloliters'
        when order_unit = 'EA' then 'Units'
        else order_unit
    end as comparable_unit
from greenplanetmart.procurement_schedule_lines
group by 1
order by raw_open_quantity desc nulls last`;o.procurement_open_by_unit_data&&(o.procurement_open_by_unit_data instanceof Error?X.initialError=o.procurement_open_by_unit_data:X.initialData=o.procurement_open_by_unit_data,o.procurement_open_by_unit_columns&&(X.knownColumns=o.procurement_open_by_unit_columns));let ve,pe=!1;const Y=we.createReactive({callback:b=>{l(3,ve=b)},execFn:K},{id:"procurement_open_by_unit",...X});Y(U,{noResolve:P,...X}),globalThis[Symbol.for("procurement_open_by_unit")]={get value(){return ve}};let J={initialData:void 0,initialError:void 0},B=x`select
    supplier_name,
    document_currency,
    supplier_name || ' (' || document_currency || ')' as supplier_exposure_label,
    count(*) filter (where open_quantity > 0) as open_schedule_lines,
    round(sum(scheduled_net_value) / 1000000, 2) as scheduled_net_value_m,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct
from greenplanetmart.procurement_schedule_lines
group by 1, 2
order by scheduled_net_value_m desc
limit 15`,G=`select
    supplier_name,
    document_currency,
    supplier_name || ' (' || document_currency || ')' as supplier_exposure_label,
    count(*) filter (where open_quantity > 0) as open_schedule_lines,
    round(sum(scheduled_net_value) / 1000000, 2) as scheduled_net_value_m,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct
from greenplanetmart.procurement_schedule_lines
group by 1, 2
order by scheduled_net_value_m desc
limit 15`;o.procurement_top_suppliers_data&&(o.procurement_top_suppliers_data instanceof Error?J.initialError=o.procurement_top_suppliers_data:J.initialData=o.procurement_top_suppliers_data,o.procurement_top_suppliers_columns&&(J.knownColumns=o.procurement_top_suppliers_columns));let be,me=!1;const W=we.createReactive({callback:b=>{l(4,be=b)},execFn:K},{id:"procurement_top_suppliers",...J});W(G,{noResolve:B,...J}),globalThis[Symbol.for("procurement_top_suppliers")]={get value(){return be}};let Z={initialData:void 0,initialError:void 0},D=x`select
    supplier_name,
    material_name,
    plant_name,
    planned_delivery_date,
    order_unit,
    document_currency,
    round(open_quantity, 0) as open_quantity,
    round(scheduled_net_value / 1000000, 2) as scheduled_net_value_m
from greenplanetmart.procurement_schedule_lines
where is_overdue
order by scheduled_net_value desc, open_quantity desc
limit 20`,ce=`select
    supplier_name,
    material_name,
    plant_name,
    planned_delivery_date,
    order_unit,
    document_currency,
    round(open_quantity, 0) as open_quantity,
    round(scheduled_net_value / 1000000, 2) as scheduled_net_value_m
from greenplanetmart.procurement_schedule_lines
where is_overdue
order by scheduled_net_value desc, open_quantity desc
limit 20`;o.procurement_overdue_commitments_data&&(o.procurement_overdue_commitments_data instanceof Error?Z.initialError=o.procurement_overdue_commitments_data:Z.initialData=o.procurement_overdue_commitments_data,o.procurement_overdue_commitments_columns&&(Z.knownColumns=o.procurement_overdue_commitments_columns));let de,N=!1;const Te=we.createReactive({callback:b=>{l(5,de=b)},execFn:K},{id:"procurement_overdue_commitments",...Z});return Te(ce,{noResolve:D,...Z}),globalThis[Symbol.for("procurement_overdue_commitments")]={get value(){return de}},s.$$set=b=>{"data"in b&&l(6,r=b.data)},s.$$.update=()=>{s.$$.dirty[0]&64&&l(7,{data:o={},customFormattingSettings:i,__db:c}=r,o),s.$$.dirty[0]&128&&lt.set(Object.keys(o).length>0),s.$$.dirty[1]&2&&e.params,s.$$.dirty[0]&3840&&(te||!Q?te||(se(ne,{noResolve:te,...S}),l(11,Q=!0)):se(ne,{noResolve:te})),s.$$.dirty[0]&61440&&(oe||!ie?oe||(j(le,{noResolve:oe,...I}),l(15,ie=!0)):j(le,{noResolve:oe})),s.$$.dirty[0]&983040&&(O||!_e?O||(V(A,{noResolve:O,...z}),l(19,_e=!0)):V(A,{noResolve:O})),s.$$.dirty[0]&15728640&&(P||!pe?P||(Y(U,{noResolve:P,...X}),l(23,pe=!0)):Y(U,{noResolve:P})),s.$$.dirty[0]&251658240&&(B||!me?B||(W(G,{noResolve:B,...J}),l(27,me=!0)):W(G,{noResolve:B})),s.$$.dirty[0]&1879048192|s.$$.dirty[1]&1&&(D||!N?D||(Te(ce,{noResolve:D,...Z}),l(31,N=!0)):Te(ce,{noResolve:D}))},l(9,te=x`select
    count(*) filter (where open_quantity > 0) as open_schedule_lines,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct,
    round(avg(case when is_fully_received then 1 else 0 end), 4) as fully_received_rate_pct
from greenplanetmart.procurement_schedule_lines`),l(10,ne=`select
    count(*) filter (where open_quantity > 0) as open_schedule_lines,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct,
    round(avg(case when is_fully_received then 1 else 0 end), 4) as fully_received_rate_pct
from greenplanetmart.procurement_schedule_lines`),l(13,oe=x`select
    planned_delivery_month,
    count(*) filter (where open_quantity > 0) as open_schedule_lines
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`),l(14,le=`select
    planned_delivery_month,
    count(*) filter (where open_quantity > 0) as open_schedule_lines
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`),l(17,O=x`select
    planned_delivery_month,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`),l(18,A=`select
    planned_delivery_month,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate
from greenplanetmart.procurement_schedule_lines
group by 1
order by 1`),l(21,P=x`select
    order_unit,
    count(*) filter (where open_quantity > 0) as open_schedule_lines,
    round(sum(open_quantity) filter (where open_quantity > 0), 2) as raw_open_quantity,
    round(
        case
            when order_unit = 'KG' then sum(open_quantity) filter (where open_quantity > 0) / 1000
            when order_unit = 'L' then sum(open_quantity) filter (where open_quantity > 0) / 1000
            else sum(open_quantity) filter (where open_quantity > 0)
        end,
        2
    ) as comparable_open_quantity,
    case
        when order_unit = 'KG' then 'Metric tons'
        when order_unit = 'L' then 'Kiloliters'
        when order_unit = 'EA' then 'Units'
        else order_unit
    end as comparable_unit
from greenplanetmart.procurement_schedule_lines
group by 1
order by raw_open_quantity desc nulls last`),l(22,U=`select
    order_unit,
    count(*) filter (where open_quantity > 0) as open_schedule_lines,
    round(sum(open_quantity) filter (where open_quantity > 0), 2) as raw_open_quantity,
    round(
        case
            when order_unit = 'KG' then sum(open_quantity) filter (where open_quantity > 0) / 1000
            when order_unit = 'L' then sum(open_quantity) filter (where open_quantity > 0) / 1000
            else sum(open_quantity) filter (where open_quantity > 0)
        end,
        2
    ) as comparable_open_quantity,
    case
        when order_unit = 'KG' then 'Metric tons'
        when order_unit = 'L' then 'Kiloliters'
        when order_unit = 'EA' then 'Units'
        else order_unit
    end as comparable_unit
from greenplanetmart.procurement_schedule_lines
group by 1
order by raw_open_quantity desc nulls last`),l(25,B=x`select
    supplier_name,
    document_currency,
    supplier_name || ' (' || document_currency || ')' as supplier_exposure_label,
    count(*) filter (where open_quantity > 0) as open_schedule_lines,
    round(sum(scheduled_net_value) / 1000000, 2) as scheduled_net_value_m,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct
from greenplanetmart.procurement_schedule_lines
group by 1, 2
order by scheduled_net_value_m desc
limit 15`),l(26,G=`select
    supplier_name,
    document_currency,
    supplier_name || ' (' || document_currency || ')' as supplier_exposure_label,
    count(*) filter (where open_quantity > 0) as open_schedule_lines,
    round(sum(scheduled_net_value) / 1000000, 2) as scheduled_net_value_m,
    round(avg(case when is_overdue then 1 else 0 end), 4) as overdue_rate_pct
from greenplanetmart.procurement_schedule_lines
group by 1, 2
order by scheduled_net_value_m desc
limit 15`),l(29,D=x`select
    supplier_name,
    material_name,
    plant_name,
    planned_delivery_date,
    order_unit,
    document_currency,
    round(open_quantity, 0) as open_quantity,
    round(scheduled_net_value / 1000000, 2) as scheduled_net_value_m
from greenplanetmart.procurement_schedule_lines
where is_overdue
order by scheduled_net_value desc, open_quantity desc
limit 20`),l(30,ce=`select
    supplier_name,
    material_name,
    plant_name,
    planned_delivery_date,
    order_unit,
    document_currency,
    round(open_quantity, 0) as open_quantity,
    round(scheduled_net_value / 1000000, 2) as scheduled_net_value_m
from greenplanetmart.procurement_schedule_lines
where is_overdue
order by scheduled_net_value desc, open_quantity desc
limit 20`),[re,ue,he,ve,be,de,r,o,S,te,ne,Q,I,oe,le,ie,z,O,A,_e,X,P,U,pe,J,B,G,me,Z,D,ce,N,e]}class It extends nt{constructor(n){super(),rt(this,n,wt,gt,Ve,{data:6},null,[-1,-1])}}export{It as component};
