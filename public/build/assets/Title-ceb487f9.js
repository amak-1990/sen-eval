import{r as h,o,c,a as t,q as v,X as y,F as _,j as f,t as s,f as p,e as w,g as d,n as u,u as k,m as $,O as j,b as C,k as b}from"./app-c4f187be.js";import{z as N}from"./helper-c9a85e48.js";const M={class:"border-b border-gray-200 pb-5 sm:pb-0"},S={class:"mt-3 sm:mt-4"},T={class:"sm:hidden"},V=t("label",{class:"sr-only",for:"current-tab"},"Select a tab",-1),B=["selected","value"],O={class:"hidden sm:block"},F={class:"-mb-px flex space-x-8"},K={__name:"Tabs",props:{rating_id:Number,agent_id:Number,evaluated:{type:Boolean,default:!1},validator:{type:Boolean,default:!1}},setup(a){const r=a,e=N(),i=[r.validator?{name:"Compétences",href:route("validations.show",{validation:r.rating_id}),current:e==="validations"}:{name:"Compétences",href:r.evaluated?route("ratings.show",{rating:r.rating_id}):route("agent-ratings.show",{agent:r.agent_id,agent_rating:r.rating_id}),current:["agent-ratings","ratings"].includes(e)},{name:"Réclamations",href:route("rating-claims.index",{rating:r.rating_id}),current:e==="rating-claims"},{name:"Formations",href:route("rating-trainings.index",{rating:r.rating_id}),current:e==="rating-trainings"},{name:"Mobilités",href:route("rating-mobilities.index",{rating:r.rating_id}),current:e==="rating-mobilities"},{name:"Sanctions",href:route("rating-sanctions.index",{rating:r.rating_id}),current:e==="rating-sanctions"},{name:"Promotions & Avancements",href:route("rating-promotions.index",{rating:r.rating_id}),current:e==="rating-promotions"}],l=h(i.filter(g=>g.current===!0)[0]),x=()=>{j.get(l.value.href)};return(g,m)=>(o(),c("div",M,[t("div",S,[t("div",T,[V,v(t("select",{id:"current-tab","onUpdate:modelValue":m[0]||(m[0]=n=>l.value=n),class:"block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-cyan-600 focus:outline-none focus:ring-cyan-500 sm:text-sm",name:"current-tab",onChange:x},[(o(),c(_,null,f(i,n=>t("option",{key:n.name,selected:n.current,value:n},s(n.name),9,B)),64))],544),[[y,l.value]])]),t("div",O,[t("nav",F,[(o(),c(_,null,f(i,n=>p(k($),{key:n.name,"aria-current":n.current?"page":void 0,class:u([n.current?"border-cyan-600 text-cyan-700":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"]),href:n.href},{default:w(()=>[d(s(n.name),1)]),_:2},1032,["aria-current","class","href"])),64))])])])]))}},R={class:"sm:flex sm:items-center"},z={class:"sm:flex-auto"},A={class:"flex justify-between items-center"},D={class:"sm:flex sm:justify-between sm:items-center gap-2"},q={class:"text-2xl font-semibold leading-6 text-gray-900"},E={key:0,class:"text-white bg-green-600 ring-green-600/20 rounded-md mt-0.5 px-1.5 py-0.5 text-xs font-bold ring-1 ring-inset max-w-fit"},I={class:"flex items-center justify-center"},L={class:"flex-shrink-0"},P={class:"sm:flex sm:items-center gap-2"},U={class:"text-sm text-gray-700"},X={key:0,class:"sm:flex sm:items-center gap-2"},G={class:"text-sm text-gray-700"},Q={__name:"Title",props:{agent:Object,rating:Object},setup(a){const r=a,e=C(()=>{let i=r.rating.rating_mark;switch(!0){case i<=25:return"red";case(i>25&&i<=50):return"amber";case(i>50&&i<=75):return"green";default:return"cyan"}});return(i,l)=>(o(),c("div",R,[t("div",z,[t("div",A,[t("div",D,[t("h1",q," Évaluation de "+s(a.agent.user_display_name),1),a.rating.rating_is_validated?(o(),c("p",E," Validé ")):b("",!0),t("p",{class:u([e.value==="red"?"bg-red-600 ring-red-600/20":e.value==="amber"?"bg-amber-600 ring-amber-600/20":e.value==="green"?"bg-green-600 ring-green-600/20":"bg-cyan-600  ring-cyan-600/20","text-white rounded-md mt-0.5 px-1.5 py-0.5 text-xs font-bold ring-1 ring-inset max-w-fit"])},[t("span",I,s(e.value==="red"?"Insuffisant":e.value==="amber"?"Moyen":e.value==="green"?"Satisfaisant":"Trés Satisfaisant"),1)],2)]),t("span",L,[t("span",{class:u([e.value==="red"?"border-red-600":e.value==="amber"?"border-amber-600":e.value==="green"?"border-green-600":"border-cyan-600","flex h-20 w-20 items-center justify-center rounded-full border-4"])},[t("span",{class:u([e.value==="red"?"text-red-600":e.value==="amber"?"text-amber-600":e.value==="green"?"text-green-600":"text-cyan-600","text-2xl font-bold"])},s(a.rating.rating_mark),3)],2)])]),d(" Matricule : "+s(a.agent.user_matricule)+" Année : "+s(a.rating.phase.phase_year)+" ",1),t("div",P,[d(" Évaluateur: "),t("p",U,s(a.rating.evaluator.user_display_name)+". Matricule : "+s(a.rating.evaluator.user_matricule)+". ",1)]),a.rating.validated_by_n2?(o(),c("div",X,[d(" (N + 2): "),t("p",G,s(a.rating.validator.user_display_name)+". Matricule : "+s(a.rating.validator.user_matricule)+". ",1)])):b("",!0)])]))}};export{Q as _,K as a};
