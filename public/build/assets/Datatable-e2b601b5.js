import{o as r,c as s,a as t,g as m,u as l,j as n,D as y,F as i,i as x,e as d,f as u,k as o,m as c,t as f,n as b}from"./app-90af8dda.js";import{r as p}from"./Breadcrumbs-ade623fb.js";function v(a,h){return r(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z","clip-rule":"evenodd"})])}function w(a,h){return r(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z","clip-rule":"evenodd"})])}const _={class:"mt-8 shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"},V={key:0,class:"border-b border-gray-200 bg-white px-4 py-5 sm:px-6"},B={class:"relative flex flex-1"},j=t("label",{class:"sr-only",for:"search-field"},"Recherche",-1),z=["value"],C={class:"overflow-y-scroll"},N={class:"flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"},S={class:"flex flex-1 justify-between sm:hidden"},$={class:"hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"},D={class:"text-sm text-gray-700"},M={class:"font-medium"},P={class:"font-medium"},F={class:"font-medium"},L={"aria-label":"Pagination",class:"isolate inline-flex -space-x-px rounded-md shadow-sm"},R=t("span",{class:"sr-only"},"Previous",-1),q=t("span",{class:"sr-only"},"Next",-1),I={__name:"Datatable",props:{pagination:Object,modelValue:{type:String,required:!0},search:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(a){return(h,g)=>(r(),s("div",_,[a.search?(r(),s("div",V,[t("form",B,[j,m(l(w),{"aria-hidden":"true",class:"pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"}),t("input",{value:a.modelValue,class:"block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm",name:"search",placeholder:"Recherche...",type:"search",onInput:g[0]||(g[0]=e=>h.$emit("update:modelValue",e.target.value))},null,40,z)])])):n("",!0),t("div",C,[y(h.$slots,"default")]),t("div",N,[a.modelValue?n("",!0):(r(),s(i,{key:0},[t("div",S,[(r(!0),s(i,null,x(a.pagination.links,e=>(r(),s(i,null,[e.label==="p"?(r(),d(l(c),{key:e.label,href:e.url?e.url:"#",class:"relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-cyan-600 hover:text-white"},{default:u(()=>[o("Précedent ")]),_:2},1032,["href"])):n("",!0),e.label==="n"?(r(),d(l(c),{key:e.label,href:e.url?e.url:"#",class:"relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-cyan-600 hover:text-white"},{default:u(()=>[o("Suivant ")]),_:2},1032,["href"])):n("",!0)],64))),256))]),t("div",$,[t("div",null,[t("p",D,[o(" Élement "),t("span",M,f(a.pagination.from),1),o(" à "),t("span",P,f(a.pagination.to),1),o(" de "),t("span",F,f(a.pagination.total),1),o(" résultats ")])]),t("div",null,[t("nav",L,[(r(!0),s(i,null,x(a.pagination.links,e=>(r(),s(i,null,[e.label==="p"?(r(),d(l(c),{key:e.label,href:e.url?e.url:"#",class:"relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-cyan-600 hover:text-white focus:outline-offset-0"},{default:u(()=>[R,m(l(v),{"aria-hidden":"true",class:"h-5 w-5"})]),_:2},1032,["href"])):n("",!0),e.label!=="p"&&e.label!=="n"?(r(),d(l(c),{key:e.label,class:b([e.active?"z-10 bg-cyan-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600":"","relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-cyan-600 hover:text-white focus:outline-offset-0"]),href:e.url?e.url:"#"},{default:u(()=>[o(f(e.label),1)]),_:2},1032,["class","href"])):n("",!0),e.label==="n"?(r(),d(l(c),{key:e.label,href:e.url?e.url:"#",class:"relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-cyan-600 hover:text-white focus:outline-offset-0"},{default:u(()=>[q,m(l(p),{"aria-hidden":"true",class:"h-5 w-5"})]),_:2},1032,["href"])):n("",!0)],64))),256))])])])],64))])]))}};export{I as _};