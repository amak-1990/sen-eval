import{o as s,c as a,a as o,E as n,t as r,f as l,e as d,g as m,u as c,m as f,k as h}from"./app-c4f187be.js";function u(t,e){return s(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[o("path",{d:"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"})])}const p={key:0,class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",scope:"col"},x={key:1,class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",scope:"col"},B={__name:"TableHeading",props:{first:{type:Boolean,default:!1}},setup(t){return(e,i)=>t.first?(s(),a("th",p,[n(e.$slots,"default")])):(s(),a("th",x,[n(e.$slots,"default")]))}},y={key:0,class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},_={key:1,class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},S={__name:"TableData",props:{first:{type:Boolean,default:!1}},setup(t){return(e,i)=>t.first?(s(),a("td",y,[n(e.$slots,"default")])):(s(),a("td",_,[n(e.$slots,"default")]))}},g={class:"mt-16 text-center"},v=o("svg",{"aria-hidden":"true",class:"mx-auto h-12 w-12 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{d:"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","vector-effect":"non-scaling-stroke"})],-1),w={class:"mt-2 text-sm font-semibold text-gray-900"},k={class:"mt-1 text-sm text-gray-500"},b={key:0,class:"mt-6"},V={__name:"EmptyState",props:{title:{type:String},message:{type:String},link:{type:String},action:{type:String}},setup(t){return(e,i)=>(s(),a("div",g,[v,o("h3",w,r(t.title),1),o("p",k,r(t.message),1),t.action?(s(),a("div",b,[l(c(f),{href:t.link,as:"button",class:"inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"},{default:d(()=>[m(r(t.action)+" ",1),l(c(u),{"aria-hidden":"true",class:"ml-1.5 h-5 w-5"})]),_:1},8,["href"])])):h("",!0)]))}};export{B as _,V as a,S as b,u as r};
