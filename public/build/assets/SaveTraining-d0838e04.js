import{b as f,o as y,d as v,e as r,T as x,f as s,u as t,Z as h,a as e,t as b,i as V,g as m}from"./app-2a089cf5.js";import{_ as T}from"./AuthenticatedLayout-a74cb3f1.js";import{_ as l}from"./InputLabel-b11fe90f.js";import{_ as $}from"./TextInput-2d214972.js";import{_ as N}from"./TextArea-5cd6d66b.js";import{_ as w}from"./SubmitButton-4134ce53.js";import{i as d}from"./helper-18252d35.js";import{_ as S}from"./InputError-28730c1d.js";import{_ as F}from"./Breadcrumbs-6398e3e4.js";import{_ as j}from"./FormIndications-17f37fff.js";import{_ as B}from"./Switch-5e109191.js";import"./logo1637145113-c7398df9.js";import"./CheckIcon-4be47fd9.js";import"./switch-1618a498.js";import"./use-controllable-595812ac.js";const D={class:"px-4 sm:px-6 lg:px-8"},M={class:"sm:flex sm:items-center"},U={class:"sm:flex-auto"},k={class:"text-2xl font-semibold leading-6 text-gray-900"},q=e("p",{class:"mt-2 text-sm text-gray-700"},"Ajouter ou modifier un type de formation qu'il sera possible de proposer ou demander lors de l'évaluation.",-1),A={class:"mt-8 flow-root"},E=["onSubmit"],C={class:"px-4 py-6 sm:p-8"},O={class:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},Z={class:"sm:col-span-4"},z={class:"mt-2"},G={class:"col-span-full"},H={class:"mt-2"},I={class:"col-span-full"},J={class:"mt-2"},K={class:"flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"},_e={__name:"SaveTraining",props:{training:{type:Object,default:{}}},setup(p){const n=p,c=f(()=>d(n.training)?"Nouveau Type de Formation":"Modifier Type de Formation"),u=[{name:"Types de Formation",href:route("trainingTypes.index"),current:!1},{name:d(n.training)?"Nouveau":"Modifier",href:"#",current:!0}];let i;const _=()=>{i=x(d(n.training)?{training_type_name:"",training_type_desc:"",training_type_is_active:1}:{training_type_name:n.training.training_type_name||"",training_type_desc:n.training.training_type_desc||"",training_type_is_active:n.training.training_type_is_active})},g=()=>{d(n.training)?i.post(route("trainingTypes.store"),{onSuccess:()=>_()}):i.put(route("trainingTypes.update",{trainingType:n.training.training_type_id}),{onSuccess:()=>_()})};return _(),(L,o)=>(y(),v(T,null,{default:r(()=>[s(t(h),{title:"Nouveau type de Formation"}),e("div",D,[s(F,{pages:u}),e("div",M,[e("div",U,[e("h1",k,b(c.value),1),q])]),e("div",A,[e("form",{class:"bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2",onSubmit:V(g,["prevent"])},[e("div",C,[e("div",O,[e("div",Z,[s(l,{for:"name",required:""},{default:r(()=>[m("Nom de la formation")]),_:1}),e("div",z,[s($,{id:"name",modelValue:t(i).training_type_name,"onUpdate:modelValue":o[0]||(o[0]=a=>t(i).training_type_name=a),invalid:t(i).errors.training_type_name!==void 0,autofocus:"",placeholder:"Nom"},null,8,["modelValue","invalid"])]),s(S,{message:t(i).errors.training_type_name},null,8,["message"])]),e("div",G,[s(l,{for:"description"},{default:r(()=>[m("Description")]),_:1}),e("div",H,[s(N,{id:"description",modelValue:t(i).training_type_desc,"onUpdate:modelValue":o[1]||(o[1]=a=>t(i).training_type_desc=a),invalid:t(i).errors.training_type_desc!==void 0,placeholder:"Description"},null,8,["modelValue","invalid"])])]),e("div",I,[e("div",J,[s(B,{modelValue:t(i).training_type_is_active,"onUpdate:modelValue":o[2]||(o[2]=a=>t(i).training_type_is_active=a),desc:"Sera t-il possible de proposer ou demander ce type de formation lors des évaluations",label:"Actif"},null,8,["modelValue"])])])])]),e("div",K,[s(j),s(w,{processing:t(i).processing},{default:r(()=>[m(" Enregistrer ")]),_:1},8,["processing"])])],40,E)])])]),_:1}))}};export{_e as default};
