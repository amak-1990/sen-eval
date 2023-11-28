import{b as y,o as v,d as g,e as c,T as x,f as o,u as t,Z as h,a as s,t as b,i as S,g as d}from"./app-2a089cf5.js";import{_ as V}from"./AuthenticatedLayout-a74cb3f1.js";import{_ as l}from"./InputLabel-b11fe90f.js";import{_ as T}from"./TextInput-2d214972.js";import{_ as $}from"./TextArea-5cd6d66b.js";import{_ as N}from"./SubmitButton-4134ce53.js";import{i as r}from"./helper-18252d35.js";import{_ as w}from"./InputError-28730c1d.js";import{_ as j}from"./Breadcrumbs-6398e3e4.js";import{_ as B}from"./FormIndications-17f37fff.js";import{_ as D}from"./Switch-5e109191.js";import"./logo1637145113-c7398df9.js";import"./CheckIcon-4be47fd9.js";import"./switch-1618a498.js";import"./use-controllable-595812ac.js";const M={class:"px-4 sm:px-6 lg:px-8"},U={class:"sm:flex sm:items-center"},k={class:"sm:flex-auto"},A={class:"text-2xl font-semibold leading-6 text-gray-900"},E=s("p",{class:"mt-2 text-sm text-gray-700"},"Ajouter ou modifier un type de sanction applicable lors de l'évaluation.",-1),q={class:"mt-8 flow-root"},C=["onSubmit"],F={class:"px-4 py-6 sm:p-8"},O={class:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},Z={class:"sm:col-span-4"},z={class:"mt-2"},G={class:"col-span-full"},H={class:"mt-2"},I={class:"col-span-full"},J={class:"mt-2"},K={class:"flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"},_s={__name:"SaveSanction",props:{sanction:{type:Object,default:{}}},setup(p){const n=p,m=y(()=>r(n.sanction)?"Nouveau Type de Sanction":"Modifier Type de Sanction"),u=[{name:"Types de Sanction",href:route("sanctionTypes.index"),current:!1},{name:r(n.sanction)?"Nouveau":"Modifier",href:"#",current:!0}];let e;const _=()=>{e=x(r(n.sanction)?{sanction_type_name:"",sanction_type_desc:"",sanction_type_is_active:1}:{sanction_type_name:n.sanction.sanction_type_name||"",sanction_type_desc:n.sanction.sanction_type_desc||"",sanction_type_is_active:n.sanction.sanction_type_is_active})},f=()=>{r(n.sanction)?e.post(route("sanctionTypes.store"),{onSuccess:()=>_()}):e.put(route("sanctionTypes.update",{sanctionType:n.sanction.sanction_type_id}),{onSuccess:()=>_()})};return _(),(L,i)=>(v(),g(V,null,{default:c(()=>[o(t(h),{title:"Nouveau type de Sanction"}),s("div",M,[o(j,{pages:u}),s("div",U,[s("div",k,[s("h1",A,b(m.value),1),E])]),s("div",q,[s("form",{class:"bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2",onSubmit:S(f,["prevent"])},[s("div",F,[s("div",O,[s("div",Z,[o(l,{for:"name",required:""},{default:c(()=>[d("Nom de la sanction")]),_:1}),s("div",z,[o(T,{id:"name",modelValue:t(e).sanction_type_name,"onUpdate:modelValue":i[0]||(i[0]=a=>t(e).sanction_type_name=a),invalid:t(e).errors.sanction_type_name!==void 0,autofocus:"",placeholder:"Nom"},null,8,["modelValue","invalid"])]),o(w,{message:t(e).errors.sanction_type_name},null,8,["message"])]),s("div",G,[o(l,{for:"description"},{default:c(()=>[d("Description")]),_:1}),s("div",H,[o($,{id:"description",modelValue:t(e).sanction_type_desc,"onUpdate:modelValue":i[1]||(i[1]=a=>t(e).sanction_type_desc=a),invalid:t(e).errors.sanction_type_desc!==void 0,placeholder:"Description"},null,8,["modelValue","invalid"])])]),s("div",I,[s("div",J,[o(D,{modelValue:t(e).sanction_type_is_active,"onUpdate:modelValue":i[2]||(i[2]=a=>t(e).sanction_type_is_active=a),desc:"Sera t-il possible de proposer ou demander ce type de formation lors des évaluations",label:"Actif"},null,8,["modelValue"])])])])]),s("div",K,[o(B),o(N,{processing:t(e).processing},{default:c(()=>[d(" Enregistrer ")]),_:1},8,["processing"])])],40,C)])])]),_:1}))}};export{_s as default};
