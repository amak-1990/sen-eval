import{o as l,e as p,f as o,T as E,g as t,u as e,Z as V,a as s,t as d,k as g,m as j,h as B,n as u,c as m,p as S,i as M,F as C,j as b,Q as O}from"./app-90af8dda.js";import{i as c,_ as F,h}from"./AuthenticatedLayout-21404ea0.js";import{_ as T}from"./Breadcrumbs-ade623fb.js";import{_ as U}from"./Separator-c2622fba.js";import{_ as q}from"./SectionTitle-b90e301d.js";import{_ as z}from"./FormIndications-f2e32a35.js";import{_ as A}from"./InputLabel-cbeee303.js";import{_ as D}from"./SubmitButton-2f245c71.js";import{_ as H}from"./InputError-a97cb17d.js";import{r as L}from"./ChevronDoubleRightIcon-4429990f.js";import{r as P}from"./ChevronUpDownIcon-8a8054f0.js";import{r as Q}from"./CheckIcon-c5d064d9.js";import{N as R,H as Z,B as G,U as I}from"./listbox-f01e3530.js";import"./logo1637145113-11387d37.js";import"./use-controllable-ba619346.js";const J={class:"px-4 sm:px-6 lg:px-8"},K={class:"sm:flex sm:items-center"},W={class:"sm:flex-auto"},X={class:"text-2xl font-semibold leading-6 text-gray-900"},Y={class:"mt-2 text-sm text-gray-700"},ee={class:"space-x-2 mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},se={class:"mt-8 flow-root"},te=["onSubmit"],ae={class:"px-4 py-6 sm:p-8"},ie={class:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},ne={class:"sm:col-span-4"},oe={class:"mt-2"},re={class:"relative mt-2"},le={key:0,class:"block truncate"},de={key:1,class:"block truncate"},ce={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},ue={class:"flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"},Ve={__name:"SaveRating",props:{agent:{type:Object},phases:{type:Object},evaluation:{type:Object,required:!1,default:{}}},setup(i){const a=i,w=c(a.evaluation)?"Nouvelle evaluation":"Modifier l'évaluation",k=c(a.evaluation)?"Créer une evaluation pour cet agent":"Modifier une evaluation pour cet agent",$=[{name:"Evaluations",href:route("agent-ratings.index",{agent:a.agent.user_id}),current:!1},{name:c(a.evaluation)?"Nouvelle":"Modifier",href:"#",current:!0}];let n;const f=()=>{n=E(c(a.evaluation)?{phase_id:h(a.phases)?a.phases[0].phase_id:null,evaluated_id:a.agent.user_id}:{phase_id:a.evaluation.phase_id,evaluated_id:a.agent.user_id})},N=()=>{c(a.evaluation)?n.post(route("agent-ratings.store",{agent:a.agent.user_id}),{onSuccess:()=>f(),onError:_=>O().props.flash.notify={type:"error",message:_.phase_id}}):n.put(route("agent-ratings.update",{agent:a.agent.user_id,rating:a.rating.rating_id}),{onSuccess:()=>f()})};return f(),(_,v)=>(l(),p(F,null,{default:o(()=>[t(e(V),{title:"Paramètre de Phase"}),s("div",J,[t(T,{pages:$}),s("div",K,[s("div",W,[s("h1",X,"Evaluations de "+d(i.agent.user_first_name+" "+i.agent.user_last_name),1),s("p",Y," Liste des evaluations de "+d(i.agent.user_first_name+" "+i.agent.user_last_name)+". Matricule : "+d(i.agent.user_matricule),1)]),s("div",ee,[t(e(j),{href:_.route("agent-goals.index",{agent:i.agent.user_id}),as:"button",class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:o(()=>[g(" Objectif "),t(e(L),{class:"-mr-0.5 h-5 w-5"})]),_:1},8,["href"])])]),t(U,{title:"Evaluations"}),t(q,{desc:e(k),title:e(w)},null,8,["desc","title"]),s("div",se,[s("form",{class:"bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2",onSubmit:B(N,["prevent"])},[s("div",ae,[s("div",ie,[s("div",ne,[t(A,{required:""},{default:o(()=>[g("Année d'évaluation")]),_:1}),s("div",oe,[t(e(G),{modelValue:e(n).phase_id,"onUpdate:modelValue":v[0]||(v[0]=r=>e(n).phase_id=r),as:"div"},{default:o(()=>[s("div",re,[t(e(R),{class:u([e(n).errors.phase_id?"ring-red-300":"ring-gray-300","relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-cyan-600 sm:text-sm sm:leading-6"])},{default:o(()=>[e(h)(i.phases)?(l(),m("span",le,d(i.phases.filter(r=>r.phase_id===e(n).phase_id)[0].phase_year),1)):(l(),m("span",de,"Aucune année disponible pour l'instant.")),s("span",ce,[t(e(P),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])]),_:1},8,["class"]),t(S,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:o(()=>[e(h)(i.phases)?(l(),p(e(Z),{key:0,class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:o(()=>[(l(!0),m(C,null,M(i.phases,r=>(l(),p(e(I),{key:r.phase_id,value:r.phase_id,as:"template"},{default:o(({active:x,selected:y})=>[s("li",{class:u([x?"bg-cyan-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[s("span",{class:u([y?"font-semibold":"font-normal","block truncate"])},d(r.phase_year),3),y?(l(),m("span",{key:0,class:u([x?"text-white":"text-cyan-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[t(e(Q),{"aria-hidden":"true",class:"h-5 w-5"})],2)):b("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})):b("",!0)]),_:1})])]),_:1},8,["modelValue"])]),t(H,{message:e(n).errors.phase_id},null,8,["message"])])])]),s("div",ue,[t(z),t(D,{disabled:e(n).processing},{default:o(()=>[g(" Enregistrer")]),_:1},8,["disabled"])])],40,te)])])]),_:1}))}};export{Ve as default};
