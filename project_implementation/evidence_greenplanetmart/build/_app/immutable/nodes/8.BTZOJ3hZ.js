import{s as At,d as c,i as p,a as ft,b as f,c as k,h as St,e as M,f as dt,g as rt,j as y,k as N,l as $t,m as Ft,o as It,n as Dt,p as Lt,q as at,r as Pt,t as Ut,u as xt}from"../chunks/scheduler.X7OS_J9P.js";import{S as Bt,i as Ot,d as S,t as g,a as v,c as pt,m as F,b as I,e as D,g as ut}from"../chunks/index.C6P9XCO6.js";import{D as Ht,s as Qt,Q as mt,p as Gt,a as wt,r as zt,C as jt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.B6HDP7T7.js";import{w as Vt}from"../chunks/entry.DvGLmUxT.js";import{e as Kt,h as it,p as Zt}from"../chunks/setTrackProxy.eUnZJbiA.js";import{p as Xt}from"../chunks/stores.tP-SvYN_.js";import{G as qt,B as yt}from"../chunks/BigValue.FBgUHi8_.js";import{Q as kt}from"../chunks/QueryViewer.CYABd5kX.js";import{B as Rt}from"../chunks/BarChart.DhhYbNUG.js";function Yt(_){let o,s=m.title+"",t;return{c(){o=N("h1"),t=xt(s),this.h()},l(r){o=M(r,"H1",{class:!0});var i=Pt(o);t=Ut(i,s),i.forEach(c),this.h()},h(){f(o,"class","title")},m(r,i){p(r,o,i),ft(o,t)},p:at,d(r){r&&c(o)}}}function Jt(_){return{c(){this.h()},l(o){this.h()},h(){document.title="Evidence"},m:at,p:at,d:at}}function Wt(_){let o,s,t,r,i;return document.title=o=m.title,{c(){s=y(),t=N("meta"),r=y(),i=N("meta"),this.h()},l(n){s=k(n),t=M(n,"META",{property:!0,content:!0}),r=k(n),i=M(n,"META",{name:!0,content:!0}),this.h()},h(){var n,a;f(t,"property","og:title"),f(t,"content",((n=m.og)==null?void 0:n.title)??m.title),f(i,"name","twitter:title"),f(i,"content",((a=m.og)==null?void 0:a.title)??m.title)},m(n,a){p(n,s,a),p(n,t,a),p(n,r,a),p(n,i,a)},p(n,a){a&0&&o!==(o=m.title)&&(document.title=o)},d(n){n&&(c(s),c(t),c(r),c(i))}}}function te(_){var i,n;let o,s,t=(m.description||((i=m.og)==null?void 0:i.description))&&ee(),r=((n=m.og)==null?void 0:n.image)&&oe();return{c(){t&&t.c(),o=y(),r&&r.c(),s=dt()},l(a){t&&t.l(a),o=k(a),r&&r.l(a),s=dt()},m(a,u){t&&t.m(a,u),p(a,o,u),r&&r.m(a,u),p(a,s,u)},p(a,u){var z,B;(m.description||(z=m.og)!=null&&z.description)&&t.p(a,u),(B=m.og)!=null&&B.image&&r.p(a,u)},d(a){a&&(c(o),c(s)),t&&t.d(a),r&&r.d(a)}}}function ee(_){let o,s,t,r,i;return{c(){o=N("meta"),s=y(),t=N("meta"),r=y(),i=N("meta"),this.h()},l(n){o=M(n,"META",{name:!0,content:!0}),s=k(n),t=M(n,"META",{property:!0,content:!0}),r=k(n),i=M(n,"META",{name:!0,content:!0}),this.h()},h(){var n,a,u;f(o,"name","description"),f(o,"content",m.description??((n=m.og)==null?void 0:n.description)),f(t,"property","og:description"),f(t,"content",((a=m.og)==null?void 0:a.description)??m.description),f(i,"name","twitter:description"),f(i,"content",((u=m.og)==null?void 0:u.description)??m.description)},m(n,a){p(n,o,a),p(n,s,a),p(n,t,a),p(n,r,a),p(n,i,a)},p:at,d(n){n&&(c(o),c(s),c(t),c(r),c(i))}}}function oe(_){let o,s,t;return{c(){o=N("meta"),s=y(),t=N("meta"),this.h()},l(r){o=M(r,"META",{property:!0,content:!0}),s=k(r),t=M(r,"META",{name:!0,content:!0}),this.h()},h(){var r,i;f(o,"property","og:image"),f(o,"content",wt((r=m.og)==null?void 0:r.image)),f(t,"name","twitter:image"),f(t,"content",wt((i=m.og)==null?void 0:i.image))},m(r,i){p(r,o,i),p(r,s,i),p(r,t,i)},p:at,d(r){r&&(c(o),c(s),c(t))}}}function Tt(_){let o,s;return o=new kt({props:{queryID:"inventory_kpis",queryResult:_[0]}}),{c(){D(o.$$.fragment)},l(t){I(o.$$.fragment,t)},m(t,r){F(o,t,r),s=!0},p(t,r){const i={};r[0]&1&&(i.queryResult=t[0]),o.$set(i)},i(t){s||(v(o.$$.fragment,t),s=!0)},o(t){g(o.$$.fragment,t),s=!1},d(t){S(o,t)}}}function ne(_){let o,s,t,r,i,n;return o=new yt({props:{data:_[0],value:"unrestricted_stock",title:"Unrestricted Stock"}}),t=new yt({props:{data:_[0],value:"stock_positions",title:"Stock Positions"}}),i=new yt({props:{data:_[0],value:"zero_stock_positions",title:"Zero-Stock Positions"}}),{c(){D(o.$$.fragment),s=y(),D(t.$$.fragment),r=y(),D(i.$$.fragment)},l(a){I(o.$$.fragment,a),s=k(a),I(t.$$.fragment,a),r=k(a),I(i.$$.fragment,a)},m(a,u){F(o,a,u),p(a,s,u),F(t,a,u),p(a,r,u),F(i,a,u),n=!0},p(a,u){const z={};u[0]&1&&(z.data=a[0]),o.$set(z);const B={};u[0]&1&&(B.data=a[0]),t.$set(B);const A={};u[0]&1&&(A.data=a[0]),i.$set(A)},i(a){n||(v(o.$$.fragment,a),v(t.$$.fragment,a),v(i.$$.fragment,a),n=!0)},o(a){g(o.$$.fragment,a),g(t.$$.fragment,a),g(i.$$.fragment,a),n=!1},d(a){a&&(c(s),c(r)),S(o,a),S(t,a),S(i,a)}}}function Et(_){let o,s;return o=new kt({props:{queryID:"inventory_plant_stock",queryResult:_[1]}}),{c(){D(o.$$.fragment)},l(t){I(o.$$.fragment,t)},m(t,r){F(o,t,r),s=!0},p(t,r){const i={};r[0]&2&&(i.queryResult=t[1]),o.$set(i)},i(t){s||(v(o.$$.fragment,t),s=!0)},o(t){g(o.$$.fragment,t),s=!1},d(t){S(o,t)}}}function Mt(_){let o,s;return o=new kt({props:{queryID:"inventory_material_groups",queryResult:_[2]}}),{c(){D(o.$$.fragment)},l(t){I(o.$$.fragment,t)},m(t,r){F(o,t,r),s=!0},p(t,r){const i={};r[0]&4&&(i.queryResult=t[2]),o.$set(i)},i(t){s||(v(o.$$.fragment,t),s=!0)},o(t){g(o.$$.fragment,t),s=!1},d(t){S(o,t)}}}function se(_){let o,s,t,r;return o=new Rt({props:{data:_[2],x:"material_group",y:"unrestricted_stock_qty"}}),t=new Ht({props:{data:_[2]}}),{c(){D(o.$$.fragment),s=y(),D(t.$$.fragment)},l(i){I(o.$$.fragment,i),s=k(i),I(t.$$.fragment,i)},m(i,n){F(o,i,n),p(i,s,n),F(t,i,n),r=!0},p(i,n){const a={};n[0]&4&&(a.data=i[2]),o.$set(a);const u={};n[0]&4&&(u.data=i[2]),t.$set(u)},i(i){r||(v(o.$$.fragment,i),v(t.$$.fragment,i),r=!0)},o(i){g(o.$$.fragment,i),g(t.$$.fragment,i),r=!1},d(i){i&&c(s),S(o,i),S(t,i)}}}function Nt(_){let o,s;return o=new kt({props:{queryID:"inventory_zero_stock_hotspots",queryResult:_[3]}}),{c(){D(o.$$.fragment)},l(t){I(o.$$.fragment,t)},m(t,r){F(o,t,r),s=!0},p(t,r){const i={};r[0]&8&&(i.queryResult=t[3]),o.$set(i)},i(t){s||(v(o.$$.fragment,t),s=!0)},o(t){g(o.$$.fragment,t),s=!1},d(t){S(o,t)}}}function ie(_){let o,s,t,r,i,n,a='<a href="#inventory-position-by-plant-storage-location-and-material">Inventory Position by Plant, Storage Location, and Material</a>',u,z,B="This page addresses the supply chain question: where is stock currently held, and which materials are overstocked, inactive, or missing at relevant locations?",A,H,O='<p class="markdown">Use case scope: the page uses <code class="markdown">fct_inventory_snapshot</code> at <code class="markdown">material x plant x storage_location</code> grain. Because the source is a snapshot extract, the analysis shows current position only and not stock movement history.</p>',Q,G,L,Y,q,j='<a href="#stock-concentration-by-plant">Stock Concentration by Plant</a>',V,K,P,J,R,T,W='<a href="#material-group-mix">Material Group Mix</a>',tt,U,et,C,E,ot='<a href="#zero-stock-hotspots">Zero-Stock Hotspots</a>',nt,x,st,d,_t='<a href="/" class="markdown">Back to Overview</a>',ct,Z=typeof m<"u"&&m.title&&m.hide_title!==!0&&Yt();function Ct(e,l){return typeof m<"u"&&m.title?Wt:Jt}let lt=Ct()(_),X=typeof m=="object"&&te(),h=_[0]&&Tt(_);L=new qt({props:{cols:3,$$slots:{default:[ne]},$$scope:{ctx:_}}});let b=_[1]&&Et(_);P=new Rt({props:{data:_[1],x:"plant_label",y:"unrestricted_stock_qty"}});let $=_[2]&&Mt(_);U=new qt({props:{cols:2,$$slots:{default:[se]},$$scope:{ctx:_}}});let w=_[3]&&Nt(_);return x=new Ht({props:{data:_[3]}}),{c(){Z&&Z.c(),o=y(),lt.c(),s=N("meta"),t=N("meta"),X&&X.c(),r=dt(),i=y(),n=N("h1"),n.innerHTML=a,u=y(),z=N("p"),z.textContent=B,A=y(),H=N("blockquote"),H.innerHTML=O,Q=y(),h&&h.c(),G=y(),D(L.$$.fragment),Y=y(),q=N("h2"),q.innerHTML=j,V=y(),b&&b.c(),K=y(),D(P.$$.fragment),J=y(),$&&$.c(),R=y(),T=N("h2"),T.innerHTML=W,tt=y(),D(U.$$.fragment),et=y(),w&&w.c(),C=y(),E=N("h2"),E.innerHTML=ot,nt=y(),D(x.$$.fragment),st=y(),d=N("p"),d.innerHTML=_t,this.h()},l(e){Z&&Z.l(e),o=k(e);const l=St("svelte-6lktun",document.head);lt.l(l),s=M(l,"META",{name:!0,content:!0}),t=M(l,"META",{name:!0,content:!0}),X&&X.l(l),r=dt(),l.forEach(c),i=k(e),n=M(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),rt(n)!=="svelte-1unpgyv"&&(n.innerHTML=a),u=k(e),z=M(e,"P",{class:!0,"data-svelte-h":!0}),rt(z)!=="svelte-1hp8hy0"&&(z.textContent=B),A=k(e),H=M(e,"BLOCKQUOTE",{class:!0,"data-svelte-h":!0}),rt(H)!=="svelte-5png3e"&&(H.innerHTML=O),Q=k(e),h&&h.l(e),G=k(e),I(L.$$.fragment,e),Y=k(e),q=M(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),rt(q)!=="svelte-1a0muzz"&&(q.innerHTML=j),V=k(e),b&&b.l(e),K=k(e),I(P.$$.fragment,e),J=k(e),$&&$.l(e),R=k(e),T=M(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),rt(T)!=="svelte-19a3ew"&&(T.innerHTML=W),tt=k(e),I(U.$$.fragment,e),et=k(e),w&&w.l(e),C=k(e),E=M(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),rt(E)!=="svelte-ihu3ir"&&(E.innerHTML=ot),nt=k(e),I(x.$$.fragment,e),st=k(e),d=M(e,"P",{class:!0,"data-svelte-h":!0}),rt(d)!=="svelte-1ld9pf"&&(d.innerHTML=_t),this.h()},h(){f(s,"name","twitter:card"),f(s,"content","summary"),f(t,"name","twitter:site"),f(t,"content","@evidence_dev"),f(n,"class","markdown"),f(n,"id","inventory-position-by-plant-storage-location-and-material"),f(z,"class","markdown"),f(H,"class","markdown"),f(q,"class","markdown"),f(q,"id","stock-concentration-by-plant"),f(T,"class","markdown"),f(T,"id","material-group-mix"),f(E,"class","markdown"),f(E,"id","zero-stock-hotspots"),f(d,"class","markdown")},m(e,l){Z&&Z.m(e,l),p(e,o,l),lt.m(document.head,null),ft(document.head,s),ft(document.head,t),X&&X.m(document.head,null),ft(document.head,r),p(e,i,l),p(e,n,l),p(e,u,l),p(e,z,l),p(e,A,l),p(e,H,l),p(e,Q,l),h&&h.m(e,l),p(e,G,l),F(L,e,l),p(e,Y,l),p(e,q,l),p(e,V,l),b&&b.m(e,l),p(e,K,l),F(P,e,l),p(e,J,l),$&&$.m(e,l),p(e,R,l),p(e,T,l),p(e,tt,l),F(U,e,l),p(e,et,l),w&&w.m(e,l),p(e,C,l),p(e,E,l),p(e,nt,l),F(x,e,l),p(e,st,l),p(e,d,l),ct=!0},p(e,l){typeof m<"u"&&m.title&&m.hide_title!==!0&&Z.p(e,l),lt.p(e,l),typeof m=="object"&&X.p(e,l),e[0]?h?(h.p(e,l),l[0]&1&&v(h,1)):(h=Tt(e),h.c(),v(h,1),h.m(G.parentNode,G)):h&&(ut(),g(h,1,1,()=>{h=null}),pt());const vt={};l[0]&1|l[1]&32&&(vt.$$scope={dirty:l,ctx:e}),L.$set(vt),e[1]?b?(b.p(e,l),l[0]&2&&v(b,1)):(b=Et(e),b.c(),v(b,1),b.m(K.parentNode,K)):b&&(ut(),g(b,1,1,()=>{b=null}),pt());const gt={};l[0]&2&&(gt.data=e[1]),P.$set(gt),e[2]?$?($.p(e,l),l[0]&4&&v($,1)):($=Mt(e),$.c(),v($,1),$.m(R.parentNode,R)):$&&(ut(),g($,1,1,()=>{$=null}),pt());const ht={};l[0]&4|l[1]&32&&(ht.$$scope={dirty:l,ctx:e}),U.$set(ht),e[3]?w?(w.p(e,l),l[0]&8&&v(w,1)):(w=Nt(e),w.c(),v(w,1),w.m(C.parentNode,C)):w&&(ut(),g(w,1,1,()=>{w=null}),pt());const bt={};l[0]&8&&(bt.data=e[3]),x.$set(bt)},i(e){ct||(v(h),v(L.$$.fragment,e),v(b),v(P.$$.fragment,e),v($),v(U.$$.fragment,e),v(w),v(x.$$.fragment,e),ct=!0)},o(e){g(h),g(L.$$.fragment,e),g(b),g(P.$$.fragment,e),g($),g(U.$$.fragment,e),g(w),g(x.$$.fragment,e),ct=!1},d(e){e&&(c(o),c(i),c(n),c(u),c(z),c(A),c(H),c(Q),c(G),c(Y),c(q),c(V),c(K),c(J),c(R),c(T),c(tt),c(et),c(C),c(E),c(nt),c(st),c(d)),Z&&Z.d(e),lt.d(e),c(s),c(t),X&&X.d(e),c(r),h&&h.d(e),S(L,e),b&&b.d(e),S(P,e),$&&$.d(e),S(U,e),w&&w.d(e),S(x,e)}}}const m={title:"Inventory Position"};function re(_,o,s){let t,r;$t(_,Xt,d=>s(22,t=d)),$t(_,zt,d=>s(28,r=d));let{data:i}=o,{data:n={},customFormattingSettings:a,__db:u,inputs:z}=i;Ft(zt,r="9b2e879e05917512d39e38f087aab860",r);let B=Kt(Vt(z));It(B.subscribe(d=>z=d)),Dt(jt,{getCustomFormats:()=>a.customFormats||[]});const A=(d,_t)=>Zt(u.query,d,{query_name:_t});Qt(A),t.params,Lt(()=>!0);let H={initialData:void 0,initialError:void 0},O=it`select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions`,Q=`select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions`;n.inventory_kpis_data&&(n.inventory_kpis_data instanceof Error?H.initialError=n.inventory_kpis_data:H.initialData=n.inventory_kpis_data,n.inventory_kpis_columns&&(H.knownColumns=n.inventory_kpis_columns));let G,L=!1;const Y=mt.createReactive({callback:d=>{s(0,G=d)},execFn:A},{id:"inventory_kpis",...H});Y(Q,{noResolve:O,...H}),globalThis[Symbol.for("inventory_kpis")]={get value(){return G}};let q={initialData:void 0,initialError:void 0},j=it`select
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
limit 10`;n.inventory_plant_stock_data&&(n.inventory_plant_stock_data instanceof Error?q.initialError=n.inventory_plant_stock_data:q.initialData=n.inventory_plant_stock_data,n.inventory_plant_stock_columns&&(q.knownColumns=n.inventory_plant_stock_columns));let K,P=!1;const J=mt.createReactive({callback:d=>{s(1,K=d)},execFn:A},{id:"inventory_plant_stock",...q});J(V,{noResolve:j,...q}),globalThis[Symbol.for("inventory_plant_stock")]={get value(){return K}};let R={initialData:void 0,initialError:void 0},T=it`select
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
limit 15`;n.inventory_material_groups_data&&(n.inventory_material_groups_data instanceof Error?R.initialError=n.inventory_material_groups_data:R.initialData=n.inventory_material_groups_data,n.inventory_material_groups_columns&&(R.knownColumns=n.inventory_material_groups_columns));let tt,U=!1;const et=mt.createReactive({callback:d=>{s(2,tt=d)},execFn:A},{id:"inventory_material_groups",...R});et(W,{noResolve:T,...R}),globalThis[Symbol.for("inventory_material_groups")]={get value(){return tt}};let C={initialData:void 0,initialError:void 0},E=it`with zero_stock_hotspots as (
    select
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
    limit 20
)

select
    client_id,
    plant_id,
    plant_name,
    plant_label,
    storage_location_id,
    zero_stock_positions
from zero_stock_hotspots

union all

select
    'N/A' as client_id,
    'N/A' as plant_id,
    'No zero-stock positions found in the current snapshot' as plant_name,
    'No zero-stock positions found in the current snapshot' as plant_label,
    'N/A' as storage_location_id,
    0 as zero_stock_positions
where not exists (
    select 1
    from zero_stock_hotspots
)`,ot=`with zero_stock_hotspots as (
    select
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
    limit 20
)

select
    client_id,
    plant_id,
    plant_name,
    plant_label,
    storage_location_id,
    zero_stock_positions
from zero_stock_hotspots

union all

select
    'N/A' as client_id,
    'N/A' as plant_id,
    'No zero-stock positions found in the current snapshot' as plant_name,
    'No zero-stock positions found in the current snapshot' as plant_label,
    'N/A' as storage_location_id,
    0 as zero_stock_positions
where not exists (
    select 1
    from zero_stock_hotspots
)`;n.inventory_zero_stock_hotspots_data&&(n.inventory_zero_stock_hotspots_data instanceof Error?C.initialError=n.inventory_zero_stock_hotspots_data:C.initialData=n.inventory_zero_stock_hotspots_data,n.inventory_zero_stock_hotspots_columns&&(C.knownColumns=n.inventory_zero_stock_hotspots_columns));let nt,x=!1;const st=mt.createReactive({callback:d=>{s(3,nt=d)},execFn:A},{id:"inventory_zero_stock_hotspots",...C});return st(ot,{noResolve:E,...C}),globalThis[Symbol.for("inventory_zero_stock_hotspots")]={get value(){return nt}},_.$$set=d=>{"data"in d&&s(4,i=d.data)},_.$$.update=()=>{_.$$.dirty[0]&16&&s(5,{data:n={},customFormattingSettings:a,__db:u}=i,n),_.$$.dirty[0]&32&&Gt.set(Object.keys(n).length>0),_.$$.dirty[0]&4194304&&t.params,_.$$.dirty[0]&960&&(O||!L?O||(Y(Q,{noResolve:O,...H}),s(9,L=!0)):Y(Q,{noResolve:O})),_.$$.dirty[0]&15360&&(j||!P?j||(J(V,{noResolve:j,...q}),s(13,P=!0)):J(V,{noResolve:j})),_.$$.dirty[0]&245760&&(T||!U?T||(et(W,{noResolve:T,...R}),s(17,U=!0)):et(W,{noResolve:T})),_.$$.dirty[0]&3932160&&(E||!x?E||(st(ot,{noResolve:E,...C}),s(21,x=!0)):st(ot,{noResolve:E}))},s(7,O=it`select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions`),s(8,Q=`select
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock,
    count(*) as stock_positions,
    sum(case when is_zero_stock then 1 else 0 end) as zero_stock_positions
from greenplanetmart.inventory_positions`),s(11,j=it`select
    client_id,
    plant_id,
    plant_name,
    plant_name || ' (' || client_id || '/' || plant_id || ')' as plant_label,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty
from greenplanetmart.inventory_positions
where plant_name != 'Unmapped Plant'
group by 1, 2, 3, 4
order by unrestricted_stock_qty desc
limit 10`),s(12,V=`select
    client_id,
    plant_id,
    plant_name,
    plant_name || ' (' || client_id || '/' || plant_id || ')' as plant_label,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty
from greenplanetmart.inventory_positions
where plant_name != 'Unmapped Plant'
group by 1, 2, 3, 4
order by unrestricted_stock_qty desc
limit 10`),s(15,T=it`select
    material_group,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty,
    count(*) as stock_positions
from greenplanetmart.inventory_positions
group by 1
order by unrestricted_stock_qty desc
limit 15`),s(16,W=`select
    material_group,
    round(sum(unrestricted_stock_qty), 0) as unrestricted_stock_qty,
    count(*) as stock_positions
from greenplanetmart.inventory_positions
group by 1
order by unrestricted_stock_qty desc
limit 15`),s(19,E=it`with zero_stock_hotspots as (
    select
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
    limit 20
)

select
    client_id,
    plant_id,
    plant_name,
    plant_label,
    storage_location_id,
    zero_stock_positions
from zero_stock_hotspots

union all

select
    'N/A' as client_id,
    'N/A' as plant_id,
    'No zero-stock positions found in the current snapshot' as plant_name,
    'No zero-stock positions found in the current snapshot' as plant_label,
    'N/A' as storage_location_id,
    0 as zero_stock_positions
where not exists (
    select 1
    from zero_stock_hotspots
)`),s(20,ot=`with zero_stock_hotspots as (
    select
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
    limit 20
)

select
    client_id,
    plant_id,
    plant_name,
    plant_label,
    storage_location_id,
    zero_stock_positions
from zero_stock_hotspots

union all

select
    'N/A' as client_id,
    'N/A' as plant_id,
    'No zero-stock positions found in the current snapshot' as plant_name,
    'No zero-stock positions found in the current snapshot' as plant_label,
    'N/A' as storage_location_id,
    0 as zero_stock_positions
where not exists (
    select 1
    from zero_stock_hotspots
)`),[G,K,tt,nt,i,n,H,O,Q,L,q,j,V,P,R,T,W,U,C,E,ot,x,t]}class ye extends Bt{constructor(o){super(),Ot(this,o,re,ie,At,{data:4},null,[-1,-1])}}export{ye as component};
