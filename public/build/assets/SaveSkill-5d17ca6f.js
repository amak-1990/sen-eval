import{b as w,o as d,d as y,e as o,T as N,f as i,u as e,Z as $,a as s,t as u,i as B,g as n,p as S,c as h,j as C,F as U,n as f,k as j}from"./app-2a089cf5.js";import{_ as q}from"./AuthenticatedLayout-a74cb3f1.js";import{_ as m}from"./InputLabel-b11fe90f.js";import{_ as T}from"./TextInput-2d214972.js";import{_ as A}from"./TextArea-5cd6d66b.js";import{_ as D}from"./SubmitButton-4134ce53.js";import{i as c}from"./helper-18252d35.js";import{_ as k}from"./InputError-28730c1d.js";import{_ as E}from"./Breadcrumbs-6398e3e4.js";import{_ as F}from"./FormIndications-17f37fff.js";import{_ as M}from"./NumberInput-d20bfc0d.js";import{_ as z}from"./Switch-5e109191.js";import{r as H}from"./ChevronUpDownIcon-dfef16cc.js";import{r as L}from"./CheckIcon-4be47fd9.js";import{N as O,H as Z,B as G,U as I}from"./listbox-d34d1a30.js";import"./logo1637145113-c7398df9.js";import"./switch-1618a498.js";import"./use-controllable-595812ac.js";const J={class:"px-4 sm:px-6 lg:px-8"},K={class:"sm:flex sm:items-center"},P={class:"sm:flex-auto"},Q={class:"text-2xl font-semibold leading-6 text-gray-900"},R=s("p",{class:"mt-2 text-sm text-gray-700"},"Ajouter ou modifier une compétence qui sera notée lors de l'évaluation.",-1),W={class:"mt-8 flow-root"},X=["onSubmit"],Y={class:"px-4 py-6 sm:p-8"},ee={class:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},se={class:"sm:col-span-4"},le={class:"mt-2"},ie={class:"sm:col-span-4"},te={class:"mt-2"},ae={class:"col-span-full"},oe={class:"mt-2"},re={class:"sm:col-span-4"},ne={class:"mt-2"},de={class:"relative mt-2"},me={class:"block truncate"},ce={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},_e={class:"col-span-full"},pe={class:"mt-2"},ue={class:"flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"},Ae={__name:"SaveSkill",props:{skill:{type:Object,default:{}},types:{type:Array}},setup(_){const a=_,x=w(()=>c(a.skill)?"Nouvelle Compétence":"Modifier la Compétence"),b=[{name:"Compétences",href:route("skills.index"),current:!1},{name:c(a.skill)?"Nouveau":"Modifier",href:"#",current:!0}];let l;const p=()=>{l=N(c(a.skill)?{skill_name:"",skill_marking:5,skill_desc:"",skill_type_id:a.types[0].skill_type_id,skill_is_active:1}:{skill_name:a.skill.skill_name||"",skill_marking:a.skill.skill_marking||5,skill_desc:a.skill.skill_desc||"",skill_type_id:a.skill.skill_type_id||a.types[0].skill_type_id,skill_is_active:a.skill.skill_is_active})},V=()=>{c(a.skill)?l.post(route("skills.store"),{onSuccess:()=>p()}):l.put(route("skills.update",{skill:a.skill.skill_id}),{onSuccess:()=>p()})};return p(),(fe,r)=>(d(),y(q,null,{default:o(()=>[i(e($),{title:"Nouvelle Compétence"}),s("div",J,[i(E,{pages:b}),s("div",K,[s("div",P,[s("h1",Q,u(x.value),1),R])]),s("div",W,[s("form",{class:"bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2",onSubmit:B(V,["prevent"])},[s("div",Y,[s("div",ee,[s("div",se,[i(m,{for:"name",required:""},{default:o(()=>[n("Nom de la compétence")]),_:1}),s("div",le,[i(T,{id:"name",modelValue:e(l).skill_name,"onUpdate:modelValue":r[0]||(r[0]=t=>e(l).skill_name=t),invalid:e(l).errors.skill_name!==void 0,autofocus:"",placeholder:"Nom"},null,8,["modelValue","invalid"])]),i(k,{message:e(l).errors.skill_name},null,8,["message"])]),s("div",ie,[i(m,{for:"name",required:""},{default:o(()=>[n("Barème")]),_:1}),s("div",te,[i(M,{id:"marking",modelValue:e(l).skill_marking,"onUpdate:modelValue":r[1]||(r[1]=t=>e(l).skill_marking=t),invalid:e(l).errors.skill_marking!==void 0,placeholder:"Barème"},null,8,["modelValue","invalid"])]),i(k,{message:e(l).errors.skill_marking},null,8,["message"])]),s("div",ae,[i(m,{for:"description",required:""},{default:o(()=>[n("Description")]),_:1}),s("div",oe,[i(A,{id:"description",modelValue:e(l).skill_desc,"onUpdate:modelValue":r[2]||(r[2]=t=>e(l).skill_desc=t),invalid:e(l).errors.skill_desc!==void 0,placeholder:"Description"},null,8,["modelValue","invalid"])]),i(k,{message:e(l).errors.skill_desc},null,8,["message"])]),s("div",re,[i(m,null,{default:o(()=>[n("Type")]),_:1}),s("div",ne,[i(e(G),{modelValue:e(l).skill_type_id,"onUpdate:modelValue":r[3]||(r[3]=t=>e(l).skill_type_id=t),as:"div"},{default:o(()=>[s("div",de,[i(e(O),{class:"relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-700 sm:text-sm sm:leading-6"},{default:o(()=>[s("span",me,u(_.types.filter(t=>t.skill_type_id===e(l).skill_type_id)[0].skill_type_name),1),s("span",ce,[i(e(H),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])]),_:1}),i(S,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:o(()=>[i(e(Z),{class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:o(()=>[(d(!0),h(U,null,C(_.types,t=>(d(),y(e(I),{key:t.skill_type_id,value:t.skill_type_id,as:"template"},{default:o(({active:g,selected:v})=>[s("li",{class:f([g?"bg-cyan-600  text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[s("span",{class:f([v?"font-semibold":"font-normal","block truncate"])},u(t.skill_type_name),3),v?(d(),h("span",{key:0,class:f([g?"text-white":"text-cyan-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[i(e(L),{"aria-hidden":"true",class:"h-5 w-5"})],2)):j("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])])]),s("div",_e,[s("div",pe,[i(z,{modelValue:e(l).skill_is_active,"onUpdate:modelValue":r[4]||(r[4]=t=>e(l).skill_is_active=t),desc:"Sera t-il possible de proposer ou demander ce type de formation lors des évaluations",label:"Actif"},null,8,["modelValue"])])])])]),s("div",ue,[i(F),i(D,{processing:e(l).processing},{default:o(()=>[n(" Enregistrer ")]),_:1},8,["processing"])])],40,X)])])]),_:1}))}};export{Ae as default};
