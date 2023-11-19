import{o as r,c as _,a as e,e as y,s as E,t as n,T as I,b as H,f as a,g as t,u as l,Z as O,h as j,k as o,p as T,n as m,j as k,i as b,F as v,O as L}from"./app-f8ae13a8.js";import{r as M,a as B,_ as P}from"./AuthenticatedLayout-2813ffe8.js";import{_ as Z}from"./Breadcrumbs-bf684264.js";import{_ as D}from"./SectionTitle-777eca96.js";import{_ as F}from"./InputLabel-e4c54691.js";import{_ as G}from"./SubmitButton-3c340819.js";import{_ as g,a as u}from"./TableData-ffcd2249.js";import{S as J}from"./SimpleTable-bafb54ce.js";import{r as N}from"./ChevronUpDownIcon-04ce2a86.js";import{r as $}from"./CheckIcon-2be9309a.js";import{N as q,H as C,U as S,B as U}from"./listbox-5a91eab3.js";import"./logo1637145113-11387d37.js";import"./use-controllable-9cbca8e5.js";const K={class:"rounded-lg bg-white px-4 pt-5 shadow sm:px-6 sm:pt-6"},Q={class:"absolute rounded-md bg-cyan-600 p-3"},R={class:"ml-16 truncate text-sm font-medium text-gray-500"},W={class:"ml-16 flex items-baseline"},X={class:"text-2xl font-semibold text-cyan-700"},Y={__name:"Indicator",props:{name:{},value:{},icon:{}},setup(d){return(p,V)=>(r(),_("div",K,[e("dt",null,[e("div",Q,[(r(),y(E(d.icon),{"aria-hidden":"true",class:"h-6 w-6 text-white"}))]),e("p",R,n(d.name),1)]),e("dd",W,[e("p",X,n(d.value),1)])]))}},ee={class:"px-4 sm:px-6 lg:px-8"},te=e("div",{class:"sm:flex sm:items-center"},[e("div",{class:"sm:flex-auto"},[e("h1",{class:"text-2xl font-semibold leading-6 text-gray-900"},"Dashboard"),e("p",{class:"mt-2 text-sm text-gray-700"}," Statistiques des évaluations. ")])],-1),se={class:"mt-8 bg-white shadow sm:rounded-lg"},ae={class:"px-4 py-5 sm:p-6"},le=e("h3",{class:"text-base font-semibold leading-6 text-gray-900"},"Filtres",-1),oe=e("div",{class:"mt-2 max-w-xl text-sm text-gray-500"},[e("p",null,"Filtrer les données en fonction de l'année et de la direction")],-1),ie=["onSubmit"],ne={class:"w-full sm:max-w-xl"},re={class:"mt-2"},de={class:"relative mt-2"},ce={class:"block truncate"},ue={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},me={class:"w-full sm:max-w-xl"},_e={class:"mt-2"},fe={class:"relative mt-2"},pe={class:"block truncate"},he={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},ge={class:"mt-7"},xe={class:"mt-8 sm:flex sm:items-center"},be={class:"sm:flex-auto"},ve={class:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"},ye={class:"mt-8 sm:flex sm:items-center"},we={class:"sm:flex-auto"},ke={class:"min-w-full divide-y divide-gray-300"},$e={class:"bg-gray-50"},Se={class:"divide-y divide-gray-200 bg-white"},He={__name:"AdminDashboard",props:{users:{},orgs:{},rated:{},not_rated:{},phases:{},phase:{},org:{},trainings:{}},setup(d){const p=d,V=[{id:1,name:"Agents",stat:p.users,icon:M},{id:3,name:"Évaluations validées",stat:p.rated,icon:B},{id:3,name:"Évaluations non validées",stat:p.not_rated,icon:B}],z=[{name:"Statistiques",href:"#",current:!0}],f=I({phase_id:parseInt(p.phase),org_id:parseInt(p.org)}),A=()=>{L.get(route("admin-dashboard.index",{phase_id:f.phase_id,org_id:f.org_id}))},x=H(()=>{let w=0,h=0,s=0,i=0;return p.trainings.forEach(c=>{w+=c.trainings_by_evaluators,h+=c.trainings_by_evaluated,s+=c.asked_by_both,i+=c.trainings_count}),{by_evaluators:w,by_evaluated:h,by_both:s,all:i}});return(w,h)=>(r(),y(P,null,{default:a(()=>[t(l(O),{title:"Statistiques"}),e("div",ee,[t(Z,{pages:z}),te,e("div",se,[e("div",ae,[le,oe,e("form",{class:"mt-5 sm:flex sm:items-center gap-10",onSubmit:j(A,["prevent"])},[e("div",ne,[t(F,null,{default:a(()=>[o("Direction")]),_:1}),e("div",re,[t(l(U),{modelValue:l(f).org_id,"onUpdate:modelValue":h[0]||(h[0]=s=>l(f).org_id=s),as:"div"},{default:a(()=>[e("div",de,[t(l(q),{class:"relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 sm:text-sm sm:leading-6"},{default:a(()=>{var s;return[e("span",ce,n(((s=d.orgs.filter(i=>i.org_id===l(f).org_id)[0])==null?void 0:s.org_name)||"Tout"),1),e("span",ue,[t(l(N),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])]}),_:1}),t(T,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:a(()=>[t(l(C),{class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:a(()=>[t(l(S),{value:-1,as:"template"},{default:a(({active:s,selected:i})=>[e("li",{class:m([s?"bg-cyan-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[e("span",{class:m([i?"font-semibold":"font-normal","block truncate"])},"Tout",2),i?(r(),_("span",{key:0,class:m([s?"text-white":"text-cyan-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[t(l($),{"aria-hidden":"true",class:"h-5 w-5"})],2)):k("",!0)],2)]),_:1}),(r(!0),_(v,null,b(d.orgs,s=>(r(),y(l(S),{key:s.org_id,value:s.org_id,as:"template"},{default:a(({active:i,selected:c})=>[e("li",{class:m([i?"bg-cyan-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[e("span",{class:m([c?"font-semibold":"font-normal","block truncate"])},n(s.org_name),3),c?(r(),_("span",{key:0,class:m([i?"text-white":"text-cyan-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[t(l($),{"aria-hidden":"true",class:"h-5 w-5"})],2)):k("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])])]),e("div",me,[t(F,null,{default:a(()=>[o("Année d'évaluation")]),_:1}),e("div",_e,[t(l(U),{modelValue:l(f).phase_id,"onUpdate:modelValue":h[1]||(h[1]=s=>l(f).phase_id=s),as:"div"},{default:a(()=>[e("div",fe,[t(l(q),{class:"relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 sm:text-sm sm:leading-6"},{default:a(()=>{var s;return[e("span",pe,n((s=d.phases.filter(i=>i.phase_id===l(f).phase_id)[0])==null?void 0:s.phase_year),1),e("span",he,[t(l(N),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])]}),_:1}),t(T,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:a(()=>[t(l(C),{class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:a(()=>[(r(!0),_(v,null,b(d.phases,s=>(r(),y(l(S),{key:s.phase_id,value:s.phase_id,as:"template"},{default:a(({active:i,selected:c})=>[e("li",{class:m([i?"bg-cyan-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[e("span",{class:m([c?"font-semibold":"font-normal","block truncate"])},n(s.phase_year),3),c?(r(),_("span",{key:0,class:m([i?"text-white":"text-cyan-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[t(l($),{"aria-hidden":"true",class:"h-5 w-5"})],2)):k("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])])]),e("div",ge,[t(G,{class:"sm:ml-3 sm:mt-0 sm:w-auto",type:"submit"},{default:a(()=>[o("Filtrer")]),_:1})])],40,ie)])]),e("div",xe,[e("div",be,[t(D,{title:"Statistiques"})])]),e("dl",ve,[(r(),_(v,null,b(V,s=>t(Y,{key:s.id,icon:s.icon,name:s.name,value:s.stat,class:"relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"},null,8,["icon","name","value"])),64))]),e("div",ye,[e("div",we,[t(D,{title:"Besoins en Formations"})])]),t(J,null,{default:a(()=>[e("table",ke,[e("thead",$e,[e("tr",null,[t(g,{first:!0},{default:a(()=>[o("Domaine")]),_:1}),t(g,{class:"whitespace-nowrap"},{default:a(()=>[o("Proposée par la hiérarchie")]),_:1}),t(g,{class:"whitespace-pre-line"},{default:a(()=>[o("Souhaitée par les agents")]),_:1}),t(g,{class:"whitespace-pre-line"},{default:a(()=>[o("Exprimés par les deux parties")]),_:1}),t(g,null,{default:a(()=>[o("Totaux")]),_:1})])]),e("tbody",Se,[(r(!0),_(v,null,b(d.trainings,s=>(r(),_("tr",{key:s.training_type_id},[t(u,{first:!0},{default:a(()=>[o(n(s.training_type_name),1)]),_:2},1024),t(u,null,{default:a(()=>[o(n(s.trainings_by_evaluators),1)]),_:2},1024),t(u,null,{default:a(()=>[o(n(s.trainings_by_evaluated),1)]),_:2},1024),t(u,null,{default:a(()=>[o(n(s.asked_by_both),1)]),_:2},1024),t(u,{class:"font-bold"},{default:a(()=>[o(n(s.trainings_count),1)]),_:2},1024)]))),128)),e("tr",null,[t(u,{first:!0},{default:a(()=>[o("Totaux")]),_:1}),t(u,{class:"font-bold"},{default:a(()=>[o(n(x.value.by_evaluators),1)]),_:1}),t(u,{class:"font-bold"},{default:a(()=>[o(n(x.value.by_evaluated),1)]),_:1}),t(u,{class:"font-bold"},{default:a(()=>[o(n(x.value.by_both),1)]),_:1}),t(u,{class:"font-bold"},{default:a(()=>[o(n(x.value.all),1)]),_:1})])])])]),_:1})])]),_:1}))}};export{He as default};
