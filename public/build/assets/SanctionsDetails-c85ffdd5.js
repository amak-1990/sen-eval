import{_ as x}from"./AuthenticatedLayout-b0b54744.js";import{b,r as k,o as i,d as _,e as a,f as e,u as g,Z as w,a as n,t as l,c as r,g as s,k as D,F as V,j as $}from"./app-c51809d2.js";import{g as B,a as N}from"./helper-f88ff6de.js";import{_ as d,a as c,b as S}from"./EmptyState-ab9bb41f.js";import{_ as T}from"./Breadcrumbs-6cd41b84.js";import{_ as C}from"./Datatable-33676cac.js";import{r as L}from"./ArrowDownTrayIcon-70e95d3e.js";import"./logo1637145113-c7398df9.js";const j={class:"px-4 sm:px-6 lg:px-8"},A={class:"sm:flex sm:items-center"},F={class:"sm:flex-auto"},P={class:"text-2xl font-semibold leading-6 text-gray-900 dark:text-white"},q={class:"mt-2 text-sm text-gray-700 dark:text-white"},E={key:0,class:"space-x-2 mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},O=["href"],U={key:0,class:"min-w-full divide-y divide-gray-300 dark:divide-black"},Z={class:"bg-gray-50 dark:bg-grayish"},z={class:"divide-y divide-gray-200 dark:divide-black bg-white dark:bg-grayish"},G={key:1,class:"text-center bg-white dark:bg-grayish text-lg text-gray-600 py-4"},h="",X={__name:"SanctionsDetails",props:{sanctions:{type:Object},phase:{},org:{},type:{}},setup(t){const u=t,p=[{name:"Statistiques",href:route("admin-dashboard.index",{org_id:u.org.org_id,phase_id:u.phase.phase_id}),current:!1},{name:"Détails des sanctions demandées",href:"#",current:!0}],y=b(()=>B(u.sanctions)),m=k(u.sanctions.data);return(v,f)=>(i(),_(x,null,{default:a(()=>[e(g(w),{title:"Agents"}),n("div",j,[e(T,{pages:p}),n("div",A,[n("div",F,[n("h1",P,'Sanction du type "'+l(t.type.sanction_type_name)+`" pour l'année `+l(t.phase.phase_year)+" "+l(t.org!==-1?" - "+t.org.org_name:""),1),n("p",q," La liste des sanctions demandées pour l'année "+l(t.phase.phase_year)+". ",1)]),m.value.length>0?(i(),r("div",E,[n("a",{href:v.route("admin-dashboard.download-sanctions-details",{org_id:t.org.org_id,phase_id:t.phase.phase_id,type:t.type.sanction_type_id}),class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},[s(" Télécharger "),e(g(L),{class:"-mr-0.5 h-5 w-5"})],8,O)])):D("",!0)]),g(N)(t.sanctions.data)?(i(),_(C,{key:0,modelValue:h,"onUpdate:modelValue":f[0]||(f[0]=o=>h=o),pagination:y.value,search:!1},{default:a(()=>[m.value.length>0?(i(),r("table",U,[n("thead",Z,[n("tr",null,[e(d,{first:!0},{default:a(()=>[s("Type")]),_:1}),e(d,null,{default:a(()=>[s("Évalué")]),_:1}),e(d,null,{default:a(()=>[s("Évaluateur")]),_:1}),e(d,null,{default:a(()=>[s("Demandée par")]),_:1}),e(d,null,{default:a(()=>[s("Commentaire")]),_:1})])]),n("tbody",z,[(i(!0),r(V,null,$(m.value,o=>(i(),r("tr",{key:o.rating_sanction_id},[e(c,{first:!0,class:"whitespace-pre-line"},{default:a(()=>[s(l(t.type.sanction_type_name),1)]),_:1}),e(c,null,{default:a(()=>[s(l(o.rating.evaluated.user_display_name),1)]),_:2},1024),e(c,null,{default:a(()=>[s(l(o.rating.evaluator.user_display_name),1)]),_:2},1024),e(c,{class:"whitespace-pre-line"},{default:a(()=>[s(" L'évaluateur ")]),_:1}),e(c,{class:"whitespace-pre-line"},{default:a(()=>[s(l(o.rating_sanction_comment),1)]),_:2},1024)]))),128))])])):(i(),r("div",G," Aucun élément trouvé."))]),_:1},8,["pagination"])):(i(),_(S,{key:1,message:"Tous les agents ont été évalués",title:"Pas d'agent non évalué"}))])]),_:1}))}};export{X as default};
