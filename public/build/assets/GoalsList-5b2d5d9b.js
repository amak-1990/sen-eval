import{b as N,r as O,h as T,T as F,w as C,o as n,d as y,e as s,f as e,u as l,Z as L,a as t,c as d,i as S,g as i,t as r,p as U,n as m,k as v,F as k,j as V,O as Y,l as z,m as A}from"./app-2a089cf5.js";import{_ as P}from"./AuthenticatedLayout-a74cb3f1.js";import{_ as H}from"./Breadcrumbs-6398e3e4.js";import{g as I,a as q,c as E,m as G}from"./helper-18252d35.js";import{_ as Z}from"./Datatable-a92b7c7f.js";import{_ as o,a as J,b as c}from"./EmptyState-732ad0f2.js";import{_ as K}from"./InputLabel-b11fe90f.js";import{_ as Q}from"./SubmitButton-4134ce53.js";import{r as R}from"./ChevronUpDownIcon-dfef16cc.js";import{r as j}from"./CheckIcon-4be47fd9.js";import{r as W}from"./EyeIcon-01bc1f24.js";import{N as X,H as ee,U as $,B as te}from"./listbox-d34d1a30.js";import"./logo1637145113-c7398df9.js";import"./use-controllable-595812ac.js";const se={class:"px-4 sm:px-6 lg:px-8"},ae=t("div",{class:"sm:flex sm:items-center"},[t("div",{class:"sm:flex-auto"},[t("h1",{class:"text-2xl font-semibold leading-6 text-gray-900"},"Mes Objectifs"),t("p",{class:"mt-2 text-sm text-gray-700"}," Liste de mes objectifs ")])],-1),le={key:0,class:"mt-8 bg-white shadow sm:rounded-lg"},ie={class:"px-4 py-5 sm:p-6"},ne=t("h3",{class:"text-base font-semibold leading-6 text-gray-900"},"Filtres",-1),re=t("div",{class:"mt-2 max-w-xl text-sm text-gray-500"},[t("p",null,"Filtrer les données en fonction de l'année et de la direction")],-1),oe=["onSubmit"],de={class:"w-full sm:max-w-xl"},ce={class:"mt-2"},ue={class:"relative mt-2"},me={class:"block truncate"},_e={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},pe={class:"mt-8"},fe={key:0,class:"min-w-full divide-y divide-gray-300"},he={class:"bg-gray-50"},ge={class:"divide-y divide-gray-200 bg-white"},xe={class:"flex-shrink-0"},ye={class:"flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan-600"},be={class:"text-cyan-700"},ve={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},we={class:"flex items-center justify-center"},ke={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},Ye={__name:"GoalsList",props:{goals:{type:Object},phases:{},phase_id:{}},setup(f){const h=f,M=[{name:"Mes Objectifs",href:"#",current:!0}],B=N(()=>I(h.goals)),p=O(h.goals.data),g=T({keyword:"",fields:["goal_name","goal_expected_result"]}),x=F({phase_id:parseInt(h.phase_id)||-1}),D=()=>{Y.get(route("goals.index",{phase_id:x.phase_id}),{},{preserveScroll:!0})};return C(()=>g.keyword,function(b){b===""?p.value=h.goals.data:z.post(route("goals.search"),g).then(_=>p.value=_.data)}),(b,_)=>(n(),y(P,null,{default:s(()=>[e(l(L),{title:"Mes Objectifs"}),t("div",se,[e(H,{pages:M}),ae,p.value.length>0?(n(),d("div",le,[t("div",ie,[ne,re,t("form",{class:"mt-5 sm:flex sm:items-center gap-2",onSubmit:S(D,["prevent"])},[t("div",de,[e(K,null,{default:s(()=>[i("Année d'évaluation")]),_:1}),t("div",ce,[e(l(te),{modelValue:l(x).phase_id,"onUpdate:modelValue":_[0]||(_[0]=a=>l(x).phase_id=a),as:"div"},{default:s(()=>[t("div",ue,[e(l(X),{class:"relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-700 sm:text-sm sm:leading-6"},{default:s(()=>{var a;return[t("span",me,r(((a=f.phases.filter(u=>u.phase_id===l(x).phase_id)[0])==null?void 0:a.phase_year)||"Toute confondues"),1),t("span",_e,[e(l(R),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])]}),_:1}),e(U,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:s(()=>[e(l(ee),{class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:s(()=>[e(l($),{value:-1,as:"template"},{default:s(({active:a,selected:u})=>[t("li",{class:m([a?"bg-cyan-600  text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[t("span",{class:m([u?"font-semibold":"font-normal","block truncate"])},"Toute confondues",2),u?(n(),d("span",{key:0,class:m([a?"text-white":"text-cyan-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[e(l(j),{"aria-hidden":"true",class:"h-5 w-5"})],2)):v("",!0)],2)]),_:1}),(n(!0),d(k,null,V(f.phases,a=>(n(),y(l($),{key:a.phase_id,value:a.phase_id,as:"template"},{default:s(({active:u,selected:w})=>[t("li",{class:m([u?"bg-cyan-600  text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[t("span",{class:m([w?"font-semibold":"font-normal","block truncate"])},r(a.phase_year),3),w?(n(),d("span",{key:0,class:m([u?"text-white":"text-cyan-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[e(l(j),{"aria-hidden":"true",class:"h-5 w-5"})],2)):v("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])])]),t("div",pe,[e(Q,{class:"sm:ml-3 sm:mt-0 sm:w-auto",type:"submit"},{default:s(()=>[i("Filtrer")]),_:1})])],40,oe)])])):v("",!0),l(q)(f.goals.data)?(n(),y(Z,{key:1,modelValue:g.keyword,"onUpdate:modelValue":_[1]||(_[1]=a=>g.keyword=a),pagination:B.value},{default:s(()=>[p.value.length>0?(n(),d("table",fe,[t("thead",he,[t("tr",null,[e(o,{first:!0},{default:s(()=>[i("Libelle")]),_:1}),e(o,null,{default:s(()=>[i("Valeur Cible")]),_:1}),e(o,null,{default:s(()=>[i("Disponibilité des Moyens")]),_:1}),e(o,null,{default:s(()=>[i("Échéance")]),_:1}),e(o,null,{default:s(()=>[i("Taux de réalisation")]),_:1}),e(o,null,{default:s(()=>[i("Année d'évaluation")]),_:1}),e(o,null,{default:s(()=>[i("Période")]),_:1}),e(o,null,{default:s(()=>[i("Barème")]),_:1}),e(o)])]),t("tbody",ge,[(n(!0),d(k,null,V(p.value,a=>(n(),d("tr",{key:a.goal_id},[e(c,{first:!0,class:"whitespace-pre-line"},{default:s(()=>[i(r(a.goal_name),1)]),_:2},1024),e(c,{class:"whitespace-pre-line"},{default:s(()=>[i(r(a.goal_expected_result)+" %",1)]),_:2},1024),e(c,null,{default:s(()=>[t("span",{class:m([a.goal_means_available?"bg-green-50 text-green-700 ring-green-600/20":"bg-red-50 text-red-700 ring-red-600/20","inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"])},r(a.goal_means_available?"Disponible":"Indisponible"),3)]),_:2},1024),e(c,null,{default:s(()=>[i(r(l(E)(l(G)(a.goal_expected_date).format("DD MMMM YYYY"))),1)]),_:2},1024),e(c,{class:"whitespace-break-spaces"},{default:s(()=>[i(r(a.goal_rate)+" % ",1)]),_:2},1024),e(c,null,{default:s(()=>[i(r(a.phase.phase_year),1)]),_:2},1024),e(c,null,{default:s(()=>[i(r(a.period.evaluation_period_name),1)]),_:2},1024),e(c,null,{default:s(()=>[t("span",xe,[t("span",ye,[t("span",be,r(a.goal_marking),1)])])]),_:2},1024),t("td",ve,[t("div",we,[e(l(A),{href:b.route("goals.edit",{goal:a.goal_id}),class:"group flex items-center px-4 py-2 text-sm"},{default:s(()=>[e(l(W),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-cyan-600"})]),_:2},1032,["href"])])])]))),128))])])):(n(),d("div",ke," Aucun élément trouvé."))]),_:1},8,["modelValue","pagination"])):(n(),y(J,{key:2,message:"Votre supérieur hiérarchique ne vous a pas encore proposer d'objectifs",title:"Pas d'objectifs"}))])]),_:1}))}};export{Ye as default};
