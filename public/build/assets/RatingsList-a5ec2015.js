import{_ as v}from"./AuthenticatedLayout-e8ebc8e5.js";import{b as k,r as b,h as w,w as V,o as i,d as f,e as t,f as e,u as _,Z as $,a,c as m,g as r,F as j,j as B,t as l,n as N,l as D,m as L}from"./app-81706381.js";import{_ as M}from"./Breadcrumbs-7a50f25d.js";import{g as A,a as C}from"./helper-df860a3e.js";import{_ as E}from"./Datatable-a7d326b7.js";import{_ as n,a as o,b as F}from"./EmptyState-cf46cf93.js";import{r as O}from"./EyeIcon-ca28a428.js";import"./logo1637145113-c7398df9.js";const P={class:"px-4 sm:px-6 lg:px-8"},q=a("div",{class:"sm:flex sm:items-center"},[a("div",{class:"sm:flex-auto"},[a("h1",{class:"text-2xl font-semibold leading-6 text-gray-900 dark:text-white"},"Mes Évaluations"),a("p",{class:"mt-2 text-sm text-gray-700 dark:text-white"}," Liste de mes Évaluations. ")])],-1),z={key:0,class:"min-w-full divide-y divide-gray-300 dark:divide-black"},R={class:"bg-gray-50 dark:bg-grayish"},S={class:"divide-y divide-gray-200 dark:divide-black bg-white dark:bg-grayish"},T={class:"flex-shrink-0"},U={class:"flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan-600"},Z={class:"text-cyan-700"},G={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},H={class:"flex items-center justify-center"},I={key:1,class:"text-center bg-white dark:bg-grayish text-lg text-gray-600 py-4"},te={__name:"RatingsList",props:{agent:{type:Object},ratings:{type:Object}},setup(h){const d=h,x=[{name:"Mes Évaluations",href:"#",current:!0}],y=k(()=>A(d.ratings)),u=b(d.ratings.data),c=w({keyword:"",fields:["goal_name","goal_expected_result"]});return V(()=>c.keyword,function(p){p===""?u.value=d.ratings.data:L.post(route("agent-goals.search",{agent:d.agent.user_id}),c).then(g=>u.value=g.data)}),(p,g)=>(i(),f(v,null,{default:t(()=>[e(_($),{title:"Mes Èvaluations"}),a("div",P,[e(M,{pages:x}),q,_(C)(h.ratings.data)?(i(),f(E,{key:0,modelValue:c.keyword,"onUpdate:modelValue":g[0]||(g[0]=s=>c.keyword=s),pagination:y.value},{default:t(()=>[u.value.length>0?(i(),m("table",z,[a("thead",R,[a("tr",null,[e(n,{first:!0},{default:t(()=>[r("Évaluateur")]),_:1}),e(n,null,{default:t(()=>[r("Évalué")]),_:1}),e(n,null,{default:t(()=>[r("Année")]),_:1}),e(n,null,{default:t(()=>[r("Note")]),_:1}),e(n,null,{default:t(()=>[r("Validation")]),_:1}),e(n)])]),a("tbody",S,[(i(!0),m(j,null,B(u.value,s=>(i(),m("tr",{key:s.rating_id},[e(o,{first:!0,class:"whitespace-pre-line"},{default:t(()=>[r(l(s.evaluator.user_display_name+" "+s.evaluator.user_matricule),1)]),_:2},1024),e(o,{class:"whitespace-pre-line"},{default:t(()=>[r(l(s.evaluated.user_display_name+" "+s.evaluated.user_matricule),1)]),_:2},1024),e(o,null,{default:t(()=>[r(l(s.phase.phase_year),1)]),_:2},1024),e(o,null,{default:t(()=>[a("span",T,[a("span",U,[a("span",Z,l(s.rating_mark),1)])])]),_:2},1024),e(o,null,{default:t(()=>[a("span",{class:N([s.rating_is_validated?"bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-600 dark:text-white":"bg-orange-50 text-orange-700 ring-orange-600/20 dark:bg-orange-600 dark:text-white","inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"])},l(s.rating_is_validated?"Validé":"En attente"),3)]),_:2},1024),a("td",G,[a("div",H,[e(_(D),{href:p.route("ratings.show",{rating:s.rating_id}),class:"group flex items-center px-4 py-2 text-sm"},{default:t(()=>[e(_(O),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-cyan-600"})]),_:2},1032,["href"])])])]))),128))])])):(i(),m("div",I,"Aucun élément trouvé."))]),_:1},8,["modelValue","pagination"])):(i(),f(F,{key:1,message:"Votre supérieur hiérarchique ne vous a pas encore évaluer",title:"Pas d'évaluations"}))])]),_:1}))}};export{te as default};