import{r as w,_ as p,a as T,b as m}from"./EmptyState-9f4097d4.js";import{_ as $,g as V,a as j}from"./AuthenticatedLayout-ed8aacb8.js";import{_ as D}from"./Datatable-b62de8a6.js";import{b as F,r as N,h as B,w as v,o as n,d as f,e as s,f as e,u as l,Z as A,a as t,g as r,m as h,c as _,F as C,j as L,l as O,O as x,t as g,n as P}from"./app-2ea43d72.js";import{_ as S}from"./Breadcrumbs-ee7970c9.js";import{_ as q}from"./ToggleOnDatatable-0a1c6812.js";import{r as z}from"./PencilSquareIcon-f07e362d.js";import"./logo1637145113-c7398df9.js";import"./switch-252dceda.js";import"./use-controllable-800e3213.js";const E={class:"px-4 sm:px-6 lg:px-8"},M={class:"sm:flex sm:items-center"},U=t("div",{class:"sm:flex-auto"},[t("h1",{class:"text-2xl font-semibold leading-6 text-gray-900"},"Types de Formation"),t("p",{class:"mt-2 text-sm text-gray-700"},"La liste des formations qu'il sera possible de proposer ou demander lors de l'évaluation.")],-1),Z={class:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},G={key:0,class:"min-w-full divide-y divide-gray-300"},H={class:"bg-gray-50"},I={class:"divide-y divide-gray-200 bg-white"},J={class:"flex space-x-4"},K={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},Q={class:"flex items-center justify-center"},R={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},oe={__name:"TrainingsList",props:{trainings:{type:Object}},setup(y){const d=y,b=[{name:"Types de Formation",href:"#",current:!0}],k=F(()=>V(d.trainings)),o=N(d.trainings.data),u=B({keyword:"",fields:["training_type_name"]});return v(()=>u.keyword,function(a){a===""?o.value=d.trainings.data:O.post(route("trainingTypes.search"),u).then(c=>o.value=c.data)}),v(()=>d.trainings,function(a){o.value=a.data,!o.value.length>0&&(a.prev_page_url?x.get(a.prev_page_url):x.get(a.first_page_url))}),(a,c)=>(n(),f($,null,{default:s(()=>[e(l(A),{title:"Types de Formation"}),t("div",E,[e(S,{pages:b}),t("div",M,[U,t("div",Z,[e(l(h),{href:a.route("trainingTypes.create"),as:"button",class:"inline-flex gap-x-1.5 rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:s(()=>[r(" Ajouter un Type "),e(l(w),{class:"-mr-0.5 h-5 w-5"})]),_:1},8,["href"])])]),l(j)(y.trainings.data)?(n(),f(D,{key:0,modelValue:u.keyword,"onUpdate:modelValue":c[0]||(c[0]=i=>u.keyword=i),pagination:k.value},{default:s(()=>[o.value.length>0?(n(),_("table",G,[t("thead",H,[t("tr",null,[e(p,{first:!0},{default:s(()=>[r("Nom")]),_:1}),e(p,null,{default:s(()=>[r("Description")]),_:1}),e(p,null,{default:s(()=>[r("Status")]),_:1}),e(p,null,{default:s(()=>[r("Modifier")]),_:1})])]),t("tbody",I,[(n(!0),_(C,null,L(o.value,i=>(n(),_("tr",{key:i.training_type_id},[e(m,{first:!0},{default:s(()=>[r(g(i.training_type_name),1)]),_:2},1024),e(m,null,{default:s(()=>[r(g(i.training_type_desc),1)]),_:2},1024),e(m,null,{default:s(()=>[t("div",J,[e(q,{link:a.route("trainingTypes.update",{trainingType:i.training_type_id}),value:i.training_type_is_active,obj:"training_type_is_active"},null,8,["link","value"]),t("span",{class:P([i.training_type_is_active?"bg-green-50 text-green-700 ring-green-600/20":"bg-red-50 text-red-700 ring-red-600/20","rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"])},g(i.training_type_is_active?"Activé":"Désactivé"),3)])]),_:2},1024),t("td",K,[t("div",Q,[e(l(h),{href:a.route("trainingTypes.edit",{trainingType:i.training_type_id}),class:"group flex items-center px-4 py-2 text-sm"},{default:s(()=>[e(l(z),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-cyan-600"})]),_:2},1032,["href"])])])]))),128))])])):(n(),_("div",R," Aucun élément trouvé."))]),_:1},8,["modelValue","pagination"])):(n(),f(T,{key:1,link:a.route("trainingTypes.create"),action:"Nouveau",message:"Créer un nouveau type en appuyant sur ce bouton",title:"Pas de type de formation"},null,8,["link"]))])]),_:1}))}};export{oe as default};
