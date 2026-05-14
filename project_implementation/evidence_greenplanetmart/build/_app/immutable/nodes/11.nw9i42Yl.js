import{s as Se,d as u,i as m,a as pe,b as p,c as b,h as De,e as C,f as de,g as re,j as v,k as M,l as ke,m as Ie,o as Le,n as Ae,p as Be,q as ne,r as Ne,t as Qe,u as Ue}from"../chunks/scheduler.X7OS_J9P.js";import{S as Oe,i as Pe,d as I,t as g,a as y,c as me,m as L,b as A,e as B,g as fe}from"../chunks/index.C6P9XCO6.js";import{D as He,s as ze,Q as ce,p as je,a as qe,r as we,C as Ge}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.CWnLcCpx.js";import{w as Ve}from"../chunks/entry.BQLYhwJJ.js";import{e as xe,h as ie,p as Ke}from"../chunks/setTrackProxy.C4EKu_rV.js";import{p as Xe}from"../chunks/stores.gaqmSQjM.js";import{G as Te,B as ve}from"../chunks/BigValue.BUHHmdch.js";import{Q as be}from"../chunks/QueryViewer.gW2yrJcX.js";import{B as Ye}from"../chunks/BarChart.ChXX0Bjl.js";import{L as Je}from"../chunks/LineChart.DSyGPZr0.js";function We(_){let l,a=c.title+"",e;return{c(){l=M("h1"),e=Ue(a),this.h()},l(r){l=C(r,"H1",{class:!0});var i=Ne(l);e=Qe(i,a),i.forEach(u),this.h()},h(){p(l,"class","title")},m(r,i){m(r,l,i),pe(l,e)},p:ne,d(r){r&&u(l)}}}function Ze(_){return{c(){this.h()},l(l){this.h()},h(){document.title="Evidence"},m:ne,p:ne,d:ne}}function et(_){let l,a,e,r,i;return document.title=l=c.title,{c(){a=v(),e=M("meta"),r=v(),i=M("meta"),this.h()},l(s){a=b(s),e=C(s,"META",{property:!0,content:!0}),r=b(s),i=C(s,"META",{name:!0,content:!0}),this.h()},h(){var s,n;p(e,"property","og:title"),p(e,"content",((s=c.og)==null?void 0:s.title)??c.title),p(i,"name","twitter:title"),p(i,"content",((n=c.og)==null?void 0:n.title)??c.title)},m(s,n){m(s,a,n),m(s,e,n),m(s,r,n),m(s,i,n)},p(s,n){n&0&&l!==(l=c.title)&&(document.title=l)},d(s){s&&(u(a),u(e),u(r),u(i))}}}function tt(_){var i,s;let l,a,e=(c.description||((i=c.og)==null?void 0:i.description))&&lt(),r=((s=c.og)==null?void 0:s.image)&&st();return{c(){e&&e.c(),l=v(),r&&r.c(),a=de()},l(n){e&&e.l(n),l=b(n),r&&r.l(n),a=de()},m(n,f){e&&e.m(n,f),m(n,l,f),r&&r.m(n,f),m(n,a,f)},p(n,f){var w,P;(c.description||(w=c.og)!=null&&w.description)&&e.p(n,f),(P=c.og)!=null&&P.image&&r.p(n,f)},d(n){n&&(u(l),u(a)),e&&e.d(n),r&&r.d(n)}}}function lt(_){let l,a,e,r,i;return{c(){l=M("meta"),a=v(),e=M("meta"),r=v(),i=M("meta"),this.h()},l(s){l=C(s,"META",{name:!0,content:!0}),a=b(s),e=C(s,"META",{property:!0,content:!0}),r=b(s),i=C(s,"META",{name:!0,content:!0}),this.h()},h(){var s,n,f;p(l,"name","description"),p(l,"content",c.description??((s=c.og)==null?void 0:s.description)),p(e,"property","og:description"),p(e,"content",((n=c.og)==null?void 0:n.description)??c.description),p(i,"name","twitter:description"),p(i,"content",((f=c.og)==null?void 0:f.description)??c.description)},m(s,n){m(s,l,n),m(s,a,n),m(s,e,n),m(s,r,n),m(s,i,n)},p:ne,d(s){s&&(u(l),u(a),u(e),u(r),u(i))}}}function st(_){let l,a,e;return{c(){l=M("meta"),a=v(),e=M("meta"),this.h()},l(r){l=C(r,"META",{property:!0,content:!0}),a=b(r),e=C(r,"META",{name:!0,content:!0}),this.h()},h(){var r,i;p(l,"property","og:image"),p(l,"content",qe((r=c.og)==null?void 0:r.image)),p(e,"name","twitter:image"),p(e,"content",qe((i=c.og)==null?void 0:i.image))},m(r,i){m(r,l,i),m(r,a,i),m(r,e,i)},p:ne,d(r){r&&(u(l),u(a),u(e))}}}function Ee(_){let l,a;return l=new be({props:{queryID:"sales_kpis",queryResult:_[0]}}),{c(){B(l.$$.fragment)},l(e){A(l.$$.fragment,e)},m(e,r){L(l,e,r),a=!0},p(e,r){const i={};r[0]&1&&(i.queryResult=e[0]),l.$set(i)},i(e){a||(y(l.$$.fragment,e),a=!0)},o(e){g(l.$$.fragment,e),a=!1},d(e){I(l,e)}}}function at(_){let l,a,e,r,i,s;return l=new ve({props:{data:_[0],value:"net_billed_value",title:"Net Billed Value"}}),e=new ve({props:{data:_[0],value:"billed_quantity",title:"Billed Quantity"}}),i=new ve({props:{data:_[0],value:"active_customers",title:"Active Customers"}}),{c(){B(l.$$.fragment),a=v(),B(e.$$.fragment),r=v(),B(i.$$.fragment)},l(n){A(l.$$.fragment,n),a=b(n),A(e.$$.fragment,n),r=b(n),A(i.$$.fragment,n)},m(n,f){L(l,n,f),m(n,a,f),L(e,n,f),m(n,r,f),L(i,n,f),s=!0},p(n,f){const w={};f[0]&1&&(w.data=n[0]),l.$set(w);const P={};f[0]&1&&(P.data=n[0]),e.$set(P);const D={};f[0]&1&&(D.data=n[0]),i.$set(D)},i(n){s||(y(l.$$.fragment,n),y(e.$$.fragment,n),y(i.$$.fragment,n),s=!0)},o(n){g(l.$$.fragment,n),g(e.$$.fragment,n),g(i.$$.fragment,n),s=!1},d(n){n&&(u(a),u(r)),I(l,n),I(e,n),I(i,n)}}}function Re(_){let l,a;return l=new be({props:{queryID:"sales_monthly_revenue",queryResult:_[1]}}),{c(){B(l.$$.fragment)},l(e){A(l.$$.fragment,e)},m(e,r){L(l,e,r),a=!0},p(e,r){const i={};r[0]&2&&(i.queryResult=e[1]),l.$set(i)},i(e){a||(y(l.$$.fragment,e),a=!0)},o(e){g(l.$$.fragment,e),a=!1},d(e){I(l,e)}}}function Ce(_){let l,a;return l=new be({props:{queryID:"sales_top_customers",queryResult:_[2]}}),{c(){B(l.$$.fragment)},l(e){A(l.$$.fragment,e)},m(e,r){L(l,e,r),a=!0},p(e,r){const i={};r[0]&4&&(i.queryResult=e[2]),l.$set(i)},i(e){a||(y(l.$$.fragment,e),a=!0)},o(e){g(l.$$.fragment,e),a=!1},d(e){I(l,e)}}}function it(_){let l,a,e,r;return l=new Ye({props:{data:_[2],x:"customer_name",y:"billed_net_value"}}),e=new He({props:{data:_[2]}}),{c(){B(l.$$.fragment),a=v(),B(e.$$.fragment)},l(i){A(l.$$.fragment,i),a=b(i),A(e.$$.fragment,i)},m(i,s){L(l,i,s),m(i,a,s),L(e,i,s),r=!0},p(i,s){const n={};s[0]&4&&(n.data=i[2]),l.$set(n);const f={};s[0]&4&&(f.data=i[2]),e.$set(f)},i(i){r||(y(l.$$.fragment,i),y(e.$$.fragment,i),r=!0)},o(i){g(l.$$.fragment,i),g(e.$$.fragment,i),r=!1},d(i){i&&u(a),I(l,i),I(e,i)}}}function Me(_){let l,a;return l=new be({props:{queryID:"sales_top_materials",queryResult:_[3]}}),{c(){B(l.$$.fragment)},l(e){A(l.$$.fragment,e)},m(e,r){L(l,e,r),a=!0},p(e,r){const i={};r[0]&8&&(i.queryResult=e[3]),l.$set(i)},i(e){a||(y(l.$$.fragment,e),a=!0)},o(e){g(l.$$.fragment,e),a=!1},d(e){I(l,e)}}}function rt(_){let l,a,e,r,i,s,n='<a href="#sales-performance-by-customer-product-and-region">Sales Performance by Customer, Product, and Region</a>',f,w,P="This page answers the business analytics question: which customers, materials, and sales organizations generate the most billed revenue over time?",D,H,z='<p class="markdown">Use case scope: the report uses billing-item facts deduplicated to business grain and limits the trend window to the most recent 15 months available in the mart so that old historical outliers do not dominate the visuals.</p>',j,G,N,J,T,V='<a href="#revenue-trend">Revenue Trend</a>',x,K,Q,W,F,E,Z='<a href="#top-customers">Top Customers</a>',ee,U,te,S,R,le='<a href="#top-materials">Top Materials</a>',se,O,ae,d,_e='<a href="/" class="markdown">Back to Overview</a>',ue,X=typeof c<"u"&&c.title&&c.hide_title!==!0&&We();function Fe(t,o){return typeof c<"u"&&c.title?et:Ze}let oe=Fe()(_),Y=typeof c=="object"&&tt(),$=_[0]&&Ee(_);N=new Te({props:{cols:3,$$slots:{default:[at]},$$scope:{ctx:_}}});let h=_[1]&&Re(_);Q=new Je({props:{data:_[1],x:"billing_month",y:"billed_net_value"}});let k=_[2]&&Ce(_);U=new Te({props:{cols:2,$$slots:{default:[it]},$$scope:{ctx:_}}});let q=_[3]&&Me(_);return O=new He({props:{data:_[3]}}),{c(){X&&X.c(),l=v(),oe.c(),a=M("meta"),e=M("meta"),Y&&Y.c(),r=de(),i=v(),s=M("h1"),s.innerHTML=n,f=v(),w=M("p"),w.textContent=P,D=v(),H=M("blockquote"),H.innerHTML=z,j=v(),$&&$.c(),G=v(),B(N.$$.fragment),J=v(),T=M("h2"),T.innerHTML=V,x=v(),h&&h.c(),K=v(),B(Q.$$.fragment),W=v(),k&&k.c(),F=v(),E=M("h2"),E.innerHTML=Z,ee=v(),B(U.$$.fragment),te=v(),q&&q.c(),S=v(),R=M("h2"),R.innerHTML=le,se=v(),B(O.$$.fragment),ae=v(),d=M("p"),d.innerHTML=_e,this.h()},l(t){X&&X.l(t),l=b(t);const o=De("svelte-6lktun",document.head);oe.l(o),a=C(o,"META",{name:!0,content:!0}),e=C(o,"META",{name:!0,content:!0}),Y&&Y.l(o),r=de(),o.forEach(u),i=b(t),s=C(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),re(s)!=="svelte-1ciyzit"&&(s.innerHTML=n),f=b(t),w=C(t,"P",{class:!0,"data-svelte-h":!0}),re(w)!=="svelte-1ajalob"&&(w.textContent=P),D=b(t),H=C(t,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),re(H)!=="svelte-svwxxm"&&(H.innerHTML=z),j=b(t),$&&$.l(t),G=b(t),A(N.$$.fragment,t),J=b(t),T=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),re(T)!=="svelte-eo4nyf"&&(T.innerHTML=V),x=b(t),h&&h.l(t),K=b(t),A(Q.$$.fragment,t),W=b(t),k&&k.l(t),F=b(t),E=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),re(E)!=="svelte-1g1bqdw"&&(E.innerHTML=Z),ee=b(t),A(U.$$.fragment,t),te=b(t),q&&q.l(t),S=b(t),R=C(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),re(R)!=="svelte-1ir9xfx"&&(R.innerHTML=le),se=b(t),A(O.$$.fragment,t),ae=b(t),d=C(t,"P",{class:!0,"data-svelte-h":!0}),re(d)!=="svelte-1ld9pf"&&(d.innerHTML=_e),this.h()},h(){p(a,"name","twitter:card"),p(a,"content","summary"),p(e,"name","twitter:site"),p(e,"content","@evidence_dev"),p(s,"class","markdown"),p(s,"id","sales-performance-by-customer-product-and-region"),p(w,"class","markdown"),p(H,"class","markdown"),p(T,"class","markdown"),p(T,"id","revenue-trend"),p(E,"class","markdown"),p(E,"id","top-customers"),p(R,"class","markdown"),p(R,"id","top-materials"),p(d,"class","markdown")},m(t,o){X&&X.m(t,o),m(t,l,o),oe.m(document.head,null),pe(document.head,a),pe(document.head,e),Y&&Y.m(document.head,null),pe(document.head,r),m(t,i,o),m(t,s,o),m(t,f,o),m(t,w,o),m(t,D,o),m(t,H,o),m(t,j,o),$&&$.m(t,o),m(t,G,o),L(N,t,o),m(t,J,o),m(t,T,o),m(t,x,o),h&&h.m(t,o),m(t,K,o),L(Q,t,o),m(t,W,o),k&&k.m(t,o),m(t,F,o),m(t,E,o),m(t,ee,o),L(U,t,o),m(t,te,o),q&&q.m(t,o),m(t,S,o),m(t,R,o),m(t,se,o),L(O,t,o),m(t,ae,o),m(t,d,o),ue=!0},p(t,o){typeof c<"u"&&c.title&&c.hide_title!==!0&&X.p(t,o),oe.p(t,o),typeof c=="object"&&Y.p(t,o),t[0]?$?($.p(t,o),o[0]&1&&y($,1)):($=Ee(t),$.c(),y($,1),$.m(G.parentNode,G)):$&&(fe(),g($,1,1,()=>{$=null}),me());const ye={};o[0]&1|o[1]&32&&(ye.$$scope={dirty:o,ctx:t}),N.$set(ye),t[1]?h?(h.p(t,o),o[0]&2&&y(h,1)):(h=Re(t),h.c(),y(h,1),h.m(K.parentNode,K)):h&&(fe(),g(h,1,1,()=>{h=null}),me());const ge={};o[0]&2&&(ge.data=t[1]),Q.$set(ge),t[2]?k?(k.p(t,o),o[0]&4&&y(k,1)):(k=Ce(t),k.c(),y(k,1),k.m(F.parentNode,F)):k&&(fe(),g(k,1,1,()=>{k=null}),me());const $e={};o[0]&4|o[1]&32&&($e.$$scope={dirty:o,ctx:t}),U.$set($e),t[3]?q?(q.p(t,o),o[0]&8&&y(q,1)):(q=Me(t),q.c(),y(q,1),q.m(S.parentNode,S)):q&&(fe(),g(q,1,1,()=>{q=null}),me());const he={};o[0]&8&&(he.data=t[3]),O.$set(he)},i(t){ue||(y($),y(N.$$.fragment,t),y(h),y(Q.$$.fragment,t),y(k),y(U.$$.fragment,t),y(q),y(O.$$.fragment,t),ue=!0)},o(t){g($),g(N.$$.fragment,t),g(h),g(Q.$$.fragment,t),g(k),g(U.$$.fragment,t),g(q),g(O.$$.fragment,t),ue=!1},d(t){t&&(u(l),u(i),u(s),u(f),u(w),u(D),u(H),u(j),u(G),u(J),u(T),u(x),u(K),u(W),u(F),u(E),u(ee),u(te),u(S),u(R),u(se),u(ae),u(d)),X&&X.d(t),oe.d(t),u(a),u(e),Y&&Y.d(t),u(r),$&&$.d(t),I(N,t),h&&h.d(t),I(Q,t),k&&k.d(t),I(U,t),q&&q.d(t),I(O,t)}}}const c={title:"Sales Performance"};function nt(_,l,a){let e,r;ke(_,Xe,d=>a(22,e=d)),ke(_,we,d=>a(28,r=d));let{data:i}=l,{data:s={},customFormattingSettings:n,__db:f,inputs:w}=i;Ie(we,r="b6c1e1557fc0a9a1e3a0b220257fd6d9",r);let P=xe(Ve(w));Le(P.subscribe(d=>w=d)),Ae(Ge,{getCustomFormats:()=>n.customFormats||[]});const D=(d,_e)=>Ke(f.query,d,{query_name:_e});ze(D),e.params,Be(()=>!0);let H={initialData:void 0,initialError:void 0},z=ie`select
    round(sum(billed_net_value), 0) as net_billed_value,
    round(sum(billed_quantity), 0) as billed_quantity,
    count(distinct customer_key) as active_customers
