import{_ as D,g as E,h as O}from"./AuthenticatedLayout-2813ffe8.js";import{b as A,d as T,r as k,w as $,x as q,o as l,e as b,f as a,g as t,u as p,Z as z,a as o,t as _,k as n,m as S,c as r,F as P,i as F,l as L,O as x,n as M,j as U,Q}from"./app-f8ae13a8.js";import{_ as Z}from"./Breadcrumbs-bf684264.js";import{_ as m,a as h}from"./TableData-ffcd2249.js";import{_ as G}from"./Datatable-d78cc678.js";import{_ as H}from"./ToggleOnDatatable-8199d89b.js";import{_ as I}from"./EmptyState-109dd5b1.js";import{_ as J}from"./Separator-709f6ad0.js";import{_ as K}from"./SectionTitle-777eca96.js";import{r as R}from"./PencilSquareIcon-f2f51d98.js";import{r as W}from"./CheckIcon-2be9309a.js";import"./logo1637145113-11387d37.js";import"./switch-98af9228.js";import"./use-controllable-9cbca8e5.js";import"./PlusIcon-30f9dbdb.js";const X={class:"px-4 sm:px-6 lg:px-8"},Y={class:"sm:flex sm:items-center"},ee={class:"sm:flex-auto"},se={class:"text-2xl font-semibold leading-6 text-gray-900"},te=o("p",{class:"mt-2 text-sm text-gray-700"}," Details et paramètres de l'évaluation. ",-1),ae={class:"space-x-2 mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},ie={key:0,class:"min-w-full divide-y divide-gray-300"},le={class:"bg-gray-50"},oe={class:"divide-y divide-gray-200 bg-white"},ne={key:0,class:"flex items-center justify-center space-x-2"},re={class:"flex items-center justify-center space-x-4"},ue=["value"],ce=o("p",{class:"ml-0.5"},"points",-1),de=["onClick"],pe=["onClick"],_e={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},je={__name:"PhaseSkills",props:{phase:{type:Object},skills:{type:Object}},setup(f){const u=f,V=[{name:"Phases d'évaluation",href:route("phases.index"),current:!1},{name:"Compétences",href:"#",current:!0}],j=A(()=>E(u.skills)),d=T({keyword:"",fields:["skill_name"],phase_id:u.phase.phase_id}),c=k(u.skills.data),v=k([]),y=k([]),w=()=>c.value.forEach(s=>v.value.push({id:s.skill_id,edit:!1})),C=s=>v.value.filter(i=>i.id===s)[0].edit,B=s=>{const i=y.value[s];v.value.find(e=>e.id===s).edit=!1,x.put(route("phaseSkills.update",{phaseSkill:u.phase.phase_id}),{skill_id:s,phase_skill_marking:i.value},{onError:e=>{Q().props.flash.notify={type:"error",message:e.phase_skill_marking}},onSuccess:()=>d.keyword=""})};return w(),$(()=>d.keyword,function(s){s===""?c.value=u.skills.data:L.post(route("phaseSkills.search"),d).then(i=>{c.value=i.data,w()}).catch(i=>console.log(i))}),$(()=>u.skills,function(s){c.value=s.data,!c.value.length>0&&(s.prev_page_url?x.get(s.prev_page_url):x.get(s.first_page_url))}),q(()=>y.value=[]),(s,i)=>(l(),b(D,null,{default:a(()=>[t(p(z),{title:"Paramètre de Phase"}),o("div",X,[t(Z,{pages:V}),o("div",Y,[o("div",ee,[o("h1",se,"Paramètres "+_(f.phase.phase_name),1),te]),o("div",ae,[t(p(S),{href:s.route("phaseSkills.show",{phaseSkill:f.phase.phase_id}),as:"button",class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:a(()=>[n(" Compétences ")]),_:1},8,["href"]),t(p(S),{href:s.route("periods.show",{period:f.phase.phase_id}),as:"button",class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:a(()=>[n(" Périodes d'évaluation ")]),_:1},8,["href"])])]),t(J,{title:"Compétences"}),t(K,{desc:"La liste des compétences que les évaluateurs pourront noter lors de cette évaluation. Vous pouvez changer le barème de chaque compétence pour cette évaluation sans affecter les autres.",title:"Compétences"}),p(O)(u.skills.data)?(l(),b(G,{key:0,modelValue:d.keyword,"onUpdate:modelValue":i[1]||(i[1]=e=>d.keyword=e),pagination:j.value},{default:a(()=>[c.value.length>0?(l(),r("table",ie,[o("thead",le,[o("tr",null,[t(m,{first:!0},{default:a(()=>[n("Nom")]),_:1}),t(m,null,{default:a(()=>[n("Status pour cette phase")]),_:1}),t(m,null,{default:a(()=>[n("Barème pour cette phase")]),_:1}),t(m,null,{default:a(()=>[n("College")]),_:1}),t(m,null,{default:a(()=>[n("Type")]),_:1})])]),o("tbody",oe,[(l(!0),r(P,null,F(c.value,e=>(l(),r("tr",{key:e.skill_id},[t(h,{first:!0,class:"whitespace-pre-line"},{default:a(()=>[n(_(e.skill_name),1)]),_:2},1024),t(h,null,{default:a(()=>[e.group?U("",!0):(l(),r("div",ne,[t(H,{data:{phase_skill_is_active:e.pivot.phase_skill_is_active,skill_id:e.skill_id},link:s.route("phaseSkills.update",{phaseSkill:f.phase.phase_id}),value:e.pivot.phase_skill_is_active,obj:"phase_skill_is_active",onToggled:i[0]||(i[0]=g=>d.keyword="")},null,8,["data","link","value"]),o("span",{class:M([e.pivot.phase_skill_is_active?"bg-green-50 text-green-700 ring-green-600/20":"bg-red-50 text-red-700 ring-red-600/20","rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"])},_(e.pivot.phase_skill_is_active?"Activé":"Désactivé"),3)]))]),_:2},1024),t(h,null,{default:a(()=>[o("div",re,[C(e.skill_id)?(l(),r("input",{key:1,ref_for:!0,ref:g=>{y.value[e.skill_id]=g},value:e.pivot.phase_skill_marking,class:"w-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6",type:"text"},null,8,ue)):(l(),r(P,{key:0},[n(_(e.pivot.phase_skill_marking),1)],64)),ce,C(e.skill_id)?(l(),r("button",{key:3,class:"rounded-full bg-cyan-600 p-2 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600",type:"button",onClick:g=>B(e.skill_id)},[t(p(W),{"aria-hidden":"true",class:"h-5 w-5"})],8,pe)):(l(),r("button",{key:2,class:"rounded-full bg-cyan-600 p-2 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600",type:"button",onClick:g=>v.value.find(N=>N.id===e.skill_id).edit=!0},[t(p(R),{"aria-hidden":"true",class:"h-5 w-5"})],8,de))])]),_:2},1024),t(h,null,{default:a(()=>[n(_(e.group?e.group.group_name:"Commun"),1)]),_:2},1024),t(h,null,{default:a(()=>[n(_(e.type.skill_type_name),1)]),_:2},1024)]))),128))])])):(l(),r("div",_e," Aucun élément trouvé."))]),_:1},8,["modelValue","pagination"])):(l(),b(I,{key:1,link:s.route("phases.create"),action:"Nouveau",message:"Ajouter des compétences a évaluer lors de cette phase.",title:"Pas de Compétence affecté à cette phase."},null,8,["link"]))])]),_:1}))}};export{je as default};