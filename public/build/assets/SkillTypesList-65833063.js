import{_ as p,a as _}from"./TableData-61a6fd7a.js";import{_ as w,g as T,h as $}from"./AuthenticatedLayout-3c3c1141.js";import{_ as V}from"./Datatable-b9f77933.js";import{b as B,r as C,d as N,w as h,o,e as f,f as t,g as e,u as n,Z as D,a as s,k as l,m as k,c as m,F as j,i as L,l as O,O as v,t as y}from"./app-bdcf5fce.js";import{r as A,_ as F}from"./EmptyState-ce54bde9.js";import{_ as P}from"./Breadcrumbs-e4217e77.js";import{r as S}from"./PencilSquareIcon-22fd52d6.js";import"./logo1637145113-11387d37.js";const E={class:"px-4 sm:px-6 lg:px-8"},M={class:"sm:flex sm:items-center"},U=s("div",{class:"sm:flex-auto"},[s("h1",{class:"text-2xl font-semibold leading-6 text-gray-900"},"Types de Compétence"),s("p",{class:"mt-2 text-sm text-gray-700"},"La liste des types de compétence.")],-1),Z={class:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},q={key:0,class:"min-w-full divide-y divide-gray-300"},z={class:"bg-gray-50"},G={class:"divide-y divide-gray-200 bg-white"},H={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},I={class:"flex items-center justify-center"},J={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},se={__name:"SkillTypesList",props:{skills:{type:Object}},setup(g){const d=g,x=[{name:"Types de Compétence",href:"#",current:!0}],b=B(()=>T(d.skills)),r=C(d.skills.data),c=N({keyword:"",fields:["skill_type_name"]});return h(()=>c.keyword,function(a){a===""?r.value=d.skills.data:O.post(route("skillTypes.search"),c).then(u=>r.value=u.data)}),h(()=>d.skills,function(a){r.value=a.data,!r.value.length>0&&(a.prev_page_url?v.get(a.prev_page_url):v.get(a.first_page_url))}),(a,u)=>(o(),f(w,null,{default:t(()=>[e(n(D),{title:"Types de Compétences"}),s("div",E,[e(P,{pages:x}),s("div",M,[U,s("div",Z,[e(n(k),{href:a.route("skillTypes.create"),as:"button",class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:t(()=>[l("Ajouter un Type "),e(n(A),{class:"-mr-0.5 h-5 w-5"})]),_:1},8,["href"])])]),n($)(g.skills.data)?(o(),f(V,{key:0,modelValue:c.keyword,"onUpdate:modelValue":u[0]||(u[0]=i=>c.keyword=i),pagination:b.value},{default:t(()=>[r.value.length>0?(o(),m("table",q,[s("thead",z,[s("tr",null,[e(p,{first:!0},{default:t(()=>[l("Nom")]),_:1}),e(p,null,{default:t(()=>[l("Description")]),_:1}),e(p,null,{default:t(()=>[l("Barème")]),_:1}),e(p,null,{default:t(()=>[l("Modifier")]),_:1})])]),s("tbody",G,[(o(!0),m(j,null,L(r.value,i=>(o(),m("tr",{key:i.skill_type_id},[e(_,{first:!0},{default:t(()=>[l(y(i.skill_type_name),1)]),_:2},1024),e(_,null,{default:t(()=>[l(y(i.skill_type_desc),1)]),_:2},1024),e(_,null,{default:t(()=>[l(y(i.skill_type_marking)+" points",1)]),_:2},1024),s("td",H,[s("div",I,[e(n(k),{href:a.route("skillTypes.edit",{skillType:i.skill_type_id}),class:"group flex items-center px-4 py-2 text-sm"},{default:t(()=>[e(n(S),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-cyan-600"})]),_:2},1032,["href"])])])]))),128))])])):(o(),m("div",J," Aucun élément trouvé."))]),_:1},8,["modelValue","pagination"])):(o(),f(F,{key:1,link:a.route("skillTypes.create"),action:"Nouveau",message:"Créer un nouveau type en appuyant sur ce bouton",title:"Pas de type de compétence"},null,8,["link"]))])]),_:1}))}};export{se as default};
