import{m as u}from"./AuthenticatedLayout-4418413d.js";import{o,c as n,a as e,b as x,F as l,i as g,n as p,g as h,u as f,t as a,k as m,j as y}from"./app-3669f768.js";function b(i,r){return o(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"})])}const w=e("h2",{class:"mt-2 text-sm font-semibold leading-6 text-gray-900"},"Activité",-1),v={key:0,class:"mt-6 space-y-6",role:"list"},j=e("div",{class:"w-px bg-gray-200"},null,-1),k=[j],T={class:"relative flex h-6 w-6 flex-none items-center justify-center bg-white"},z={class:"flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200"},M={class:"flex justify-between gap-x-4"},B={class:"py-0.5 text-xs leading-5 text-gray-500"},N={class:"font-medium text-gray-900"},V=e("br",null,null,-1),Y=e("span",{class:"font-medium text-gray-900"},"Taux de réalisation",-1),C={class:"ml-1 text-sm font-semibold text-cyan-600"},D=["datetime"],A={class:"text-sm leading-6 text-gray-500"},E=e("div",{class:"relative flex h-6 w-6 flex-none items-center justify-center bg-white"},[e("div",{class:"h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"})],-1),F={class:"flex-auto p-3"},H={class:"flex justify-between gap-x-4"},G={class:"py-0.5 text-xs leading-5 text-gray-500"},L={class:"font-medium text-gray-900"},S=e("br",null,null,-1),q=e("span",{class:"font-medium text-gray-900"},"Taux de réalisation",-1),J={class:"ml-1 text-sm font-semibold text-cyan-600"},K=["datetime"],Q={__name:"GoalActivity",props:{history:{}},setup(i){const r=i,c=x(()=>{let d=[];return r.history.forEach(s=>d.push({id:s.goal_history_id,type:s.comment?"commented":"a modifié",person:{name:s.updated_by.user_display_name},comment:s.comment,date:u(s.updated_at).format("DD MMMM YYYY á HH:mm"),dateTime:s.updated_at,rate:s.goal_rate})),d});return(d,s)=>(o(),n(l,null,[w,i.history.length>0?(o(),n("ul",v,[(o(!0),n(l,null,g(c.value,(t,_)=>(o(),n("li",{key:t.id,class:"relative flex gap-x-4"},[e("div",{class:p([_===c.value.length-1?"h-6":"-bottom-6","absolute left-0 top-0 flex w-6 justify-center"])},k,2),t.type==="commented"?(o(),n(l,{key:0},[e("div",T,[h(f(b),{"aria-hidden":"true",class:"h-6 w-6 text-cyan-600"})]),e("div",z,[e("div",M,[e("div",B,[e("span",N,a(t.person.name),1),m(" a commenté "),V,Y,e("span",C,a(t.rate)+" % ",1)]),e("time",{datetime:t.dateTime,class:"flex-auto text-right py-0.5 text-xs leading-5 text-gray-500"},a(t.date),9,D)]),e("p",A,a(t.comment),1)])],64)):(o(),n(l,{key:1},[E,e("div",F,[e("div",H,[e("div",G,[e("span",L,a(t.person.name),1),m(" "+a(t.type)+" l'objectif. ",1),S,q,e("span",J,a(t.rate)+" % ",1)]),e("time",{datetime:t.dateTime,class:"flex-auto text-right py-0.5 text-xs leading-5 text-gray-500"},a(t.date),9,K)])])],64))]))),128))])):y("",!0)],64))}};export{Q as _};
