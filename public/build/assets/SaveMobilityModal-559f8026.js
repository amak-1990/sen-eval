import{r as B,w as k,o as m,d as f,e as s,u as e,T as N,f as a,a as t,c as _,g as y,n as p,t as V,p as U,F as C,j,k as g,i as z}from"./app-81706381.js";import{a as b,h as $,G as D,U as F,S as T}from"./helper-df860a3e.js";import{_ as v}from"./InputLabel-f4db3ebe.js";import{_ as M}from"./InputError-0137a0d7.js";import{_ as q}from"./TextArea-ba8bc83b.js";import{_ as E}from"./FormIndications-64031431.js";import{_ as G}from"./SubmitButton-2eda4449.js";import{_ as H}from"./TextInput-7c706452.js";import{r as A}from"./ChevronUpDownIcon-ee624a25.js";import{r as L}from"./CheckIcon-abb97c5a.js";import{B as P,N as R,H as I,U as J}from"./listbox-e3924e79.js";import"./CheckIcon-98be674a.js";import"./use-controllable-476ed86c.js";const K=t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),O={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},Q={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},W=["onSubmit"],X=t("h3",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"},"Demander une mobilité",-1),Y=t("div",{class:"mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-100"},[t("p",null,"Rechercher une mobilité et ajouter la à la liste des demandes pour cette évaluation. ")],-1),Z={class:"px-4 py-6 sm:p-8"},ee={class:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},te={class:"col-span-full"},ae={class:"mt-2"},ie={class:"flex flex-col space-y-2"},se={class:"col-span-full"},le={class:"mt-2"},oe={class:"col-span-full relative"},re={class:"relative"},ne={key:0,class:"block truncate"},me={key:1,class:"block truncate"},de={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},ce={class:"flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"},$e={__name:"SaveMobilityModal",props:{opened:{type:Boolean,default:!1},types:{},isValidator:{},rating:{},mobility:{}},emits:["closeModal"],setup(r,{emit:h}){const d=r,c=B(!1);let i;const u=l=>{i=N(l===void 0?{rating_mobility_title:"",rating_mobility_comment:"",mobility_type_id:b(d.types)?d.types[0].mobility_type_id:null}:{rating_mobility_id:l.rating_mobility_id,rating_mobility_title:l.rating_mobility_title,rating_mobility_comment:l.rating_mobility_comment||"",mobility_type_id:l.mobility_type_id})},S=()=>{i.rating_mobility_id?i.put(route("rating-mobilities.update",{rating:d.rating.rating_id,rating_mobility:i.rating_mobility_id}),{onSuccess:l=>{c.value=!1,h("closeModal"),u()}}):i.post(route("rating-mobilities.store",{rating:d.rating.rating_id}),{onSuccess:l=>{c.value=!1,h("closeModal"),u()}})};return u(),k(()=>d.opened,l=>{c.value=l},{immediate:!0}),k(()=>d.mobility,l=>{u(l)}),(l,n)=>(m(),f(e(T),{show:c.value,as:"template"},{default:s(()=>[a(e(F),{as:"div",class:"relative z-10",onClose:n[3]||(n[3]=o=>{c.value=!1,l.$emit("closeModal")})},{default:s(()=>[a(e($),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[K]),_:1}),t("div",O,[t("div",Q,[a(e($),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:s(()=>[a(e(D),{class:"relative transform overflow-hidden rounded-lg bg-white dark:bg-grayish px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6"},{default:s(()=>[!r.isValidator&&!r.rating.rating_is_validated?(m(),_("form",{key:0,onSubmit:z(S,["prevent"])},[X,Y,t("div",Z,[t("div",ee,[t("div",te,[a(v,{for:"",required:""},{default:s(()=>[y("Poste")]),_:1}),t("div",ae,[a(H,{ref:"input",modelValue:e(i).rating_mobility_title,"onUpdate:modelValue":n[0]||(n[0]=o=>e(i).rating_mobility_title=o),invalid:e(i).errors.rating_mobility_title!==void 0},null,8,["modelValue","invalid"])]),t("div",ie,[a(M,{message:e(i).errors.rating_mobility_title},null,8,["message"])])]),t("div",se,[a(v,null,{default:s(()=>[y("Commentaire")]),_:1}),t("div",le,[a(q,{modelValue:e(i).rating_mobility_comment,"onUpdate:modelValue":n[1]||(n[1]=o=>e(i).rating_mobility_comment=o)},null,8,["modelValue"])])]),t("div",oe,[a(v,{for:"",required:""},{default:s(()=>[y("Nature")]),_:1}),a(e(P),{modelValue:e(i).mobility_type_id,"onUpdate:modelValue":n[2]||(n[2]=o=>e(i).mobility_type_id=o)},{default:s(()=>[t("div",re,[a(e(R),{class:p([e(i).errors.phase_id?"ring-red-300":"ring-gray-300","w-full cursor-default rounded-md bg-white dark:bg-grayish py-1.5 pl-3 pr-10 text-left text-gray-900 dark:text-white shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-cyan-700 sm:text-sm sm:leading-6"])},{default:s(()=>[e(b)(r.types)?(m(),_("span",ne,V(r.types.filter(o=>o.mobility_type_id===e(i).mobility_type_id)[0].mobility_type_name),1)):(m(),_("span",me,"Aucune Mobilité disponible pour l'instant.")),t("span",de,[a(e(A),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])]),_:1},8,["class"]),a(U,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:s(()=>[e(b)(r.types)?(m(),f(e(I),{key:0,class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-grayish py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:s(()=>[(m(!0),_(C,null,j(r.types,o=>(m(),f(e(J),{key:o.mobility_type_id,value:o.mobility_type_id,as:"template"},{default:s(({active:x,selected:w})=>[t("li",{class:p([x?"bg-cyan-600  text-white":"text-gray-900 dark:text-white","relative cursor-default select-none py-2 pl-3 pr-9"])},[t("span",{class:p([w?"font-semibold":"font-normal","block truncate"])},V(o.mobility_type_name),3),w?(m(),_("span",{key:0,class:p([x?"text-white":"text-cyan-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[a(e(L),{"aria-hidden":"true",class:"h-5 w-5"})],2)):g("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})):g("",!0)]),_:1})])]),_:1},8,["modelValue"])]),a(M,{message:e(i).errors.mobility_type_id},null,8,["message"])])]),t("div",ce,[a(E),a(G,{disabled:r.rating.rating_is_validated,processing:e(i).processing,class:"mt-3 sm:ml-3 sm:mt-0 sm:w-auto",type:"submit"},{default:s(()=>[y("Enregistrer ")]),_:1},8,["disabled","processing"])])],40,W)):g("",!0)]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}};export{$e as default};