from greenplanetmart.sales_billing_items`,j=`select
    round(sum(billed_net_value), 0) as net_billed_value,
    round(sum(billed_quantity), 0) as billed_quantity,
    count(distinct customer_key) as active_customers
from greenplanetmart.sales_billing_items`;s.sales_kpis_data&&(s.sales_kpis_data instanceof Error?H.initialError=s.sales_kpis_data:H.initialData=s.sales_kpis_data,s.sales_kpis_columns&&(H.knownColumns=s.sales_kpis_columns));let G,N=!1;const J=ce.createReactive({callback:d=>{a(0,G=d)},execFn:D},{id:"sales_kpis",...H});J(j,{noResolve:z,...H}),globalThis[Symbol.for("sales_kpis")]={get value(){return G}};let T={initialData:void 0,initialError:void 0},V=ie`select
    billing_month,
    round(sum(billed_net_value), 0) as billed_net_value
from greenplanetmart.sales_billing_items
group by 1
order by 1`,x=`select
    billing_month,
    round(sum(billed_net_value), 0) as billed_net_value
from greenplanetmart.sales_billing_items
group by 1
order by 1`;s.sales_monthly_revenue_data&&(s.sales_monthly_revenue_data instanceof Error?T.initialError=s.sales_monthly_revenue_data:T.initialData=s.sales_monthly_revenue_data,s.sales_monthly_revenue_columns&&(T.knownColumns=s.sales_monthly_revenue_columns));let K,Q=!1;const W=ce.createReactive({callback:d=>{a(1,K=d)},execFn:D},{id:"sales_monthly_revenue",...T});W(x,{noResolve:V,...T}),globalThis[Symbol.for("sales_monthly_revenue")]={get value(){return K}};let F={initialData:void 0,initialError:void 0},E=ie`select
    customer_name,
    sales_organization_name,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 15`,Z=`select
    customer_name,
    sales_organization_name,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 15`;s.sales_top_customers_data&&(s.sales_top_customers_data instanceof Error?F.initialError=s.sales_top_customers_data:F.initialData=s.sales_top_customers_data,s.sales_top_customers_columns&&(F.knownColumns=s.sales_top_customers_columns));let ee,U=!1;const te=ce.createReactive({callback:d=>{a(2,ee=d)},execFn:D},{id:"sales_top_customers",...F});te(Z,{noResolve:E,...F}),globalThis[Symbol.for("sales_top_customers")]={get value(){return ee}};let S={initialData:void 0,initialError:void 0},R=ie`select
    material_name,
    material_group,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 20`,le=`select
    material_name,
    material_group,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 20`;s.sales_top_materials_data&&(s.sales_top_materials_data instanceof Error?S.initialError=s.sales_top_materials_data:S.initialData=s.sales_top_materials_data,s.sales_top_materials_columns&&(S.knownColumns=s.sales_top_materials_columns));let se,O=!1;const ae=ce.createReactive({callback:d=>{a(3,se=d)},execFn:D},{id:"sales_top_materials",...S});return ae(le,{noResolve:R,...S}),globalThis[Symbol.for("sales_top_materials")]={get value(){return se}},_.$$set=d=>{"data"in d&&a(4,i=d.data)},_.$$.update=()=>{_.$$.dirty[0]&16&&a(5,{data:s={},customFormattingSettings:n,__db:f}=i,s),_.$$.dirty[0]&32&&je.set(Object.keys(s).length>0),_.$$.dirty[0]&4194304&&e.params,_.$$.dirty[0]&960&&(z||!N?z||(J(j,{noResolve:z,...H}),a(9,N=!0)):J(j,{noResolve:z})),_.$$.dirty[0]&15360&&(V||!Q?V||(W(x,{noResolve:V,...T}),a(13,Q=!0)):W(x,{noResolve:V})),_.$$.dirty[0]&245760&&(E||!U?E||(te(Z,{noResolve:E,...F}),a(17,U=!0)):te(Z,{noResolve:E})),_.$$.dirty[0]&3932160&&(R||!O?R||(ae(le,{noResolve:R,...S}),a(21,O=!0)):ae(le,{noResolve:R}))},a(7,z=ie`select
    round(sum(billed_net_value), 0) as net_billed_value,
    round(sum(billed_quantity), 0) as billed_quantity,
    count(distinct customer_key) as active_customers
