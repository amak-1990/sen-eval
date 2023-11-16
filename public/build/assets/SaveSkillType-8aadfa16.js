import{b as y,o as g,e as v,f as r,T as x,g as i,u as l,Z as h,a as e,t as b,h as V,k as n}from"./app-90af8dda.js";import{i as d,_ as T}from"./AuthenticatedLayout-21404ea0.js";import{_}from"./InputLabel-cbeee303.js";import{_ as $}from"./TextInput-7a951507.js";import{_ as N}from"./TextArea-a368e73f.js";import{_ as w}from"./SubmitButton-2f245c71.js";import{_ as p}from"./InputError-a97cb17d.js";import{_ as S}from"./Breadcrumbs-ade623fb.js";import{_ as B}from"./FormIndications-f2e32a35.js";import{_ as C}from"./NumberInput-69c3205c.js";import"./logo1637145113-11387d37.js";import"./CheckIcon-c5d064d9.js";const j={class:"px-4 sm:px-6 lg:px-8"},D={class:"sm:flex sm:items-center"},M={class:"sm:flex-auto"},U={class:"text-2xl font-semibold leading-6 text-gray-900"},q=e("p",{class:"mt-2 text-sm text-gray-700"},"Ajouter ou modifier un type de compétence.",-1),E={class:"mt-8 flow-root"},A=["onSubmit"],F={class:"px-4 py-6 sm:p-8"},O={class:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},Z={class:"sm:col-span-4"},z={class:"mt-2"},G={class:"sm:col-span-4"},H={class:"mt-2"},I={class:"col-span-full"},J={class:"mt-2"},K={class:"flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"},ae={__name:"SaveSkillType",props:{skill:{type:Object,default:{}}},setup(c){const t=c,u=y(()=>d(t.skill)?"Nouveau Type de Compétence":"Modifier Type de Compétence"),f=[{name:"Types de Compétence",href:route("skillTypes.index"),current:!1},{name:d(t.skill)?"Nouveau":"Modifier",href:"#",current:!0}];let s;const m=()=>{s=x(d(t.skill)?{skill_type_name:"",skill_type_marking:10,skill_type_desc:""}:{skill_type_name:t.skill.skill_type_name||"",skill_type_marking:t.skill.skill_type_marking||10,skill_type_desc:t.skill.skill_type_desc||""})},k=()=>{d(t.skill)?s.post(route("skillTypes.store"),{onSuccess:()=>m()}):s.put(route("skillTypes.update",{skillType:t.skill.skill_type_id}),{onSuccess:()=>m()})};return m(),(L,o)=>(g(),v(T,null,{default:r(()=>[i(l(h),{title:"Nouveau type de Compétence"}),e("div",j,[i(S,{pages:f}),e("div",D,[e("div",M,[e("h1",U,b(u.value),1),q])]),e("div",E,[e("form",{class:"bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2",onSubmit:V(k,["prevent"])},[e("div",F,[e("div",O,[e("div",Z,[i(_,{for:"name",required:""},{default:r(()=>[n("Nom de la compétence")]),_:1}),e("div",z,[i($,{id:"name",modelValue:l(s).skill_type_name,"onUpdate:modelValue":o[0]||(o[0]=a=>l(s).skill_type_name=a),invalid:l(s).errors.skill_type_name!==void 0,autofocus:"",placeholder:"Nom"},null,8,["modelValue","invalid"])]),i(p,{message:l(s).errors.skill_type_name},null,8,["message"])]),e("div",G,[i(_,{for:"marking",required:""},{default:r(()=>[n("Barème")]),_:1}),e("div",H,[i(C,{id:"marking",modelValue:l(s).skill_type_marking,"onUpdate:modelValue":o[1]||(o[1]=a=>l(s).skill_type_marking=a),invalid:l(s).errors.skill_type_marking!==void 0,placeholder:"Barème"},null,8,["modelValue","invalid"])]),i(p,{message:l(s).errors.skill_type_marking},null,8,["message"])]),e("div",I,[i(_,{for:"description"},{default:r(()=>[n("Description")]),_:1}),e("div",J,[i(N,{id:"description",modelValue:l(s).skill_type_desc,"onUpdate:modelValue":o[2]||(o[2]=a=>l(s).skill_type_desc=a),invalid:l(s).errors.skill_type_desc!==void 0,placeholder:"Description"},null,8,["modelValue","invalid"])])])])]),e("div",K,[i(B),i(w,{disabled:l(s).processing},{default:r(()=>[n(" Enregistrer ")]),_:1},8,["disabled"])])],40,A)])])]),_:1}))}};export{ae as default};
