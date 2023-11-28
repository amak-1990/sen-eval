import{r as _,w as V,o as b,d as w,u as t,e as d,T as D,f as o,Z as P,a as s,t as Y,g as c,m as v,i as $}from"./app-2a089cf5.js";import{_ as S}from"./AuthenticatedLayout-a74cb3f1.js";import{_ as j}from"./Breadcrumbs-6398e3e4.js";import{_ as k}from"./Separator-59f6b2cc.js";import{_ as N}from"./SectionTitle-0dc7701a.js";import{_ as A}from"./FormIndications-17f37fff.js";import{_ as B}from"./InputLabel-b11fe90f.js";import{_ as C}from"./SubmitButton-4134ce53.js";import{_ as g}from"./InputError-28730c1d.js";import{m as y,p as x,i as l}from"./helper-18252d35.js";import{G as E}from"./vue-tailwind-datepicker-d6c111b2.js";import"./logo1637145113-c7398df9.js";import"./CheckIcon-4be47fd9.js";const q={__name:"RangePicker",props:{modelValue:{type:Array,required:!0},invalid:{type:Boolean}},emits:["update:modelValue"],setup(r,{emit:e}){const u=r,n=_([]);n.value=[y(u.modelValue[0]).format("DD-MM-YYYY"),y(u.modelValue[1]).format("DD-MM-YYYY")];const f=_({date:"DD-MM-YYYY",month:"MMMM"});V(()=>n.value,function(i){i.length>0?e("update:modelValue",[x(i[0],"dd.mm.yyyy"),x(i[1],"dd.mm.yyyy")]):e("update:modelValue",[])});const a=_({shortcuts:{today:"Aujourd'hui",yesterday:"Hier",past:i=>`${i} derniers jours`,currentMonth:"Ce mois ci",pastMonth:"Dernier mois"},footer:{apply:"Choisir",cancel:"Annuler"}});return(i,p)=>(b(),w(t(E),{modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=m=>n.value=m),formatter:f.value,"input-classes":[r.invalid?"ring-red-400 focus:ring-red-600":"focus:ring-cyan-700","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"],options:a.value,i18n:"fr",separator:" au ","use-range":""},null,8,["modelValue","formatter","input-classes","options"]))}},G={class:"px-4 sm:px-6 lg:px-8"},O={class:"sm:flex sm:items-center"},T={class:"sm:flex-auto"},U={class:"text-2xl font-semibold leading-6 text-gray-900"},F=s("p",{class:"mt-2 text-sm text-gray-700"}," Details et paramètres de l'évaluation. ",-1),H={class:"space-x-2 mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},R={class:"mt-8 flow-root"},Z=["onSubmit"],z={class:"px-4 py-6 sm:p-8"},I={class:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},J={class:"col-span-full"},K={class:"mt-2"},L={class:"flex flex-col space-y-2"},Q={class:"flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"},pe={__name:"SavePhasePeriod",props:{phase:{type:Object},period:{type:Object,default:{}}},setup(r){const e=r,u=[{name:"Phase d'évaluation",href:route("phases.index"),current:!1},{name:"Périodes d'évaluation",href:route("periods.show",{period:e.phase.phase_id}),current:!0},{name:l(e.period)?"Nouveau":"Modifier",href:"#",current:!0}],n=l(e.period)?"Nouvelle Période d'évaluation":"Modifier la période d'évaluation",f=l(e.period)?"Ajouter une période d'évaluation à cette phase.":"Modifier une période d'évaluation de cette phase";let a;const i=()=>{a=D(l(e.period)?{phase_id:e.phase.phase_id,period:[new Date,new Date]}:{phase_id:e.phase.phase_id,period:[e.period.evaluation_period_start,e.period.evaluation_period_end]})},p=()=>{l(e.period)?a.post(route("periods.store"),{onSuccess:()=>i()}):a.put(route("periods.update",{period:e.period.evaluation_period_id}),{onSuccess:()=>i()})};return i(),(m,h)=>(b(),w(S,null,{default:d(()=>[o(t(P),{title:"Nouvelle Période de Phase"}),s("div",G,[o(j,{pages:u}),s("div",O,[s("div",T,[s("h1",U,"Paramètres "+Y(r.phase.phase_name),1),F]),s("div",H,[o(t(v),{href:m.route("phaseSkills.show",{phaseSkill:r.phase.phase_id}),as:"button",class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:d(()=>[c(" Compétences ")]),_:1},8,["href"]),o(t(v),{href:m.route("periods.show",{period:r.phase.phase_id}),as:"button",class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:d(()=>[c(" Périodes d'évaluation ")]),_:1},8,["href"])])]),o(k,{title:"Périodes"}),o(N,{desc:t(f),title:t(n)},null,8,["desc","title"]),s("div",R,[s("form",{class:"bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2",onSubmit:$(p,["prevent"])},[s("div",z,[s("div",I,[s("div",J,[o(B,{for:"start_date",required:""},{default:d(()=>[c("Période d'évaluation")]),_:1}),s("div",K,[o(q,{modelValue:t(a).period,"onUpdate:modelValue":h[0]||(h[0]=M=>t(a).period=M),invalid:t(a).errors.evaluation_period_end!==void 0},null,8,["modelValue","invalid"])]),s("div",L,[o(g,{message:t(a).errors.Evaluation_period_start},null,8,["message"]),o(g,{message:t(a).errors.evaluation_period_end},null,8,["message"])])])])]),s("div",Q,[o(A),o(C,{processing:t(a).processing},{default:d(()=>[c(" Enregistrer")]),_:1},8,["processing"])])],40,Z)])])]),_:1}))}};export{pe as default};
