import{r as D,w as z,o as c,d as V,u as s,e as i,T as G,f as t,Z as A,a as e,t as h,g as d,m as H,i as P,q as U,v as q,n as m,p as M,c as y,j as N,F as B,k as $}from"./app-c4f187be.js";import{_ as R}from"./AuthenticatedLayout-94538ec7.js";import{_ as Q}from"./Breadcrumbs-407b3470.js";import{_ as Z}from"./Separator-74b7feab.js";import{_ as I}from"./SectionTitle-4e9cfd73.js";import{_ as J}from"./FormIndications-abfac2c3.js";import{_ as u}from"./InputLabel-9c315d9e.js";import{_ as K}from"./SubmitButton-a9fe8e59.js";import{_ as p}from"./InputError-90ce686a.js";import{m as W,p as X,i as f,a as O}from"./helper-c9a85e48.js";import{_ as ee}from"./TextInput-de892849.js";import{_ as se}from"./TextArea-d4be9570.js";import{_ as ae}from"./Switch-961abc10.js";import{G as te}from"./vue-tailwind-datepicker-fb681ae5.js";import{_ as le}from"./NumberInput-71589d65.js";import{_ as oe}from"./GoalActivity-066ceba7.js";import{r as ie}from"./ChevronDoubleRightIcon-d9ca88f9.js";import{r as S}from"./ChevronUpDownIcon-b3e6edea.js";import{r as Y}from"./CheckIcon-8d9f9564.js";import{N as C,H as F,B as L,U as T}from"./listbox-6e1bf4ed.js";import"./logo1637145113-c7398df9.js";import"./switch-6b92d620.js";import"./use-controllable-186a6d72.js";const ne={__name:"DatePicker",props:{modelValue:{type:Date,required:!0},invalid:{type:Boolean}},emits:["update:modelValue"],setup(r,{emit:o}){const k=r,_=D([]);_.value=[W(k.modelValue).format("DD-MM-YYYY")];const j=D({date:"DD-MM-YYYY",month:"MM"});return z(()=>_.value,function(g){o("update:modelValue",X(g[0],"dd.mm.yyyy"))}),(g,a)=>(c(),V(s(te),{modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=b=>_.value=b),formatter:j.value,"input-classes":[r.invalid?"ring-red-400 focus:ring-red-600":"focus:ring-cyan-700","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"],"as-single":"",i18n:"fr"},null,8,["modelValue","formatter","input-classes"]))}},re={class:"px-4 sm:px-6 lg:px-8"},de={class:"sm:flex sm:items-center"},ce={class:"sm:flex-auto"},me={class:"text-2xl font-semibold leading-6 text-gray-900"},ue=e("p",{class:"mt-2 text-sm text-gray-700"}," Objectifs de l'agent. ",-1),ge={class:"space-x-2 mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},_e=["onSubmit"],pe={class:"grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"},fe=e("div",null,[e("h2",{class:"text-base font-semibold leading-7 text-gray-900"},"Libellé et Valeur Cible"),e("p",{class:"mt-1 text-sm leading-6 text-gray-400"},"Renseigner le libellé de l'objectif ainsi que la valeur cible.")],-1),xe={class:"md:col-span-2"},ve={class:"grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"},he={class:"sm:col-span-full"},ye={class:"mt-2"},be={class:"flex flex-col space-y-2"},we={class:"sm:col-span-full"},Ve={class:"mt-2 flex rounded-md shadow-sm"},ke=e("span",{class:"inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm"},"%",-1),je={class:"flex flex-col space-y-2"},$e={class:"grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8 border-t-2"},De=e("div",null,[e("h2",{class:"text-base font-semibold leading-7 text-gray-900"},"Disponibilité et Échéance"),e("p",{class:"mt-1 text-sm leading-6 text-gray-400"},"Les moyens pour atteindre l'objectif sont ils réunis ? Qu'elle sera l'échéance pour cette objectif. ")],-1),Ue={class:"md:col-span-2"},qe={class:"grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"},Me={class:"sm:col-span-3"},Ne={class:"mt-2"},Be={class:"flex flex-col space-y-2"},Oe={class:"sm:col-span-3"},Se={class:"mt-2"},Ye={class:"grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8 border-t-2"},Ce=e("div",null,[e("h2",{class:"text-base font-semibold leading-7 text-gray-900"},"Évaluation"),e("p",{class:"mt-1 text-sm leading-6 text-gray-400"},"Renseigner les informations relatives à l'évaluation de cet objectif.")],-1),Fe={class:"md:col-span-2"},Le={class:"grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"},Te={class:"mt-8 sm:col-span-3"},ze={class:"mt-2"},Ee={class:"relative mt-2"},Ge={class:"block truncate"},Ae={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},He={class:"mt-8 sm:col-span-3"},Pe={class:"mt-2"},Re={class:"relative mt-2"},Qe={class:"block truncate"},Ze={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},Ie={class:"mt-8 col-span-full"},Je={class:"mt-2"},Ke={class:"flex flex-col space-y-2"},We={key:0,class:"grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 border-t-2"},Xe=e("h2",{class:"text-base font-semibold leading-7 text-gray-900"},"Suivi de l'objectif",-1),es=e("p",{class:"mt-1 text-sm leading-6 text-gray-400"},"Faites le suivi de cet objectif en renseignant le taux réalisé et en laissant un commentaire.",-1),ss={class:"md:col-span-1"},as={class:"grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"},ts={class:"col-span-full"},ls={class:"mt-2 flex rounded-md shadow-sm"},os=e("span",{class:"inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm"},"%",-1),is={class:"flex flex-col space-y-2"},ns={class:"sm:col-span-full"},rs={class:"mt-2"},ds={class:"flex flex-col space-y-2"},cs={class:"flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"},Ss={__name:"SaveAgentGoal",props:{agent:{type:Object},phases:{type:Object},goal:{type:Object,required:!1,default:{}},history:{}},setup(r){const o=r,k=f(o.goal)?"Nouvel objectif":"Modifier l'objectif",_=f(o.goal)?"Fixer un objectif a cet agent":"Modifier un objectif pour cet agent",j=[{name:"Objectifs",href:route("agent-goals.index",{agent:o.agent.user_id}),current:!1},{name:f(o.goal)?"Nouveau":"Modifier",href:"#",current:!0}],g=D();let a;const b=()=>{a=G(f(o.goal)?{goal_name:"",goal_means_available:1,goal_expected_date:new Date,goal_expected_result:"",goal_marking:5,phase_id:O(o.phases)?o.phases[0].phase_id:null,evaluation_period_id:O(o.phases)?o.phases[0].periods[0].evaluation_period_id:null}:{goal_name:o.goal.goal_name,goal_means_available:o.goal.goal_means_available,goal_expected_date:new Date(o.goal.goal_expected_date),goal_expected_result:o.goal.goal_expected_result,goal_marking:o.goal.goal_marking,phase_id:o.goal.phase_id,goal_rate:o.goal.goal_rate,comment:"",evaluation_period_id:o.goal.evaluation_period_id})},E=()=>{f(o.goal)?a.post(route("agent-goals.store",{agent:o.agent.user_id}),{onSuccess:()=>a.reset()}):a.put(route("agent-goals.update",{agent:o.agent.user_id,agent_goal:o.goal.goal_id}),{onSuccess:()=>b(),preserveScroll:!0})};return b(),z(()=>a.phase_id,function(w){w&&(g.value=o.phases.filter(n=>n.phase_id===w)[0].periods,a.evaluation_period_id=g.value[0].evaluation_period_id)},{immediate:!0}),(w,n)=>(c(),V(R,null,{default:i(()=>[t(s(A),{title:"Nouvel Objectif"}),e("div",re,[t(Q,{pages:j}),e("div",de,[e("div",ce,[e("h1",me,"Objectifs de "+h(r.agent.user_display_name),1),ue]),e("div",ge,[t(s(H),{href:w.route("agent-ratings.index",{agent:r.agent.user_id}),class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:i(()=>[d(" Évaluations "),t(s(ie),{class:"-mr-0.5 h-5 w-5"})]),_:1},8,["href"])])]),t(Z,{title:"Objectifs"}),t(I,{desc:s(_),title:s(k)},null,8,["desc","title"]),e("form",{class:"mt-8 shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg bg-white",onSubmit:P(E,["prevent"])},[e("div",pe,[fe,e("div",xe,[e("div",ve,[e("div",he,[t(u,{for:"start_date",required:""},{default:i(()=>[d("Libelle")]),_:1}),e("div",ye,[t(ee,{modelValue:s(a).goal_name,"onUpdate:modelValue":n[0]||(n[0]=l=>s(a).goal_name=l),invalid:s(a).errors.goal_name!==void 0},null,8,["modelValue","invalid"])]),e("div",be,[t(p,{message:s(a).errors.goal_name},null,8,["message"])])]),e("div",we,[t(u,{for:"start_date",required:""},{default:i(()=>[d("Valeur Cible")]),_:1}),e("div",Ve,[U(e("input",{"onUpdate:modelValue":n[1]||(n[1]=l=>s(a).goal_expected_result=l),class:m([s(a).errors.goal_expected_result!==void 0?"focus:ring-red-400 ring-red-500":"focus:ring-cyan-600 ring-gray-300","block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"])},null,2),[[q,s(a).goal_expected_result]]),ke]),e("div",je,[t(p,{message:s(a).errors.goal_expected_result},null,8,["message"])])])])])]),e("div",$e,[De,e("div",Ue,[e("div",qe,[e("div",Me,[t(u,{for:"start_date",required:""},{default:i(()=>[d("Échéance")]),_:1}),e("div",Ne,[t(ne,{modelValue:s(a).goal_expected_date,"onUpdate:modelValue":n[2]||(n[2]=l=>s(a).goal_expected_date=l),invalid:s(a).errors.goal_expected_date!==void 0},null,8,["modelValue","invalid"])]),e("div",Be,[t(p,{message:s(a).errors.goal_expected_date},null,8,["message"])])]),e("div",Oe,[e("div",Se,[t(ae,{modelValue:s(a).goal_means_available,"onUpdate:modelValue":n[3]||(n[3]=l=>s(a).goal_means_available=l),desc:"Les moyens pour accomplir cette objectif sont t-il disponible ?",label:"Disponibilité des moyens"},null,8,["modelValue"])])])])])]),e("div",Ye,[Ce,e("div",Fe,[e("div",Le,[e("div",Te,[t(u,{required:""},{default:i(()=>[d("Année d'évaluation")]),_:1}),e("div",ze,[t(s(L),{modelValue:s(a).phase_id,"onUpdate:modelValue":n[4]||(n[4]=l=>s(a).phase_id=l),as:"div"},{default:i(()=>[e("div",Ee,[t(s(C),{class:"relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-700 sm:text-sm sm:leading-6"},{default:i(()=>[e("span",Ge,h(r.phases.filter(l=>l.phase_id===s(a).phase_id)[0].phase_year),1),e("span",Ae,[t(s(S),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])]),_:1}),t(M,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:i(()=>[t(s(F),{class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:i(()=>[(c(!0),y(B,null,N(r.phases,l=>(c(),V(s(T),{key:l.phase_id,value:l.phase_id,as:"template"},{default:i(({active:x,selected:v})=>[e("li",{class:m([x?"bg-cyan-600  text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[e("span",{class:m([v?"font-semibold":"font-normal","block truncate"])},h(l.phase_year),3),v?(c(),y("span",{key:0,class:m([x?"text-white":"text-cyan-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[t(s(Y),{"aria-hidden":"true",class:"h-5 w-5"})],2)):$("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])])]),e("div",He,[t(u,{required:""},{default:i(()=>[d("Période")]),_:1}),e("div",Pe,[t(s(L),{modelValue:s(a).evaluation_period_id,"onUpdate:modelValue":n[5]||(n[5]=l=>s(a).evaluation_period_id=l),as:"div"},{default:i(()=>[e("div",Re,[t(s(C),{class:"relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-700 sm:text-sm sm:leading-6"},{default:i(()=>[e("span",Qe,h(g.value.filter(l=>l.evaluation_period_id===s(a).evaluation_period_id)[0].evaluation_period_name),1),e("span",Ze,[t(s(S),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])]),_:1}),t(M,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:i(()=>[t(s(F),{class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:i(()=>[(c(!0),y(B,null,N(g.value,l=>(c(),V(s(T),{key:l.evaluation_period_id,value:l.evaluation_period_id,as:"template"},{default:i(({active:x,selected:v})=>[e("li",{class:m([x?"bg-cyan-600  text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[e("span",{class:m([v?"font-semibold":"font-normal","block truncate"])},h(l.evaluation_period_name),3),v?(c(),y("span",{key:0,class:m([x?"text-white":"text-cyan-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[t(s(Y),{"aria-hidden":"true",class:"h-5 w-5"})],2)):$("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])])]),e("div",Ie,[t(u,{for:"start_date",required:""},{default:i(()=>[d("Barème")]),_:1}),e("div",Je,[t(le,{modelValue:s(a).goal_marking,"onUpdate:modelValue":n[6]||(n[6]=l=>s(a).goal_marking=l),invalid:s(a).errors.goal_marking!==void 0,maxlength:"2"},null,8,["modelValue","invalid"])]),e("div",Ke,[t(p,{message:s(a).errors.goal_marking},null,8,["message"])])])])])]),s(f)(r.goal)?$("",!0):(c(),y("div",We,[e("div",null,[Xe,es,t(oe,{history:r.history},null,8,["history"])]),e("div",ss,[e("div",as,[e("div",ts,[t(u,{for:"start_date",required:""},{default:i(()=>[d("Taux d'avancement")]),_:1}),e("div",ls,[U(e("input",{"onUpdate:modelValue":n[7]||(n[7]=l=>s(a).goal_rate=l),class:m([s(a).errors.goal_rate!==void 0?"focus:ring-red-400 ring-red-500":"focus:ring-cyan-600 ring-gray-300","block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"]),maxlength:"3",type:"number"},null,2),[[q,s(a).goal_rate]]),os]),e("div",is,[t(p,{message:s(a).errors.goal_rate},null,8,["message"])])]),e("div",ns,[t(u,{for:"start_date"},{default:i(()=>[d("Commentaire")]),_:1}),e("div",rs,[t(se,{modelValue:s(a).comment,"onUpdate:modelValue":n[8]||(n[8]=l=>s(a).comment=l),invalid:s(a).errors.comment!==void 0},null,8,["modelValue","invalid"])]),e("div",ds,[t(p,{message:s(a).errors.comment},null,8,["message"])])])])])])),e("div",cs,[t(J),t(K,{processing:s(a).processing},{default:i(()=>[d(" Enregistrer")]),_:1},8,["processing"])])],40,_e)])]),_:1}))}};export{Ss as default};
