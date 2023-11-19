import{Q as S,b as w,r as k,T as z,w as H,o as s,e as f,f as r,g as e,u as l,Z as O,a as t,c,k as m,n as v,t as y,p as P,F as B,i as E,j as h,h as q,O as $}from"./app-f8ae13a8.js";import{h as b,_ as L,g as Q}from"./AuthenticatedLayout-2813ffe8.js";import{_ as Z,a as G}from"./Title-37f5f1c4.js";import{_ as I}from"./Breadcrumbs-bf684264.js";import{_ as J}from"./Separator-709f6ad0.js";import{_ as K}from"./SubmitButton-3c340819.js";import{_ as W}from"./InputError-5ad9c794.js";import{_ as X}from"./Datatable-d78cc678.js";import{_ as Y}from"./EmptyState-109dd5b1.js";import{_ as A,a as U}from"./TableData-ffcd2249.js";import{_ as ee}from"./TextArea-bea4a24a.js";import{_ as te}from"./FormIndications-589d8c17.js";import{_ as j}from"./InputLabel-e4c54691.js";import{r as ae}from"./ChevronUpDownIcon-04ce2a86.js";import{r as ie}from"./CheckIcon-2be9309a.js";import{r as se}from"./PencilSquareIcon-f2f51d98.js";import{r as ne}from"./TrashIcon-431c284b.js";import{N as re,H as le,B as oe,U as ce}from"./listbox-5a91eab3.js";import"./logo1637145113-11387d37.js";import"./PlusIcon-30f9dbdb.js";import"./use-controllable-9cbca8e5.js";const ue={class:"px-4 sm:px-6 lg:px-8"},de=["onSubmit"],me=t("h3",{class:"text-base font-semibold leading-6 text-gray-900"},"Faire une réclamation",-1),_e=t("div",{class:"mt-2 max-w-xl text-sm text-gray-500"},[t("p",null,"Rechercher une réclamation et ajouter la à la liste des réclamation pour cette évaluation.")],-1),ge={class:"px-4 py-6 sm:p-8"},fe={class:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},pe={class:"col-span-full relative"},ve={class:"relative"},ye={key:0,class:"block truncate"},he={key:1,class:"block truncate"},be={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},xe={class:"col-span-full"},we={class:"mt-2"},ke={class:"flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"},$e={key:0,class:"min-w-full divide-y divide-gray-300"},Ve={class:"bg-gray-50"},Ce={class:"divide-y divide-gray-200 bg-white"},Ne={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},Be={key:0,class:"flex items-center justify-center gap-2"},Ee=["onClick"],Ae=["onClick"],Ue={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},D="",Ye={__name:"RatingClaims",props:{agent:{},rating:{},types:{type:Array},claims:{}},setup(o){const n=o,x=S().props.auth.user,_=w(()=>x.user_id===n.rating.evaluated_id),V=w(()=>x.user_id!==n.rating.evaluated_id&&x.user_id!==n.rating.evaluator_id),M=_.value?[{name:"Mes Évaluations",href:route("ratings.index",{agent_rating:n.rating.rating_id}),current:!1},{name:"Evaluation",href:"#",current:!0}]:V?[{name:"Mes validations",href:route("validations.index"),current:!1},{name:"Évaluation",href:"#",current:!0}]:[{name:"Mes Agents",href:route("agents.index"),current:!1},{name:"Évaluations",href:route("agent-ratings.index",{agent:n.agent.user_id}),current:!1},{name:"Evaluation",href:"#",current:!0}],i=k(z({claim_type_id:b(n.types)?n.types[0].claim_type_id:null,rating_claim_comment:""})),T=w(()=>Q(n.claims)),g=k(n.claims.data),C=k(),F=u=>{const d=g.value.filter(a=>a.rating_claim_id===u)[0];i.value.rating_claim_id=u,i.value.rating_claim_comment=d.rating_claim_comment||"",i.value.claim_type_id=d.claim_type_id,C.value.focus()},R=()=>{i.value.rating_claim_id?i.value.put(route("rating-claims.update",{rating:n.rating.rating_id,rating_claim:i.value.rating_claim_id})):i.value.post(route("rating-claims.store",{rating:n.rating.rating_id}))};return H(()=>n.claims,function(u){g.value=u.data,!g.value.length>0&&(u.prev_page_url?$.get(u.prev_page_url):$.get(u.first_page_url))}),(u,d)=>(s(),f(L,null,{default:r(()=>[e(l(O),{title:"Profil"}),t("div",ue,[e(I,{pages:l(M)},null,8,["pages"]),e(Z,{agent:o.agent,rating:o.rating},null,8,["agent","rating"]),e(G,{agent_id:n.agent.user_id,evaluated:_.value,rating_id:n.rating.rating_id,validator:V.value},null,8,["agent_id","evaluated","rating_id","validator"]),_.value&&!o.rating.rating_is_validated?(s(),c("form",{key:0,class:"mt-8 bg-white px-4 py-5 sm:p-6 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2",onSubmit:q(R,["prevent"])},[me,_e,t("div",ge,[t("div",fe,[t("div",pe,[e(j,{for:"",required:""},{default:r(()=>[m("Nature")]),_:1}),e(l(oe),{modelValue:i.value.claim_type_id,"onUpdate:modelValue":d[0]||(d[0]=a=>i.value.claim_type_id=a)},{default:r(()=>[t("div",ve,[e(l(re),{class:v([i.value.errors.phase_id?"ring-red-300":"ring-gray-300","w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-cyan-600 sm:text-sm sm:leading-6"])},{default:r(()=>[l(b)(o.types)?(s(),c("span",ye,y(o.types.filter(a=>a.claim_type_id===i.value.claim_type_id)[0].claim_type_name),1)):(s(),c("span",he,"Aucune réclamation disponible pour l'instant.")),t("span",be,[e(l(ae),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])]),_:1},8,["class"]),e(P,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:r(()=>[l(b)(o.types)?(s(),f(l(le),{key:0,class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:r(()=>[(s(!0),c(B,null,E(o.types,a=>(s(),f(l(ce),{key:a.claim_type_id,value:a.claim_type_id,as:"template"},{default:r(({active:p,selected:N})=>[t("li",{class:v([p?"bg-cyan-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[t("span",{class:v([N?"font-semibold":"font-normal","block truncate"])},y(a.claim_type_name),3),N?(s(),c("span",{key:0,class:v([p?"text-white":"text-cyan-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[e(l(ie),{"aria-hidden":"true",class:"h-5 w-5"})],2)):h("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})):h("",!0)]),_:1})])]),_:1},8,["modelValue"]),e(W,{message:i.value.errors.claim_type_id},null,8,["message"])]),t("div",xe,[e(j,{for:""},{default:r(()=>[m("Commentaire")]),_:1}),t("div",we,[e(ee,{ref_key:"input",ref:C,modelValue:i.value.rating_claim_comment,"onUpdate:modelValue":d[1]||(d[1]=a=>i.value.rating_claim_comment=a)},null,8,["modelValue"])])])])]),t("div",ke,[e(te),e(K,{disabled:o.rating.rating_is_validated,processing:i.value.processing,class:"mt-3 sm:ml-3 sm:mt-0 sm:w-auto",type:"submit"},{default:r(()=>[m("Enregistrer ")]),_:1},8,["disabled","processing"])])],40,de)):h("",!0),e(J,{title:"Réclamations"}),l(b)(o.claims.data)?(s(),f(X,{key:1,modelValue:D,"onUpdate:modelValue":d[2]||(d[2]=a=>D=a),pagination:T.value,search:!1},{default:r(()=>[g.value.length>0?(s(),c("table",$e,[t("thead",Ve,[t("tr",null,[e(A,{first:!0},{default:r(()=>[m("Type")]),_:1}),e(A,{class:"whitespace-pre-line"},{default:r(()=>[m("Commentaire")]),_:1})])]),t("tbody",Ce,[(s(!0),c(B,null,E(g.value,a=>(s(),c("tr",{key:a.rating_claim_id},[e(U,{first:!0},{default:r(()=>[m(y(a.type.claim_type_name),1)]),_:2},1024),e(U,{class:"whitespace-pre-line"},{default:r(()=>[m(y(a.rating_claim_comment||"__"),1)]),_:2},1024),t("td",Ne,[_.value&&!o.rating.rating_is_validated?(s(),c("div",Be,[t("button",{class:"rounded-lg bg-cyan-600 p-2 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600",type:"button",onClick:p=>F(a.rating_claim_id)},[e(l(se),{"aria-hidden":"true",class:"h-5 w-5"})],8,Ee),t("button",{class:"rounded-lg bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",type:"button",onClick:p=>l($).delete(u.route("rating-claims.destroy",{rating:o.rating.rating_id,rating_claim:a.rating_claim_id}))},[e(l(ne),{"aria-hidden":"true",class:"h-5 w-5"})],8,Ae)])):h("",!0)])]))),128))])])):(s(),c("div",Ue," Aucun élément trouvé."))]),_:1},8,["pagination"])):(s(),f(Y,{key:2,message:_.value?"Demander une réclamation en utilisant la liste déroulante en haut.":"",title:"Aucune réclamation faite pour l'instant."},null,8,["message"]))])]),_:1}))}};export{Ye as default};
