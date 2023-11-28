import{_ as F}from"./AuthenticatedLayout-94538ec7.js";import{Q as L,b as y,r as g,w as O,o as r,d as b,e as d,f as e,u as c,Z as S,a as l,c as m,g as f,k as C,F as P,j as Q,O as E,t as V}from"./app-c4f187be.js";import{_ as U,a as Z}from"./Title-ceb487f9.js";import{_ as q}from"./Breadcrumbs-407b3470.js";import{g as z,a as G}from"./helper-c9a85e48.js";import{_ as H}from"./Datatable-16a2f7dd.js";import{r as I,_ as x,a as J,b as D}from"./EmptyState-c0c5d7a2.js";import{_ as K}from"./DeleteModal-50fb4bdd.js";import W from"./SaveClaimModal-81e50b00.js";import{_ as X}from"./SectionTitle-4e9cfd73.js";import{r as Y}from"./PencilSquareIcon-cd3a3f2f.js";import{r as ee}from"./TrashIcon-945dd6a4.js";import"./logo1637145113-c7398df9.js";import"./ExclamationTriangleIcon-5f0591a6.js";import"./InputLabel-9c315d9e.js";import"./InputError-90ce686a.js";import"./TextArea-d4be9570.js";import"./FormIndications-abfac2c3.js";import"./SubmitButton-a9fe8e59.js";import"./CheckIcon-8d9f9564.js";import"./ChevronUpDownIcon-b3e6edea.js";import"./CheckIcon-bcd955be.js";import"./listbox-6e1bf4ed.js";import"./use-controllable-186a6d72.js";const te={class:"px-4 sm:px-6 lg:px-8"},ae={class:"sm:flex sm:items-center border-b border-gray-400 pb-5 mt-8"},ie={key:0,class:"space-x-2 mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},se={key:0,class:"min-w-full divide-y divide-gray-300"},ne={class:"bg-gray-50"},re={class:"divide-y divide-gray-200 bg-white"},le={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},oe={key:0,class:"flex items-center justify-center gap-2"},ue=["onClick"],de=["onClick"],ce={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},M="",Fe={__name:"RatingClaims",props:{agent:{},rating:{},types:{type:Array},claims:{}},setup(n){var $;const t=n,_=L().props.auth.user,u=y(()=>_.user_id===t.rating.evaluated_id),w=y(()=>_.user_id!==t.rating.evaluated_id&&_.user_id!==t.rating.evaluator_id),N=u.value?[{name:"Mes Évaluations",href:route("ratings.index",{agent_rating:t.rating.rating_id}),current:!1},{name:"Evaluation",href:"#",current:!0}]:w?[{name:"Mes validations",href:route("validations.index"),current:!1},{name:"Évaluation",href:"#",current:!0}]:[{name:"Mes Agents",href:route("agents.index"),current:!1},{name:"Évaluations",href:route("agent-ratings.index",{agent:t.agent.user_id}),current:!1},{name:"Evaluation",href:"#",current:!0}],A=y(()=>z(t.claims)),o=g(t.claims.data),p=g(!1),v=g(!1),h=g(($=o[0])==null?void 0:$.rating_claim_id),k=g(o[0]),B=a=>{h.value=a,p.value=!0},R=a=>{k.value=o.value.filter(i=>i.rating_claim_id===a)[0],v.value=!0},T=()=>{v.value=!0};return O(()=>t.claims,function(a){o.value=a.data,!o.value.length>0&&(a.prev_page_url?E.get(a.prev_page_url):E.get(a.first_page_url))}),(a,i)=>(r(),b(F,null,{default:d(()=>[e(c(S),{title:"Réclamations"}),l("div",te,[e(q,{pages:c(N)},null,8,["pages"]),e(U,{agent:n.agent,rating:n.rating},null,8,["agent","rating"]),e(Z,{agent_id:t.agent.user_id,evaluated:u.value,rating_id:t.rating.rating_id,validator:w.value},null,8,["agent_id","evaluated","rating_id","validator"]),l("div",ae,[e(X,{desc:"Liste des réclamations demandées pour cette évaluation",title:"Réclamations"}),u.value&&!n.rating.rating_is_validated?(r(),m("div",ie,[l("button",{class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600",onClick:i[0]||(i[0]=s=>T())},[f(" Nouvelle Réclamation "),e(c(I),{class:"-mr-0.5 h-5 w-5"})])])):C("",!0)]),c(G)(n.claims.data)?(r(),b(H,{key:0,modelValue:M,"onUpdate:modelValue":i[1]||(i[1]=s=>M=s),pagination:A.value,search:!1},{default:d(()=>[o.value.length>0?(r(),m("table",se,[l("thead",ne,[l("tr",null,[e(x,{first:!0},{default:d(()=>[f("Type")]),_:1}),e(x,{class:"whitespace-pre-line"},{default:d(()=>[f("Commentaire")]),_:1}),e(x)])]),l("tbody",re,[(r(!0),m(P,null,Q(o.value,s=>(r(),m("tr",{key:s.rating_claim_id},[e(D,{first:!0},{default:d(()=>[f(V(s.type.claim_type_name),1)]),_:2},1024),e(D,{class:"whitespace-pre-line"},{default:d(()=>[f(V(s.rating_claim_comment||"__"),1)]),_:2},1024),l("td",le,[u.value&&!n.rating.rating_is_validated?(r(),m("div",oe,[l("button",{class:"rounded-lg bg-cyan-600 p-2 text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600",type:"button",onClick:j=>R(s.rating_claim_id)},[e(c(Y),{"aria-hidden":"true",class:"h-5 w-5"})],8,ue),l("button",{class:"rounded-lg bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",type:"button",onClick:j=>B(s.rating_claim_id)},[e(c(ee),{"aria-hidden":"true",class:"h-5 w-5"})],8,de)])):C("",!0)])]))),128))])])):(r(),m("div",ce," Aucun élément trouvé."))]),_:1},8,["pagination"])):(r(),b(J,{key:1,message:u.value?"Demander une réclamation en utilisant la liste déroulante en haut.":"",title:"Aucune réclamation faite pour l'instant."},null,8,["message"]))]),e(K,{link:a.route("rating-claims.destroy",{rating:n.rating.rating_id,rating_claim:h.value?h.value:-1}),opened:p.value,onCloseModal:i[2]||(i[2]=s=>p.value=!1)},null,8,["link","opened"]),e(W,{claim:k.value,isEvaluated:u.value,opened:v.value,rating:n.rating,types:n.types,onCloseModal:i[3]||(i[3]=s=>v.value=!1)},null,8,["claim","isEvaluated","opened","rating","types"])]),_:1}))}};export{Fe as default};
