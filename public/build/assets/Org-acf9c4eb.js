import{_ as k,g as b,h as O}from"./AuthenticatedLayout-a6827bda.js";import{_ as N}from"./Breadcrumbs-6f218844.js";import{_ as V}from"./Datatable-f7bebf15.js";import{_ as i,a as n}from"./TableData-551b2a58.js";import{_ as $}from"./EmptyState-148efe32.js";import{b as B,r as C,d as j,w as y,o as d,e as g,f as t,g as e,u as f,Z as D,a as r,t as o,c as p,k as a,F,i as P,l as R,O as v,m as L}from"./app-009e6676.js";import{r as A}from"./EyeIcon-07e9864a.js";import"./logo1637145113-11387d37.js";import"./PlusIcon-1fd1de74.js";const E={class:"px-4 sm:px-6 lg:px-8"},G={class:"sm:flex sm:items-center"},M={class:"sm:flex-auto"},S={class:"text-2xl font-semibold leading-6 text-gray-900"},T=r("p",{class:"mt-2 text-sm text-gray-700"}," La liste des agents de la direction. ",-1),U={key:0,class:"min-w-full divide-y divide-gray-300"},Z={class:"bg-gray-50"},q={class:"divide-y divide-gray-200 bg-white"},z={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},H={class:"flex items-center justify-center"},I={key:1,class:"text-center bg-white text-lg text-gray-600 py-4"},se={__name:"Org",props:{org:{type:Object},agents:{type:Object}},setup(h){const u=h,x=[{name:"Organisations",href:route("orgs.index"),current:!1},{name:u.org.org_name,href:"#",current:!0}],w=B(()=>b(u.agents)),_=C(u.agents.data),c=j({keyword:"",fields:["user_matricule","user_display_name"],org_id:u.org.org_id});return y(()=>c.keyword,function(l){l===""?_.value=u.agents.data:R.post(route("users.search"),c).then(m=>_.value=m.data)}),y(()=>u.agents,function(l){_.value=l.data,!_.value.length>0&&(l.prev_page_url?v.get(l.prev_page_url):v.get(l.first_page_url))}),(l,m)=>(d(),g(k,null,{default:t(()=>[e(f(D),{title:"Organisation"}),r("div",E,[e(N,{pages:x}),r("div",G,[r("div",M,[r("h1",S,o(u.org.org_name),1),T])]),f(O)(h.agents.data)?(d(),g(V,{key:0,modelValue:c.keyword,"onUpdate:modelValue":m[0]||(m[0]=s=>c.keyword=s),pagination:w.value},{default:t(()=>[_.value.length>0?(d(),p("table",U,[r("thead",Z,[r("tr",null,[e(i,{first:!0},{default:t(()=>[a("Matricule")]),_:1}),e(i,null,{default:t(()=>[a("Nom")]),_:1}),e(i,null,{default:t(()=>[a("Poste")]),_:1}),e(i,null,{default:t(()=>[a("GF")]),_:1}),e(i,null,{default:t(()=>[a("NR")]),_:1}),e(i,null,{default:t(()=>[a("CR")]),_:1}),e(i,null,{default:t(()=>[a("Organisation")]),_:1}),e(i,null,{default:t(()=>[a("CR Organisation")]),_:1}),e(i)])]),r("tbody",q,[(d(!0),p(F,null,P(_.value,s=>(d(),p("tr",{key:s.user_id},[e(n,{first:!0,class:"whitespace-pre-line"},{default:t(()=>[a(o(s.user_matricule),1)]),_:2},1024),e(n,null,{default:t(()=>[a(o(s.user_display_name),1)]),_:2},1024),e(n,{class:"whitespace-pre-line"},{default:t(()=>[a(o(s.user_title),1)]),_:2},1024),e(n,null,{default:t(()=>[a(o(s.user_gf),1)]),_:2},1024),e(n,null,{default:t(()=>[a(o(s.user_nr),1)]),_:2},1024),e(n,null,{default:t(()=>[a(o(s.user_responsibility_center),1)]),_:2},1024),e(n,{class:"whitespace-pre-line"},{default:t(()=>[a(o(s.org?s.org.org_name:"No Org"),1)]),_:2},1024),e(n,null,{default:t(()=>[a(o(s.org.org_responsibility_center),1)]),_:2},1024),r("td",z,[r("div",H,[e(f(L),{href:l.route("users.show",{user:s.user_id}),class:"group flex items-center px-4 py-2 text-sm"},{default:t(()=>[e(f(A),{"aria-hidden":"true",class:"mr-3 h-5 w-5 text-gray-400 group-hover:text-amber-600"})]),_:2},1032,["href"])])])]))),128))])])):(d(),p("div",I," Aucun élément trouvé."))]),_:1},8,["modelValue","pagination"])):(d(),g($,{key:1,link:l.route("orgs.create"),action:"Nouveau",message:"Créer une nouvelle organisation en appuyant sur ce bouton",title:"Pas d'organisation"},null,8,["link"]))])]),_:1}))}};export{se as default};