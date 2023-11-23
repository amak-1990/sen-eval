import{o,c as _,a as s,b as R,T as S,r as $,d as N,w as V,e as h,f as a,g as t,u as r,Z as q,h as E,n as b,i as L,F as M,j as O,k as n,Q as J,l as j,O as z,t as u,m as B}from"./app-3669f768.js";import{_ as P,g as U,h as X}from"./AuthenticatedLayout-4418413d.js";import{_ as Y}from"./Datatable-87da9687.js";import{_ as d,a as m}from"./TableData-32a9077b.js";import{_ as H}from"./EmptyState-ce166e8f.js";import{_ as Z}from"./Breadcrumbs-53937bf4.js";import{_ as T}from"./Separator-853da94a.js";import{_ as I}from"./SubmitButton-a30f7e02.js";import{Q as K,G as W,X as ee,J as te,Y as ae}from"./combobox-2b51cf12.js";import{r as se}from"./ChevronUpDownIcon-84816d6b.js";import{r as re}from"./CheckIcon-4f88f332.js";import{r as le}from"./EyeIcon-88e41321.js";import{r as ne}from"./TrashIcon-f6594853.js";import"./logo1637145113-c7398df9.js";import"./use-controllable-b57d37a0.js";function oe(k,g){return o(),_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[s("path",{"fill-rule":"evenodd",d:"M1 6a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V6zm4 1.5a2 2 0 114 0 2 2 0 01-4 0zm2 3a4 4 0 00-3.665 2.395.75.75 0 00.416 1A8.98 8.98 0 007 14.5a8.98 8.98 0 003.249-.604.75.75 0 00.416-1.001A4.001 4.001 0 007 10.5zm5-3.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm0 6.5a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm.75-4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z","clip-rule":"evenodd"})])}const ie={class:"px-4 sm:px-6 lg:px-8"},ue=s("div",{class:"sm:flex sm:items-center"},[s("div",{class:"sm:flex-auto"},[s("h1",{class:"text-2xl font-semibold leading-6 text-gray-900"},"Mes Agents"),s("p",{class:"mt-2 text-sm text-gray-700"}," La liste de mes agents à évaluer. ")])],-1),de={class:"bg-white shadow sm:rounded-lg"},ce={class:"px-4 py-5 sm:p-6"},me=s("h3",{class:"text-base font-semibold leading-6 text-gray-900"},"Trouver vos agents",-1),_e=s("div",{class:"mt-2 max-w-xl text-sm text-gray-500"},[s("p",null,"Rechercher les agents que vous devrez évaluer en utilisant leur matricule, nom ou prénom. ")],-1),ge=["onSubmit"],fe={class:"w-full sm:max-w-xl"},pe={class:"relative"},he={class:"flex"},ye={key:0,class:"min-w-full divide-y divide-gray-300"},ve={class:"bg-gray-50"},xe={class:"divide-y divide-gray-200 bg-white"},we={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},be={class:"flex items-center justify-center"},ke=["onClick"],Ce={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},Re={__name:"AgentsList",props:{agents:{type:Object},others:{type:Object}},setup(k){const g=k,D=[{name:"Mes Agents",href:"#",current:!0}],C=g.others,F=R(()=>U(g.agents)),y=S({agent_id:null}),f=$(g.agents.data),v=N({keyword:"",fields:["user_display_name","user_matricule"]}),A=N({keyword:"",fields:["user_display_name","user_matricule"]}),x=$(""),p=$(C),G=()=>{y.post(route("agents.store"),{onError:l=>{J().props.flash.notify={type:"error",message:l.agent_id}}})},Q=()=>j.post(route("users.search"),A);return V(()=>x.value,function(l){let i=l===""?C:C.filter(e=>e.user_matricule.toLowerCase().includes(x.value.toLowerCase())||e.user_display_name.toLowerCase().includes(x.value.toLowerCase()));i.length>0?p.value=i:l.length>=3&&Q().then(e=>p.value=e.data)}),V(()=>v.keyword,function(l){l===""?f.value=g.agents.data:j.post(route("agents.search"),v).then(i=>f.value=i.data)}),V(()=>g.agents,function(l){f.value=l.data,!f.value.length>0&&(l.prev_page_url?z.get(l.prev_page_url):z.get(l.first_page_url))}),(l,i)=>(o(),h(P,null,{default:a(()=>[t(r(q),{title:"Mes Agents"}),s("div",ie,[t(Z,{pages:D}),ue,t(T,{title:"Trouver mes agents"}),s("div",de,[s("div",ce,[me,_e,s("form",{class:"mt-5 sm:flex sm:items-center",onSubmit:E(G,["prevent"])},[s("div",fe,[t(r(te),{modelValue:r(y).agent_id,"onUpdate:modelValue":i[1]||(i[1]=e=>r(y).agent_id=e)},{default:a(()=>[s("div",pe,[t(r(K),{class:b([r(y).errors.agent_id!==void 0?"focus:ring-red-600 ring-red-600":"","w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"]),"display-value":e=>{let c=p.value.filter(w=>w.user_id===e)[0];return c?c.user_matricule+" "+c.user_display_name:""},placeholder:"Chercher un agent...",onChange:i[0]||(i[0]=e=>{A.keyword=x.value=e.target.value})},null,8,["class","display-value"]),t(r(W),{class:"absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"},{default:a(()=>[t(r(se),{"aria-hidden":"true",class:"h-5 w-5 text-gray-400"})]),_:1}),p.value.length>0?(o(),h(r(ee),{key:0,class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:a(()=>[(o(!0),_(M,null,L(p.value,e=>(o(),h(r(ae),{key:e.user_id,value:e.user_id,as:"template"},{default:a(({active:c,selected:w})=>[s("li",{class:b(["relative cursor-default select-none py-2 pl-3 pr-9",c?"bg-cyan-600  text-white":"text-gray-900"])},[s("div",he,[s("span",{class:b(["truncate",w&&"font-semibold"])},u((e==null?void 0:e.user_matricule)+" "+(e==null?void 0:e.user_display_name)),3)]),w?(o(),_("span",{key:0,class:b(["absolute inset-y-0 right-0 flex items-center pr-4",c?"text-white":"text-cyan-600"])},[t(r(re),{"aria-hidden":"true",class:"h-5 w-5"})],2)):O("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})):O("",!0)])]),_:1},8,["modelValue"])]),t(I,{class:"mt-3 sm:ml-3 sm:mt-0 sm:w-auto",type:"submit"},{default:a(()=>[n("Ajouter")]),_:1})],40,ge)])]),t(T,{title:"Mes agents"}),r(X)(k.agents.data)?(o(),h(Y,{key:0,modelValue:v.keyword,"onUpdate:modelValue":i[2]||(i[2]=e=>v.keyword=e),pagination:F.value},{default:a(()=>[f.value.length>0?(o(),_("table",ye,[s("thead",ve,[s("tr",null,[t(d,{first:!0},{default:a(()=>[n("Matricule")]),_:1}),t(d,null,{default:a(()=>[n("Nom")]),_:1}),t(d,null,{default:a(()=>[n("Poste")]),_:1}),t(d,null,{default:a(()=>[n("GF")]),_:1}),t(d,null,{default:a(()=>[n("NR")]),_:1}),t(d,null,{default:a(()=>[n("CR")]),_:1}),t(d,null,{default:a(()=>[n("Organisation")]),_:1}),t(d)])]),s("tbody",xe,[(o(!0),_(M,null,L(f.value,e=>(o(),_("tr",{key:e.user_id},[t(m,{first:!0,class:"whitespace-pre-line"},{default:a(()=>[n(u(e.user_matricule),1)]),_:2},1024),t(m,null,{default:a(()=>[n(u(e.user_display_name),1)]),_:2},1024),t(m,{class:"whitespace-pre-line"},{default:a(()=>[n(u(e.user_title),1)]),_:2},1024),t(m,null,{default:a(()=>[n(u(e.user_gf),1)]),_:2},1024),t(m,null,{default:a(()=>[n(u(e.user_nr),1)]),_:2},1024),t(m,null,{default:a(()=>[n(u(e.user_responsibility_center),1)]),_:2},1024),t(m,{class:"whitespace-pre-line"},{default:a(()=>[n(u(e.org?e.org.org_name:"No Org"),1)]),_:2},1024),s("td",we,[s("div",be,[t(r(B),{href:l.route("agent-ratings.index",{agent:e.user_id}),class:"group flex items-center px-4 py-2 text-sm"},{default:a(()=>[t(r(le),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-cyan-600"})]),_:2},1032,["href"]),t(r(B),{href:l.route("agents.show",{agent:e.user_id}),class:"group flex items-center px-4 py-2 text-sm"},{default:a(()=>[t(r(oe),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-amber-600"})]),_:2},1032,["href"]),s("button",{class:"group flex items-center px-4 py-2 text-sm",onClick:c=>r(z).put(l.route("agents.update",{agent:e.user_id}))},[t(r(ne),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-red-600"})],8,ke)])])]))),128))])])):(o(),_("div",Ce," Aucun élément trouvé."))]),_:1},8,["modelValue","pagination"])):(o(),h(H,{key:1,message:"Trouver vos agents à l'aide de la barre de recherche plus haut",title:"Vous n'avez aucun agent a évaluer."}))])]),_:1}))}};export{Re as default};
