<<<<<<<< HEAD:public/build/assets/PhasePeriods-86d1c3f7.js
import{U as N,b as P,G as B,V as O,S as z,h as D,_ as A,g as C,c as S,m as j}from"./AuthenticatedLayout-2813ffe8.js";import{r as $,w as k,b as V,o as p,e as w,f as a,g as e,u as s,a as t,k as l,O as M,d as F,Z as T,t as _,m as x,c as g,F as U,i as G,l as q}from"./app-f8ae13a8.js";import{_ as E}from"./Breadcrumbs-bf684264.js";import{_ as v,a as b}from"./TableData-ffcd2249.js";import{_ as I}from"./Datatable-d78cc678.js";import{_ as L}from"./EmptyState-109dd5b1.js";import{_ as R}from"./Separator-709f6ad0.js";import{_ as Z}from"./SectionTitle-777eca96.js";import{r as H}from"./ExclamationTriangleIcon-babde7d0.js";import{r as J}from"./PlusIcon-30f9dbdb.js";import{r as K}from"./PencilSquareIcon-f2f51d98.js";import{r as Q}from"./TrashIcon-431c284b.js";import"./logo1637145113-11387d37.js";const W=t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),X={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},ee={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},te={class:"sm:flex sm:items-start"},se={class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},ae={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},oe=t("div",{class:"mt-2"},[t("p",{class:"text-sm text-gray-500"},"Êtes vous sûre de vouloir supprimer cet élément? Cette action est irréversible.")],-1),ie={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},le={__name:"DeleteModal",props:{opened:{type:Boolean,default:!1},id:{type:Number||null,default:null},link:{type:String},name:{type:String}},emits:["closeModal"],setup(n){const i=n,f=$(!1);k(()=>i.opened,r=>{f.value=r},{immediate:!0});const m=V(()=>i.id),h=()=>{M.delete(route(i.link,{[i.name]:m.value}))};return(r,d)=>(p(),w(s(z),{show:f.value,as:"template"},{default:a(()=>[e(s(N),{as:"div",class:"relative z-10",onClose:d[2]||(d[2]=y=>{f.value=!1,r.$emit("closeModal")})},{default:a(()=>[e(s(P),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[W]),_:1}),t("div",X,[t("div",ee,[e(s(P),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:a(()=>[e(s(B),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"},{default:a(()=>[t("div",te,[t("div",se,[e(s(H),{"aria-hidden":"true",class:"h-6 w-6 text-red-600"})]),t("div",ae,[e(s(O),{as:"h3",class:"text-base font-semibold leading-6 text-gray-900"},{default:a(()=>[l("Suppression")]),_:1}),oe])]),t("div",ie,[t("button",{class:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",type:"button",onClick:d[0]||(d[0]=y=>{h(),f.value=!1,r.$emit("closeModal")})},"Supprimer "),t("button",{ref:"cancelButtonRef",class:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",type:"button",onClick:d[1]||(d[1]=y=>{f.value=!1,r.$emit("closeModal")})},"Annuler ",512)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}},re={class:"px-4 sm:px-6 lg:px-8"},ne={class:"sm:flex sm:items-center"},de={class:"sm:flex-auto"},ue={class:"text-2xl font-semibold leading-6 text-gray-900"},me=t("p",{class:"mt-2 text-sm text-gray-700"}," Details et paramètres de l'évaluation. ",-1),ce={class:"space-x-2 mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},pe={class:"sm:flex sm:items-center"},fe={class:"space-x-2 mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},he={key:0,class:"min-w-full divide-y divide-gray-300"},_e={class:"bg-gray-50"},ve={class:"divide-y divide-gray-200 bg-white"},ye={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},xe={class:"flex items-center justify-center"},ge=["onClick"],be={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},ze={__name:"PhasePeriods",props:{phase:{type:Object},periods:{type:Object}},setup(n){const i=n,f=[{name:"Phases d'évaluation",href:route("phases.index"),current:!1},{name:"Périodes d'évaluation",href:"#",current:!0}];V(()=>C(i.periods));const m=$(i.periods.data),h=$(!1),r=F({keyword:"",fields:["evaluation_period_start","evaluation_period_end"],phase_id:i.phase.phase_id});let d=D(i.periods.data)?i.periods.data[0].evaluation_period_id:null;const y=o=>{d=o,h.value=!0};return k(()=>r.keyword,function(o){o===""?m.value=i.periods.data:q.post(route("periods.search"),r).then(c=>{m.value=c.data}).catch(c=>console.log(c))}),k(()=>i.periods,function(o){m.value=o.data,!m.value.length>0&&(o.prev_page_url?M.get(o.prev_page_url):M.get(o.first_page_url))}),(o,c)=>(p(),w(A,null,{default:a(()=>[e(s(T),{title:"Paramètre de Phase"}),t("div",re,[e(E,{pages:f}),t("div",ne,[t("div",de,[t("h1",ue,"Paramètres "+_(n.phase.phase_name),1),me]),t("div",ce,[e(s(x),{href:o.route("phaseSkills.show",{phaseSkill:n.phase.phase_id}),as:"button",class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:a(()=>[l(" Compétences ")]),_:1},8,["href"]),e(s(x),{href:o.route("periods.show",{period:n.phase.phase_id}),as:"button",class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:a(()=>[l(" Périodes d'évaluation ")]),_:1},8,["href"])])]),e(R,{title:"Périodes"}),t("div",pe,[e(Z,{desc:"Cette liste représente les périodes ou les évaluateurs pourront soumettre les évaluations de leur agents.",title:"Période d'évaluation"}),t("div",fe,[e(s(x),{href:o.route("periods.create",{phase:n.phase.phase_id}),as:"button",class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:a(()=>[l(" Nouvelle Période "),e(s(J),{class:"-mr-0.5 h-5 w-5"})]),_:1},8,["href"])])]),s(D)(i.periods.data)?(p(),w(I,{key:0,modelValue:r.keyword,"onUpdate:modelValue":c[0]||(c[0]=u=>r.keyword=u),pagination:s(C)(n.periods)},{default:a(()=>[m.value.length>0?(p(),g("table",he,[t("thead",_e,[t("tr",null,[e(v,{first:!0},{default:a(()=>[l("Identifiant")]),_:1}),e(v,null,{default:a(()=>[l("Nom")]),_:1}),e(v,null,{default:a(()=>[l("Date de début")]),_:1}),e(v,null,{default:a(()=>[l("Date de Fin")]),_:1}),e(v)])]),t("tbody",ve,[(p(!0),g(U,null,G(m.value,(u,Y)=>(p(),g("tr",{key:u.evaluation_period_id},[e(b,{first:!0},{default:a(()=>[l(_(Y+1),1)]),_:2},1024),e(b,null,{default:a(()=>[l(_(u.evaluation_period_name),1)]),_:2},1024),e(b,null,{default:a(()=>[l(_(s(S)(s(j)(u.evaluation_period_start).format("DD MMMM YYYY"))),1)]),_:2},1024),e(b,null,{default:a(()=>[l(_(s(S)(s(j)(u.evaluation_period_end).format("DD MMMM YYYY"))),1)]),_:2},1024),t("td",ye,[t("div",xe,[e(s(x),{href:o.route("periods.edit",{period:u.evaluation_period_id}),class:"group flex items-center px-4 py-2 text-sm"},{default:a(()=>[e(s(K),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-cyan-600"})]),_:2},1032,["href"]),t("a",{class:"group flex items-center px-4 py-2 text-sm",href:"#",onClick:we=>y(u.evaluation_period_id)},[e(s(Q),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-red-600"})],8,ge)])])]))),128))])])):(p(),g("div",be," Aucun élément trouvé."))]),_:1},8,["modelValue","pagination"])):(p(),w(L,{key:1,link:o.route("periods.create",{phase:n.phase.phase_id}),action:"Nouvelle Période",message:"Ajouter des périodes en cliquant sur ce bouton.",title:"Pas de périodes d'évaluation crée pour cette phase."},null,8,["link"])),e(le,{id:s(d),opened:h.value,link:"periods.destroy",name:"period",onCloseModal:c[1]||(c[1]=u=>h.value=!1)},null,8,["id","opened"])])]),_:1}))}};export{ze as default};
========
import{U as N,b as P,G as B,V as O,S as z,h as D,_ as A,g as C,c as S,m as j}from"./AuthenticatedLayout-3ac73bac.js";import{r as $,w as k,b as V,o as p,e as w,f as a,g as e,u as s,a as t,k as l,O as M,d as F,Z as T,t as _,m as x,c as g,F as U,i as G,l as q}from"./app-3e4b2772.js";import{_ as E}from"./Breadcrumbs-51f948bf.js";import{_ as v,a as b}from"./TableData-81b0e721.js";import{_ as I}from"./Datatable-4bce3106.js";import{_ as L}from"./EmptyState-74c2db4d.js";import{_ as R}from"./Separator-96913dff.js";import{_ as Z}from"./SectionTitle-438f0412.js";import{r as H}from"./ExclamationTriangleIcon-08ad488e.js";import{r as J}from"./PlusIcon-a937723d.js";import{r as K}from"./PencilSquareIcon-0b842e83.js";import{r as Q}from"./TrashIcon-183a4f2b.js";import"./logo1637145113-11387d37.js";const W=t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),X={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},ee={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},te={class:"sm:flex sm:items-start"},se={class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},ae={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},oe=t("div",{class:"mt-2"},[t("p",{class:"text-sm text-gray-500"},"Êtes vous sûre de vouloir supprimer cet élément? Cette action est irréversible.")],-1),ie={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},le={__name:"DeleteModal",props:{opened:{type:Boolean,default:!1},id:{type:Number||null,default:null},link:{type:String},name:{type:String}},emits:["closeModal"],setup(n){const i=n,f=$(!1);k(()=>i.opened,r=>{f.value=r},{immediate:!0});const m=V(()=>i.id),h=()=>{M.delete(route(i.link,{[i.name]:m.value}))};return(r,d)=>(p(),w(s(z),{show:f.value,as:"template"},{default:a(()=>[e(s(N),{as:"div",class:"relative z-10",onClose:d[2]||(d[2]=y=>{f.value=!1,r.$emit("closeModal")})},{default:a(()=>[e(s(P),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[W]),_:1}),t("div",X,[t("div",ee,[e(s(P),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:a(()=>[e(s(B),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"},{default:a(()=>[t("div",te,[t("div",se,[e(s(H),{"aria-hidden":"true",class:"h-6 w-6 text-red-600"})]),t("div",ae,[e(s(O),{as:"h3",class:"text-base font-semibold leading-6 text-gray-900"},{default:a(()=>[l("Suppression")]),_:1}),oe])]),t("div",ie,[t("button",{class:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",type:"button",onClick:d[0]||(d[0]=y=>{h(),f.value=!1,r.$emit("closeModal")})},"Supprimer "),t("button",{ref:"cancelButtonRef",class:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",type:"button",onClick:d[1]||(d[1]=y=>{f.value=!1,r.$emit("closeModal")})},"Annuler ",512)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}},re={class:"px-4 sm:px-6 lg:px-8"},ne={class:"sm:flex sm:items-center"},de={class:"sm:flex-auto"},ue={class:"text-2xl font-semibold leading-6 text-gray-900"},me=t("p",{class:"mt-2 text-sm text-gray-700"}," Details et paramètres de l'évaluation. ",-1),ce={class:"space-x-2 mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},pe={class:"sm:flex sm:items-center"},fe={class:"space-x-2 mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},he={key:0,class:"min-w-full divide-y divide-gray-300"},_e={class:"bg-gray-50"},ve={class:"divide-y divide-gray-200 bg-white"},ye={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},xe={class:"flex items-center justify-center"},ge=["onClick"],be={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},ze={__name:"PhasePeriods",props:{phase:{type:Object},periods:{type:Object}},setup(n){const i=n,f=[{name:"Phases d'évaluation",href:route("phases.index"),current:!1},{name:"Périodes d'évaluation",href:"#",current:!0}];V(()=>C(i.periods));const m=$(i.periods.data),h=$(!1),r=F({keyword:"",fields:["evaluation_period_start","evaluation_period_end"],phase_id:i.phase.phase_id});let d=D(i.periods.data)?i.periods.data[0].evaluation_period_id:null;const y=o=>{d=o,h.value=!0};return k(()=>r.keyword,function(o){o===""?m.value=i.periods.data:q.post(route("periods.search"),r).then(c=>{m.value=c.data}).catch(c=>console.log(c))}),k(()=>i.periods,function(o){m.value=o.data,!m.value.length>0&&(o.prev_page_url?M.get(o.prev_page_url):M.get(o.first_page_url))}),(o,c)=>(p(),w(A,null,{default:a(()=>[e(s(T),{title:"Paramètre de Phase"}),t("div",re,[e(E,{pages:f}),t("div",ne,[t("div",de,[t("h1",ue,"Paramètres "+_(n.phase.phase_name),1),me]),t("div",ce,[e(s(x),{href:o.route("phaseSkills.show",{phaseSkill:n.phase.phase_id}),as:"button",class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:a(()=>[l(" Compétences ")]),_:1},8,["href"]),e(s(x),{href:o.route("periods.show",{period:n.phase.phase_id}),as:"button",class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:a(()=>[l(" Périodes d'évaluation ")]),_:1},8,["href"])])]),e(R,{title:"Périodes"}),t("div",pe,[e(Z,{desc:"Cette liste représente les périodes ou les évaluateurs pourront soumettre les évaluations de leur agents.",title:"Période d'évaluation"}),t("div",fe,[e(s(x),{href:o.route("periods.create",{phase:n.phase.phase_id}),as:"button",class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:a(()=>[l(" Nouvelle Période "),e(s(J),{class:"-mr-0.5 h-5 w-5"})]),_:1},8,["href"])])]),s(D)(i.periods.data)?(p(),w(I,{key:0,modelValue:r.keyword,"onUpdate:modelValue":c[0]||(c[0]=u=>r.keyword=u),pagination:s(C)(n.periods)},{default:a(()=>[m.value.length>0?(p(),g("table",he,[t("thead",_e,[t("tr",null,[e(v,{first:!0},{default:a(()=>[l("Identifiant")]),_:1}),e(v,null,{default:a(()=>[l("Nom")]),_:1}),e(v,null,{default:a(()=>[l("Date de début")]),_:1}),e(v,null,{default:a(()=>[l("Date de Fin")]),_:1}),e(v)])]),t("tbody",ve,[(p(!0),g(U,null,G(m.value,(u,Y)=>(p(),g("tr",{key:u.evaluation_period_id},[e(b,{first:!0},{default:a(()=>[l(_(Y+1),1)]),_:2},1024),e(b,null,{default:a(()=>[l(_(u.evaluation_period_name),1)]),_:2},1024),e(b,null,{default:a(()=>[l(_(s(S)(s(j)(u.evaluation_period_start).format("DD MMMM YYYY"))),1)]),_:2},1024),e(b,null,{default:a(()=>[l(_(s(S)(s(j)(u.evaluation_period_end).format("DD MMMM YYYY"))),1)]),_:2},1024),t("td",ye,[t("div",xe,[e(s(x),{href:o.route("periods.edit",{period:u.evaluation_period_id}),class:"group flex items-center px-4 py-2 text-sm"},{default:a(()=>[e(s(K),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-cyan-600"})]),_:2},1032,["href"]),t("a",{class:"group flex items-center px-4 py-2 text-sm",href:"#",onClick:we=>y(u.evaluation_period_id)},[e(s(Q),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-red-600"})],8,ge)])])]))),128))])])):(p(),g("div",be," Aucun élément trouvé."))]),_:1},8,["modelValue","pagination"])):(p(),w(L,{key:1,link:o.route("periods.create",{phase:n.phase.phase_id}),action:"Nouvelle Période",message:"Ajouter des périodes en cliquant sur ce bouton.",title:"Pas de périodes d'évaluation crée pour cette phase."},null,8,["link"])),e(le,{id:s(d),opened:h.value,link:"periods.destroy",name:"period",onCloseModal:c[1]||(c[1]=u=>h.value=!1)},null,8,["id","opened"])])]),_:1}))}};export{ze as default};
>>>>>>>> 6ba55a1 (bug fixes):public/build/assets/PhasePeriods-1ea0a200.js
