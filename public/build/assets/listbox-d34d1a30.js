import{u as k,x as $,r as m,y as Q,w as W,k as J,o as p,d as G,l as A,A as X,K as Y,B as Z,H as C,T as _,t as N,e as ee,f as te,N as z,n as ae,q as le,O as oe,j as s}from"./helper-18252d35.js";import{d as ie,e as ne}from"./use-controllable-595812ac.js";import{z as M,r as w,b as v,C as ue,I as E,w as H,H as U,F as re,J as se,B as de,N as ve,W as L,A as B}from"./app-2a089cf5.js";function pe(t,x){return t===x}var ce=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(ce||{}),fe=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(fe||{}),be=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(be||{});function me(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let K=Symbol("ListboxContext");function j(t){let x=ve(K,null);if(x===null){let y=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(y,j),y}return x}let ye=M({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>pe},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:x,attrs:y,emit:D}){let e=w(1),c=w(null),O=w(null),g=w(null),d=w([]),a=w(""),l=w(null),h=w(1);function S(o=i=>i){let i=l.value!==null?d.value[l.value]:null,n=oe(o(d.value.slice()),b=>p(b.dataRef.domRef)),r=i?n.indexOf(i):null;return r===-1&&(r=null),{options:n,activeOptionIndex:r}}let R=v(()=>t.multiple?1:0),[P,I]=ie(v(()=>t.modelValue),o=>D("update:modelValue",o),v(()=>t.defaultValue)),T=v(()=>P.value===void 0?k(R.value,{1:[],0:void 0}):P.value),u={listboxState:e,value:T,mode:R,compare(o,i){if(typeof t.by=="string"){let n=t.by;return(o==null?void 0:o[n])===(i==null?void 0:i[n])}return t.by(o,i)},orientation:v(()=>t.horizontal?"horizontal":"vertical"),labelRef:c,buttonRef:O,optionsRef:g,disabled:v(()=>t.disabled),options:d,searchQuery:a,activeOptionIndex:l,activationTrigger:h,closeListbox(){t.disabled||e.value!==1&&(e.value=1,l.value=null)},openListbox(){t.disabled||e.value!==0&&(e.value=0)},goToOption(o,i,n){if(t.disabled||e.value===1)return;let r=S(),b=$(o===m.Specific?{focus:m.Specific,id:i}:{focus:o},{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:V=>V.id,resolveDisabled:V=>V.dataRef.disabled});a.value="",l.value=b,h.value=n??1,d.value=r.options},search(o){if(t.disabled||e.value===1)return;let i=a.value!==""?0:1;a.value+=o.toLowerCase();let n=(l.value!==null?d.value.slice(l.value+i).concat(d.value.slice(0,l.value+i)):d.value).find(b=>b.dataRef.textValue.startsWith(a.value)&&!b.dataRef.disabled),r=n?d.value.indexOf(n):-1;r===-1||r===l.value||(l.value=r,h.value=1)},clearSearch(){t.disabled||e.value!==1&&a.value!==""&&(a.value="")},registerOption(o,i){let n=S(r=>[...r,{id:o,dataRef:i}]);d.value=n.options,l.value=n.activeOptionIndex},unregisterOption(o){let i=S(n=>{let r=n.findIndex(b=>b.id===o);return r!==-1&&n.splice(r,1),n});d.value=i.options,l.value=i.activeOptionIndex,h.value=1},theirOnChange(o){t.disabled||I(o)},select(o){t.disabled||I(k(R.value,{0:()=>o,1:()=>{let i=L(u.value.value).slice(),n=L(o),r=i.findIndex(b=>u.compare(n,L(b)));return r===-1?i.push(n):i.splice(r,1),i}}))}};Q([O,g],(o,i)=>{var n;u.closeListbox(),W(i,J.Loose)||(o.preventDefault(),(n=p(O))==null||n.focus())},v(()=>e.value===0)),ue(K,u),G(v(()=>k(e.value,{0:A.Open,1:A.Closed})));let f=v(()=>{var o;return(o=p(O))==null?void 0:o.closest("form")});return E(()=>{H([f],()=>{if(!f.value||t.defaultValue===void 0)return;function o(){u.theirOnChange(t.defaultValue)}return f.value.addEventListener("reset",o),()=>{var i;(i=f.value)==null||i.removeEventListener("reset",o)}},{immediate:!0})}),()=>{let{name:o,modelValue:i,disabled:n,form:r,...b}=t,V={open:e.value===0,disabled:n,value:T.value};return U(re,[...o!=null&&T.value!=null?ne({[o]:T.value}).map(([F,q])=>U(X,Y({features:Z.Hidden,key:F,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:r,name:F,value:q}))):[],C({ourProps:{},theirProps:{...y,..._(b,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:V,slots:x,attrs:y,name:"Listbox"})])}}}),he=M({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${N()}`}},setup(t,{attrs:x,slots:y,expose:D}){let e=j("ListboxButton");D({el:e.buttonRef,$el:e.buttonRef});function c(a){switch(a.key){case s.Space:case s.Enter:case s.ArrowDown:a.preventDefault(),e.openListbox(),B(()=>{var l;(l=p(e.optionsRef))==null||l.focus({preventScroll:!0}),e.value.value||e.goToOption(m.First)});break;case s.ArrowUp:a.preventDefault(),e.openListbox(),B(()=>{var l;(l=p(e.optionsRef))==null||l.focus({preventScroll:!0}),e.value.value||e.goToOption(m.Last)});break}}function O(a){switch(a.key){case s.Space:a.preventDefault();break}}function g(a){e.disabled.value||(e.listboxState.value===0?(e.closeListbox(),B(()=>{var l;return(l=p(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(a.preventDefault(),e.openListbox(),me(()=>{var l;return(l=p(e.optionsRef))==null?void 0:l.focus({preventScroll:!0})})))}let d=ee(v(()=>({as:t.as,type:x.type})),e.buttonRef);return()=>{var a,l;let h={open:e.listboxState.value===0,disabled:e.disabled.value,value:e.value.value},{id:S,...R}=t,P={ref:e.buttonRef,id:S,type:d.value,"aria-haspopup":"listbox","aria-controls":(a=p(e.optionsRef))==null?void 0:a.id,"aria-expanded":e.listboxState.value===0,"aria-labelledby":e.labelRef.value?[(l=p(e.labelRef))==null?void 0:l.id,S].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:c,onKeyup:O,onClick:g};return C({ourProps:P,theirProps:R,slot:h,attrs:x,slots:y,name:"ListboxButton"})}}}),Se=M({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${N()}`}},setup(t,{attrs:x,slots:y,expose:D}){let e=j("ListboxOptions"),c=w(null);D({el:e.optionsRef,$el:e.optionsRef});function O(a){switch(c.value&&clearTimeout(c.value),a.key){case s.Space:if(e.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),e.search(a.key);case s.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeOptionIndex.value!==null){let l=e.options.value[e.activeOptionIndex.value];e.select(l.dataRef.value)}e.mode.value===0&&(e.closeListbox(),B(()=>{var l;return(l=p(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})}));break;case k(e.orientation.value,{vertical:s.ArrowDown,horizontal:s.ArrowRight}):return a.preventDefault(),a.stopPropagation(),e.goToOption(m.Next);case k(e.orientation.value,{vertical:s.ArrowUp,horizontal:s.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),e.goToOption(m.Previous);case s.Home:case s.PageUp:return a.preventDefault(),a.stopPropagation(),e.goToOption(m.First);case s.End:case s.PageDown:return a.preventDefault(),a.stopPropagation(),e.goToOption(m.Last);case s.Escape:a.preventDefault(),a.stopPropagation(),e.closeListbox(),B(()=>{var l;return(l=p(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case s.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(e.search(a.key),c.value=setTimeout(()=>e.clearSearch(),350));break}}let g=te(),d=v(()=>g!==null?(g.value&A.Open)===A.Open:e.listboxState.value===0);return()=>{var a,l,h,S;let R={open:e.listboxState.value===0},{id:P,...I}=t,T={"aria-activedescendant":e.activeOptionIndex.value===null||(a=e.options.value[e.activeOptionIndex.value])==null?void 0:a.id,"aria-multiselectable":e.mode.value===1?!0:void 0,"aria-labelledby":(S=(l=p(e.labelRef))==null?void 0:l.id)!=null?S:(h=p(e.buttonRef))==null?void 0:h.id,"aria-orientation":e.orientation.value,id:P,onKeydown:O,role:"listbox",tabIndex:0,ref:e.optionsRef};return C({ourProps:T,theirProps:I,slot:R,attrs:x,slots:y,features:z.RenderStrategy|z.Static,visible:d.value,name:"ListboxOptions"})}}}),Re=M({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${N()}`}},setup(t,{slots:x,attrs:y,expose:D}){let e=j("ListboxOption"),c=w(null);D({el:c,$el:c});let O=v(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===t.id:!1),g=v(()=>k(e.mode.value,{0:()=>e.compare(L(e.value.value),L(t.value)),1:()=>L(e.value.value).some(u=>e.compare(L(u),L(t.value)))})),d=v(()=>k(e.mode.value,{1:()=>{var u;let f=L(e.value.value);return((u=e.options.value.find(o=>f.some(i=>e.compare(L(i),L(o.dataRef.value)))))==null?void 0:u.id)===t.id},0:()=>g.value})),a=ae(c),l=v(()=>({disabled:t.disabled,value:t.value,get textValue(){return a()},domRef:c}));E(()=>e.registerOption(t.id,l)),se(()=>e.unregisterOption(t.id)),E(()=>{H([e.listboxState,g],()=>{e.listboxState.value===0&&g.value&&k(e.mode.value,{1:()=>{d.value&&e.goToOption(m.Specific,t.id)},0:()=>{e.goToOption(m.Specific,t.id)}})},{immediate:!0})}),de(()=>{e.listboxState.value===0&&O.value&&e.activationTrigger.value!==0&&B(()=>{var u,f;return(f=(u=p(c))==null?void 0:u.scrollIntoView)==null?void 0:f.call(u,{block:"nearest"})})});function h(u){if(t.disabled)return u.preventDefault();e.select(t.value),e.mode.value===0&&(e.closeListbox(),B(()=>{var f;return(f=p(e.buttonRef))==null?void 0:f.focus({preventScroll:!0})}))}function S(){if(t.disabled)return e.goToOption(m.Nothing);e.goToOption(m.Specific,t.id)}let R=le();function P(u){R.update(u)}function I(u){R.wasMoved(u)&&(t.disabled||O.value||e.goToOption(m.Specific,t.id,0))}function T(u){R.wasMoved(u)&&(t.disabled||O.value&&e.goToOption(m.Nothing))}return()=>{let{disabled:u}=t,f={active:O.value,selected:g.value,disabled:u},{id:o,value:i,disabled:n,...r}=t,b={id:o,ref:c,role:"option",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,"aria-selected":g.value,disabled:void 0,onClick:h,onFocus:S,onPointerenter:P,onMouseenter:P,onPointermove:I,onMousemove:I,onPointerleave:T,onMouseleave:T};return C({ourProps:b,theirProps:r,slot:f,attrs:y,slots:x,name:"ListboxOption"})}}});export{ye as B,Se as H,he as N,Re as U};
