import{o as f,d as v,e as d,T as h,f as s,u as t,Z as b,a as e,i as y,g as r,q as V,v as w,n as j}from"./app-2a089cf5.js";import{_ as $}from"./AuthenticatedLayout-a74cb3f1.js";import{_ as M}from"./Breadcrumbs-6398e3e4.js";import{_ as U}from"./FormIndications-17f37fff.js";import{_ as n}from"./InputLabel-b11fe90f.js";import{_ as k}from"./SubmitButton-4134ce53.js";import{c as q,m as S}from"./helper-18252d35.js";import{_ as c}from"./TextInput-2d214972.js";import{_ as D}from"./TextArea-5cd6d66b.js";import{_ as L}from"./Switch-5e109191.js";import{_ as O}from"./GoalActivity-100b7965.js";import{_ as B}from"./NumberInput-d20bfc0d.js";import{_}from"./InputError-28730c1d.js";import{r as m}from"./LockClosedIcon-376b5158.js";import"./logo1637145113-c7398df9.js";import"./CheckIcon-4be47fd9.js";import"./switch-1618a498.js";import"./use-controllable-595812ac.js";const C={class:"px-4 sm:px-6 lg:px-8"},T=e("div",{class:"sm:flex sm:items-center"},[e("div",{class:"sm:flex-auto"},[e("h1",{class:"text-2xl font-semibold leading-6 text-gray-900"},"Objectif"),e("p",{class:"mt-2 text-sm text-gray-700"}," Details de l'Objectif ")])],-1),Y=["onSubmit"],N={class:"grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"},z=e("div",null,[e("h2",{class:"text-base font-semibold leading-7 text-gray-900"},"Libellé et Valeur Cible"),e("p",{class:"mt-1 text-sm leading-6 text-gray-400"},"Informations sur le libellé de l'objectif ainsi que la valeur cible.")],-1),F={class:"md:col-span-2"},I={class:"grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"},A={class:"sm:col-span-full"},E={class:"relative mt-2"},G={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"},P={class:"sm:col-span-full"},Q={class:"relative mt-2"},Z={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"},H={class:"grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8 border-t-2"},J=e("div",null,[e("h2",{class:"text-base font-semibold leading-7 text-gray-900"},"Disponibilité et Échéance"),e("p",{class:"mt-1 text-sm leading-6 text-gray-400"},"Les moyens pour atteindre l'objectif sont ils réunis ? Qu'elle sera l'échéance pour cette objectif. ")],-1),K={class:"md:col-span-2"},R={class:"grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"},W={class:"sm:col-span-3"},X={class:"relative mt-2"},ee=["value"],se={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"},te={class:"sm:col-span-3"},ae={class:"mt-2"},le={class:"grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8 border-t-2"},oe=e("div",null,[e("h2",{class:"text-base font-semibold leading-7 text-gray-900"},"Évaluation"),e("p",{class:"mt-1 text-sm leading-6 text-gray-400"},"Informations relatives à l'évaluation de cet objectif.")],-1),ie={class:"md:col-span-2"},de={class:"grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"},re={class:"sm:col-span-3"},ne={class:"relative mt-2"},me={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"},ce={class:"sm:col-span-3"},ge={class:"relative mt-2"},ue={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"},_e={class:"mt-8 col-span-full"},pe={class:"relative mt-2"},xe={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"},fe={class:"grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 border-t-2"},ve=e("h2",{class:"text-base font-semibold leading-7 text-gray-900"},"Suivi de l'objectif",-1),he=e("p",{class:"mt-1 text-sm leading-6 text-gray-400"},"Faites le suivi de cet objectif renseignant le taux d'évaluation et en laissant un commentaire.",-1),be={class:"md:col-span-1"},ye={class:"grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"},Ve={class:"col-span-full"},we={class:"mt-2 flex rounded-md shadow-sm"},je=e("span",{class:"inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm"},"%",-1),$e={class:"flex flex-col space-y-2"},Me={class:"col-span-full"},Ue={class:"relative mt-2"},ke={class:"flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"},He={__name:"SaveGoal",props:{goal:{type:Object,default:{}},history:{}},setup(l){const g=l,p=[{name:"Mes Objectifs",href:route("goals.index"),current:!1},{name:"Modifier",href:"#",current:!0}];let i;const u=()=>{i=h({comment:"",goal_rate:g.goal.goal_rate})},x=()=>{i.put(route("goals.update",{goal:g.goal.goal_id}),{onSuccess:()=>u(),preserveScroll:!0})};return u(),(qe,a)=>(f(),v($,null,{default:d(()=>[s(t(b),{title:"Suivi Objectif"}),e("div",C,[s(M,{pages:p}),T,e("form",{class:"mt-8 shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg bg-white",onSubmit:y(x,["prevent"])},[e("div",N,[z,e("div",F,[e("div",I,[e("div",A,[s(n,{for:"start_date",required:""},{default:d(()=>[r("Libelle")]),_:1}),e("div",E,[s(c,{modelValue:l.goal.goal_name,"onUpdate:modelValue":a[0]||(a[0]=o=>l.goal.goal_name=o),disabled:!0},null,8,["modelValue"]),e("div",G,[s(t(m),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])])]),e("div",P,[s(n,{for:"start_date",required:""},{default:d(()=>[r("Libelle")]),_:1}),e("div",Q,[s(c,{modelValue:l.goal.goal_expected_result,"onUpdate:modelValue":a[1]||(a[1]=o=>l.goal.goal_expected_result=o),disabled:!0},null,8,["modelValue"]),e("div",Z,[s(t(m),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])])])])])]),e("div",H,[J,e("div",K,[e("div",R,[e("div",W,[s(n,{for:"start_date",required:""},{default:d(()=>[r("Échéance")]),_:1}),e("div",X,[e("input",{disabled:!0,value:t(q)(t(S)(l.goal.goal_expected_date).format("DD MMMM YYYY")),class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"},null,8,ee),e("div",se,[s(t(m),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])])]),e("div",te,[e("div",ae,[s(L,{modelValue:l.goal.goal_means_available,"onUpdate:modelValue":a[2]||(a[2]=o=>l.goal.goal_means_available=o),disabled:!0,desc:"Les moyens pour accomplir cette objectif sont t-il disponible ?",label:"Disponibilité des moyens"},null,8,["modelValue"])])])])])]),e("div",le,[oe,e("div",ie,[e("div",de,[e("div",re,[s(n,null,{default:d(()=>[r("Année d'évaluation")]),_:1}),e("div",ne,[s(c,{modelValue:l.goal.phase.phase_year,"onUpdate:modelValue":a[3]||(a[3]=o=>l.goal.phase.phase_year=o),disabled:!0},null,8,["modelValue"]),e("div",me,[s(t(m),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])])]),e("div",ce,[s(n,null,{default:d(()=>[r("Période d'évaluation")]),_:1}),e("div",ge,[s(c,{modelValue:l.goal.period.evaluation_period_name,"onUpdate:modelValue":a[4]||(a[4]=o=>l.goal.period.evaluation_period_name=o),disabled:!0},null,8,["modelValue"]),e("div",ue,[s(t(m),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])])]),e("div",_e,[s(n,{for:"start_date",required:""},{default:d(()=>[r("Barème")]),_:1}),e("div",pe,[s(B,{modelValue:l.goal.goal_marking,"onUpdate:modelValue":a[5]||(a[5]=o=>l.goal.goal_marking=o),disabled:!0},null,8,["modelValue"]),e("div",xe,[s(t(m),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])])])])])]),e("div",fe,[e("div",null,[ve,he,s(O,{history:l.history},null,8,["history"])]),e("div",be,[e("div",ye,[e("div",Ve,[s(n,{for:"start_date",required:""},{default:d(()=>[r("Taux d'avancement")]),_:1}),e("div",we,[V(e("input",{"onUpdate:modelValue":a[6]||(a[6]=o=>t(i).goal_rate=o),class:j([t(i).errors.goal_rate!==void 0?"focus:ring-red-400 ring-red-500":"focus:ring-cyan-600 ring-gray-300","block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"]),maxlength:"3",type:"number"},null,2),[[w,t(i).goal_rate]]),je]),e("div",$e,[s(_,{message:t(i).errors.goal_rate},null,8,["message"])])]),e("div",Me,[s(n,{for:"start_date"},{default:d(()=>[r("Commentaire")]),_:1}),e("div",Ue,[s(D,{modelValue:t(i).comment,"onUpdate:modelValue":a[7]||(a[7]=o=>t(i).comment=o),invalid:t(i).errors.comment!==void 0},null,8,["modelValue","invalid"])]),s(_,{message:t(i).errors.comment},null,8,["message"])])])])]),e("div",ke,[s(U),s(k,{processing:t(i).processing},{default:d(()=>[r("Enregistrer")]),_:1},8,["processing"])])],40,Y)])]),_:1}))}};export{He as default};
