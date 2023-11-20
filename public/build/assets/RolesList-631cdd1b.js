import{_ as w,g as b,h as R}from"./AuthenticatedLayout-3c3c1141.js";import{_ as V}from"./Datatable-b9f77933.js";import{_ as p,a as f}from"./TableData-61a6fd7a.js";import{b as $,r as N,d as B,w as g,o as t,e as _,f as l,g as o,u as y,Z as C,a,c,k as u,F as D,i as L,l as O,O as v,t as h}from"./app-bdcf5fce.js";import{_ as F}from"./EmptyState-ce54bde9.js";import{_ as P}from"./Breadcrumbs-e4217e77.js";import"./logo1637145113-11387d37.js";const j={class:"px-4 sm:px-6 lg:px-8"},A=a("div",{class:"sm:flex sm:items-center"},[a("div",{class:"sm:flex-auto"},[a("h1",{class:"text-2xl font-semibold leading-6 text-gray-900"},"Roles"),a("p",{class:"mt-2 text-sm text-gray-700"}," La liste des roles des utilisateurs de l'application. ")])],-1),E={key:0,class:"min-w-full divide-y divide-gray-300"},S={class:"bg-gray-50"},T={class:"divide-y divide-gray-200 bg-white"},U={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},K={__name:"RolesList",props:{roles:{type:Object}},setup(m){const i=m,k=[{name:"Roles",href:"#",current:!0}],x=$(()=>b(i.roles)),s=N(i.roles.data),n=B({keyword:"",fields:["role_name","role_code"]});return g(()=>n.keyword,function(e){e===""?s.value=i.roles.data:O.post(route("roles.search"),n).then(d=>s.value=d.data)}),g(()=>i.roles,function(e){s.value=e.data,!s.value.length>0&&(e.prev_page_url?v.get(e.prev_page_url):v.get(e.first_page_url))}),(e,d)=>(t(),_(w,null,{default:l(()=>[o(y(C),{title:"Roles"}),a("div",j,[o(P,{pages:k}),A,y(R)(m.roles.data)?(t(),_(V,{key:0,modelValue:n.keyword,"onUpdate:modelValue":d[0]||(d[0]=r=>n.keyword=r),pagination:x.value},{default:l(()=>[s.value.length>0?(t(),c("table",E,[a("thead",S,[a("tr",null,[o(p,{first:!0},{default:l(()=>[u("Nom du Role")]),_:1}),o(p,null,{default:l(()=>[u("Code du Role")]),_:1})])]),a("tbody",T,[(t(!0),c(D,null,L(s.value,r=>(t(),c("tr",{key:r.role_id},[o(f,{first:!0,class:"whitespace-pre-line"},{default:l(()=>[u(h(r.role_name),1)]),_:2},1024),o(f,null,{default:l(()=>[u(h(r.role_code),1)]),_:2},1024)]))),128))])])):(t(),c("div",U," Aucun élément trouvé."))]),_:1},8,["modelValue","pagination"])):(t(),_(F,{key:1,link:e.route("roles.create"),action:"Nouveau",message:"Créer une nouvelle compétence en appuyant sur ce bouton",title:"Pas de Compétence"},null,8,["link"]))])]),_:1}))}};export{K as default};
