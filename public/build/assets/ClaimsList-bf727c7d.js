import{_ as w}from"./AuthenticatedLayout-94538ec7.js";import{_ as T}from"./Datatable-16a2f7dd.js";import{r as $,_ as u,a as V,b as _}from"./EmptyState-c0c5d7a2.js";import{b as j,r as D,h as N,w as v,o as l,d as f,e as s,f as e,u as o,Z as B,a as t,g as r,m as h,c as p,F as C,j as A,l as L,O as x,t as y,n as O}from"./app-c4f187be.js";import{g as R,a as F}from"./helper-c9a85e48.js";import{_ as P}from"./Breadcrumbs-407b3470.js";import{_ as S}from"./ToggleOnDatatable-6447da51.js";import{r as q}from"./PencilSquareIcon-cd3a3f2f.js";import"./logo1637145113-c7398df9.js";import"./switch-6b92d620.js";import"./use-controllable-186a6d72.js";const z={class:"px-4 sm:px-6 lg:px-8"},E={class:"sm:flex sm:items-center"},M=t("div",{class:"sm:flex-auto"},[t("h1",{class:"text-2xl font-semibold leading-6 text-gray-900"},"Types de Réclamation"),t("p",{class:"mt-2 text-sm text-gray-700"}," La liste des réclamations qu'il sera possible de faire lors de l'évaluation. ")],-1),U={class:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},Z={key:0,class:"min-w-full divide-y divide-gray-300"},G={class:"bg-gray-50"},H={class:"divide-y divide-gray-200 bg-white"},I={class:"flex space-x-4"},J={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},K={class:"flex items-center justify-center"},Q={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},oe={__name:"ClaimsList",props:{claims:{type:Object}},setup(g){const c=g,b=[{name:"Types de Réclamation",href:"#",current:!0}],k=j(()=>R(c.claims)),n=D(c.claims.data),d=N({keyword:"",fields:["claim_type_name"]});return v(()=>d.keyword,function(a){a===""?n.value=c.claims.data:L.post(route("claimTypes.search"),d).then(m=>n.value=m.data)}),v(()=>c.claims,function(a){n.value=a.data,!n.value.length>0&&(a.prev_page_url?x.get(a.prev_page_url):x.get(a.first_page_url))}),(a,m)=>(l(),f(w,null,{default:s(()=>[e(o(B),{title:"Types de Réclamation"}),t("div",z,[e(P,{pages:b}),t("div",E,[M,t("div",U,[e(o(h),{href:a.route("claimTypes.create"),as:"button",class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:s(()=>[r(" Ajouter un Type "),e(o($),{class:"-mr-0.5 h-5 w-5"})]),_:1},8,["href"])])]),o(F)(g.claims.data)?(l(),f(T,{key:0,modelValue:d.keyword,"onUpdate:modelValue":m[0]||(m[0]=i=>d.keyword=i),pagination:k.value},{default:s(()=>[n.value.length>0?(l(),p("table",Z,[t("thead",G,[t("tr",null,[e(u,{first:!0},{default:s(()=>[r("Nom")]),_:1}),e(u,null,{default:s(()=>[r("Description")]),_:1}),e(u,null,{default:s(()=>[r("Status")]),_:1}),e(u,null,{default:s(()=>[r("Modifier")]),_:1})])]),t("tbody",H,[(l(!0),p(C,null,A(n.value,i=>(l(),p("tr",{key:i.claim_type_id},[e(_,{first:!0},{default:s(()=>[r(y(i.claim_type_name),1)]),_:2},1024),e(_,null,{default:s(()=>[r(y(i.claim_type_desc),1)]),_:2},1024),e(_,null,{default:s(()=>[t("div",I,[e(S,{link:a.route("claimTypes.update",{claimType:i.claim_type_id}),value:i.claim_type_is_active,obj:"claim_type_is_active"},null,8,["link","value"]),t("span",{class:O([i.claim_type_is_active?"bg-green-50 text-green-700 ring-green-600/20":"bg-red-50 text-red-700 ring-red-600/20","inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"])},y(i.claim_type_is_active?"Activé":"Désactivé"),3)])]),_:2},1024),t("td",J,[t("div",K,[e(o(h),{href:a.route("claimTypes.edit",{claimType:i.claim_type_id}),class:"group flex items-center px-4 py-2 text-sm"},{default:s(()=>[e(o(q),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-cyan-600"})]),_:2},1032,["href"])])])]))),128))])])):(l(),p("div",Q," Aucun élément trouvé."))]),_:1},8,["modelValue","pagination"])):(l(),f(V,{key:1,link:a.route("claimTypes.create"),action:"Nouveau",message:"Créer un nouveau type en appuyant sur ce bouton",title:"Pas de type de réclamation"},null,8,["link"]))])]),_:1}))}};export{oe as default};
