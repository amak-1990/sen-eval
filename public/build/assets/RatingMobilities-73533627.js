import{Q as z,b as V,r as C,T as F,w as H,o as r,e as f,f as l,g as e,u as t,Z as O,a,c as _,k as u,n as x,t as c,p as R,F as B,i as E,j as k,h as L,O as N}from"./app-f8ae13a8.js";import{h as p,_ as Q,g as Z}from"./AuthenticatedLayout-2813ffe8.js";import{_ as G,a as I}from"./Title-37f5f1c4.js";import{_ as J}from"./Breadcrumbs-bf684264.js";import{_ as K}from"./Separator-709f6ad0.js";import{_ as W}from"./SubmitButton-3c340819.js";import{_ as A}from"./InputError-5ad9c794.js";import{_ as X}from"./Datatable-d78cc678.js";import{_ as Y}from"./EmptyState-109dd5b1.js";import{_ as y,a as w}from"./TableData-ffcd2249.js";import{_ as D}from"./InputLabel-e4c54691.js";import{_ as ee}from"./TextInput-baf5395b.js";import{_ as te}from"./FormIndications-589d8c17.js";import{_ as ie}from"./TextArea-bea4a24a.js";import{r as ae}from"./ChevronUpDownIcon-04ce2a86.js";import{r as se}from"./CheckIcon-2be9309a.js";import{r as le}from"./PencilSquareIcon-f2f51d98.js";import{r as ne}from"./TrashIcon-431c284b.js";import{N as re,H as oe,B as de,U as ue}from"./listbox-5a91eab3.js";import"./logo1637145113-11387d37.js";import"./PlusIcon-30f9dbdb.js";import"./use-controllable-9cbca8e5.js";const _e={class:"px-4 sm:px-6 lg:px-8"},me=["onSubmit"],ce=a("h3",{class:"text-base font-semibold leading-6 text-gray-900"},"Demander une mobilité",-1),ge=a("div",{class:"mt-2 max-w-xl text-sm text-gray-500"},[a("p",null,"Rechercher une mobilité et ajouter la à la liste des demandes pour cette évaluation. ")],-1),fe={class:"px-4 py-6 sm:p-8"},pe={class:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},ye={class:"col-span-full"},be={class:"mt-2"},ve={class:"flex flex-col space-y-2"},he={class:"col-span-full"},xe={class:"mt-2"},ke={class:"col-span-full relative"},we={class:"relative"},$e={key:0,class:"block truncate"},Ve={key:1,class:"block truncate"},Ce={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},Ne={class:"flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"},De={key:0,class:"min-w-full divide-y divide-gray-300"},Me={class:"bg-gray-50"},Ue={class:"divide-y divide-gray-200 bg-white"},Be={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},Ee={key:0,class:"flex items-center justify-center space-x-2"},Ae=["onClick"],je=["onClick"],Pe={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},j="",st={__name:"RatingMobilities",props:{agent:{},rating:{},types:{type:Array},mobilities:{}},setup(d){const n=d,b=z().props.auth.user,v=V(()=>b.user_id===n.rating.evaluated_id),$=V(()=>b.user_id!==n.rating.evaluated_id&&b.user_id!==n.rating.evaluator_id),P=v.value?[{name:"Mes Évaluations",href:route("ratings.index",{agent_rating:n.rating.rating_id}),current:!1},{name:"Evaluation",href:"#",current:!0}]:$?[{name:"Mes validations",href:route("validations.index"),current:!1},{name:"Évaluation",href:"#",current:!0}]:[{name:"Mes Agents",href:route("agents.index"),current:!1},{name:"Évaluations",href:route("agent-ratings.index",{agent:n.agent.user_id}),current:!1},{name:"Evaluation",href:"#",current:!0}],S=V(()=>Z(n.mobilities)),g=C(n.mobilities.data),M=C(null);let s=C(F(v.value?{asked_by_evaluated:1,rating_mobility_title:"",rating_mobility_comment:"",mobility_type_id:p(n.types)?n.types[0].mobility_type_id:null}:{asked_by_evaluator:1,rating_mobility_title:"",rating_mobility_comment:"",mobility_type_id:p(n.types)?n.types[0].mobility_type_id:null}));const T=m=>{const o=g.value.filter(i=>i.rating_mobility_id===m)[0];v?s.value.asked_by_evaluated=o.asked_by_evaluated:s.value.asked_by_evaluator=o.asked_by_evaluator,s.value.rating_mobility_id=m,s.value.rating_mobility_title=o.rating_mobility_title,s.value.rating_mobility_comment=o.rating_mobility_comment,s.value.mobility_type_id=o.mobility_type_id,M.value.focus()},q=()=>{s.value.rating_mobility_id?s.value.put(route("rating-mobilities.update",{rating:n.rating.rating_id,rating_mobility:s.value.rating_mobility_id})):s.value.post(route("rating-mobilities.store",{rating:n.rating.rating_id}))};return H(()=>n.mobilities,function(m){g.value=m.data,!g.value.length>0&&(m.prev_page_url?N.get(m.prev_page_url):N.get(m.first_page_url))}),(m,o)=>(r(),f(Q,null,{default:l(()=>[e(t(O),{title:"Profil"}),a("div",_e,[e(J,{pages:t(P)},null,8,["pages"]),e(G,{agent:d.agent,rating:d.rating},null,8,["agent","rating"]),e(I,{agent_id:n.agent.user_id,evaluated:v.value,rating_id:n.rating.rating_id,validator:$.value},null,8,["agent_id","evaluated","rating_id","validator"]),!$.value&&!d.rating.rating_is_validated?(r(),_("form",{key:0,class:"mt-8 bg-white px-4 py-5 sm:p-6 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2",onSubmit:L(q,["prevent"])},[ce,ge,a("div",fe,[a("div",pe,[a("div",ye,[e(D,{for:"",required:""},{default:l(()=>[u("Poste")]),_:1}),a("div",be,[e(ee,{ref_key:"input",ref:M,modelValue:t(s).rating_mobility_title,"onUpdate:modelValue":o[0]||(o[0]=i=>t(s).rating_mobility_title=i),invalid:t(s).errors.rating_mobility_title!==void 0},null,8,["modelValue","invalid"])]),a("div",ve,[e(A,{message:t(s).errors.rating_mobility_title},null,8,["message"])])]),a("div",he,[e(D,{for:""},{default:l(()=>[u("Commentaire")]),_:1}),a("div",xe,[e(ie,{modelValue:t(s).rating_mobility_comment,"onUpdate:modelValue":o[1]||(o[1]=i=>t(s).rating_mobility_comment=i)},null,8,["modelValue"])])]),a("div",ke,[e(D,{for:"",required:""},{default:l(()=>[u("Nature")]),_:1}),e(t(de),{modelValue:t(s).mobility_type_id,"onUpdate:modelValue":o[2]||(o[2]=i=>t(s).mobility_type_id=i)},{default:l(()=>[a("div",we,[e(t(re),{class:x([t(s).errors.phase_id?"ring-red-300":"ring-gray-300","w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-cyan-600 sm:text-sm sm:leading-6"])},{default:l(()=>[t(p)(d.types)?(r(),_("span",$e,c(d.types.filter(i=>i.mobility_type_id===t(s).mobility_type_id)[0].mobility_type_name),1)):(r(),_("span",Ve,"Aucune Mobilité disponible pour l'instant.")),a("span",Ce,[e(t(ae),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])]),_:1},8,["class"]),e(R,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[t(p)(d.types)?(r(),f(t(oe),{key:0,class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:l(()=>[(r(!0),_(B,null,E(d.types,i=>(r(),f(t(ue),{key:i.mobility_type_id,value:i.mobility_type_id,as:"template"},{default:l(({active:h,selected:U})=>[a("li",{class:x([h?"bg-cyan-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[a("span",{class:x([U?"font-semibold":"font-normal","block truncate"])},c(i.mobility_type_name),3),U?(r(),_("span",{key:0,class:x([h?"text-white":"text-cyan-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[e(t(se),{"aria-hidden":"true",class:"h-5 w-5"})],2)):k("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})):k("",!0)]),_:1})])]),_:1},8,["modelValue"])]),e(A,{message:t(s).errors.mobility_type_id},null,8,["message"])])]),a("div",Ne,[e(te),e(W,{disabled:d.rating.rating_is_validated,processing:t(s).processing,class:"mt-3 sm:ml-3 sm:mt-0 sm:w-auto",type:"submit"},{default:l(()=>[u("Enregistrer ")]),_:1},8,["disabled","processing"])])],40,me)):k("",!0),e(K,{title:"Mobilités Demandées"}),t(p)(d.mobilities.data)?(r(),f(X,{key:1,modelValue:j,"onUpdate:modelValue":o[3]||(o[3]=i=>j=i),pagination:S.value,search:!1},{default:l(()=>[g.value.length>0?(r(),_("table",De,[a("thead",Me,[a("tr",null,[e(y,{first:!0},{default:l(()=>[u("Nature")]),_:1}),e(y,null,{default:l(()=>[u("Demandée par")]),_:1}),e(y,null,{default:l(()=>[u("Poste demandé")]),_:1}),e(y,{class:"whitespace-pre-line"},{default:l(()=>[u("Commentaire")]),_:1}),e(y)])]),a("tbody",Ue,[(r(!0),_(B,null,E(g.value,i=>(r(),_("tr",{key:i.rating_mobility_id},[e(w,{first:!0,class:"whitespace-pre-line"},{default:l(()=>[u(c(i.type.mobility_type_name),1)]),_:2},1024),e(w,null,{default:l(()=>[u(c(i.asked_by?i.asked_by.user_display_name:"Unknown"),1)]),_:2},1024),e(w,null,{default:l(()=>[u(c(i.rating_mobility_title),1)]),_:2},1024),e(w,{class:"whitespace-pre-line"},{default:l(()=>[u(c(i.rating_mobility_comment),1)]),_:2},1024),a("td",Be,[!d.rating.rating_is_validated&&i.asked_by&&t(b).user_id===i.asked_by.user_id?(r(),_("div",Ee,[a("button",{class:"rounded-lg bg-cyan-600 p-2 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600",type:"button",onClick:h=>T(i.rating_mobility_id)},[e(t(le),{"aria-hidden":"true",class:"h-5 w-5"})],8,Ae),a("button",{class:"rounded-lg bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",type:"button",onClick:h=>t(N).delete(m.route("rating-mobilities.destroy",{rating:d.rating.rating_id,rating_mobility:i.rating_mobility_id}))},[e(t(ne),{"aria-hidden":"true",class:"h-5 w-5"})],8,je)])):k("",!0)])]))),128))])])):(r(),_("div",Pe," Aucun élément trouvé."))]),_:1},8,["pagination"])):(r(),f(Y,{key:2,message:"Demander une mobilité en utilisant le formulaire en haut.",title:"Aucune mobilité demandée pour l'instant."}))])]),_:1}))}};export{st as default};
