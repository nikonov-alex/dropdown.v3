var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{_W:()=>_e,zt:()=>Ne,Af:()=>Ue,uE:()=>je,lP:()=>Fe,Vk:()=>ze,XX:()=>He});const o=Object.keys;function n(e){return"string"==typeof e}function r(e){return"number"==typeof e}function l(e){return"object"==typeof e?null!==e:i(e)}function i(e){return"function"==typeof e}function a(e,t){if(e)for(const n of o(e))t(e[n],n)}const s={animationIterationCount:0,borderImageOutset:0,borderImageSlice:0,borderImageWidth:0,boxFlex:0,boxFlexGroup:0,boxOrdinalGroup:0,columnCount:0,columns:0,flex:0,flexGrow:0,flexPositive:0,flexShrink:0,flexNegative:0,flexOrder:0,gridArea:0,gridRow:0,gridRowEnd:0,gridRowSpan:0,gridRowStart:0,gridColumn:0,gridColumnEnd:0,gridColumnSpan:0,gridColumnStart:0,fontWeight:0,lineClamp:0,lineHeight:0,opacity:0,order:0,orphans:0,tabSize:0,widows:0,zIndex:0,zoom:0,fillOpacity:0,floodOpacity:0,stopOpacity:0,strokeDasharray:0,strokeDashoffset:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0},c=["Webkit","ms","Moz","O"];o(s).forEach((e=>{c.forEach((t=>{s[function(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}(t,e)]=0}))}));const d=Symbol.for("jsx-dom:type");var p=function(e){return e.ShadowRoot="ShadowRoot",e}(p||{});const u="http://www.w3.org/1999/xlink",f="http://www.w3.org/XML/1998/namespace";function m(e){return!("boolean"==typeof e||null==e)}function y(e){return Array.isArray(e)?e.map(y).filter(Boolean).join(" "):l(e)?Symbol.iterator in e?y(Array.from(e)):o(e).filter((t=>e[t])).join(" "):m(e)?""+e:""}const g={animate:0,circle:0,clipPath:0,defs:0,desc:0,ellipse:0,feBlend:0,feColorMatrix:0,feComponentTransfer:0,feComposite:0,feConvolveMatrix:0,feDiffuseLighting:0,feDisplacementMap:0,feDistantLight:0,feFlood:0,feFuncA:0,feFuncB:0,feFuncG:0,feFuncR:0,feGaussianBlur:0,feImage:0,feMerge:0,feMergeNode:0,feMorphology:0,feOffset:0,fePointLight:0,feSpecularLighting:0,feSpotLight:0,feTile:0,feTurbulence:0,filter:0,foreignObject:0,g:0,image:0,line:0,linearGradient:0,marker:0,mask:0,metadata:0,path:0,pattern:0,polygon:0,polyline:0,radialGradient:0,rect:0,stop:0,svg:0,switch:0,symbol:0,text:0,textPath:0,tspan:0,use:0,view:0},h=/^(a(ll|t|u)|base[FP]|c(al|lipPathU|on)|di|ed|ex|filter[RU]|g(lyphR|r)|ke|l(en|im)|ma(rker[HUW]|s)|n|pat|pr|point[^e]|re[^n]|s[puy]|st[^or]|ta|textL|vi|xC|y|z)/;function v(e,t){let r,{children:a,...s}=t;if(s.namespaceURI||0!==g[e]||(s={...s,namespaceURI:"http://www.w3.org/2000/svg"}),n(e)){if(r=s.namespaceURI?document.createElementNS(s.namespaceURI,e):document.createElement(e),function(e,t){for(const n of o(e))E(n,e[n],t)}(s,r),b(a,r),r instanceof window.HTMLSelectElement&&null!=s.value)if(!0===s.multiple&&Array.isArray(s.value)){const e=s.value.map((e=>String(e)));r.querySelectorAll("option").forEach((t=>t.selected=e.includes(t.value)))}else r.value=s.value;w(s.ref,r)}else{if(!i(e))throw new TypeError(`Invalid JSX element type: ${e}`);l(e.defaultProps)&&(s={...e.defaultProps,...s}),r=function(e){const{prototype:t}=e;return!(!t||!t.isReactComponent)}(e)?function(e,t,o){const n=new e(t={...t,children:o}),r=n.render();return"ref"in t&&w(t.ref,n),r}(e,s,a):e({...s,children:a})}return r}function w(e,t){var o;l(o=e)&&"current"in o?e.current=t:i(e)&&e(t)}function b(e,t){if(l(a=e)&&"number"==typeof a.length&&"number"!=typeof a.nodeType)!function(e,t){for(const o of[...e])b(o,t)}(e,t);else if(n(e)||r(e))x(document.createTextNode(e),t);else if(null===e)x(document.createComment(""),t);else if((i=e)&&"number"==typeof i.nodeType)x(e,t);else if(null!=(o=e)&&o[d]===p.ShadowRoot){const o=t.attachShadow(e.attr);b(e.children,o),w(e.ref,o)}var o,i,a}function x(e,t){t instanceof window.HTMLTemplateElement?t.content.appendChild(e):t.appendChild(e)}function S(e,t){return e.replace(/[A-Z]/g,(e=>t+e.toLowerCase()))}function A(e,t){null==t||!1===t||(Array.isArray(t)?t.forEach((t=>A(e,t))):n(t)?e.setAttribute("style",t):l(t)&&a(t,((t,o)=>{0===o.indexOf("-")?e.style.setProperty(o,t):r(t)&&0!==s[o]?e.style[o]=t+"px":e.style[o]=t})))}function E(e,t,o){switch(e){case"xlinkActuate":case"xlinkArcrole":case"xlinkHref":case"xlinkRole":case"xlinkShow":case"xlinkTitle":case"xlinkType":return void T(o,u,S(e,":"),t);case"xmlnsXlink":return void k(o,S(e,":"),t);case"xmlBase":case"xmlLang":case"xmlSpace":return void T(o,f,S(e,":"),t)}switch(e){case"htmlFor":return void k(o,"for",t);case"dataset":return void a(t,((e,t)=>{null!=e&&(o.dataset[t]=e)}));case"innerHTML":case"innerText":case"textContent":return void(m(t)&&(o[e]=t));case"dangerouslySetInnerHTML":return void(l(t)&&(o.innerHTML=t.__html));case"value":if(null==t||o instanceof window.HTMLSelectElement)return;if(o instanceof window.HTMLTextAreaElement)return void(o.value=t);break;case"spellCheck":return void(o.spellcheck=t);case"class":case"className":return void(i(t)?t(o):k(o,"class",y(t)));case"ref":case"namespaceURI":return;case"style":return void A(o,t);case"on":case"onCapture":return void a(t,((t,n)=>{o.addEventListener(n,t,"onCapture"===e)}))}if(i(t)){if("o"===e[0]&&"n"===e[1]){let n=e.toLowerCase();const r=n.endsWith("capture");if("ondoubleclick"===n?n="ondblclick":r&&"ondoubleclickcapture"===n&&(n="ondblclickcapture"),r||null!==o[n])if(r)o.addEventListener(n.substring(2,n.length-7),t,!0);else{let r;r=n in window?n.substring(2):n[2]+e.slice(3),o.addEventListener(r,t)}else o[n]=t}}else l(t)?o[e]=t:!0===t?k(o,e,""):!1!==t&&null!=t&&(o instanceof SVGElement&&!h.test(e)?k(o,S(e,"-"),t):k(o,e,t))}function k(e,t,o){e.setAttribute(t,o)}function T(e,t,o,n){e.setAttributeNS(t,o,n)}const L=e=>({left:e.left.slice(0,-1),value:e.left[e.left.length-1],right:[e.value].concat(e.right)}),M=(e,t)=>0===e.left.length?t:e.left[e.left.length-1].disabled?M(L(e),t):L(e),C=e=>M(e,e),O=e=>({left:e.left.concat(e.value),value:e.right[0],right:e.right.slice(1)}),P=(e,t)=>0===e.right.length?t:e.right[0].disabled?P(O(e),t):O(e),R=e=>P(e,e);var I={d:(e,t)=>{for(var o in t)I.o(t,o)&&!I.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},H={};I.d(H,{qM:()=>F,E1:()=>z,_u:()=>j,_w:()=>N,Er:()=>U});var j={};I.r(j),I.d(j,{EMPTY_LIST:()=>_,concat:()=>K,cons:()=>D,count:()=>Y,filter:()=>q,find:()=>J,fold:()=>X,isEmpty:()=>G,list:()=>W,map:()=>B,prepend:()=>V,reverse:()=>$});var N={};I.r(N),I.d(N,{apply:()=>Z,ifNotError:()=>ee,ifNotFalse:()=>Q});var U={};I.r(U);var z={};I.r(z),I.d(z,{array:()=>te});var F={};I.r(F),I.d(F,{local:()=>oe});const _=null,D=(e,t)=>({first:e,rest:t}),G=e=>_===e,W=(...e)=>e.reduce(((e,t)=>D(t,e)),_),X=(e,t,o)=>G(e)?o:t(e.first,X(e.rest,t,o)),B=(e,t)=>X(e,((e,o)=>D(t(e),o)),_),q=(e,t)=>X(e,((e,o)=>t(e)?D(e,o):o),_),K=(e,t)=>X(e,D,t),V=(e,t)=>K(e,W(t)),$=e=>X(e,((e,t)=>V(t,e)),_),J=(e,t)=>!G(e)&&(t(e.first)?e.first:J(e.rest,t)),Y=e=>G(e)?0:Y(e.rest)+1,Z=e=>(t,o)=>e(t)?t:o(t),Q=Z((e=>!1===e)),ee=Z((e=>e instanceof Error)),te=(e,t)=>Array.apply(null,Array(e)).map(((e,o)=>t(o))),oe=(e,t)=>t(e);var ne=H.qM;const{local:re}=ne,le={position:"absolute",top:"100%",left:0,width:"100%",listStyleType:"none",paddingLeft:0,margin:0,overflow:"hidden",boxSizing:"border-box",zIndex:1},ie={display:"inline-block",lineHeight:"initial",verticalAlign:"middle",width:"100%",boxSizing:"border-box"},ae=e=>"selection"in e&&"object"==typeof e.selection,se=e=>({...e,selection:void 0}),ce=(e,t)=>({...e,selection:t}),de=e=>({...e,options:e.selection}),pe=e=>e.options.value,ue=e=>v("li",{className:"dropdown-option"+(e.option.class?` ${e.option.class}`:""),style:{backgroundColor:e.selected?"blue":void 0,color:e.option.disabled?"lightgrey":void 0},"data-selected":e.selected,"data-disabled":e.option.disabled,"data-value":e.option.value,children:v("span",{className:"dropdown-option-label",style:ie,dangerouslySetInnerHTML:{__html:e.option.label}})}),fe=e=>ae(e)?v("ul",{className:"dropdown-options",style:le,children:[e.selection.left.map((e=>v(ue,{option:e}))),v(ue,{option:e.selection.value,selected:!0}),e.selection.right.map((e=>v(ue,{option:e})))]}):v("span",{}),me=e=>"disabled"in e.dataset,ye=e=>re(e.className.replace("dropdown-option","").trim(),(e=>""===e?void 0:e)),ge=e=>e instanceof HTMLElement?e.closest(".dropdown-option"):null,he=e=>Array.prototype.indexOf.call(e.parentElement.children,e),ve=e=>Array.prototype.slice.call(e.parentElement.children,0,he(e)),we=e=>Array.prototype.slice.call(e.parentElement.children,he(e)+1),be=e=>({value:e.dataset.value,label:e.querySelector(".dropdown-option-label").innerHTML,disabled:me(e),class:ye(e)}),xe={position:"relative",textAlign:"left",cursor:"pointer"},Se={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",boxSizing:"border-box"},Ae=e=>"focused"in e&&!0===e.focused,Ee=e=>"opened"in e&&"object"==typeof e.opened,ke=(e,t)=>Ee(e)&&e.opened===t?e:{...e,opened:t},Te=(e,t)=>e.options===t?e:{...e,options:t},Le=e=>Ae(e),Me=e=>Le(e)&&Ee(e),Ce=e=>{return t=e,{...t,focused:!0};var t},Oe=e=>ke(e,(e=>{return t={options:e},{...t,selection:t.options};var t})(e.options)),Pe=e=>{return t=Te(e,(e=>e.options)(e.opened)),{...t,opened:void 0};var t},Re=e=>ae(e.opened)?e:Pe(e),Ie=e=>v("div",{className:"dropdown-value",style:Se,children:Me(e)?pe(e.opened).label:e.options.value.label}),He=e=>v("div",{className:"dropdown"+(e.class?` ${e.class}`:"")+(Me(e)?" opened":""),tabIndex:0,style:xe,children:[v(Ie,{...e}),Me(e)?v(fe,{...e.opened}):v("span",{})]}),je=(e,t)=>Le(e)?e:Ce(e),Ne=(e,t)=>Le(e)?(e=>{return t=e,{...t,focused:void 0};var t})(Me(e)?Pe(e):e):e,Ue=(e,t)=>Ae(e)?Ee(e)?Re(ke(e,((e,t)=>ae(e)?re(ge(t.target),(t=>!t||me(t)?e:se(de(e)))):e)(e.opened,t))):Oe(e):Oe(Ce(e)),ze=(e,t)=>Me(e)&&(e=>e.target instanceof HTMLElement&&e.target.matches(".dropdown-options, .dropdown-options *"))(t)?ke(e,((e,t)=>ae(e)?re(ge(t.target),(t=>t instanceof HTMLElement&&he(t)!==(e=>e.selection.left.length)(e)&&!me(t)?ce(e,(e=>({left:ve(e).map(be),value:be(e),right:we(e).map(be)}))(t)):e)):e)(e.opened,t)):e,Fe=(e,t)=>Le(e)?Ee(e)?Re(ke(e,((e,t)=>ae(e)?t.altKey?["ArrowDown","ArrowUp"].includes(t.code)?se(e):e:["Escape","Enter"].includes(t.code)?se("Enter"===t.code?de(e):e):"ArrowDown"===t.code?de(ce(e,R(e.selection))):"ArrowUp"===t.code?de(ce(e,C(e.selection))):e:e)(e.opened,t))):((e,t)=>t.ctrlKey?e:t.altKey?["ArrowDown","ArrowUp"].includes(t.code)?Oe(e):e:["Enter","Space"].includes(t.code)?Oe(e):"ArrowDown"===t.code?Te(e,R(e.options)):"ArrowLeft"===t.code||"ArrowUp"===t.code?Te(e,C(e.options)):"ArrowRight"===t.code?Te(e,R(e.options)):e)(e,t):e,_e=e=>e.options.value;var De=t._W,Ge=t.zt,We=t.Af,Xe=t.uE,Be=t.lP,qe=t.Vk,Ke=t.XX;export{De as getValue,Ge as onBlur,We as onClick,Xe as onFocus,Be as onKeydown,qe as onMouseOver,Ke as render};