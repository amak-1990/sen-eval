import{_ as U}from"./AuthenticatedLayout-94538ec7.js";import{r as y,w as B,o as u,d as k,e as a,f as e,u as i,a as t,g as m,Q as G,b as V,T as L,Z as P,c as p,k as E,F as Q,j as Z,O as N,t as h,n as S}from"./app-c4f187be.js";import{_ as q,a as H}from"./Title-ceb487f9.js";import{_ as I}from"./Breadcrumbs-407b3470.js";import{U as J,h as T,G as K,V as W,S as X,g as Y,a as ee}from"./helper-c9a85e48.js";import{_ as te}from"./Datatable-16a2f7dd.js";import{r as ae,_,a as se,b}from"./EmptyState-c0c5d7a2.js";import{r as ne}from"./ExclamationTriangleIcon-5f0591a6.js";import ie from"./SaveTrainingModal-6c516d24.js";import{_ as re}from"./SectionTitle-4e9cfd73.js";import{r as le}from"./PencilSquareIcon-cd3a3f2f.js";import{r as oe}from"./TrashIcon-945dd6a4.js";import"./logo1637145113-c7398df9.js";import"./InputLabel-9c315d9e.js";import"./InputError-90ce686a.js";import"./TextArea-d4be9570.js";import"./FormIndications-abfac2c3.js";import"./SubmitButton-a9fe8e59.js";import"./CheckIcon-8d9f9564.js";import"./ChevronUpDownIcon-b3e6edea.js";import"./CheckIcon-bcd955be.js";import"./listbox-6e1bf4ed.js";import"./use-controllable-186a6d72.js";const de=t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),ue={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},me={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},ce={class:"sm:flex sm:items-start"},fe={class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},ge={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},ve=t("div",{class:"mt-2"},[t("p",{class:"text-sm text-gray-500"},"Êtes vous sûre de vouloir continuer ? Cette action est irréversible.")],-1),pe={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},_e={__name:"RevokeTraining",props:{opened:{type:Boolean,default:!1},link:{type:String},form:{}},emits:["closeModal"],setup(r){const n=r,c=y(!1);B(()=>n.opened,l=>{c.value=l},{immediate:!0});const f=()=>{n.form.delete(n.link)};return(l,g)=>(u(),k(i(X),{show:c.value,as:"template"},{default:a(()=>[e(i(J),{as:"div",class:"relative z-10",onClose:g[2]||(g[2]=x=>{c.value=!1,l.$emit("closeModal")})},{default:a(()=>[e(i(T),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[de]),_:1}),t("div",ue,[t("div",me,[e(i(T),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:a(()=>[e(i(K),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"},{default:a(()=>[t("div",ce,[t("div",fe,[e(i(ne),{"aria-hidden":"true",class:"h-6 w-6 text-red-600"})]),t("div",ge,[e(i(W),{as:"h3",class:"text-base font-semibold leading-6 text-gray-900"},{default:a(()=>[m("Suppression")]),_:1}),ve])]),t("div",pe,[t("button",{class:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",type:"button",onClick:g[0]||(g[0]=x=>{f(),c.value=!1,l.$emit("closeModal")})},"Supprimer "),t("button",{ref:"cancelButtonRef",class:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",type:"button",onClick:g[1]||(g[1]=x=>{c.value=!1,l.$emit("closeModal")})},"Annuler ",512)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}},ye={class:"px-4 sm:px-6 lg:px-8"},he={class:"sm:flex sm:items-center border-b border-gray-400 pb-5 mt-8"},be={key:0,class:"space-x-2 mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},xe={key:0,class:"min-w-full divide-y divide-gray-300"},we={class:"bg-gray-50"},ke={class:"divide-y divide-gray-200 bg-white"},$e={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},Ce={key:0,class:"flex items-center justify-center gap-2"},Ve=["onClick"],Me=["onClick"],De={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},j="",Xe={__name:"RatingTrainings",props:{agent:{},rating:{},types:{type:Array},trainings:{}},setup(r){var D;const n=r,c=G().props.auth.user,f=V(()=>c.user_id===n.rating.evaluated_id),l=V(()=>c.user_id!==n.rating.evaluated_id&&c.user_id!==n.rating.evaluator_id),g=f.value?[{name:"Mes Évaluations",href:route("ratings.index",{agent_rating:n.rating.rating_id}),current:!1},{name:"Evaluation",href:"#",current:!0}]:l?[{name:"Mes validations",href:route("validations.index"),current:!1},{name:"Évaluation",href:"#",current:!0}]:[{name:"Mes Agents",href:route("agents.index"),current:!1},{name:"Évaluations",href:route("agent-ratings.index",{agent:n.agent.user_id}),current:!1},{name:"Evaluation",href:"#",current:!0}],x=V(()=>Y(n.trainings)),v=y(n.trainings.data),$=y(!1),w=y(!1),C=y((D=v[0])==null?void 0:D.rating_training_id),M=y(v[0]),A=o=>{C.value=o,$.value=!0},F=o=>{M.value=v.value.filter(d=>d.rating_training_id===o)[0],w.value=!0},O=()=>{w.value=!0},z=L(f.value?{asked_by_evaluated:0}:{asked_by_evaluator:0});return B(()=>n.trainings,function(o){v.value=o.data,!v.value.length>0&&(o.prev_page_url?N.get(o.prev_page_url):N.get(o.first_page_url))}),(o,d)=>(u(),k(U,null,{default:a(()=>[e(i(P),{title:"Formations"}),t("div",ye,[e(I,{pages:i(g)},null,8,["pages"]),e(q,{agent:r.agent,rating:r.rating},null,8,["agent","rating"]),e(H,{agent_id:n.agent.user_id,evaluated:f.value,rating_id:n.rating.rating_id,validator:l.value},null,8,["agent_id","evaluated","rating_id","validator"]),t("div",he,[e(re,{desc:"Liste des formations demandées pour cette évaluation",title:"Formations"}),!l.value&&!r.rating.rating_is_validated?(u(),p("div",be,[t("button",{class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600",onClick:d[0]||(d[0]=s=>O())},[m(" Nouvelle Formation "),e(i(ae),{class:"-mr-0.5 h-5 w-5"})])])):E("",!0)]),i(ee)(r.trainings.data)?(u(),k(te,{key:0,modelValue:j,"onUpdate:modelValue":d[1]||(d[1]=s=>j=s),pagination:x.value,search:!1},{default:a(()=>[v.value.length>0?(u(),p("table",xe,[t("thead",we,[t("tr",null,[e(_,{first:!0},{default:a(()=>[m("Type")]),_:1}),e(_,null,{default:a(()=>[m("Demandée par l'évaluateur")]),_:1}),e(_,null,{default:a(()=>[m("Demandée par l'évalué")]),_:1}),e(_,{class:"whitespace-pre-line"},{default:a(()=>[m("Commentaire de l'évaluateur")]),_:1}),e(_,{class:"whitespace-pre-line"},{default:a(()=>[m("Commentaire de l'évalué")]),_:1}),e(_)])]),t("tbody",ke,[(u(!0),p(Q,null,Z(v.value,s=>(u(),p("tr",{key:s.rating_training_id},[e(b,{first:!0,class:"whitespace-pre-line"},{default:a(()=>[m(h(s.type.training_type_name),1)]),_:2},1024),e(b,null,{default:a(()=>[t("span",{class:S([s.asked_by_evaluator?"bg-green-50 text-green-700 ring-green-600/20":"bg-red-50 text-red-700 ring-red-600/20","inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"])},h(s.asked_by_evaluator?"Oui":"Non"),3)]),_:2},1024),e(b,null,{default:a(()=>[t("span",{class:S([s.asked_by_evaluated?"bg-green-50 text-green-700 ring-green-600/20":"bg-red-50 text-red-700 ring-red-600/20","inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"])},h(s.asked_by_evaluated?"Oui":"Non"),3)]),_:2},1024),e(b,{class:"whitespace-pre-line"},{default:a(()=>[m(h(s.evaluator_comment||"__"),1)]),_:2},1024),e(b,{class:"whitespace-pre-line"},{default:a(()=>[m(h(s.evaluated_comment||"__"),1)]),_:2},1024),t("td",$e,[!l.value&&(f.value&&s.asked_by_evaluated||!f.value&&s.asked_by_evaluator)&&!r.rating.rating_is_validated?(u(),p("div",Ce,[t("button",{class:"rounded-lg bg-cyan-600 p-2 text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600",type:"button",onClick:R=>F(s.rating_training_id)},[e(i(le),{"aria-hidden":"true",class:"h-5 w-5"})],8,Ve),t("button",{class:"rounded-lg bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",type:"button",onClick:R=>A(s.rating_training_id)},[e(i(oe),{"aria-hidden":"true",class:"h-5 w-5"})],8,Me)])):E("",!0)])]))),128))])])):(u(),p("div",De," Aucun élément trouvé."))]),_:1},8,["pagination"])):(u(),k(se,{key:1,message:"Demander une formation en utilisant la liste déroulante en haut.",title:"Aucune formation demandée pour l'instant."}))]),e(_e,{form:i(z),link:o.route("rating-trainings.destroy",{rating:r.rating.rating_id,rating_training:C.value?C.value:-1}),opened:$.value,onCloseModal:d[2]||(d[2]=s=>$.value=!1)},null,8,["form","link","opened"]),e(ie,{isEvaluated:f.value,isValidator:l.value,opened:w.value,rating:r.rating,training:M.value,types:r.types,onCloseModal:d[3]||(d[3]=s=>w.value=!1)},null,8,["isEvaluated","isValidator","opened","rating","training","types"])]),_:1}))}};export{Xe as default};
