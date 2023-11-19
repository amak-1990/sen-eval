<<<<<<<< HEAD:public/build/assets/ValidationWarning-88f833df.js
import{o as i,c as o,a as e,t as u,n as w,j as g,e as v,f as t,g as s,k as c,F as y,i as $,u as r,r as k,w as V,b as M,T as j,Q as C}from"./app-f8ae13a8.js";import{c as S,m as N,U as B,b as h,G as z,V as D,S as Y}from"./AuthenticatedLayout-2813ffe8.js";import{S as A}from"./SimpleTable-bafb54ce.js";import{_ as p,a as _}from"./TableData-ffcd2249.js";import{r as F}from"./ExclamationTriangleIcon-babde7d0.js";const T={class:"border-cyan-600 pr-4 py-2 sm:pr-6 flex justify-between items-center border-b-2"},E={key:0,class:"flex space-x-2"},G={class:"flex-shrink-0"},H={class:"flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan-600"},L={class:"text-cyan-600"},U=e("span",{class:"text-3xl"},"/",-1),P={class:"flex-shrink-0"},Q={class:"flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan-600"},R={class:"text-cyan-600"},fe={__name:"SectionMark",props:{title:String,mark:Number,marking:Number},setup(a){return(f,l)=>(i(),o("div",T,[e("h3",{class:w([a.marking?"":"h-9","text-lg font-semibold leading-6 text-gray-900"])},u(a.title),3),a.marking?(i(),o("div",E,[e("span",G,[e("span",H,[e("span",L,u(a.mark??0),1)])]),U,e("span",P,[e("span",Q,[e("span",R,u(a.marking),1)])])])):g("",!0)]))}},W={class:"min-w-full divide-y divide-gray-300"},q={class:"bg-gray-50"},I={class:"divide-y divide-gray-200 bg-white"},J={class:"text-base leading-6 text-gray-900"},K={key:0,class:"text-white bg-gray-500 ring-gray-600/20 rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"},O={key:1,class:"text-white bg-gray-500 ring-gray-600/20 rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"},X=e("p",{class:"text-white bg-green-600 ring-green-600/20 rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"}," Validé le ",-1),Z={key:1,class:"text-white bg-red-600 ring-red-600/20 rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"},pe={__name:"ValidatorsList",props:{validators:{},rating:{}},setup(a){return(f,l)=>(i(),v(A,null,{default:t(()=>[e("table",W,[e("thead",q,[e("tr",null,[s(p,{first:!0},{default:t(()=>[c("Agent")]),_:1}),s(p,null,{default:t(()=>[c("Commentaire")]),_:1}),s(p,null,{default:t(()=>[c("Date de validation")]),_:1})])]),e("tbody",I,[(i(!0),o(y,null,$(a.validators,n=>(i(),o("tr",{key:n.rating_validator_id},[s(_,{first:!0,class:"flex items-start gap-x-2"},{default:t(()=>[e("p",J,u(n.user.user_display_name),1),n.validator_id===a.rating.evaluated_id?(i(),o("p",K," Évalué ")):g("",!0),n.validator_id===a.rating.evaluator_id?(i(),o("p",O," Évaluateur ")):g("",!0)]),_:2},1024),s(_,{class:"whitespace-pre-line"},{default:t(()=>[c(u(n.rating_validator_comment||"Pas de commentaire."),1)]),_:2},1024),s(_,{class:"flex items-start gap-x-3"},{default:t(()=>[n.validated_at?(i(),o(y,{key:0},[X,c(" "+u(r(S)(r(N)(n.validated_at).format("DD MMMM YYYY á HH:mm"))),1)],64)):(i(),o("p",Z," Non Validé "))]),_:2},1024)]))),128))])])]),_:1}))}},ee=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),te={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},se={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},ae={class:"sm:flex sm:items-start"},ie={class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},ne={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},re=e("div",{class:"mt-2"},[e("p",{class:"text-sm text-gray-500"},"Êtes vous sûre de vouloir valider cet évaluation? Aprés validation par toute les parties aucune modification ne pourra être apportés. Cette action est irréversible. ")],-1),oe={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},_e={__name:"ValidationWarning",props:{opened:{type:Boolean,default:!1},validation:{}},emits:["closeModal"],setup(a){const f=a,l=k(!1);V(()=>f.opened,d=>{l.value=d},{immediate:!0});const n=M(()=>j({validator_id:f.validation.validator_id,has_validated:!0})),b=()=>{n.value.put(route("validations.update",{validation:f.validation.rating_validator_id}),{onError:d=>{C().props.flash.notify={type:"error",message:d.has_validated}},preserveScroll:!0})};return(d,m)=>(i(),v(r(Y),{show:l.value,as:"template"},{default:t(()=>[s(r(B),{as:"div",class:"relative z-10",onClose:m[2]||(m[2]=x=>{l.value=!1,d.$emit("closeModal")})},{default:t(()=>[s(r(h),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:t(()=>[ee]),_:1}),e("div",te,[e("div",se,[s(r(h),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:t(()=>[s(r(z),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"},{default:t(()=>[e("div",ae,[e("div",ie,[s(r(F),{"aria-hidden":"true",class:"h-6 w-6 text-red-600"})]),e("div",ne,[s(r(D),{as:"h3",class:"text-base font-semibold leading-6 text-gray-900"},{default:t(()=>[c("Validation")]),_:1}),re])]),e("div",oe,[e("button",{class:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",type:"button",onClick:m[0]||(m[0]=x=>{b(),l.value=!1,d.$emit("closeModal")})},"Valider "),e("button",{ref:"cancelButtonRef",class:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",type:"button",onClick:m[1]||(m[1]=x=>{l.value=!1,d.$emit("closeModal")})},"Annuler ",512)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}};export{fe as _,pe as a,_e as b};
========
import{o as i,c as o,a as e,t as u,n as w,j as g,e as v,f as t,g as s,k as c,F as y,i as $,u as r,r as k,w as V,b as M,T as j,Q as C}from"./app-3e4b2772.js";import{c as S,m as N,U as B,b as h,G as z,V as D,S as Y}from"./AuthenticatedLayout-3ac73bac.js";import{S as A}from"./SimpleTable-0777a18a.js";import{_ as p,a as _}from"./TableData-81b0e721.js";import{r as F}from"./ExclamationTriangleIcon-08ad488e.js";const T={class:"border-cyan-600 pr-4 py-2 sm:pr-6 flex justify-between items-center border-b-2"},E={key:0,class:"flex space-x-2"},G={class:"flex-shrink-0"},H={class:"flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan-600"},L={class:"text-cyan-600"},U=e("span",{class:"text-3xl"},"/",-1),P={class:"flex-shrink-0"},Q={class:"flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan-600"},R={class:"text-cyan-600"},fe={__name:"SectionMark",props:{title:String,mark:Number,marking:Number},setup(a){return(f,l)=>(i(),o("div",T,[e("h3",{class:w([a.marking?"":"h-9","text-lg font-semibold leading-6 text-gray-900"])},u(a.title),3),a.marking?(i(),o("div",E,[e("span",G,[e("span",H,[e("span",L,u(a.mark??0),1)])]),U,e("span",P,[e("span",Q,[e("span",R,u(a.marking),1)])])])):g("",!0)]))}},W={class:"min-w-full divide-y divide-gray-300"},q={class:"bg-gray-50"},I={class:"divide-y divide-gray-200 bg-white"},J={class:"text-base leading-6 text-gray-900"},K={key:0,class:"text-white bg-gray-500 ring-gray-600/20 rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"},O={key:1,class:"text-white bg-gray-500 ring-gray-600/20 rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"},X=e("p",{class:"text-white bg-green-600 ring-green-600/20 rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"}," Validé le ",-1),Z={key:1,class:"text-white bg-red-600 ring-red-600/20 rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"},pe={__name:"ValidatorsList",props:{validators:{},rating:{}},setup(a){return(f,l)=>(i(),v(A,null,{default:t(()=>[e("table",W,[e("thead",q,[e("tr",null,[s(p,{first:!0},{default:t(()=>[c("Agent")]),_:1}),s(p,null,{default:t(()=>[c("Commentaire")]),_:1}),s(p,null,{default:t(()=>[c("Date de validation")]),_:1})])]),e("tbody",I,[(i(!0),o(y,null,$(a.validators,n=>(i(),o("tr",{key:n.rating_validator_id},[s(_,{first:!0,class:"flex items-start gap-x-2"},{default:t(()=>[e("p",J,u(n.user.user_display_name),1),n.validator_id===a.rating.evaluated_id?(i(),o("p",K," Évalué ")):g("",!0),n.validator_id===a.rating.evaluator_id?(i(),o("p",O," Évaluateur ")):g("",!0)]),_:2},1024),s(_,{class:"whitespace-pre-line"},{default:t(()=>[c(u(n.rating_validator_comment||"Pas de commentaire."),1)]),_:2},1024),s(_,{class:"flex items-start gap-x-3"},{default:t(()=>[n.validated_at?(i(),o(y,{key:0},[X,c(" "+u(r(S)(r(N)(n.validated_at).format("DD MMMM YYYY á HH:mm"))),1)],64)):(i(),o("p",Z," Non Validé "))]),_:2},1024)]))),128))])])]),_:1}))}},ee=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),te={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},se={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},ae={class:"sm:flex sm:items-start"},ie={class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},ne={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},re=e("div",{class:"mt-2"},[e("p",{class:"text-sm text-gray-500"},"Êtes vous sûre de vouloir valider cet évaluation? Aprés validation par toute les parties aucune modification ne pourra être apportés. Cette action est irréversible. ")],-1),oe={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},_e={__name:"ValidationWarning",props:{opened:{type:Boolean,default:!1},validation:{}},emits:["closeModal"],setup(a){const f=a,l=k(!1);V(()=>f.opened,d=>{l.value=d},{immediate:!0});const n=M(()=>j({validator_id:f.validation.validator_id,has_validated:!0})),b=()=>{n.value.put(route("validations.update",{validation:f.validation.rating_validator_id}),{onError:d=>{C().props.flash.notify={type:"error",message:d.has_validated}},preserveScroll:!0})};return(d,m)=>(i(),v(r(Y),{show:l.value,as:"template"},{default:t(()=>[s(r(B),{as:"div",class:"relative z-10",onClose:m[2]||(m[2]=x=>{l.value=!1,d.$emit("closeModal")})},{default:t(()=>[s(r(h),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:t(()=>[ee]),_:1}),e("div",te,[e("div",se,[s(r(h),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:t(()=>[s(r(z),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"},{default:t(()=>[e("div",ae,[e("div",ie,[s(r(F),{"aria-hidden":"true",class:"h-6 w-6 text-red-600"})]),e("div",ne,[s(r(D),{as:"h3",class:"text-base font-semibold leading-6 text-gray-900"},{default:t(()=>[c("Validation")]),_:1}),re])]),e("div",oe,[e("button",{class:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",type:"button",onClick:m[0]||(m[0]=x=>{b(),l.value=!1,d.$emit("closeModal")})},"Valider "),e("button",{ref:"cancelButtonRef",class:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",type:"button",onClick:m[1]||(m[1]=x=>{l.value=!1,d.$emit("closeModal")})},"Annuler ",512)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}};export{fe as _,pe as a,_e as b};
>>>>>>>> 6ba55a1 (bug fixes):public/build/assets/ValidationWarning-8cbd228d.js
