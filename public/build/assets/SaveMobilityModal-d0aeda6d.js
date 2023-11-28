import{r as B,w as V,o as m,d as f,e as i,u as e,T as N,f as a,a as t,c as _,g as p,n as y,t as k,p as U,F as C,j,k as g,i as z}from"./app-2a089cf5.js";import{a as b,h as $,G as D,U as F,S as T}from"./helper-18252d35.js";import{_ as v}from"./InputLabel-b11fe90f.js";import{_ as M}from"./InputError-28730c1d.js";import{_ as q}from"./TextArea-5cd6d66b.js";import{_ as E}from"./FormIndications-17f37fff.js";import{_ as G}from"./SubmitButton-4134ce53.js";import{_ as H}from"./TextInput-2d214972.js";import{r as A}from"./ChevronUpDownIcon-dfef16cc.js";import{r as L}from"./CheckIcon-7d20fe28.js";import{B as P,N as R,H as I,U as J}from"./listbox-d34d1a30.js";import"./CheckIcon-4be47fd9.js";import"./use-controllable-595812ac.js";const K=t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),O={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},Q={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},W=["onSubmit"],X=t("h3",{class:"text-base font-semibold leading-6 text-gray-900"},"Demander une mobilité",-1),Y=t("div",{class:"mt-2 max-w-xl text-sm text-gray-500"},[t("p",null,"Rechercher une mobilité et ajouter la à la liste des demandes pour cette évaluation. ")],-1),Z={class:"px-4 py-6 sm:p-8"},ee={class:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},te={class:"col-span-full"},ae={class:"mt-2"},se={class:"flex flex-col space-y-2"},ie={class:"col-span-full"},le={class:"mt-2"},oe={class:"col-span-full relative"},ne={class:"relative"},re={key:0,class:"block truncate"},me={key:1,class:"block truncate"},de={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},ce={class:"flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"},$e={__name:"SaveMobilityModal",props:{opened:{type:Boolean,default:!1},types:{},isValidator:{},rating:{},mobility:{}},emits:["closeModal"],setup(n,{emit:h}){const d=n,c=B(!1);let s;const u=l=>{s=N(l===void 0?{rating_mobility_title:"",rating_mobility_comment:"",mobility_type_id:b(d.types)?d.types[0].mobility_type_id:null}:{rating_mobility_id:l.rating_mobility_id,rating_mobility_title:l.rating_mobility_title,rating_mobility_comment:l.rating_mobility_comment||"",mobility_type_id:l.mobility_type_id})},S=()=>{s.rating_mobility_id?s.put(route("rating-mobilities.update",{rating:d.rating.rating_id,rating_mobility:s.rating_mobility_id}),{onSuccess:l=>{c.value=!1,h("closeModal"),u()}}):s.post(route("rating-mobilities.store",{rating:d.rating.rating_id}),{onSuccess:l=>{c.value=!1,h("closeModal"),u()}})};return u(),V(()=>d.opened,l=>{c.value=l},{immediate:!0}),V(()=>d.mobility,l=>{u(l)}),(l,r)=>(m(),f(e(T),{show:c.value,as:"template"},{default:i(()=>[a(e(F),{as:"div",class:"relative z-10",onClose:r[3]||(r[3]=o=>{c.value=!1,l.$emit("closeModal")})},{default:i(()=>[a(e($),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[K]),_:1}),t("div",O,[t("div",Q,[a(e($),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:i(()=>[a(e(D),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6"},{default:i(()=>[!n.isValidator&&!n.rating.rating_is_validated?(m(),_("form",{key:0,onSubmit:z(S,["prevent"])},[X,Y,t("div",Z,[t("div",ee,[t("div",te,[a(v,{for:"",required:""},{default:i(()=>[p("Poste")]),_:1}),t("div",ae,[a(H,{ref:"input",modelValue:e(s).rating_mobility_title,"onUpdate:modelValue":r[0]||(r[0]=o=>e(s).rating_mobility_title=o),invalid:e(s).errors.rating_mobility_title!==void 0},null,8,["modelValue","invalid"])]),t("div",se,[a(M,{message:e(s).errors.rating_mobility_title},null,8,["message"])])]),t("div",ie,[a(v,null,{default:i(()=>[p("Commentaire")]),_:1}),t("div",le,[a(q,{modelValue:e(s).rating_mobility_comment,"onUpdate:modelValue":r[1]||(r[1]=o=>e(s).rating_mobility_comment=o)},null,8,["modelValue"])])]),t("div",oe,[a(v,{for:"",required:""},{default:i(()=>[p("Nature")]),_:1}),a(e(P),{modelValue:e(s).mobility_type_id,"onUpdate:modelValue":r[2]||(r[2]=o=>e(s).mobility_type_id=o)},{default:i(()=>[t("div",ne,[a(e(R),{class:y([e(s).errors.phase_id?"ring-red-300":"ring-gray-300","w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-cyan-700 sm:text-sm sm:leading-6"])},{default:i(()=>[e(b)(n.types)?(m(),_("span",re,k(n.types.filter(o=>o.mobility_type_id===e(s).mobility_type_id)[0].mobility_type_name),1)):(m(),_("span",me,"Aucune Mobilité disponible pour l'instant.")),t("span",de,[a(e(A),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])]),_:1},8,["class"]),a(U,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:i(()=>[e(b)(n.types)?(m(),f(e(I),{key:0,class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:i(()=>[(m(!0),_(C,null,j(n.types,o=>(m(),f(e(J),{key:o.mobility_type_id,value:o.mobility_type_id,as:"template"},{default:i(({active:x,selected:w})=>[t("li",{class:y([x?"bg-cyan-600  text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[t("span",{class:y([w?"font-semibold":"font-normal","block truncate"])},k(o.mobility_type_name),3),w?(m(),_("span",{key:0,class:y([x?"text-white":"text-cyan-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[a(e(L),{"aria-hidden":"true",class:"h-5 w-5"})],2)):g("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})):g("",!0)]),_:1})])]),_:1},8,["modelValue"])]),a(M,{message:e(s).errors.mobility_type_id},null,8,["message"])])]),t("div",ce,[a(E),a(G,{disabled:n.rating.rating_is_validated,processing:e(s).processing,class:"mt-3 sm:ml-3 sm:mt-0 sm:w-auto",type:"submit"},{default:i(()=>[p("Enregistrer ")]),_:1},8,["disabled","processing"])])],40,W)):g("",!0)]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}};export{$e as default};
