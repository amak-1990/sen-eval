import{b as y,o as v,e as x,f as c,T as g,g as o,u as t,Z as h,a as s,t as b,h as S,k as r}from"./app-90af8dda.js";import{i as d,_ as V}from"./AuthenticatedLayout-21404ea0.js";import{_ as l}from"./InputLabel-cbeee303.js";import{_ as T}from"./TextInput-7a951507.js";import{_ as $}from"./TextArea-a368e73f.js";import{_ as N}from"./SubmitButton-2f245c71.js";import{_ as w}from"./InputError-a97cb17d.js";import{_ as j}from"./Breadcrumbs-ade623fb.js";import{_ as k}from"./FormIndications-f2e32a35.js";import{_ as B}from"./Switch-902365a3.js";import"./logo1637145113-11387d37.js";import"./CheckIcon-c5d064d9.js";import"./switch-0df1c575.js";import"./use-controllable-ba619346.js";const D={class:"px-4 sm:px-6 lg:px-8"},M={class:"sm:flex sm:items-center"},U={class:"sm:flex-auto"},A={class:"text-2xl font-semibold leading-6 text-gray-900"},E=s("p",{class:"mt-2 text-sm text-gray-700"},"Ajouter ou modifier un type de sanction applicable lors de l'évaluation.",-1),q={class:"mt-8 flow-root"},C=["onSubmit"],F={class:"px-4 py-6 sm:p-8"},O={class:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},Z={class:"sm:col-span-4"},z={class:"mt-2"},G={class:"col-span-full"},H={class:"mt-2"},I={class:"col-span-full"},J={class:"mt-2"},K={class:"flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"},ds={__name:"SaveSanction",props:{sanction:{type:Object,default:{}}},setup(p){const n=p,m=y(()=>d(n.sanction)?"Nouveau Type de Sanction":"Modifier Type de Sanction"),u=[{name:"Types de Sanction",href:route("sanctionTypes.index"),current:!1},{name:d(n.sanction)?"Nouveau":"Modifier",href:"#",current:!0}];let e;const _=()=>{e=g(d(n.sanction)?{sanction_type_name:"",sanction_type_desc:"",sanction_type_is_active:1}:{sanction_type_name:n.sanction.sanction_type_name||"",sanction_type_desc:n.sanction.sanction_type_desc||"",sanction_type_is_active:n.sanction.sanction_type_is_active})},f=()=>{d(n.sanction)?e.post(route("sanctionTypes.store"),{onSuccess:()=>_()}):e.put(route("sanctionTypes.update",{sanctionType:n.sanction.sanction_type_id}),{onSuccess:()=>_()})};return _(),(L,a)=>(v(),x(V,null,{default:c(()=>[o(t(h),{title:"Nouveau type de Sanction"}),s("div",D,[o(j,{pages:u}),s("div",M,[s("div",U,[s("h1",A,b(m.value),1),E])]),s("div",q,[s("form",{class:"bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2",onSubmit:S(f,["prevent"])},[s("div",F,[s("div",O,[s("div",Z,[o(l,{for:"name",required:""},{default:c(()=>[r("Nom de la sanction")]),_:1}),s("div",z,[o(T,{id:"name",modelValue:t(e).sanction_type_name,"onUpdate:modelValue":a[0]||(a[0]=i=>t(e).sanction_type_name=i),invalid:t(e).errors.sanction_type_name!==void 0,autofocus:"",placeholder:"Nom"},null,8,["modelValue","invalid"])]),o(w,{message:t(e).errors.sanction_type_name},null,8,["message"])]),s("div",G,[o(l,{for:"description"},{default:c(()=>[r("Description")]),_:1}),s("div",H,[o($,{id:"description",modelValue:t(e).sanction_type_desc,"onUpdate:modelValue":a[1]||(a[1]=i=>t(e).sanction_type_desc=i),invalid:t(e).errors.sanction_type_desc!==void 0,placeholder:"Description"},null,8,["modelValue","invalid"])])]),s("div",I,[s("div",J,[o(B,{modelValue:t(e).sanction_type_is_active,"onUpdate:modelValue":a[2]||(a[2]=i=>t(e).sanction_type_is_active=i),desc:"Sera t-il possible de proposer ou demander ce type de formation lors des évaluations",label:"Actif"},null,8,["modelValue"])])])])]),s("div",K,[o(k),o(N,{disabled:t(e).processing},{default:c(()=>[r(" Enregistrer ")]),_:1},8,["disabled"])])],40,C)])])]),_:1}))}};export{ds as default};
