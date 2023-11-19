import{b as y,o as v,e as x,f as m,T as g,g as t,u as a,Z as h,a as e,t as b,h as V,k as r}from"./app-f8ae13a8.js";import{i as c,_ as T}from"./AuthenticatedLayout-2813ffe8.js";import{_}from"./InputLabel-e4c54691.js";import{_ as $}from"./TextInput-baf5395b.js";import{_ as N}from"./TextArea-bea4a24a.js";import{_ as w}from"./SubmitButton-3c340819.js";import{_ as S}from"./InputError-5ad9c794.js";import{_ as R}from"./Breadcrumbs-bf684264.js";import{_ as j}from"./FormIndications-589d8c17.js";import{_ as k}from"./Switch-23c6c231.js";import"./logo1637145113-11387d37.js";import"./CheckIcon-2be9309a.js";import"./switch-98af9228.js";import"./use-controllable-9cbca8e5.js";const B={class:"px-4 sm:px-6 lg:px-8"},D={class:"sm:flex sm:items-center"},M={class:"sm:flex-auto"},U={class:"text-2xl font-semibold leading-6 text-gray-900"},q=e("p",{class:"mt-2 text-sm text-gray-700"},"Ajouter ou modifier un type de réclamation qu'il sera possible de faire lors de l'évaluation.",-1),A={class:"mt-8 flow-root"},C=["onSubmit"],E={class:"px-4 py-6 sm:p-8"},F={class:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},O={class:"sm:col-span-4"},Z={class:"mt-2"},z={class:"col-span-full"},G={class:"mt-2"},H={class:"col-span-full"},I={class:"mt-2"},J={class:"flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"},ce={__name:"SaveClaim",props:{claim:{type:Object,default:{}}},setup(n){const i=n,p=y(()=>c(i.claim)?"Nouveau Type de Réclamation":"Modifier Type de Réclamation"),u=[{name:"Types de Réclamation",href:route("claimTypes.index"),current:!1},{name:c(i.claim)?"Nouveau":"Modifier",href:"#",current:!0}];let s;const d=()=>{s=g(c(i.claim)?{claim_type_name:"",claim_type_desc:"",claim_type_is_active:1}:{claim_type_name:i.claim.claim_type_name||"",claim_type_desc:i.claim.claim_type_desc||"",claim_type_is_active:i.claim.claim_type_is_active})},f=()=>{c(i.claim)?s.post(route("claimTypes.store"),{onSuccess:()=>d()}):s.put(route("claimTypes.update",{claimType:i.claim.claim_type_id}),{onSuccess:()=>d()})};return d(),(K,o)=>(v(),x(T,null,{default:m(()=>[t(a(h),{title:"Nouveau type de Réclamation"}),e("div",B,[t(R,{pages:u}),e("div",D,[e("div",M,[e("h1",U,b(p.value),1),q])]),e("div",A,[e("form",{class:"bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2",onSubmit:V(f,["prevent"])},[e("div",E,[e("div",F,[e("div",O,[t(_,{for:"name",required:""},{default:m(()=>[r("Nom de la Réclamation")]),_:1}),e("div",Z,[t($,{id:"name",modelValue:a(s).claim_type_name,"onUpdate:modelValue":o[0]||(o[0]=l=>a(s).claim_type_name=l),invalid:a(s).errors.claim_type_name!==void 0,autofocus:"",placeholder:"Nom"},null,8,["modelValue","invalid"])]),t(S,{message:a(s).errors.claim_type_name},null,8,["message"])]),e("div",z,[t(_,{for:"description"},{default:m(()=>[r("Description")]),_:1}),e("div",G,[t(N,{id:"description",modelValue:a(s).claim_type_desc,"onUpdate:modelValue":o[1]||(o[1]=l=>a(s).claim_type_desc=l),invalid:a(s).errors.claim_type_desc!==void 0,placeholder:"Description"},null,8,["modelValue","invalid"])])]),e("div",H,[e("div",I,[t(k,{modelValue:a(s).claim_type_is_active,"onUpdate:modelValue":o[2]||(o[2]=l=>a(s).claim_type_is_active=l),desc:"Sera t-il possible de proposer ou demander ce type de formation lors des évaluations",label:"Actif"},null,8,["modelValue"])])])])]),e("div",J,[t(j),t(w,{disabled:a(s).processing},{default:m(()=>[r(" Enregistrer")]),_:1},8,["disabled"])])],40,C)])])]),_:1}))}};export{ce as default};
