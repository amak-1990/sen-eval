import{Q as z,b as V,r as C,T as F,w as H,o as n,e as f,f as l,g as e,u as t,Z as O,a,c as m,k as u,n as v,t as c,p as R,F as B,i as E,j as h,h as L,O as M}from"./app-85fecfce.js";import{h as x,_ as Q,g as Z}from"./AuthenticatedLayout-33b88696.js";import{_ as G,a as I}from"./Title-d7d47009.js";import{_ as J}from"./Breadcrumbs-4927dda0.js";import{_ as K}from"./Separator-b4eabf35.js";import{_ as W}from"./SubmitButton-78d2e83f.js";import{_ as A}from"./InputError-a19c1778.js";import{_ as X}from"./Datatable-9fd4742e.js";import{_ as Y}from"./EmptyState-3e6b0729.js";import{_ as p,a as w}from"./TableData-75c0753e.js";import{_ as N}from"./InputLabel-e5ba497b.js";import{_ as ee}from"./TextInput-06318e51.js";import{_ as te}from"./FormIndications-bed34787.js";import{_ as ie}from"./TextArea-e1fce75e.js";import{r as ae}from"./ChevronUpDownIcon-226cc4e2.js";import{r as se}from"./CheckIcon-c05fb05a.js";import{r as le}from"./PencilSquareIcon-20fd3152.js";import{r as ne}from"./TrashIcon-e8a6a5a5.js";import{N as re,H as oe,B as de,U as ue}from"./listbox-1dfbff28.js";import"./logo1637145113-c7398df9.js";import"./use-controllable-d8497fa4.js";const me={class:"px-4 sm:px-6 lg:px-8"},_e=["onSubmit"],ce=a("h3",{class:"text-base font-semibold leading-6 text-gray-900"},"Demander une mobilité",-1),ge=a("div",{class:"mt-2 max-w-xl text-sm text-gray-500"},[a("p",null,"Rechercher une mobilité et ajouter la à la liste des demandes pour cette évaluation. ")],-1),fe={class:"px-4 py-6 sm:p-8"},pe={class:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},ye={class:"col-span-full"},be={class:"mt-2"},ve={class:"flex flex-col space-y-2"},he={class:"col-span-full"},xe={class:"mt-2"},we={class:"col-span-full relative"},ke={class:"relative"},$e={key:0,class:"block truncate"},Ve={key:1,class:"block truncate"},Ce={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},Me={class:"flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"},Ne={key:0,class:"min-w-full divide-y divide-gray-300"},De={class:"bg-gray-50"},Ue={class:"divide-y divide-gray-200 bg-white"},Be={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},Ee={key:0,class:"flex items-center justify-center space-x-2"},Ae=["onClick"],je=["onClick"],qe={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},j="",at={__name:"RatingMobilities",props:{agent:{},rating:{},types:{type:Array},mobilities:{}},setup(d){const r=d,y=z().props.auth.user,k=V(()=>y.user_id===r.rating.evaluated_id),$=V(()=>y.user_id!==r.rating.evaluated_id&&y.user_id!==r.rating.evaluator_id),q=k.value?[{name:"Mes Évaluations",href:route("ratings.index",{agent_rating:r.rating.rating_id}),current:!1},{name:"Evaluation",href:"#",current:!0}]:$?[{name:"Mes validations",href:route("validations.index"),current:!1},{name:"Évaluation",href:"#",current:!0}]:[{name:"Mes Agents",href:route("agents.index"),current:!1},{name:"Évaluations",href:route("agent-ratings.index",{agent:r.agent.user_id}),current:!1},{name:"Evaluation",href:"#",current:!0}],P=V(()=>Z(r.mobilities)),g=C(r.mobilities.data),D=C(null);let s=C(F({rating_mobility_title:"",rating_mobility_comment:"",mobility_type_id:x(r.types)?r.types[0].mobility_type_id:null}));const S=_=>{const o=g.value.filter(i=>i.rating_mobility_id===_)[0];k?s.value.asked_by_evaluated=o.asked_by_evaluated:s.value.asked_by_evaluator=o.asked_by_evaluator,s.value.rating_mobility_id=_,s.value.rating_mobility_title=o.rating_mobility_title,s.value.rating_mobility_comment=o.rating_mobility_comment,s.value.mobility_type_id=o.mobility_type_id,D.value.focus()},T=()=>{s.value.rating_mobility_id?s.value.put(route("rating-mobilities.update",{rating:r.rating.rating_id,rating_mobility:s.value.rating_mobility_id})):s.value.post(route("rating-mobilities.store",{rating:r.rating.rating_id}))};return H(()=>r.mobilities,function(_){g.value=_.data,!g.value.length>0&&(_.prev_page_url?M.get(_.prev_page_url):M.get(_.first_page_url))}),(_,o)=>(n(),f(Q,null,{default:l(()=>[e(t(O),{title:"Mobilités"}),a("div",me,[e(J,{pages:t(q)},null,8,["pages"]),e(G,{agent:d.agent,rating:d.rating},null,8,["agent","rating"]),e(I,{agent_id:r.agent.user_id,evaluated:k.value,rating_id:r.rating.rating_id,validator:$.value},null,8,["agent_id","evaluated","rating_id","validator"]),!$.value&&!d.rating.rating_is_validated?(n(),m("form",{key:0,class:"mt-8 bg-white px-4 py-5 sm:p-6 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2",onSubmit:L(T,["prevent"])},[ce,ge,a("div",fe,[a("div",pe,[a("div",ye,[e(N,{for:"",required:""},{default:l(()=>[u("Poste")]),_:1}),a("div",be,[e(ee,{ref_key:"input",ref:D,modelValue:t(s).rating_mobility_title,"onUpdate:modelValue":o[0]||(o[0]=i=>t(s).rating_mobility_title=i),invalid:t(s).errors.rating_mobility_title!==void 0},null,8,["modelValue","invalid"])]),a("div",ve,[e(A,{message:t(s).errors.rating_mobility_title},null,8,["message"])])]),a("div",he,[e(N,{required:""},{default:l(()=>[u("Commentaire")]),_:1}),a("div",xe,[e(ie,{modelValue:t(s).rating_mobility_comment,"onUpdate:modelValue":o[1]||(o[1]=i=>t(s).rating_mobility_comment=i)},null,8,["modelValue"])])]),a("div",we,[e(N,{for:"",required:""},{default:l(()=>[u("Nature")]),_:1}),e(t(de),{modelValue:t(s).mobility_type_id,"onUpdate:modelValue":o[2]||(o[2]=i=>t(s).mobility_type_id=i)},{default:l(()=>[a("div",ke,[e(t(re),{class:v([t(s).errors.phase_id?"ring-red-300":"ring-gray-300","w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-cyan-700 sm:text-sm sm:leading-6"])},{default:l(()=>[t(x)(d.types)?(n(),m("span",$e,c(d.types.filter(i=>i.mobility_type_id===t(s).mobility_type_id)[0].mobility_type_name),1)):(n(),m("span",Ve,"Aucune Mobilité disponible pour l'instant.")),a("span",Ce,[e(t(ae),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])]),_:1},8,["class"]),e(R,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[t(x)(d.types)?(n(),f(t(oe),{key:0,class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:l(()=>[(n(!0),m(B,null,E(d.types,i=>(n(),f(t(ue),{key:i.mobility_type_id,value:i.mobility_type_id,as:"template"},{default:l(({active:b,selected:U})=>[a("li",{class:v([b?"bg-cyan-600  text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[a("span",{class:v([U?"font-semibold":"font-normal","block truncate"])},c(i.mobility_type_name),3),U?(n(),m("span",{key:0,class:v([b?"text-white":"text-cyan-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[e(t(se),{"aria-hidden":"true",class:"h-5 w-5"})],2)):h("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})):h("",!0)]),_:1})])]),_:1},8,["modelValue"])]),e(A,{message:t(s).errors.mobility_type_id},null,8,["message"])])]),a("div",Me,[e(te),e(W,{disabled:d.rating.rating_is_validated,processing:t(s).processing,class:"mt-3 sm:ml-3 sm:mt-0 sm:w-auto",type:"submit"},{default:l(()=>[u("Enregistrer ")]),_:1},8,["disabled","processing"])])],40,_e)):h("",!0),e(K,{title:"Mobilités Demandées"}),t(x)(d.mobilities.data)?(n(),f(X,{key:1,modelValue:j,"onUpdate:modelValue":o[3]||(o[3]=i=>j=i),pagination:P.value,search:!1},{default:l(()=>[g.value.length>0?(n(),m("table",Ne,[a("thead",De,[a("tr",null,[e(p,{first:!0},{default:l(()=>[u("Nature")]),_:1}),e(p,null,{default:l(()=>[u("Demandée par")]),_:1}),e(p,null,{default:l(()=>[u("Poste demandé")]),_:1}),e(p,{class:"whitespace-pre-line"},{default:l(()=>[u("Commentaire")]),_:1}),e(p)])]),a("tbody",Ue,[(n(!0),m(B,null,E(g.value,i=>(n(),m("tr",{key:i.rating_mobility_id},[e(w,{first:!0,class:"whitespace-pre-line"},{default:l(()=>[u(c(i.type.mobility_type_name),1)]),_:2},1024),e(w,null,{default:l(()=>[u(c(i.asked_by?i.asked_by.user_display_name:"Unknown"),1)]),_:2},1024),e(w,null,{default:l(()=>[u(c(i.rating_mobility_title),1)]),_:2},1024),e(w,{class:"whitespace-pre-line"},{default:l(()=>[u(c(i.rating_mobility_comment),1)]),_:2},1024),a("td",Be,[!d.rating.rating_is_validated&&i.asked_by&&t(y).user_id===i.asked_by.user_id?(n(),m("div",Ee,[a("button",{class:"rounded-lg bg-cyan-600 p-2 text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600",type:"button",onClick:b=>S(i.rating_mobility_id)},[e(t(le),{"aria-hidden":"true",class:"h-5 w-5"})],8,Ae),a("button",{class:"rounded-lg bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",type:"button",onClick:b=>t(M).delete(_.route("rating-mobilities.destroy",{rating:d.rating.rating_id,rating_mobility:i.rating_mobility_id}))},[e(t(ne),{"aria-hidden":"true",class:"h-5 w-5"})],8,je)])):h("",!0)])]))),128))])])):(n(),m("div",qe," Aucun élément trouvé."))]),_:1},8,["pagination"])):(n(),f(Y,{key:2,message:"Demander une mobilité en utilisant le formulaire en haut.",title:"Aucune mobilité demandée pour l'instant."}))])]),_:1}))}};export{at as default};
