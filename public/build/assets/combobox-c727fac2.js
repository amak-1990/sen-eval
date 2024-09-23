import{u as j,x as z,r as P,o as S,y as Z,d as ee,l as H,A as te,K as oe,B as ae,H as N,T as W,t as q,e as le,b as ne,N as G,f as ue,q as ie,O as re,j as w,C as se,D as ve}from"./helper-df860a3e.js";import{p as pe}from"./AuthenticatedLayout-e8ebc8e5.js";import{d as de,e as be}from"./use-controllable-476ed86c.js";import{C as M,r as F,b as f,U as c,D as ce,E as _,w as J,M as Q,F as fe,B as Y,G as me,I as L,H as xe}from"./app-81706381.js";function ge(o,h){return o===h}var Oe=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(Oe||{}),Re=(o=>(o[o.Single=0]="Single",o[o.Multi=1]="Multi",o))(Re||{}),Se=(o=>(o[o.Pointer=0]="Pointer",o[o.Other=1]="Other",o))(Se||{});let X=Symbol("ComboboxContext");function K(o){let h=xe(X,null);if(h===null){let I=new Error(`<${o} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(I,K),I}return h}let Pe=M({name:"Combobox",emits:{"update:modelValue":o=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>ge},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},nullable:{type:Boolean,default:!1},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(o,{slots:h,attrs:I,emit:T}){let e=F(1),t=F(null),R=F(null),v=F(null),i=F(null),d=F({static:!1,hold:!1}),b=F([]),m=F(null),V=F(1),A=F(!1);function B(l=r=>r){let r=m.value!==null?b.value[m.value]:null,s=re(l(b.value.slice()),p=>S(p.dataRef.domRef)),n=r?s.indexOf(r):null;return n===-1&&(n=null),{options:s,activeOptionIndex:n}}let D=f(()=>o.multiple?1:0),x=f(()=>o.nullable),[a,g]=de(f(()=>o.modelValue),l=>T("update:modelValue",l),f(()=>o.defaultValue)),O=f(()=>a.value===void 0?j(D.value,{1:[],0:void 0}):a.value),E=null,y=null,u={comboboxState:e,value:O,mode:D,compare(l,r){if(typeof o.by=="string"){let s=o.by;return(l==null?void 0:l[s])===(r==null?void 0:r[s])}return o.by(l,r)},defaultValue:f(()=>o.defaultValue),nullable:x,inputRef:R,labelRef:t,buttonRef:v,optionsRef:i,disabled:f(()=>o.disabled),options:b,change(l){g(l)},activeOptionIndex:f(()=>{if(A.value&&m.value===null&&b.value.length>0){let l=b.value.findIndex(r=>!r.dataRef.disabled);l!==-1&&(m.value=l)}return m.value}),activationTrigger:V,optionsPropsRef:d,closeCombobox(){A.value=!1,!o.disabled&&e.value!==1&&(e.value=1,m.value=null)},openCombobox(){if(A.value=!0,o.disabled||e.value===0)return;let l=b.value.findIndex(r=>{let s=c(r.dataRef.value);return j(D.value,{0:()=>u.compare(c(u.value.value),c(s)),1:()=>c(u.value.value).some(n=>u.compare(c(n),c(s)))})});l!==-1&&(m.value=l),e.value=0},goToOption(l,r,s){A.value=!1,E!==null&&cancelAnimationFrame(E),E=requestAnimationFrame(()=>{if(o.disabled||i.value&&!d.value.static&&e.value===1)return;let n=B();if(n.activeOptionIndex===null){let C=n.options.findIndex(U=>!U.dataRef.disabled);C!==-1&&(n.activeOptionIndex=C)}let p=z(l===P.Specific?{focus:P.Specific,id:r}:{focus:l},{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:C=>C.id,resolveDisabled:C=>C.dataRef.disabled});m.value=p,V.value=s??1,b.value=n.options})},selectOption(l){let r=b.value.find(n=>n.id===l);if(!r)return;let{dataRef:s}=r;g(j(D.value,{0:()=>s.value,1:()=>{let n=c(u.value.value).slice(),p=c(s.value),C=n.findIndex(U=>u.compare(p,c(U)));return C===-1?n.push(p):n.splice(C,1),n}}))},selectActiveOption(){if(u.activeOptionIndex.value===null)return;let{dataRef:l,id:r}=b.value[u.activeOptionIndex.value];g(j(D.value,{0:()=>l.value,1:()=>{let s=c(u.value.value).slice(),n=c(l.value),p=s.findIndex(C=>u.compare(n,c(C)));return p===-1?s.push(n):s.splice(p,1),s}})),u.goToOption(P.Specific,r)},registerOption(l,r){y&&cancelAnimationFrame(y);let s={id:l,dataRef:r},n=B(p=>(p.push(s),p));if(m.value===null){let p=r.value.value;j(D.value,{0:()=>u.compare(c(u.value.value),c(p)),1:()=>c(u.value.value).some(C=>u.compare(c(C),c(p)))})&&(n.activeOptionIndex=n.options.indexOf(s))}b.value=n.options,m.value=n.activeOptionIndex,V.value=1,n.options.some(p=>!S(p.dataRef.domRef))&&(y=requestAnimationFrame(()=>{let p=B();b.value=p.options,m.value=p.activeOptionIndex}))},unregisterOption(l){var r;u.activeOptionIndex.value!==null&&((r=u.options.value[u.activeOptionIndex.value])==null?void 0:r.id)===l&&(A.value=!0);let s=B(n=>{let p=n.findIndex(C=>C.id===l);return p!==-1&&n.splice(p,1),n});b.value=s.options,m.value=s.activeOptionIndex,V.value=1}};Z([R,v,i],()=>u.closeCombobox(),f(()=>e.value===0)),ce(X,u),ee(f(()=>j(e.value,{0:H.Open,1:H.Closed})));let k=f(()=>u.activeOptionIndex.value===null?null:b.value[u.activeOptionIndex.value].dataRef.value),$=f(()=>{var l;return(l=S(R))==null?void 0:l.closest("form")});return _(()=>{J([$],()=>{if(!$.value||o.defaultValue===void 0)return;function l(){u.change(o.defaultValue)}return $.value.addEventListener("reset",l),()=>{var r;(r=$.value)==null||r.removeEventListener("reset",l)}},{immediate:!0})}),()=>{let{name:l,disabled:r,form:s,...n}=o,p={open:e.value===0,disabled:r,activeIndex:u.activeOptionIndex.value,activeOption:k.value,value:O.value};return Q(fe,[...l!=null&&O.value!=null?be({[l]:O.value}).map(([C,U])=>Q(te,oe({features:ae.Hidden,key:C,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:s,name:C,value:U}))):[],N({theirProps:{...I,...W(n,["modelValue","defaultValue","nullable","multiple","onUpdate:modelValue","by"])},ourProps:{},slot:p,slots:h,attrs:I,name:"Combobox"})])}}}),Te=M({name:"ComboboxLabel",props:{as:{type:[Object,String],default:"label"},id:{type:String,default:()=>`headlessui-combobox-label-${q()}`}},setup(o,{attrs:h,slots:I}){let T=K("ComboboxLabel");function e(){var t;(t=S(T.inputRef))==null||t.focus({preventScroll:!0})}return()=>{let t={open:T.comboboxState.value===0,disabled:T.disabled.value},{id:R,...v}=o,i={id:R,ref:T.labelRef,onClick:e};return N({ourProps:i,theirProps:v,slot:t,attrs:h,slots:I,name:"ComboboxLabel"})}}}),Ve=M({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-combobox-button-${q()}`}},setup(o,{attrs:h,slots:I,expose:T}){let e=K("ComboboxButton");T({el:e.buttonRef,$el:e.buttonRef});function t(i){e.disabled.value||(e.comboboxState.value===0?e.closeCombobox():(i.preventDefault(),e.openCombobox()),L(()=>{var d;return(d=S(e.inputRef))==null?void 0:d.focus({preventScroll:!0})}))}function R(i){switch(i.key){case w.ArrowDown:i.preventDefault(),i.stopPropagation(),e.comboboxState.value===1&&e.openCombobox(),L(()=>{var d;return(d=e.inputRef.value)==null?void 0:d.focus({preventScroll:!0})});return;case w.ArrowUp:i.preventDefault(),i.stopPropagation(),e.comboboxState.value===1&&(e.openCombobox(),L(()=>{e.value.value||e.goToOption(P.Last)})),L(()=>{var d;return(d=e.inputRef.value)==null?void 0:d.focus({preventScroll:!0})});return;case w.Escape:if(e.comboboxState.value!==0)return;i.preventDefault(),e.optionsRef.value&&!e.optionsPropsRef.value.static&&i.stopPropagation(),e.closeCombobox(),L(()=>{var d;return(d=e.inputRef.value)==null?void 0:d.focus({preventScroll:!0})});return}}let v=le(f(()=>({as:o.as,type:h.type})),e.buttonRef);return()=>{var i,d;let b={open:e.comboboxState.value===0,disabled:e.disabled.value,value:e.value.value},{id:m,...V}=o,A={ref:e.buttonRef,id:m,type:v.value,tabindex:"-1","aria-haspopup":"listbox","aria-controls":(i=S(e.optionsRef))==null?void 0:i.id,"aria-expanded":e.comboboxState.value===0,"aria-labelledby":e.labelRef.value?[(d=S(e.labelRef))==null?void 0:d.id,m].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:R,onClick:t};return N({ourProps:A,theirProps:V,slot:b,attrs:h,slots:I,name:"ComboboxButton"})}}}),Ae=M({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function},defaultValue:{type:String,default:void 0},id:{type:String,default:()=>`headlessui-combobox-input-${q()}`}},emits:{change:o=>!0},setup(o,{emit:h,attrs:I,slots:T,expose:e}){let t=K("ComboboxInput"),R=f(()=>ne(S(t.inputRef))),v={value:!1};e({el:t.inputRef,$el:t.inputRef});function i(){t.change(null);let a=S(t.optionsRef);a&&(a.scrollTop=0),t.goToOption(P.Nothing)}let d=f(()=>{var a;let g=t.value.value;return S(t.inputRef)?typeof o.displayValue<"u"&&g!==void 0?(a=o.displayValue(g))!=null?a:"":typeof g=="string"?g:"":""});_(()=>{J([d,t.comboboxState,R],([a,g],[O,E])=>{if(v.value)return;let y=S(t.inputRef);y&&((E===0&&g===1||a!==O)&&(y.value=a),requestAnimationFrame(()=>{var u;if(v.value||!y||((u=R.value)==null?void 0:u.activeElement)!==y)return;let{selectionStart:k,selectionEnd:$}=y;Math.abs(($??0)-(k??0))===0&&k===0&&y.setSelectionRange(y.value.length,y.value.length)}))},{immediate:!0}),J([t.comboboxState],([a],[g])=>{if(a===0&&g===1){if(v.value)return;let O=S(t.inputRef);if(!O)return;let E=O.value,{selectionStart:y,selectionEnd:u,selectionDirection:k}=O;O.value="",O.value=E,k!==null?O.setSelectionRange(y,u,k):O.setSelectionRange(y,u)}})});let b=F(!1);function m(){b.value=!0}function V(){se().nextFrame(()=>{b.value=!1})}function A(a){switch(v.value=!0,a.key){case w.Enter:if(v.value=!1,t.comboboxState.value!==0||b.value)return;if(a.preventDefault(),a.stopPropagation(),t.activeOptionIndex.value===null){t.closeCombobox();return}t.selectActiveOption(),t.mode.value===0&&t.closeCombobox();break;case w.ArrowDown:return v.value=!1,a.preventDefault(),a.stopPropagation(),j(t.comboboxState.value,{0:()=>t.goToOption(P.Next),1:()=>t.openCombobox()});case w.ArrowUp:return v.value=!1,a.preventDefault(),a.stopPropagation(),j(t.comboboxState.value,{0:()=>t.goToOption(P.Previous),1:()=>{t.openCombobox(),L(()=>{t.value.value||t.goToOption(P.Last)})}});case w.Home:if(a.shiftKey)break;return v.value=!1,a.preventDefault(),a.stopPropagation(),t.goToOption(P.First);case w.PageUp:return v.value=!1,a.preventDefault(),a.stopPropagation(),t.goToOption(P.First);case w.End:if(a.shiftKey)break;return v.value=!1,a.preventDefault(),a.stopPropagation(),t.goToOption(P.Last);case w.PageDown:return v.value=!1,a.preventDefault(),a.stopPropagation(),t.goToOption(P.Last);case w.Escape:if(v.value=!1,t.comboboxState.value!==0)return;a.preventDefault(),t.optionsRef.value&&!t.optionsPropsRef.value.static&&a.stopPropagation(),t.nullable.value&&t.mode.value===0&&t.value.value===null&&i(),t.closeCombobox();break;case w.Tab:if(v.value=!1,t.comboboxState.value!==0)return;t.mode.value===0&&t.selectActiveOption(),t.closeCombobox();break}}function B(a){h("change",a),t.nullable.value&&t.mode.value===0&&a.target.value===""&&i(),t.openCombobox()}function D(){v.value=!1}let x=f(()=>{var a,g,O,E;return(E=(O=(g=o.defaultValue)!=null?g:t.defaultValue.value!==void 0?(a=o.displayValue)==null?void 0:a.call(o,t.defaultValue.value):null)!=null?O:t.defaultValue.value)!=null?E:""});return()=>{var a,g,O,E,y,u;let k={open:t.comboboxState.value===0},{id:$,displayValue:l,onChange:r,...s}=o,n={"aria-controls":(a=t.optionsRef.value)==null?void 0:a.id,"aria-expanded":t.comboboxState.value===0,"aria-activedescendant":t.activeOptionIndex.value===null||(g=t.options.value[t.activeOptionIndex.value])==null?void 0:g.id,"aria-labelledby":(y=(O=S(t.labelRef))==null?void 0:O.id)!=null?y:(E=S(t.buttonRef))==null?void 0:E.id,"aria-autocomplete":"list",id:$,onCompositionstart:m,onCompositionend:V,onKeydown:A,onInput:B,onBlur:D,role:"combobox",type:(u=I.type)!=null?u:"text",tabIndex:0,ref:t.inputRef,defaultValue:x.value,disabled:t.disabled.value===!0?!0:void 0};return N({ourProps:n,theirProps:s,slot:k,attrs:I,slots:T,features:G.RenderStrategy|G.Static,name:"ComboboxInput"})}}}),Ee=M({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(o,{attrs:h,slots:I,expose:T}){let e=K("ComboboxOptions"),t=`headlessui-combobox-options-${q()}`;T({el:e.optionsRef,$el:e.optionsRef}),Y(()=>{e.optionsPropsRef.value.static=o.static}),Y(()=>{e.optionsPropsRef.value.hold=o.hold});let R=ue(),v=f(()=>R!==null?(R.value&H.Open)===H.Open:e.comboboxState.value===0);return pe({container:f(()=>S(e.optionsRef)),enabled:f(()=>e.comboboxState.value===0),accept(i){return i.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:i.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(i){i.setAttribute("role","none")}}),()=>{var i,d,b;let m={open:e.comboboxState.value===0},V={"aria-labelledby":(b=(i=S(e.labelRef))==null?void 0:i.id)!=null?b:(d=S(e.buttonRef))==null?void 0:d.id,id:t,ref:e.optionsRef,role:"listbox","aria-multiselectable":e.mode.value===1?!0:void 0},A=W(o,["hold"]);return N({ourProps:V,theirProps:A,slot:m,attrs:h,slots:I,features:G.RenderStrategy|G.Static,visible:v.value,name:"ComboboxOptions"})}}}),Fe=M({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(o,{slots:h,attrs:I,expose:T}){let e=K("ComboboxOption"),t=`headlessui-combobox-option-${q()}`,R=F(null);T({el:R,$el:R});let v=f(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===t:!1),i=f(()=>j(e.mode.value,{0:()=>e.compare(c(e.value.value),c(o.value)),1:()=>c(e.value.value).some(x=>e.compare(c(x),c(o.value)))})),d=f(()=>({disabled:o.disabled,value:o.value,domRef:R}));_(()=>e.registerOption(t,d)),me(()=>e.unregisterOption(t)),Y(()=>{e.comboboxState.value===0&&v.value&&e.activationTrigger.value!==0&&L(()=>{var x,a;return(a=(x=S(R))==null?void 0:x.scrollIntoView)==null?void 0:a.call(x,{block:"nearest"})})});function b(x){if(o.disabled)return x.preventDefault();e.selectOption(t),e.mode.value===0&&e.closeCombobox(),ve()||requestAnimationFrame(()=>{var a;return(a=S(e.inputRef))==null?void 0:a.focus()})}function m(){if(o.disabled)return e.goToOption(P.Nothing);e.goToOption(P.Specific,t)}let V=ie();function A(x){V.update(x)}function B(x){V.wasMoved(x)&&(o.disabled||v.value||e.goToOption(P.Specific,t,0))}function D(x){V.wasMoved(x)&&(o.disabled||v.value&&(e.optionsPropsRef.value.hold||e.goToOption(P.Nothing)))}return()=>{let{disabled:x}=o,a={active:v.value,selected:i.value,disabled:x},g={id:t,ref:R,role:"option",tabIndex:x===!0?void 0:-1,"aria-disabled":x===!0?!0:void 0,"aria-selected":i.value,disabled:void 0,onClick:b,onFocus:m,onPointerenter:A,onMouseenter:A,onPointermove:B,onMousemove:B,onPointerleave:D,onMouseleave:D};return N({ourProps:g,theirProps:o,slot:a,attrs:I,slots:h,name:"ComboboxOption"})}}});export{Ve as G,Pe as J,Ae as Q,Te as W,Ee as X,Fe as Y};