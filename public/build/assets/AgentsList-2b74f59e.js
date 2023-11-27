import{o as u,c as v,a as s,r as y,w as M,b as Q,d as x,e as a,f as e,u as l,g as o,O as j,T as P,h as S,Z as X,i as Y,n as V,j as T,F as D,k as O,Q as H,l as G,t as c,m as R}from"./app-2ea43d72.js";import{U as Z,h as F,G as I,V as K,S as W,_ as ee,g as te,a as se}from"./AuthenticatedLayout-ed8aacb8.js";import{_ as ae}from"./Datatable-b62de8a6.js";import{_ as f,a as le,b as h}from"./EmptyState-9f4097d4.js";import{_ as re}from"./Breadcrumbs-ee7970c9.js";import{_ as U}from"./Separator-156243d5.js";import{_ as oe}from"./SubmitButton-a489f48a.js";import{r as ne}from"./ExclamationTriangleIcon-52de5f6a.js";import{Q as ie,G as ue,X as de,J as me,Y as ce}from"./combobox-f0c18292.js";import{r as fe}from"./ChevronUpDownIcon-43c52f40.js";import{r as pe}from"./CheckIcon-0c2a165e.js";import{r as ge}from"./EyeIcon-6f33083a.js";import{r as _e}from"./TrashIcon-4167a06e.js";import"./logo1637145113-c7398df9.js";import"./use-controllable-800e3213.js";function he(w,d){return u(),v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[s("path",{"fill-rule":"evenodd",d:"M1 6a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V6zm4 1.5a2 2 0 114 0 2 2 0 01-4 0zm2 3a4 4 0 00-3.665 2.395.75.75 0 00.416 1A8.98 8.98 0 007 14.5a8.98 8.98 0 003.249-.604.75.75 0 00.416-1.001A4.001 4.001 0 007 10.5zm5-3.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm0 6.5a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm.75-4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z","clip-rule":"evenodd"})])}const ve=s("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),ye={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},xe={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},we={class:"sm:flex sm:items-start"},be={class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},$e={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},ke=s("div",{class:"mt-2"},[s("p",{class:"text-sm text-gray-500"},"Êtes vous sûre de vouloir continuer ? Vous aller retirer cet agent de votre liste.")],-1),Ce={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},Ve={__name:"RemoveAgentModal",props:{opened:{type:Boolean,default:!1},id:{type:Number||null,default:null}},emits:["closeModal"],setup(w){const d=w,p=y(!1);M(()=>d.opened,m=>{p.value=m},{immediate:!0});const b=Q(()=>d.id),z=()=>{j.put(route("agents.update",{agent:b.value}))};return(m,n)=>(u(),x(l(W),{show:p.value,as:"template"},{default:a(()=>[e(l(Z),{as:"div",class:"relative z-10",onClose:n[2]||(n[2]=g=>{p.value=!1,m.$emit("closeModal")})},{default:a(()=>[e(l(F),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[ve]),_:1}),s("div",ye,[s("div",xe,[e(l(F),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:a(()=>[e(l(I),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"},{default:a(()=>[s("div",we,[s("div",be,[e(l(ne),{"aria-hidden":"true",class:"h-6 w-6 text-red-600"})]),s("div",$e,[e(l(K),{as:"h3",class:"text-base font-semibold leading-6 text-gray-900"},{default:a(()=>[o("Suppression")]),_:1}),ke])]),s("div",Ce,[s("button",{class:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",type:"button",onClick:n[0]||(n[0]=g=>{z(),p.value=!1,m.$emit("closeModal")})},"Supprimer "),s("button",{ref:"cancelButtonRef",class:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",type:"button",onClick:n[1]||(n[1]=g=>{p.value=!1,m.$emit("closeModal")})},"Annuler ",512)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}},Me={class:"px-4 sm:px-6 lg:px-8"},ze=s("div",{class:"sm:flex sm:items-center"},[s("div",{class:"sm:flex-auto"},[s("h1",{class:"text-2xl font-semibold leading-6 text-gray-900"},"Mes Agents"),s("p",{class:"mt-2 text-sm text-gray-700"}," La liste de mes agents à évaluer. ")])],-1),Ae={class:"bg-white shadow sm:rounded-lg"},je={class:"px-4 py-5 sm:p-6"},Ne=s("h3",{class:"text-base font-semibold leading-6 text-gray-900"},"Trouver vos agents",-1),Be=s("div",{class:"mt-2 max-w-xl text-sm text-gray-500"},[s("p",null,"Rechercher les agents que vous devrez évaluer en utilisant leur matricule, nom ou prénom. ")],-1),Le=["onSubmit"],Se={class:"w-full sm:max-w-xl"},Te={class:"relative"},De={class:"flex"},Oe={key:0,class:"min-w-full divide-y divide-gray-300"},Ge={class:"bg-gray-50"},Re={class:"divide-y divide-gray-200 bg-white"},Fe={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},Ue={class:"flex items-center justify-center"},Qe=["onClick"],qe={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},rt={__name:"AgentsList",props:{agents:{type:Object},others:{type:Object}},setup(w){var L;const d=w,p=[{name:"Mes Agents",href:"#",current:!0}],b=d.others,z=Q(()=>te(d.agents)),m=P({agent_id:null}),n=y(d.agents.data),g=S({keyword:"",fields:["user_display_name","user_matricule"]}),N=S({keyword:"",fields:["user_display_name","user_matricule"]}),k=y(""),$=y(b),A=y(!1),B=y((L=d.agents[0])==null?void 0:L.agent_id),q=()=>{m.post(route("agents.store"),{onError:r=>{H().props.flash.notify={type:"error",message:r.agent_id}}})},E=r=>{A.value=!0,B.value=r},J=()=>G.post(route("users.search"),N);return M(()=>k.value,function(r){let i=r===""?b:b.filter(t=>t.user_matricule.toLowerCase().includes(k.value.toLowerCase())||t.user_display_name.toLowerCase().includes(k.value.toLowerCase()));i.length>0?$.value=i:r.length>=3&&J().then(t=>$.value=t.data)}),M(()=>g.keyword,function(r){r===""?n.value=d.agents.data:G.post(route("agents.search"),g).then(i=>n.value=i.data)}),M(()=>d.agents,function(r){n.value=r.data,!n.value.length>0&&(r.prev_page_url?j.get(r.prev_page_url):j.get(r.first_page_url))}),(r,i)=>(u(),x(ee,null,{default:a(()=>[e(l(X),{title:"Mes Agents"}),s("div",Me,[e(re,{pages:p}),ze,e(U,{title:"Trouver mes agents"}),s("div",Ae,[s("div",je,[Ne,Be,s("form",{class:"mt-5 sm:flex sm:items-center",onSubmit:Y(q,["prevent"])},[s("div",Se,[e(l(me),{modelValue:l(m).agent_id,"onUpdate:modelValue":i[1]||(i[1]=t=>l(m).agent_id=t)},{default:a(()=>[s("div",Te,[e(l(ie),{class:V([l(m).errors.agent_id!==void 0?"focus:ring-red-600 ring-red-600":"","w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"]),"display-value":t=>{let _=$.value.filter(C=>C.user_id===t)[0];return _?_.user_matricule+" "+_.user_display_name:""},placeholder:"Chercher un agent...",onChange:i[0]||(i[0]=t=>{N.keyword=k.value=t.target.value})},null,8,["class","display-value"]),e(l(ue),{class:"absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"},{default:a(()=>[e(l(fe),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})]),_:1}),$.value.length>0?(u(),x(l(de),{key:0,class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:a(()=>[(u(!0),v(D,null,T($.value,t=>(u(),x(l(ce),{key:t.user_id,value:t.user_id,as:"template"},{default:a(({active:_,selected:C})=>[s("li",{class:V(["relative cursor-default select-none py-2 pl-3 pr-9",_?"bg-cyan-600  text-white":"text-gray-900"])},[s("div",De,[s("span",{class:V(["truncate",C&&"font-semibold"])},c((t==null?void 0:t.user_matricule)+" "+(t==null?void 0:t.user_display_name)),3)]),C?(u(),v("span",{key:0,class:V(["absolute inset-y-0 right-0 flex items-center pr-4",_?"text-white":"text-cyan-600"])},[e(l(pe),{"aria-hidden":"true",class:"h-5 w-5"})],2)):O("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})):O("",!0)])]),_:1},8,["modelValue"])]),e(oe,{class:"mt-3 sm:ml-3 sm:mt-0 sm:w-auto",type:"submit"},{default:a(()=>[o("Ajouter")]),_:1})],40,Le)])]),e(U,{title:"Mes agents"}),l(se)(w.agents.data)?(u(),x(ae,{key:0,modelValue:g.keyword,"onUpdate:modelValue":i[2]||(i[2]=t=>g.keyword=t),pagination:z.value},{default:a(()=>[n.value.length>0?(u(),v("table",Oe,[s("thead",Ge,[s("tr",null,[e(f,{first:!0},{default:a(()=>[o("Matricule")]),_:1}),e(f,null,{default:a(()=>[o("Nom")]),_:1}),e(f,null,{default:a(()=>[o("Poste")]),_:1}),e(f,null,{default:a(()=>[o("GF")]),_:1}),e(f,null,{default:a(()=>[o("NR")]),_:1}),e(f,null,{default:a(()=>[o("CR")]),_:1}),e(f,null,{default:a(()=>[o("Organisation")]),_:1}),e(f)])]),s("tbody",Re,[(u(!0),v(D,null,T(n.value,t=>(u(),v("tr",{key:t.user_id},[e(h,{first:!0,class:"whitespace-pre-line"},{default:a(()=>[o(c(t.user_matricule),1)]),_:2},1024),e(h,null,{default:a(()=>[o(c(t.user_display_name),1)]),_:2},1024),e(h,{class:"whitespace-pre-line"},{default:a(()=>[o(c(t.user_title),1)]),_:2},1024),e(h,null,{default:a(()=>[o(c(t.user_gf),1)]),_:2},1024),e(h,null,{default:a(()=>[o(c(t.user_nr),1)]),_:2},1024),e(h,null,{default:a(()=>[o(c(t.user_responsibility_center),1)]),_:2},1024),e(h,{class:"whitespace-pre-line"},{default:a(()=>[o(c(t.org?t.org.org_name:"No Org"),1)]),_:2},1024),s("td",Fe,[s("div",Ue,[e(l(R),{href:r.route("agent-ratings.index",{agent:t.user_id}),class:"group flex items-center px-4 py-2 text-sm"},{default:a(()=>[e(l(ge),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-cyan-600"})]),_:2},1032,["href"]),e(l(R),{href:r.route("agents.show",{agent:t.user_id}),class:"group flex items-center px-4 py-2 text-sm"},{default:a(()=>[e(l(he),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-amber-600"})]),_:2},1032,["href"]),s("button",{class:"group flex items-center px-4 py-2 text-sm",onClick:_=>E(t.user_id)},[e(l(_e),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-red-600"})],8,Qe)])])]))),128))])])):(u(),v("div",qe," Aucun élément trouvé."))]),_:1},8,["modelValue","pagination"])):(u(),x(le,{key:1,message:"Trouver vos agents à l'aide de la barre de recherche plus haut",title:"Vous n'avez aucun agent a évaluer."})),e(Ve,{id:B.value,opened:A.value,onCloseModal:i[3]||(i[3]=t=>A.value=!1)},null,8,["id","opened"])])]),_:1}))}};export{rt as default};
