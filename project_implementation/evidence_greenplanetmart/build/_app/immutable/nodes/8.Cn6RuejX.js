import{s as Ft,d as c,i as p,a as ft,b as f,c as y,h as It,e as M,f as dt,g as st,j as k,k as H,l as ht,m as Dt,o as Lt,n as Pt,p as Ut,q as at,r as At,t as Bt,u as Nt}from"../chunks/scheduler.X7OS_J9P.js";import{S as Ot,i as Qt,d as I,t as g,a as v,c as pt,m as D,b as L,e as P,g as ut}from"../chunks/index.C6P9XCO6.js";import{D as Rt,s as Gt,Q as mt,p as jt,a as wt,r as qt,C as xt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BowjQLcG.js";import{w as Vt}from"../chunks/entry.D7cJHbLx.js";import{e as Kt,h as it,p as Zt}from"../chunks/setTrackProxy.Dtl2jvD6.js";import{p as Xt}from"../chunks/stores.Beea92nZ.js";import{G as zt,B as kt}from"../chunks/BigValue.DizpmVkD.js";import{Q as yt}from"../chunks/QueryViewer.Cq7RYq5a.js";import{B as Ct}from"../chunks/BarChart.DW-q9bcY.js";function Yt(_){let n,r=m.title+"",t;return{c(){n=H("h1"),t=Nt(r),this.h()},l(s){n=M(s,"H1",{class:!0});var i=At(n);t=Bt(i,r),i.forEach(c),this.h()},h(){f(n,"class","title")},m(s,i){p(s,n,i),ft(n,t)},p:at,d(s){s&&c(n)}}}function Jt(_){return{c(){this.h()},l(n){this.h()},h(){document.title="Evidence"},m:at,p:at,d:at}}function Wt(_){let n,r,t,s,i;return document.title=n=m.title,{c(){r=k(),t=H("meta"),s=k(),i=H("meta"),this.h()},l(o){r=y(o),t=M(o,"META",{property:!0,content:!0}),s=y(o),i=M(o,"META",{name:!0,content:!0}),this.h()},h(){var o,a;f(t,"property","og:title"),f(t,"content",((o=m.og)==null?void 0:o.title)??m.title),f(i,"name","twitter:title"),f(i,"content",((a=m.og)==null?void 0:a.title)??m.title)},m(o,a){p(o,r,a),p(o,t,a),p(o,s,a),p(o,i,a)},p(o,a){a&0&&n!==(n=m.title)&&(document.title=n)},d(o){o&&(c(r),c(t),c(s),c(i))}}}function te(_){var i,o;let n,r,t=(m.description||((i=m.og)==null?void 0:i.description))&&ee(),s=((o=m.og)==null?void 0:o.image)&&ne();return{c(){t&&t.c(),n=k(),s&&s.c(),r=dt()},l(a){t&&t.l(a),n=y(a),s&&s.l(a),r=dt()},m(a,u){t&&t.m(a,u),p(a,n,u),s&&s.m(a,u),p(a,r,u)},p(a,u){var q,O;(m.description||(q=m.og)!=null&&q.description)&&t.p(a,u),(O=m.og)!=null&&O.image&&s.p(a,u)},d(a){a&&(c(n),c(r)),t&&t.d(a),s&&s.d(a)}}}function ee(_){let n,r,t,s,i;return{c(){n=H("meta"),r=k(),t=H("meta"),s=k(),i=H("meta"),this.h()},l(o){n=M(o,"META",{name:!0,content:!0}),r=y(o),t=M(o,"META",{property:!0,content:!0}),s=y(o),i=M(o,"META",{name:!0,content:!0}),this.h()},h(){var o,a,u;f(n,"name","description"),f(n,"content",m.description??((o=m.og)==null?void 0:o.description)),f(t,"property","og:description"),f(t,"content",((a=m.og)==null?void 0:a.description)??m.description),f(i,"name","twitter:description"),f(i,"content",((u=m.og)==null?void 0:u.description)??m.description)},m(o,a){p(o,n,a),p(o,r,a),p(o,t,a),p(o,s,a),p(o,i,a)},p:at,d(o){o&&(c(n),c(r),c(t),c(s),c(i))}}}function ne(_){let n,r,t;return{c(){n=H("meta"),r=k(),t=H("meta"),this.h()},l(s){n=M(s,"META",{property:!0,content:!0}),r=y(s),t=M(s,"META",{name:!0,content:!0}),this.h()},h(){var s,i;f(n,"property","og:image"),f(n,"content",wt((s=m.og)==null?void 0:s.image)),f(t,"name","twitter:image"),f(t,"content",wt((i=m.og)==null?void 0:i.image))},m(s,i){p(s,n,i),p(s,r,i),p(s,t,i)},p:at,d(s){s&&(c(n),c(r),c(t))}}}function Tt(_){let n,r;return n=new yt({props:{queryID:"inventory_kpis",queryResult:_[0]}}),{c(){P(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,s){D(n,t,s),r=!0},p(t,s){const i={};s[0]&1&&(i.queryResult=t[0]),n.$set(i)},i(t){r||(v(n.$$.fragment,t),r=!0)},o(t){g(n.$$.fragment,t),r=!1},d(t){I(n,t)}}}function oe(_){let n,r,t,s,i,o;return n=new kt({props:{data:_[0],value:"unrestricted_stock",title:"Unrestricted Stock"}}),t=new kt({props:{data:_[0],value:"stock_positions",title:"Stock Positions"}}),i=new kt({props:{data:_[0],value:"zero_stock_positions",title:"Zero-Stock Positions"}}),{c(){P(n.$$.fragment),r=k(),P(t.$$.fragment),s=k(),P(i.$$.fragment)},l(a){L(n.$$.fragment,a),r=y(a),L(t.$$.fragment,a),s=y(a),L(i.$$.fragment,a)},m(a,u){D(n,a,u),p(a,r,u),D(t,a,u),p(a,s,u),D(i,a,u),o=!0},p(a,u){const q={};u[0]&1&&(q.data=a[0]),n.$set(q);const O={};u[0]&1&&(O.data=a[0]),t.$set(O);const F={};u[0]&1&&(F.data=a[0]),i.$set(F)},i(a){o||(v(n.$$.fragment,a),v(t.$$.fragment,a),v(i.$$.fragment,a),o=!0)},o(a){g(n.$$.fragment,a),g(t.$$.fragment,a),g(i.$$.fragment,a),o=!1},d(a){a&&(c(r),c(s)),I(n,a),I(t,a),I(i,a)}}}function Et(_){let n,r;return n=new yt({props:{queryID:"inventory_plant_stock",queryResult:_[1]}}),{c(){P(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,s){D(n,t,s),r=!0},p(t,s){const i={};s[0]&2&&(i.queryResult=t[1]),n.$set(i)},i(t){r||(v(n.$$.fragment,t),r=!0)},o(t){g(n.$$.fragment,t),r=!1},d(t){I(n,t)}}}function Mt(_){let n,r;return n=new yt({props:{queryID:"inventory_material_groups",queryResult:_[2]}}),{c(){P(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,s){D(n,t,s),r=!0},p(t,s){const i={};s[0]&4&&(i.queryResult=t[2]),n.$set(i)},i(t){r||(v(n.$$.fragment,t),r=!0)},o(t){g(n.$$.fragment,t),r=!1},d(t){I(n,t)}}}function re(_){let n,r,t,s;return n=new Ct({props:{data:_[2],x:"material_group",y:"unrestricted_stock_qty"}}),t=new Rt({props:{data:_[2]}}),{c(){P(n.$$.fragment),r=k(),P(t.$$.fragment)},l(i){L(n.$$.fragment,i),r=y(i),L(t.$$.fragment,i)},m(i,o){D(n,i,o),p(i,r,o),D(t,i,o),s=!0},p(i,o){const a={};o[0]&4&&(a.data=i[2]),n.$set(a);const u={};o[0]&4&&(u.data=i[2]),t.$set(u)},i(i){s||(v(n.$$.fragment,i),v(t.$$.fragment,i),s=!0)},o(i){g(n.$$.fragment,i),g(t.$$.fragment,i),s=!1},d(i){i&&c(r),I(n,i),I(t,i)}}}function Ht(_){let n,r;return n=new yt({props:{queryID:"inventory_zero_stock_hotspots",queryResult:_[3]}}),{c(){P(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,s){D(n,t,s),r=!0},p(t,s){const i={};s[0]&8&&(i.queryResult=t[3]),n.$set(i)},i(t){r||(v(n.$$.fragment,t),r=!0)},o(t){g(n.$$.fragment,t),r=!1},d(t){I(n,t)}}}function ie(_){let n,r,t,s,i,o,a='<a href="#inventory-position-by-plant-storage-location-and-material">Inventory Position by Plant, Storage Location, and Material</a>',u,q,O="This page addresses the supply chain question: where is stock currently held, and which materials are overstocked, inactive, or missing at relevant locations?",F,R,Q='<p class="markdown">Use case scope: the page uses <code class="markdown">fct_inventory_snapshot</code> at <code class="markdown">material x plant x storage_location</code> grain. Because the source is a snapshot extract, the analysis shows current position only and not stock movement history.</p>',G,j,U,Y,z,x='<a href="#stock-concentration-by-plant">Stock Concentration by Plant</a>',V,K,A,J,C,T,W='<a href="#material-group-mix">Material Group Mix</a>',tt,B,et,S,E,nt='<a href="#zero-stock-hotspots">Zero-Stock Hotspots</a>',ot,N,rt,d,_t='<a href="/" class="markdown">Back to Overview</a>',ct,Z=typeof m<"u"&&m.title&&m.hide_title!==!0&&Yt();function St(e,l){return typeof m<"u"&&m.title?Wt:Jt}let lt=St()(_),X=typeof m=="object"&&te(),b=_[0]&&Tt(_);U=new zt({props:{cols:3,$$slots:{default:[oe]},$$scope:{ctx:_}}});let $=_[1]&&Et(_);A=new Ct({props:{data:_[1],x:"plant_label",y:"unrestricted_stock_qty"}});let h=_[2]&&Mt(_);B=new zt({props:{cols:2,$$slots:{default:[re]},$$scope:{ctx:_}}});let w=_[3]&&Ht(_);return N=new Rt({props:{data:_[3]}}),{c(){Z&&Z.c(),n=k(),lt.c(),r=H("meta"),t=H("meta"),X&&X.c(),s=dt(),i=k(),o=H("h1"),o.innerHTML=a,u=k(),q=H("p"),q.textContent=O,F=k(),R=H("blockquote"),R.innerHTML=Q,G=k(),b&&b.c(),j=k(),P(U.$$.fragment),Y=k(),z=H("h2"),z.innerHTML=x,V=k(),$&&$.c(),K=k(),P(A.$$.fragment),J=k(),h&&h.c(),C=k(),T=H("h2"),T.innerHTML=W,tt=k(),P(B.$$.fragment),et=k(),w&&w.c(),S=k(),E=H("h2"),E.innerHTML=nt,ot=k(),P(N.$$.fragment),rt=k(),d=H("p"),d.innerHTML=_t,this.h()},l(e){Z&&Z.l(e),n=y(e);const l=It("svelte-6lktun",document.head);lt.l(l),r=M(l,"META",{name:!0,content:!0}),t=M(l,"META",{name:!0,content:!0}),X&&X.l(l),s=dt(),l.forEach(c),i=y(e),o=M(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),st(o)!=="svelte-1unpgyv"&&(o.innerHTML=a),u=y(e),q=M(e,"P",{class:!0,"data-svelte-h":!0}),st(q)!=="svelte-1hp8hy0"&&(q.textContent=O),F=y(e),R=M(e,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),st(R)!=="svelte-5png3e"&&(R.innerHTML=Q),G=y(e),b&&b.l(e),j=y(e),L(U.$$.fragment,e),Y=y(e),z=M(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),st(z)!=="svelte-1a0muzz"&&(z.innerHTML=x),V=y(e),$&&$.l(e),K=y(e),L(A.$$.fragment,e),J=y(e),h&&h.l(e),C=y(e),T=M(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),st(T)!=="svelte-19a3ew"&&(T.innerHTML=W),tt=y(e),L(B.$$.fragment,e),et=y(e),w&&w.l(e),S=y(e),E=M(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),st(E)!=="svelte-ihu3ir"&&(E.innerHTML=nt),ot=y(e),L(N.$$.fragment,e),rt=y(e),d=M(e,"P",{class:!0,"data-svelte-h":!0}),st(d)!=="svelte-1ld9pf"&&(d.innerHTML=_t),this.h()},h(){f(r,"name","twitter:card"),f(r,"content","summary"),f(t,"name","twitter:site"),f(t,"content","@evidence_dev"),f(o,"class","markdown"),f(o,"id","inventory-position-by-plant-storage-location-and-material"),f(q,"class","markdown"),f(R,"class","markdown"),f(z,"class","markdown"),f(z,"id","stock-concentration-by-plant"),f(T,"class","markdown"),f(T,"id","material-group-mix"),f(E,"class","markdown"),f(E,"id","zero-stock-hotspots"),f(d,"class","markdown")},m(e,l){Z&&Z.m(e,l),p(e,n,l),lt.m(document.head,null),ft(document.head,r),ft(document.head,t),X&&X.m(document.head,null),ft(document.head,s),p(e,i,l),p(e,o,l),p(e,u,l),p(e,q,l),p(e,F,l),p(e,R,l),p(e,G,l),b&&b.m(e,l),p(e,j,l),D(U,e,l),p(e,Y,l),p(e,z,l),p(e,V,l),$&&$.m(e,l),p(e,K,l),D(A,e,l),p(e,J,l),h&&h.m(e,l),p(e,C,l),p(e,T,l),p(e,tt,l),D(B,e,l),p(e,et,l),w&&w.m(e,l),p(e,S,l),p(e,E,l),p(e,ot,l),D(N,e,l),p(e,rt,l),p(e,d,l),ct=!0},p(e,l){typeof m<"u"&&m.title&&m.hide_title!==!0&&Z.p(e,l),lt.p(e,l),typeof m=="object"&&X.p(e,l),e[0]?b?(b.p(e,l),l[0]&1&&v(b,1)):(b=Tt(e),b.c(),v(b,1),b.m(j.parentNode,j)):b&&(ut(),g(b,1,1,()=>{b=null}),pt());const vt={};l[0]&1|l[1]&32&&(vt.$$scope={dirty:l,ctx:e}),U.$set(vt),e[1]?$?($.p(e,l),l[0]&2&&v($,1)):($=Et(e),$.c(),v($,1),$.m(K.parentNode,K)):$&&(ut(),g($,1,1,()=>{$=null}),pt());const gt={};l[0]&2&&(gt.data=e[1]),A.$set(gt),e[2]?h?(h.p(e,l),l[0]&4&&v(h,1)):(h=Mt(e),h.c(),v(h,1),h.m(C.parentNode,C)):h&&(ut(),g(h,1,1,()=>{h=null}),pt());const bt={};l[0]&4|l[1]&32&&(bt.$$scope={dirty:l,ctx:e}),B.$set(bt),e[3]?w?(w.p(e,l),l[0]&8&&v(w,1)):(w=Ht(e),w.c(),v(w,1),w.m(S.parentNode,S)):w&&(ut(),g(w,1,1,()=>{w=null}),pt());const $t={};l[0]&8&&($t.data=e[3]),N.$set($t)},i(e){ct||(v(b),v(U.$$.fragment,e),v($),v(A.$$.fragment,e),v(h),v(B.$$.fragment,e),v(w),v(N.$$.fragment,e),ct=!0)},o(e){g(b),g(U.$$.fragment,e),g($),g(A.$$.fragment,e),g(h),g(B.$$.fragment,e),g(w),g(N.$$.fragment,e),ct=!1},d(e){e&&(c(n),c(i),c(o),c(u),c(q),c(F),c(R),c(G),c(j),c(Y),c(z),c(V),c(K),c(J),c(C),c(T),c(tt),c(et),c(S),c(E),c(ot),c(rt),c(d)),Z&&Z.d(e),lt.d(e),c(r),c(t),X&&X.d(e),c(s),b&&b.d(e),I(U,e),$&&$.d(e),I(A,e),h&&h.d(e),I(B,e),w&&w.d(e),I(N,e)}}}const m={title:"Inventory Position"};function se(_,n,r){let t,s;ht(_,Xt,d=>r(22,t=d)),ht(_,qt,d=>r(28,s=d));let{data:i}=n,{data:o={},customFormattingSettings:a,__db:u,inputs:q}=i;Dt(qt,s="9b2e879e05917512d39e38f087aab860",s);let O=Kt(Vt(q));Lt(O.subscribe(d=>q=d)),Pt(xt,{getCustomFormats:()=>a.customFormats||[]});const F=(d,_t)=>Zt(u.query,d,{query_name:_t});Gt(F),t.params,Ut(()=>!0);let R={initialData:void 0,initialError:void 0},Q=it`select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions`,G=`select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions`;o.inventory_kpis_data&&(o.inventory_kpis_data instanceof Error?R.initialError=o.inventory_kpis_data:R.initialData=o.inventory_kpis_data,o.inventory_kpis_columns&&(R.knownColumns=o.inventory_kpis_columns));let j,U=!1;const Y=mt.createReactive({callback:d=>{r(0,j=d)},execFn:F},{id:"inventory_kpis",...R});Y(G,{noResolve:Q,...R}),globalThis[Symbol.for("inventory_kpis")]={get value(){return j}};let z={initialData:void 0,initialError:void 0},x=it`select
    client_id,
    plant_id,
    plant_name,
    plant_name || ' (' || client_id || '/' || plant_id || ')' as plant_label,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty
from greenplanetmart.inventory_positions
where plant_name != 'Unmapped Plant'
group by 1, 2, 3, 4
order by unrestricted_stock_qty desc
limit 10`,V=`select
    client_id,
    plant_id,
    plant_name,
    plant_name || ' (' || client_id || '/' || plant_id || ')' as plant_label,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty
from greenplanetmart.inventory_positions
where plant_name != 'Unmapped Plant'
group by 1, 2, 3, 4
order by unrestricted_stock_qty desc
limit 10`;o.inventory_plant_stock_data&&(o.inventory_plant_stock_data instanceof Error?z.initialError=o.inventory_plant_stock_data:z.initialData=o.inventory_plant_stock_data,o.inventory_plant_stock_columns&&(z.knownColumns=o.inventory_plant_stock_columns));let K,A=!1;const J=mt.createReactive({callback:d=>{r(1,K=d)},execFn:F},{id:"inventory_plant_stock",...z});J(V,{noResolve:x,...z}),globalThis[Symbol.for("inventory_plant_stock")]={get value(){return K}};let C={initialData:void 0,initialError:void 0},T=it`select
    material_group,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty,
    count(*) as stock_positions
from greenplanetmart.inventory_positions
group by 1
order by unrestricted_stock_qty desc
limit 15`,W=`select
    material_group,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty,
    count(*) as stock_positions
from greenplanetmart.inventory_positions
group by 1
order by unrestricted_stock_qty desc
limit 15`;o.inventory_material_groups_data&&(o.inventory_material_groups_data instanceof Error?C.initialError=o.inventory_material_groups_data:C.initialData=o.inventory_material_groups_data,o.inventory_material_groups_columns&&(C.knownColumns=o.inventory_material_groups_columns));let tt,B=!1;const et=mt.createReactive({callback:d=>{r(2,tt=d)},execFn:F},{id:"inventory_material_groups",...C});et(W,{noResolve:T,...C}),globalThis[Symbol.for("inventory_material_groups")]={get value(){return tt}};let S={initialData:void 0,initialError:void 0},E=it`select
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
limit 20`,nt=`select
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
limit 20`;o.inventory_zero_stock_hotspots_data&&(o.inventory_zero_stock_hotspots_data instanceof Error?S.initialError=o.inventory_zero_stock_hotspots_data:S.initialData=o.inventory_zero_stock_hotspots_data,o.inventory_zero_stock_hotspots_columns&&(S.knownColumns=o.inventory_zero_stock_hotspots_columns));let ot,N=!1;const rt=mt.createReactive({callback:d=>{r(3,ot=d)},execFn:F},{id:"inventory_zero_stock_hotspots",...S});return rt(nt,{noResolve:E,...S}),globalThis[Symbol.for("inventory_zero_stock_hotspots")]={get value(){return ot}},_.$$set=d=>{"data"in d&&r(4,i=d.data)},_.$$.update=()=>{_.$$.dirty[0]&16&&r(5,{data:o={},customFormattingSettings:a,__db:u}=i,o),_.$$.dirty[0]&32&&jt.set(Object.keys(o).length>0),_.$$.dirty[0]&4194304&&t.params,_.$$.dirty[0]&960&&(Q||!U?Q||(Y(G,{noResolve:Q,...R}),r(9,U=!0)):Y(G,{noResolve:Q})),_.$$.dirty[0]&15360&&(x||!A?x||(J(V,{noResolve:x,...z}),r(13,A=!0)):J(V,{noResolve:x})),_.$$.dirty[0]&245760&&(T||!B?T||(et(W,{noResolve:T,...C}),r(17,B=!0)):et(W,{noResolve:T})),_.$$.dirty[0]&3932160&&(E||!N?E||(rt(nt,{noResolve:E,...S}),r(21,N=!0)):rt(nt,{noResolve:E}))},r(7,Q=it`select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions`),r(8,G=`select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions`),r(11,x=it`select
    client_id,
    plant_id,
    plant_name,
    plant_name || ' (' || client_id || '/' || plant_id || ')' as plant_label,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty
from greenplanetmart.inventory_positions
where plant_name != 'Unmapped Plant'
group by 1, 2, 3, 4
order by unrestricted_stock_qty desc
limit 10`),r(12,V=`select
    client_id,
    plant_id,
    plant_name,
    plant_name || ' (' || client_id || '/' || plant_id || ')' as plant_label,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty
from greenplanetmart.inventory_positions
where plant_name != 'Unmapped Plant'
group by 1, 2, 3, 4
order by unrestricted_stock_qty desc
limit 10`),r(15,T=it`select
    material_group,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty,
    count(*) as stock_positions
from greenplanetmart.inventory_positions
group by 1
order by unrestricted_stock_qty desc
limit 15`),r(16,W=`select
    material_group,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty,
    count(*) as stock_positions
from greenplanetmart.inventory_positions
group by 1
order by unrestricted_stock_qty desc
limit 15`),r(19,E=it`select
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
limit 20`),r(20,nt=`select
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
limit 20`),[j,K,tt,ot,i,o,R,Q,G,U,z,x,V,A,C,T,W,B,S,E,nt,N,t]}class ke extends Ot{constructor(n){super(),Qt(this,n,se,ie,Ft,{data:4},null,[-1,-1])}}export{ke as component};
