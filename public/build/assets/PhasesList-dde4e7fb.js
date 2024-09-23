import{_ as w}from"./AuthenticatedLayout-e8ebc8e5.js";import{_ as $}from"./Datatable-a7d326b7.js";import{r as A,_ as m,a as _,b as P}from"./EmptyState-cf46cf93.js";import{o as l,c as u,a,b as V,r as B,h as D,w as x,d as f,e as s,f as e,u as r,Z as N,g as n,l as g,F as j,j as C,t as v,n as L,m as z,O as y}from"./app-81706381.js";import{g as O,a as S}from"./helper-df860a3e.js";import{_ as F}from"./Breadcrumbs-7a50f25d.js";import{_ as M}from"./ToggleOnDatatable-b57b9611.js";import{r as E}from"./PencilSquareIcon-0d356612.js";import"./logo1637145113-c7398df9.js";import"./switch-eee1a676.js";import"./use-controllable-476ed86c.js";function H(h,d){return l(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[a("path",{"fill-rule":"evenodd",d:"M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z","clip-rule":"evenodd"})])}const T={class:"px-4 sm:px-6 lg:px-8"},U={class:"sm:flex sm:items-center"},Z=a("div",{class:"sm:flex-auto"},[a("h1",{class:"text-2xl font-semibold leading-6 text-gray-900 dark:text-white"},"Phases d'évaluation"),a("p",{class:"mt-2 text-sm text-gray-700 dark:text-white"}," La liste des phases d'évaluation ")],-1),q={class:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},G={key:0,class:"min-w-full divide-y divide-gray-300 dark:divide-black"},I={class:"bg-gray-50 dark:bg-grayish"},J={class:"divide-y divide-gray-200 dark:divide-black bg-white dark:bg-grayish"},K={class:"flex space-x-4"},Q={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},R={class:"flex items-center"},W={key:1,class:"text-center bg-white dark:bg-grayish text-lg text-gray-600 py-4"},de={__name:"PhasesList",props:{phases:{type:Object}},setup(h){const d=h,k=V(()=>O(d.phases)),o=B(d.phases.data),c=D({keyword:"",fields:["phase_name"]}),b=[{name:"Phase d'évaluation",href:"#",current:!0}];return x(()=>c.keyword,function(t){t===""?o.value=d.phases.data:z.post(route("phases.search"),c).then(p=>o.value=p.data)}),x(()=>d.phases,function(t){o.value=t.data,!o.value.length>0&&(t.prev_page_url?y.get(t.prev_page_url):y.get(t.first_page_url))}),(t,p)=>(l(),f(w,null,{default:s(()=>[e(r(N),{title:"Phases d'évaluation"}),a("div",T,[e(F,{pages:b}),a("div",U,[Z,a("div",q,[e(r(g),{href:t.route("phases.create"),as:"button",class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:s(()=>[n(" Ajouter une phase "),e(r(A),{class:"-mr-0.5 h-5 w-5"})]),_:1},8,["href"])])]),r(S)(h.phases.data)?(l(),f($,{key:0,modelValue:c.keyword,"onUpdate:modelValue":p[0]||(p[0]=i=>c.keyword=i),pagination:k.value},{default:s(()=>[o.value.length>0?(l(),u("table",G,[a("thead",I,[a("tr",null,[e(m,{first:!0},{default:s(()=>[n("Nom")]),_:1}),e(m,null,{default:s(()=>[n("Année de l'évaluation")]),_:1}),e(m,null,{default:s(()=>[n("Activée")]),_:1}),e(m,null,{default:s(()=>[n("Details et modification")]),_:1})])]),a("tbody",J,[(l(!0),u(j,null,C(o.value,i=>(l(),u("tr",{key:i.phase_id},[e(_,{first:!0},{default:s(()=>[n(v(i.phase_name),1)]),_:2},1024),e(_,null,{default:s(()=>[n(v(i.phase_year),1)]),_:2},1024),e(_,null,{default:s(()=>[a("div",K,[e(M,{link:t.route("phases.update-status",{phase:i.phase_id}),value:i.phase_is_active,obj:"phase_is_active"},null,8,["link","value"]),a("span",{class:L([i.phase_is_active?"bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-600 dark:text-white":"bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-600 dark:text-white","rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"])},v(i.phase_is_active?"Activé":"Désactivé"),3)])]),_:2},1024),a("td",Q,[a("div",R,[e(r(g),{href:t.route("phaseSkills.show",{phaseSkill:i.phase_id}),class:"group flex items-center px-4 py-2 text-sm"},{default:s(()=>[e(r(H),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-amber-600"})]),_:2},1032,["href"]),e(r(g),{href:t.route("phases.edit",{phase:i.phase_id}),class:"group flex items-center px-4 py-2 text-sm"},{default:s(()=>[e(r(E),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-cyan-600"})]),_:2},1032,["href"])])])]))),128))])])):(l(),u("div",W," Aucun élément trouvé."))]),_:1},8,["modelValue","pagination"])):(l(),f(P,{key:1,link:t.route("phases.create"),action:"Nouveau",message:"Créer un nouveau type en appuyant sur ce bouton",title:"Pas de type de réclamation"},null,8,["link"]))])]),_:1}))}};export{de as default};