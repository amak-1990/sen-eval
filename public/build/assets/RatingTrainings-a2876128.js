import{r as C,w as R,o as r,d as x,e as s,f as e,u as a,a as t,g as o,Q as L,b as j,T as U,Z as P,c as d,n as y,t as v,p as Q,F as A,j as T,k as w,i as Z,O as E}from"./app-74a7ed68.js";import{U as I,h as z,G as J,V as K,S as W,a as V,_ as X,g as Y}from"./AuthenticatedLayout-c5d98272.js";import{_ as ee,a as te}from"./Title-6826ba98.js";import{_ as ae}from"./Breadcrumbs-9ec19463.js";import{_ as se}from"./Separator-6eb3fcab.js";import{_ as ne}from"./SubmitButton-a4088352.js";import{_ as ie}from"./InputError-82c353da.js";import{_ as re}from"./Datatable-1f2c6bab.js";import{_ as h,a as le,b as k}from"./EmptyState-dc589c25.js";import{_ as oe}from"./TextArea-06ba8401.js";import{_ as de}from"./FormIndications-6eabc421.js";import{_ as F}from"./InputLabel-821b8b0a.js";import{r as ue}from"./ExclamationTriangleIcon-a3c8ea96.js";import{r as me}from"./ChevronUpDownIcon-7cddf03d.js";import{r as ce}from"./CheckIcon-9bf2de54.js";import{r as _e}from"./TrashIcon-7903799f.js";import{N as ge,H as fe,B as pe,U as ve}from"./listbox-a2068e7f.js";import"./logo1637145113-c7398df9.js";import"./use-controllable-8a68f84c.js";const ye=t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),he={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},xe={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},be={class:"sm:flex sm:items-start"},we={class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},ke={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},$e=t("div",{class:"mt-2"},[t("p",{class:"text-sm text-gray-500"},"Êtes vous sûre de vouloir continuer ? Cette action est irréversible.")],-1),Ve={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},Ce={__name:"RevokeTraining",props:{opened:{type:Boolean,default:!1},link:{type:String},form:{}},emits:["closeModal"],setup(l){const i=l,c=C(!1);R(()=>i.opened,u=>{c.value=u},{immediate:!0});const _=()=>{i.form.put(i.link)};return(u,g)=>(r(),x(a(W),{show:c.value,as:"template"},{default:s(()=>[e(a(I),{as:"div",class:"relative z-10",onClose:g[2]||(g[2]=$=>{c.value=!1,u.$emit("closeModal")})},{default:s(()=>[e(a(z),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:s(()=>[ye]),_:1}),t("div",he,[t("div",xe,[e(a(z),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:s(()=>[e(a(J),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"},{default:s(()=>[t("div",be,[t("div",we,[e(a(ue),{"aria-hidden":"true",class:"h-6 w-6 text-red-600"})]),t("div",ke,[e(a(K),{as:"h3",class:"text-base font-semibold leading-6 text-gray-900"},{default:s(()=>[o("Suppression")]),_:1}),$e])]),t("div",Ve,[t("button",{class:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",type:"button",onClick:g[0]||(g[0]=$=>{_(),c.value=!1,u.$emit("closeModal")})},"Supprimer "),t("button",{ref:"cancelButtonRef",class:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",type:"button",onClick:g[1]||(g[1]=$=>{c.value=!1,u.$emit("closeModal")})},"Annuler ",512)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}},De={class:"px-4 sm:px-6 lg:px-8"},Me=["onSubmit"],Ne=t("h3",{class:"text-base font-semibold leading-6 text-gray-900"},"Demander une formation",-1),je=t("div",{class:"mt-2 max-w-xl text-sm text-gray-500"},[t("p",null,"Rechercher une formation et ajouter la à la liste des demandes pour cette évaluation. ")],-1),Be={class:"px-4 py-6 sm:p-8"},Se={class:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"},Ue={class:"col-span-full relative"},Ae={class:"relative"},Te={key:0,class:"block truncate"},Ee={key:1,class:"block truncate"},ze={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},Fe={class:"col-span-full"},Oe={class:"mt-2"},Re={class:"flex items-center justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"},Ge={key:0,class:"min-w-full divide-y divide-gray-300"},He={class:"bg-gray-50"},qe={class:"divide-y divide-gray-200 bg-white"},Le={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},Pe={key:0,class:"flex items-center justify-center"},Qe=["onClick"],Ze={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},O="",_t={__name:"RatingTrainings",props:{agent:{},rating:{},types:{type:Array},trainings:{}},setup(l){var B;const i=l,c=L().props.auth.user,_=j(()=>c.user_id===i.rating.evaluated_id),u=j(()=>c.user_id!==i.rating.evaluated_id&&c.user_id!==i.rating.evaluator_id),g=_.value?[{name:"Mes Évaluations",href:route("ratings.index",{agent_rating:i.rating.rating_id}),current:!1},{name:"Evaluation",href:"#",current:!0}]:u?[{name:"Mes validations",href:route("validations.index"),current:!1},{name:"Évaluation",href:"#",current:!0}]:[{name:"Mes Agents",href:route("agents.index"),current:!1},{name:"Évaluations",href:route("agent-ratings.index",{agent:i.agent.user_id}),current:!1},{name:"Evaluation",href:"#",current:!0}],$=j(()=>Y(i.trainings)),b=C(i.trainings.data),D=C(!1),M=C((B=b[0])==null?void 0:B.rating_training_id),G=f=>{M.value=f,D.value=!0},m=U(_.value?{asked_by_evaluated:1,training_type_id:null,comment:""}:{asked_by_evaluator:1,training_type_id:null,comment:""});m.training_type_id=V(i.types)?i.types[0].training_type_id:null;const H=U(_.value?{asked_by_evaluated:0}:{asked_by_evaluator:0}),q=()=>m.post(route("rating-trainings.store",{rating:i.rating.rating_id}));return R(()=>i.trainings,function(f){b.value=f.data,!b.value.length>0&&(f.prev_page_url?E.get(f.prev_page_url):E.get(f.first_page_url))}),(f,p)=>(r(),x(X,null,{default:s(()=>[e(a(P),{title:"Formations"}),t("div",De,[e(ae,{pages:a(g)},null,8,["pages"]),e(ee,{agent:l.agent,rating:l.rating},null,8,["agent","rating"]),e(te,{agent_id:i.agent.user_id,evaluated:_.value,rating_id:i.rating.rating_id,validator:u.value},null,8,["agent_id","evaluated","rating_id","validator"]),!u.value&&!l.rating.rating_is_validated?(r(),d("form",{key:0,class:"mt-8 bg-white px-4 py-5 sm:p-6 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2",onSubmit:Z(q,["prevent"])},[Ne,je,t("div",Be,[t("div",Se,[t("div",Ue,[e(F,{for:"",required:""},{default:s(()=>[o("Nature")]),_:1}),e(a(pe),{modelValue:a(m).training_type_id,"onUpdate:modelValue":p[0]||(p[0]=n=>a(m).training_type_id=n)},{default:s(()=>[t("div",Ae,[e(a(ge),{class:y([a(m).errors.phase_id?"ring-red-300":"ring-gray-300","w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-cyan-700 sm:text-sm sm:leading-6"])},{default:s(()=>[a(V)(l.types)?(r(),d("span",Te,v(l.types.filter(n=>n.training_type_id===a(m).training_type_id)[0].training_type_name),1)):(r(),d("span",Ee,"Aucune formation disponible pour l'instant.")),t("span",ze,[e(a(me),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})])]),_:1},8,["class"]),e(Q,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:s(()=>[a(V)(l.types)?(r(),x(a(fe),{key:0,class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:s(()=>[(r(!0),d(A,null,T(l.types,n=>(r(),x(a(ve),{key:n.training_type_id,value:n.training_type_id,as:"template"},{default:s(({active:N,selected:S})=>[t("li",{class:y([N?"bg-cyan-600  text-white":"text-gray-900","relative cursor-default select-none py-2 pl-3 pr-9"])},[t("span",{class:y([S?"font-semibold":"font-normal","block truncate"])},v(n.training_type_name),3),S?(r(),d("span",{key:0,class:y([N?"text-white":"text-cyan-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[e(a(ce),{"aria-hidden":"true",class:"h-5 w-5"})],2)):w("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})):w("",!0)]),_:1})])]),_:1},8,["modelValue"]),e(ie,{message:a(m).errors.training_type_id},null,8,["message"])]),t("div",Fe,[e(F,{for:""},{default:s(()=>[o("Commentaire")]),_:1}),t("div",Oe,[e(oe,{modelValue:a(m).comment,"onUpdate:modelValue":p[1]||(p[1]=n=>a(m).comment=n)},null,8,["modelValue"])])])])]),t("div",Re,[e(de),e(ne,{disabled:l.rating.rating_is_validated,processing:a(m).processing,class:"mt-3 sm:ml-3 sm:mt-0 sm:w-auto",type:"submit"},{default:s(()=>[o("Enregistrer ")]),_:1},8,["disabled","processing"])])],40,Me)):w("",!0),e(se,{title:"Formations Demandées"}),a(V)(l.trainings.data)?(r(),x(re,{key:1,modelValue:O,"onUpdate:modelValue":p[2]||(p[2]=n=>O=n),pagination:$.value,search:!1},{default:s(()=>[b.value.length>0?(r(),d("table",Ge,[t("thead",He,[t("tr",null,[e(h,{first:!0},{default:s(()=>[o("Type")]),_:1}),e(h,null,{default:s(()=>[o("Demandée par l'évaluateur")]),_:1}),e(h,null,{default:s(()=>[o("Demandée par l'évalué")]),_:1}),e(h,{class:"whitespace-pre-line"},{default:s(()=>[o("Commentaire de l'évaluateur")]),_:1}),e(h,{class:"whitespace-pre-line"},{default:s(()=>[o("Commentaire de l'évalué")]),_:1}),e(h)])]),t("tbody",qe,[(r(!0),d(A,null,T(b.value,n=>(r(),d("tr",{key:n.rating_training_id},[e(k,{first:!0,class:"whitespace-pre-line"},{default:s(()=>[o(v(n.type.training_type_name),1)]),_:2},1024),e(k,null,{default:s(()=>[t("span",{class:y([n.asked_by_evaluator?"bg-green-50 text-green-700 ring-green-600/20":"bg-red-50 text-red-700 ring-red-600/20","inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"])},v(n.asked_by_evaluator?"Oui":"Non"),3)]),_:2},1024),e(k,null,{default:s(()=>[t("span",{class:y([n.asked_by_evaluated?"bg-green-50 text-green-700 ring-green-600/20":"bg-red-50 text-red-700 ring-red-600/20","inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"])},v(n.asked_by_evaluated?"Oui":"Non"),3)]),_:2},1024),e(k,{class:"whitespace-pre-line"},{default:s(()=>[o(v(n.evaluator_comment||"__"),1)]),_:2},1024),e(k,{class:"whitespace-pre-line"},{default:s(()=>[o(v(n.evaluated_comment||"__"),1)]),_:2},1024),t("td",Le,[l.rating.rating_is_validated?w("",!0):(r(),d("div",Pe,[!u.value&&(_.value&&n.asked_by_evaluated||!_.value&&n.asked_by_evaluator)?(r(),d("button",{key:0,class:"rounded-lg bg-red-600 p-2 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",type:"button",onClick:N=>G(n.rating_training_id)},[e(a(_e),{"aria-hidden":"true",class:"h-5 w-5"})],8,Qe)):w("",!0)]))])]))),128))])])):(r(),d("div",Ze," Aucun élément trouvé."))]),_:1},8,["pagination"])):(r(),x(le,{key:2,message:"Demander une formation en utilisant la liste déroulante en haut.",title:"Aucune formation demandée pour l'instant."}))]),e(Ce,{form:a(H),link:f.route("rating-trainings.update",{rating:l.rating.rating_id,rating_training:M.value?M.value:-1}),opened:D.value,onCloseModal:p[3]||(p[3]=n=>D.value=!1)},null,8,["form","link","opened"])]),_:1}))}};export{_t as default};