from greenplanetmart.sales_billing_items`),a(8,j=`select
    round(sum(billed_net_value), 0) as net_billed_value,
    round(sum(billed_quantity), 0) as billed_quantity,
    count(distinct customer_key) as active_customers
from greenplanetmart.sales_billing_items`),a(11,V=ie`select
    billing_month,
    round(sum(billed_net_value), 0) as billed_net_value
from greenplanetmart.sales_billing_items
group by 1
order by 1`),a(12,x=`select
    billing_month,
    round(sum(billed_net_value), 0) as billed_net_value
from greenplanetmart.sales_billing_items
group by 1
order by 1`),a(15,E=ie`select
    customer_name,
    sales_organization_name,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 15`),a(16,Z=`select
    customer_name,
    sales_organization_name,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 15`),a(19,R=ie`select
    material_name,
    material_group,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 20`),a(20,le=`select
    material_name,
    material_group,
    round(sum(billed_net_value), 0) as billed_net_value,
    round(sum(billed_quantity), 0) as billed_quantity
from greenplanetmart.sales_billing_items
group by 1, 2
order by billed_net_value desc
limit 20`),[G,K,ee,se,i,s,H,z,j,N,T,V,x,Q,F,E,Z,U,S,R,le,O,e]}class gt extends Oe{constructor(l){super(),Pe(this,l,nt,rt,Se,{data:4},null,[-1,-1])}}export{gt as component};
