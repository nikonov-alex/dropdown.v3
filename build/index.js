var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{A:()=>rt});const n=Object.keys;function o(e){return"string"==typeof e}function r(e){return"number"==typeof e}function i(e){return"object"==typeof e?null!==e:a(e)}function a(e){return"function"==typeof e}function l(e,t){if(e)for(const o of n(e))t(e[o],o)}const d={animationIterationCount:0,borderImageOutset:0,borderImageSlice:0,borderImageWidth:0,boxFlex:0,boxFlexGroup:0,boxOrdinalGroup:0,columnCount:0,columns:0,flex:0,flexGrow:0,flexPositive:0,flexShrink:0,flexNegative:0,flexOrder:0,gridArea:0,gridRow:0,gridRowEnd:0,gridRowSpan:0,gridRowStart:0,gridColumn:0,gridColumnEnd:0,gridColumnSpan:0,gridColumnStart:0,fontWeight:0,lineClamp:0,lineHeight:0,opacity:0,order:0,orphans:0,tabSize:0,widows:0,zIndex:0,zoom:0,fillOpacity:0,floodOpacity:0,stopOpacity:0,strokeDasharray:0,strokeDashoffset:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0},s=["Webkit","ms","Moz","O"];n(d).forEach((e=>{s.forEach((t=>{d[function(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}(t,e)]=0}))}));const c=Symbol.for("jsx-dom:type");var u=function(e){return e.ShadowRoot="ShadowRoot",e}(u||{});const f="http://www.w3.org/1999/xlink",p="http://www.w3.org/XML/1998/namespace";function m(e){return!("boolean"==typeof e||null==e)}function v(e){return Array.isArray(e)?e.map(v).filter(Boolean).join(" "):i(e)?Symbol.iterator in e?v(Array.from(e)):n(e).filter((t=>e[t])).join(" "):m(e)?""+e:""}const h={animate:0,circle:0,clipPath:0,defs:0,desc:0,ellipse:0,feBlend:0,feColorMatrix:0,feComponentTransfer:0,feComposite:0,feConvolveMatrix:0,feDiffuseLighting:0,feDisplacementMap:0,feDistantLight:0,feFlood:0,feFuncA:0,feFuncB:0,feFuncG:0,feFuncR:0,feGaussianBlur:0,feImage:0,feMerge:0,feMergeNode:0,feMorphology:0,feOffset:0,fePointLight:0,feSpecularLighting:0,feSpotLight:0,feTile:0,feTurbulence:0,filter:0,foreignObject:0,g:0,image:0,line:0,linearGradient:0,marker:0,mask:0,metadata:0,path:0,pattern:0,polygon:0,polyline:0,radialGradient:0,rect:0,stop:0,svg:0,switch:0,symbol:0,text:0,textPath:0,tspan:0,use:0,view:0},b=/^(a(ll|t|u)|base[FP]|c(al|lipPathU|on)|di|ed|ex|filter[RU]|g(lyphR|r)|ke|l(en|im)|ma(rker[HUW]|s)|n|pat|pr|point[^e]|re[^n]|s[puy]|st[^or]|ta|textL|vi|xC|y|z)/;function g(e,t){let r,{children:l,...d}=t;if(d.namespaceURI||0!==h[e]||(d={...d,namespaceURI:"http://www.w3.org/2000/svg"}),o(e)){if(r=d.namespaceURI?document.createElementNS(d.namespaceURI,e):document.createElement(e),function(e,t){for(const o of n(e))E(o,e[o],t)}(d,r),w(l,r),r instanceof window.HTMLSelectElement&&null!=d.value)if(!0===d.multiple&&Array.isArray(d.value)){const e=d.value.map((e=>String(e)));r.querySelectorAll("option").forEach((t=>t.selected=e.includes(t.value)))}else r.value=d.value;y(d.ref,r)}else{if(!a(e))throw new TypeError(`Invalid JSX element type: ${e}`);i(e.defaultProps)&&(d={...e.defaultProps,...d}),r=function(e){const{prototype:t}=e;return!(!t||!t.isReactComponent)}(e)?function(e,t,n){const o=new e(t={...t,children:n}),r=o.render();return"ref"in t&&y(t.ref,o),r}(e,d,l):e({...d,children:l})}return r}function y(e,t){var n;i(n=e)&&"current"in n?e.current=t:a(e)&&e(t)}function w(e,t){if(i(l=e)&&"number"==typeof l.length&&"number"!=typeof l.nodeType)!function(e,t){for(const n of[...e])w(n,t)}(e,t);else if(o(e)||r(e))A(document.createTextNode(e),t);else if(null===e)A(document.createComment(""),t);else if((a=e)&&"number"==typeof a.nodeType)A(e,t);else if(null!=(n=e)&&n[c]===u.ShadowRoot){const n=t.attachShadow(e.attr);w(e.children,n),y(e.ref,n)}var n,a,l}function A(e,t){t instanceof window.HTMLTemplateElement?t.content.appendChild(e):t.appendChild(e)}function x(e,t){return e.replace(/[A-Z]/g,(e=>t+e.toLowerCase()))}function N(e,t){null==t||!1===t||(Array.isArray(t)?t.forEach((t=>N(e,t))):o(t)?e.setAttribute("style",t):i(t)&&l(t,((t,n)=>{0===n.indexOf("-")?e.style.setProperty(n,t):r(t)&&0!==d[n]?e.style[n]=t+"px":e.style[n]=t})))}function E(e,t,n){switch(e){case"xlinkActuate":case"xlinkArcrole":case"xlinkHref":case"xlinkRole":case"xlinkShow":case"xlinkTitle":case"xlinkType":return void T(n,f,x(e,":"),t);case"xmlnsXlink":return void S(n,x(e,":"),t);case"xmlBase":case"xmlLang":case"xmlSpace":return void T(n,p,x(e,":"),t)}switch(e){case"htmlFor":return void S(n,"for",t);case"dataset":return void l(t,((e,t)=>{null!=e&&(n.dataset[t]=e)}));case"innerHTML":case"innerText":case"textContent":return void(m(t)&&(n[e]=t));case"dangerouslySetInnerHTML":return void(i(t)&&(n.innerHTML=t.__html));case"value":if(null==t||n instanceof window.HTMLSelectElement)return;if(n instanceof window.HTMLTextAreaElement)return void(n.value=t);break;case"spellCheck":return void(n.spellcheck=t);case"class":case"className":return void(a(t)?t(n):S(n,"class",v(t)));case"ref":case"namespaceURI":return;case"style":return void N(n,t);case"on":case"onCapture":return void l(t,((t,o)=>{n.addEventListener(o,t,"onCapture"===e)}))}if(a(t)){if("o"===e[0]&&"n"===e[1]){let o=e.toLowerCase();const r=o.endsWith("capture");if("ondoubleclick"===o?o="ondblclick":r&&"ondoubleclickcapture"===o&&(o="ondblclickcapture"),r||null!==n[o])if(r)n.addEventListener(o.substring(2,o.length-7),t,!0);else{let r;r=o in window?o.substring(2):o[2]+e.slice(3),n.addEventListener(r,t)}else n[o]=t}}else i(t)?n[e]=t:!0===t?S(n,e,""):!1!==t&&null!=t&&(n instanceof SVGElement&&!b.test(e)?S(n,x(e,"-"),t):S(n,e,t))}function S(e,t,n){e.setAttribute(t,n)}function T(e,t,n,o){e.setAttributeNS(t,n,o)}var C,O={d:(e,t)=>{for(var n in t)O.o(t,n)&&!O.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},L={};O.d(L,{A:()=>F});var k="undefined"==typeof document?void 0:document,M=!!k&&"content"in k.createElement("template"),R=!!k&&k.createRange&&"createContextualFragment"in k.createRange();function U(e,t){var n,o,r=e.nodeName,i=t.nodeName;return r===i||(n=r.charCodeAt(0),o=i.charCodeAt(0),n<=90&&o>=97?r===i.toUpperCase():o<=90&&n>=97&&i===r.toUpperCase())}function I(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var P={OPTION:function(e,t){var n=e.parentNode;if(n){var o=n.nodeName.toUpperCase();"OPTGROUP"===o&&(o=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==o||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}I(e,t,"selected")},INPUT:function(e,t){I(e,t,"checked"),I(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var o=e.firstChild;if(o){var r=o.nodeValue;if(r==n||!n&&r==e.placeholder)return;o.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,o,r=-1,i=0,a=e.firstChild;a;)if("OPTGROUP"===(o=a.nodeName&&a.nodeName.toUpperCase()))a=(n=a).firstChild;else{if("OPTION"===o){if(a.hasAttribute("selected")){r=i;break}i++}!(a=a.nextSibling)&&n&&(a=n.nextSibling,n=null)}e.selectedIndex=r}}};function H(){}function j(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}const D=function(e,t,n){if(n||(n={}),"string"==typeof t)if("#document"===e.nodeName||"HTML"===e.nodeName||"BODY"===e.nodeName){var o=t;(t=k.createElement("html")).innerHTML=o}else r=(r=t).trim(),t=M?function(e){var t=k.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}(r):R?function(e){return C||(C=k.createRange()).selectNode(k.body),C.createContextualFragment(e).childNodes[0]}(r):function(e){var t=k.createElement("body");return t.innerHTML=e,t.childNodes[0]}(r);else 11===t.nodeType&&(t=t.firstElementChild);var r,i=n.getNodeKey||j,a=n.onBeforeNodeAdded||H,l=n.onNodeAdded||H,d=n.onBeforeElUpdated||H,s=n.onElUpdated||H,c=n.onBeforeNodeDiscarded||H,u=n.onNodeDiscarded||H,f=n.onBeforeElChildrenUpdated||H,p=n.skipFromChildren||H,m=n.addChild||function(e,t){return e.appendChild(t)},v=!0===n.childrenOnly,h=Object.create(null),b=[];function g(e){b.push(e)}function y(e,t){if(1===e.nodeType)for(var n=e.firstChild;n;){var o=void 0;t&&(o=i(n))?g(o):(u(n),n.firstChild&&y(n,t)),n=n.nextSibling}}function w(e,t,n){!1!==c(e)&&(t&&t.removeChild(e),u(e),y(e,n))}function A(e){if(1===e.nodeType||11===e.nodeType)for(var t=e.firstChild;t;){var n=i(t);n&&(h[n]=t),A(t),t=t.nextSibling}}function x(e){l(e);for(var t=e.firstChild;t;){var n=t.nextSibling,o=i(t);if(o){var r=h[o];r&&U(t,r)?(t.parentNode.replaceChild(r,t),N(r,t)):x(t)}else x(t);t=n}}function N(e,t,n){var o=i(t);if(o&&delete h[o],!n){var r=d(e,t);if(!1===r)return;if(r instanceof HTMLElement&&A(e=r),function(e,t){var n,o,r,i,a=t.attributes;if(11!==t.nodeType&&11!==e.nodeType){for(var l=a.length-1;l>=0;l--)o=(n=a[l]).name,r=n.namespaceURI,i=n.value,r?(o=n.localName||o,e.getAttributeNS(r,o)!==i&&("xmlns"===n.prefix&&(o=n.name),e.setAttributeNS(r,o,i))):e.getAttribute(o)!==i&&e.setAttribute(o,i);for(var d=e.attributes,s=d.length-1;s>=0;s--)o=(n=d[s]).name,(r=n.namespaceURI)?(o=n.localName||o,t.hasAttributeNS(r,o)||e.removeAttributeNS(r,o)):t.hasAttribute(o)||e.removeAttribute(o)}}(e,t),s(e),!1===f(e,t))return}"TEXTAREA"!==e.nodeName?function(e,t){var n,o,r,l,d,s=p(e,t),c=t.firstChild,u=e.firstChild;e:for(;c;){for(l=c.nextSibling,n=i(c);!s&&u;){if(r=u.nextSibling,c.isSameNode&&c.isSameNode(u)){c=l,u=r;continue e}o=i(u);var f=u.nodeType,v=void 0;if(f===c.nodeType&&(1===f?(n?n!==o&&((d=h[n])?r===d?v=!1:(e.insertBefore(d,u),o?g(o):w(u,e,!0),o=i(u=d)):v=!1):o&&(v=!1),(v=!1!==v&&U(u,c))&&N(u,c)):3!==f&&8!=f||(v=!0,u.nodeValue!==c.nodeValue&&(u.nodeValue=c.nodeValue))),v){c=l,u=r;continue e}o?g(o):w(u,e,!0),u=r}if(n&&(d=h[n])&&U(d,c))s||m(e,d),N(d,c);else{var b=a(c);!1!==b&&(b&&(c=b),c.actualize&&(c=c.actualize(e.ownerDocument||k)),m(e,c),x(c))}c=l,u=r}!function(e,t,n){for(;t;){var o=t.nextSibling;(n=i(t))?g(n):w(t,e,!0),t=o}}(e,u,o);var y=P[e.nodeName];y&&y(e,t)}(e,t):P.TEXTAREA(e,t)}A(e);var E,S,T=e,O=T.nodeType,L=t.nodeType;if(!v)if(1===O)1===L?U(e,t)||(u(e),T=function(e,t){for(var n=e.firstChild;n;){var o=n.nextSibling;t.appendChild(n),n=o}return t}(e,(E=t.nodeName,(S=t.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==S?k.createElementNS(S,E):k.createElement(E)))):T=t;else if(3===O||8===O){if(L===O)return T.nodeValue!==t.nodeValue&&(T.nodeValue=t.nodeValue),T;T=t}if(T===t)u(e);else{if(t.isSameNode&&t.isSameNode(T))return;if(N(T,t,v),b)for(var I=0,D=b.length;I<D;I++){var z=h[b[I]];z&&w(z,z.parentNode,!1)}}return!v&&T!==e&&e.parentNode&&(T.actualize&&(T=T.actualize(e.ownerDocument||k)),e.parentNode.replaceChild(T,e)),T},z=e=>"function"!=typeof e,F=function(e){let t=e.initialState;const n=document.createElement("div");e.id&&(n.id=e.id),e.className&&(n.className=e.className);let o=e.render(t);n.appendChild(o);let r=!1;if(e.events){function i(i){const a=e.events[i.type];z(a)||(["submit"].includes(i.type)&&i.preventDefault(),i.stopImmediatePropagation());const l=(e=>z(e)?e.handler:e)(a);!function(i){if(t===i)return;const a=t;t=i,r||(setTimeout((()=>{!function(){const n=e.render(t);o.isEqualNode(n)||(e.redraw&&"refresh"===e.redraw||o.nodeName!==n.nodeName?(o.replaceWith(n),o=n):D(o,n,{onBeforeElUpdated:(e,t)=>!e.isEqualNode(t)}))}(),r=!1}),0),r=!0),function(o){if(e.emit)for(const r of e.emit)r.when(o,t)&&("window"===r.target?window:n).dispatchEvent(r.emit(t))}(a)}(l(t,i))}Object.entries(e.events).forEach((([e,t])=>{(z(t)?"window"===t.target?window:document:n).addEventListener(e,i,!0)}))}return n};var B=L.A;const V=e=>({left:e.left.slice(0,-1),value:e.left[e.left.length-1],right:[e.value].concat(e.right)}),G=(e,t)=>0===e.left.length?t:e.left[e.left.length-1].disabled?G(V(e),t):V(e),_=e=>G(e,e),W=e=>({left:e.left.concat(e.value),value:e.right[0],right:e.right.slice(1)}),q=(e,t)=>0===e.right.length?t:e.right[0].disabled?q(W(e),t):W(e),X=e=>q(e,e);var K={d:(e,t)=>{for(var n in t)K.o(t,n)&&!K.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},Y={};K.d(Y,{qM:()=>ee,E1:()=>Q,_u:()=>$,_w:()=>J,Er:()=>Z});var $={};K.r($),K.d($,{EMPTY_LIST:()=>te,concat:()=>de,cons:()=>ne,count:()=>fe,filter:()=>le,find:()=>ue,fold:()=>ie,isEmpty:()=>oe,list:()=>re,map:()=>ae,prepend:()=>se,reverse:()=>ce});var J={};K.r(J),K.d(J,{apply:()=>pe,ifNotError:()=>ve,ifNotFalse:()=>me});var Z={};K.r(Z);var Q={};K.r(Q),K.d(Q,{array:()=>he});var ee={};K.r(ee),K.d(ee,{local:()=>be});const te=null,ne=(e,t)=>({first:e,rest:t}),oe=e=>te===e,re=(...e)=>e.reduce(((e,t)=>ne(t,e)),te),ie=(e,t,n)=>oe(e)?n:t(e.first,ie(e.rest,t,n)),ae=(e,t)=>ie(e,((e,n)=>ne(t(e),n)),te),le=(e,t)=>ie(e,((e,n)=>t(e)?ne(e,n):n),te),de=(e,t)=>ie(e,ne,t),se=(e,t)=>de(e,re(t)),ce=e=>ie(e,((e,t)=>se(t,e)),te),ue=(e,t)=>!oe(e)&&(t(e.first)?e.first:ue(e.rest,t)),fe=e=>oe(e)?0:fe(e.rest)+1,pe=e=>(t,n)=>e(t)?t:n(t),me=pe((e=>!1===e)),ve=pe((e=>e instanceof Error)),he=(e,t)=>Array.apply(null,Array(e)).map(((e,n)=>t(n))),be=(e,t)=>t(e);var ge=Y.qM;const{local:ye}=ge,we={position:"absolute",top:"100%",left:0,width:"100%",listStyleType:"none",paddingLeft:0,margin:0,overflow:"hidden",boxSizing:"border-box",zIndex:1},Ae={display:"inline-block",lineHeight:"initial",verticalAlign:"middle",width:"100%",boxSizing:"border-box"},xe=e=>"selection"in e&&"object"==typeof e.selection,Ne=e=>({...e,selection:void 0}),Ee=(e,t)=>({...e,selection:t}),Se=e=>({...e,options:e.selection}),Te=e=>e.options.value,Ce=e=>g("li",{className:"dropdown-option"+(e.option.class?` ${e.option.class}`:""),style:{backgroundColor:e.selected?"blue":void 0,color:e.option.disabled?"lightgrey":void 0},"data-selected":e.selected,"data-disabled":e.option.disabled,"data-value":e.option.value,children:g("span",{className:"dropdown-option-label",style:Ae,dangerouslySetInnerHTML:{__html:e.option.label}})}),Oe=e=>xe(e)?g("ul",{className:"dropdown-options",style:we,children:[e.selection.left.map((e=>g(Ce,{option:e}))),g(Ce,{option:e.selection.value,selected:!0}),e.selection.right.map((e=>g(Ce,{option:e})))]}):g("span",{}),Le=e=>"disabled"in e.dataset,ke=e=>ye(e.className.replace("dropdown-option","").trim(),(e=>""===e?void 0:e)),Me=e=>e instanceof HTMLElement?e.closest(".dropdown-option"):null,Re=e=>Array.prototype.indexOf.call(e.parentElement.children,e),Ue=e=>Array.prototype.slice.call(e.parentElement.children,0,Re(e)),Ie=e=>Array.prototype.slice.call(e.parentElement.children,Re(e)+1),Pe=e=>({value:e.dataset.value,label:e.querySelector(".dropdown-option-label").innerHTML,disabled:Le(e),class:ke(e)}),He={position:"relative",textAlign:"left",cursor:"pointer"},je={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:"100%",boxSizing:"border-box"},De=e=>"focused"in e&&!0===e.focused,ze=e=>"opened"in e&&"object"==typeof e.opened,Fe=(e,t)=>ze(e)&&e.opened===t?e:{...e,opened:t},Be=(e,t)=>e.options===t?e:{...e,options:t},Ve=e=>De(e),Ge=e=>Ve(e)&&ze(e),_e=e=>{return t=e,{...t,focused:!0};var t},We=e=>Fe(e,(e=>{return t={options:e},{...t,selection:t.options};var t})(e.options)),qe=e=>{return t=Be(e,(e=>e.options)(e.opened)),{...t,opened:void 0};var t},Xe=e=>xe(e.opened)?e:qe(e),Ke=e=>g("div",{className:"dropdown-value",style:je,children:Ge(e)?Te(e.opened).label:e.options.value.label}),Ye=e=>g("div",{className:"dropdown"+(Ge(e)?" opened":""),tabIndex:0,style:He,children:[g(Ke,{...e}),Ge(e)?g(Oe,{...e.opened}):g("span",{})]}),$e=(e,t)=>Ve(e)?e:_e(e),Je=(e,t)=>Ve(e)?(e=>{return t=e,{...t,focused:void 0};var t})(Ge(e)?qe(e):e):e,Ze=(e,t)=>De(e)?ze(e)?Xe(Fe(e,((e,t)=>xe(e)?ye(Me(t.target),(t=>!t||Le(t)?e:Ne(Se(e)))):e)(e.opened,t))):We(e):We(_e(e)),Qe=(e,t)=>Ge(e)&&(e=>e.target instanceof HTMLElement&&e.target.matches(".dropdown-options, .dropdown-options *"))(t)?Fe(e,((e,t)=>xe(e)?ye(Me(t.target),(t=>t instanceof HTMLElement&&Re(t)!==(e=>e.selection.left.length)(e)&&!Le(t)?Ee(e,(e=>({left:Ue(e).map(Pe),value:Pe(e),right:Ie(e).map(Pe)}))(t)):e)):e)(e.opened,t)):e,et=(e,t)=>Ve(e)?ze(e)?Xe(Fe(e,((e,t)=>xe(e)?t.altKey?["ArrowDown","ArrowUp"].includes(t.code)?Ne(e):e:["Escape","Enter"].includes(t.code)?Ne("Enter"===t.code?Se(e):e):"ArrowDown"===t.code?Se(Ee(e,X(e.selection))):"ArrowUp"===t.code?Se(Ee(e,_(e.selection))):e:e)(e.opened,t))):((e,t)=>t.ctrlKey?e:t.altKey?["ArrowDown","ArrowUp"].includes(t.code)?We(e):e:["Enter","Space"].includes(t.code)?We(e):"ArrowDown"===t.code?Be(e,X(e.options)):"ArrowLeft"===t.code||"ArrowUp"===t.code?Be(e,_(e.options)):"ArrowRight"===t.code?Be(e,X(e.options)):e)(e,t):e,tt=e=>e.options.value,nt=(e,t)=>!Ge(t)&&tt(e)!==tt(t),ot=e=>new CustomEvent("change",{detail:tt(e),bubbles:!0}),rt=e=>B({initialState:{options:e.options},render:Ye,events:{focus:$e,blur:Je,click:Ze,mouseover:Qe,keydown:et},emit:[{when:nt,emit:ot}],id:e.id,className:e.className});var it=t.A;export{it as default};