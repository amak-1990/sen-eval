import{_ as p,a as m}from"./TableData-61a6fd7a.js";import{_ as w,g as T,h as $}from"./AuthenticatedLayout-3c3c1141.js";import{_ as V}from"./Datatable-b9f77933.js";import{b as D,r as F,d as N,w as v,o as n,e as f,f as s,g as e,u as l,Z as j,a as t,k as r,m as h,c as _,F as B,i as A,l as C,O as x,t as g,n as L}from"./app-bdcf5fce.js";import{r as O,_ as P}from"./EmptyState-ce54bde9.js";import{_ as S}from"./Breadcrumbs-e4217e77.js";import{_ as q}from"./ToggleOnDatatable-a53631b3.js";import{r as z}from"./PencilSquareIcon-22fd52d6.js";import"./logo1637145113-11387d37.js";import"./switch-75df4aaa.js";import"./use-controllable-126a179b.js";const E={class:"px-4 sm:px-6 lg:px-8"},M={class:"sm:flex sm:items-center"},U=t("div",{class:"sm:flex-auto"},[t("h1",{class:"text-2xl font-semibold leading-6 text-gray-900"},"Types de Formation"),t("p",{class:"mt-2 text-sm text-gray-700"},"La liste des formations qu'il sera possible de proposer ou demander lors de l'évaluation.")],-1),Z={class:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},G={key:0,class:"min-w-full divide-y divide-gray-300"},H={class:"bg-gray-50"},I={class:"divide-y divide-gray-200 bg-white"},J={class:"flex space-x-4"},K={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},Q={class:"flex items-center justify-center"},R={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},le={__name:"TrainingsList",props:{trainings:{type:Object}},setup(y){const d=y,b=[{name:"Types de Formation",href:"#",current:!0}],k=D(()=>T(d.trainings)),o=F(d.trainings.data),u=N({keyword:"",fields:["training_type_name"]});return v(()=>u.keyword,function(a){a===""?o.value=d.trainings.data:C.post(route("trainingTypes.search"),u).then(c=>o.value=c.data)}),v(()=>d.trainings,function(a){o.value=a.data,!o.value.length>0&&(a.prev_page_url?x.get(a.prev_page_url):x.get(a.first_page_url))}),(a,c)=>(n(),f(w,null,{default:s(()=>[e(l(j),{title:"Types de Formation"}),t("div",E,[e(S,{pages:b}),t("div",M,[U,t("div",Z,[e(l(h),{href:a.route("trainingTypes.create"),as:"button",class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:s(()=>[r(" Ajouter un Type "),e(l(O),{class:"-mr-0.5 h-5 w-5"})]),_:1},8,["href"])])]),l($)(y.trainings.data)?(n(),f(V,{key:0,modelValue:u.keyword,"onUpdate:modelValue":c[0]||(c[0]=i=>u.keyword=i),pagination:k.value},{default:s(()=>[o.value.length>0?(n(),_("table",G,[t("thead",H,[t("tr",null,[e(p,{first:!0},{default:s(()=>[r("Nom")]),_:1}),e(p,null,{default:s(()=>[r("Description")]),_:1}),e(p,null,{default:s(()=>[r("Status")]),_:1}),e(p,null,{default:s(()=>[r("Modifier")]),_:1})])]),t("tbody",I,[(n(!0),_(B,null,A(o.value,i=>(n(),_("tr",{key:i.training_type_id},[e(m,{first:!0},{default:s(()=>[r(g(i.training_type_name),1)]),_:2},1024),e(m,null,{default:s(()=>[r(g(i.training_type_desc),1)]),_:2},1024),e(m,null,{default:s(()=>[t("div",J,[e(q,{link:a.route("trainingTypes.update",{trainingType:i.training_type_id}),value:i.training_type_is_active,obj:"training_type_is_active"},null,8,["link","value"]),t("span",{class:L([i.training_type_is_active?"bg-green-50 text-green-700 ring-green-600/20":"bg-red-50 text-red-700 ring-red-600/20","rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"])},g(i.training_type_is_active?"Activé":"Désactivé"),3)])]),_:2},1024),t("td",K,[t("div",Q,[e(l(h),{href:a.route("trainingTypes.edit",{trainingType:i.training_type_id}),class:"group flex items-center px-4 py-2 text-sm"},{default:s(()=>[e(l(z),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-cyan-600"})]),_:2},1032,["href"])])])]))),128))])])):(n(),_("div",R," Aucun élément trouvé."))]),_:1},8,["modelValue","pagination"])):(n(),f(P,{key:1,link:a.route("trainingTypes.create"),action:"Nouveau",message:"Créer un nouveau type en appuyant sur ce bouton",title:"Pas de type de formation"},null,8,["link"]))])]),_:1}))}};export{le as default};
