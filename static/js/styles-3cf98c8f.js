import{$ as ue,af as se}from"./index-56b66478.js";import{r as de}from"./vue.runtime.esm-bundler-9181a583.js";var te={exports:{}};(function(ne,pe){(function(Q,I){ne.exports=I(de)})(se,function(Q){return function(){var I={789:function(d){d.exports=Q}},Y={};function k(d){var b=Y[d];if(b!==void 0)return b.exports;var h=Y[d]={exports:{}};return I[d](h,h.exports,k),h.exports}k.d=function(d,b){for(var h in b)k.o(b,h)&&!k.o(d,h)&&Object.defineProperty(d,h,{enumerable:!0,get:b[h]})},k.o=function(d,b){return Object.prototype.hasOwnProperty.call(d,b)},k.r=function(d){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})};var H={};return function(){function d(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function b(e,t){if(e){if(typeof e=="string")return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function h(e){return function(t){if(Array.isArray(t))return d(t)}(e)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||b(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}k.r(H),k.d(H,{default:function(){return ce}});var a=k(789),oe=(0,a.defineComponent)({props:{data:{required:!0,type:String},onClick:Function},render:function(){var e=this.data,t=this.onClick;return(0,a.createVNode)("span",{class:"vjs-tree-brackets",onClick:t},[e])}}),re=(0,a.defineComponent)({emits:["change","update:modelValue"],props:{checked:{type:Boolean,default:!1},isMultiple:Boolean,onChange:Function},setup:function(e,t){var n=t.emit;return{uiType:(0,a.computed)(function(){return e.isMultiple?"checkbox":"radio"}),model:(0,a.computed)({get:function(){return e.checked},set:function(l){return n("update:modelValue",l)}})}},render:function(){var e=this.uiType,t=this.model,n=this.$emit;return(0,a.createVNode)("label",{class:["vjs-check-controller",t?"is-checked":""],onClick:function(l){return l.stopPropagation()}},[(0,a.createVNode)("span",{class:"vjs-check-controller-inner is-".concat(e)},null),(0,a.createVNode)("input",{checked:t,class:"vjs-check-controller-original is-".concat(e),type:e,onChange:function(){return n("change",t)}},null)])}}),ae=(0,a.defineComponent)({props:{nodeType:{required:!0,type:String},onClick:Function},render:function(){var e=this.nodeType,t=this.onClick,n=e==="objectStart"||e==="arrayStart";return n||e==="objectCollapsed"||e==="arrayCollapsed"?(0,a.createVNode)("span",{class:"vjs-carets vjs-carets-".concat(n?"open":"close"),onClick:t},[(0,a.createVNode)("svg",{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"caret-down",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},[(0,a.createVNode)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"},null)])]):null}});function M(e){return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(e)}function z(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function V(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"root",n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,l=arguments.length>3?arguments[3]:void 0,p=l||{},v=p.key,s=p.index,j=p.type,g=j===void 0?"content":j,C=p.showComma,S=C!==void 0&&C,O=p.length,x=O===void 0?1:O,T=z(e);if(T==="array"){var D=J(e.map(function(m,o,r){return V(m,"".concat(t,"[").concat(o,"]"),n+1,{index:o,showComma:o!==r.length-1,length:x,type:g})}));return[V("[",t,n,{showComma:!1,key:v,length:e.length,type:"arrayStart"})[0]].concat(D,V("]",t,n,{showComma:S,length:e.length,type:"arrayEnd"})[0])}if(T==="object"){var P=Object.keys(e),B=J(P.map(function(m,o,r){return V(e[m],/^[a-zA-Z_]\w*$/.test(m)?"".concat(t,".").concat(m):"".concat(t,'["').concat(m,'"]'),n+1,{key:m,showComma:o!==r.length-1,length:x,type:g})}));return[V("{",t,n,{showComma:!1,key:v,index:s,length:P.length,type:"objectStart"})[0]].concat(B,V("}",t,n,{showComma:S,length:P.length,type:"objectEnd"})[0])}return[{content:e,level:n,key:v,index:s,path:t,showComma:S,length:x,type:g}]}function J(e){if(typeof Array.prototype.flat=="function")return e.flat();for(var t=h(e),n=[];t.length;){var l=t.shift();Array.isArray(l)?t.unshift.apply(t,h(l)):n.push(l)}return n}function K(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new WeakMap;if(e==null)return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if(M(e)!=="object")return e;if(t.get(e))return t.get(e);if(Array.isArray(e)){var n=e.map(function(v){return K(v,t)});return t.set(e,n),n}var l={};for(var p in e)l[p]=K(e[p],t);return t.set(e,l),l}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),n.push.apply(n,l)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?R(Object(n),!0).forEach(function(l){L(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}var W={showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},renderNodeKey:Function,renderNodeValue:Function,selectableType:String,showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},showLineNumber:{type:Boolean,default:!1},selectOnClickNode:{type:Boolean,default:!0},nodeSelectable:{type:Function,default:function(){return!0}},highlightSelectedNode:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},editableTrigger:{type:String,default:"click"},onNodeClick:{type:Function},onBracketsClick:{type:Function},onIconClick:{type:Function},onValueChange:{type:Function}},le=(0,a.defineComponent)({name:"TreeNode",props:_(_({},W),{},{node:{type:Object,required:!0},collapsed:Boolean,checked:Boolean,style:Object,onSelectedChange:{type:Function}}),emits:["nodeClick","bracketsClick","iconClick","selectedChange","valueChange"],setup:function(e,t){var n=t.emit,l=(0,a.computed)(function(){return z(e.node.content)}),p=(0,a.computed)(function(){return"vjs-value vjs-value-".concat(l.value)}),v=(0,a.computed)(function(){return e.showDoubleQuotes?'"'.concat(e.node.key,'"'):e.node.key}),s=(0,a.computed)(function(){return e.selectableType==="multiple"}),j=(0,a.computed)(function(){return e.selectableType==="single"}),g=(0,a.computed)(function(){return e.nodeSelectable(e.node)&&(s.value||j.value)}),C=(0,a.reactive)({editing:!1}),S=function(o){var r,c,i=(c=(r=o.target)===null||r===void 0?void 0:r.value)==="null"?null:c==="undefined"?void 0:c==="true"||c!=="false"&&(c[0]+c[c.length-1]==='""'||c[0]+c[c.length-1]==="''"?c.slice(1,-1):typeof Number(c)=="number"&&!isNaN(Number(c))||c==="NaN"?Number(c):c);n("valueChange",i,e.node.path)},O=(0,a.computed)(function(){var o,r=(o=e.node)===null||o===void 0?void 0:o.content;return r===null?r="null":r===void 0&&(r="undefined"),l.value==="string"?'"'.concat(r,'"'):r+""}),x=function(){var o=e.renderNodeValue;return o?o({node:e.node,defaultValue:O.value}):O.value},T=function(){n("bracketsClick",!e.collapsed,e.node.path)},D=function(){n("iconClick",!e.collapsed,e.node.path)},P=function(){n("selectedChange",e.node)},B=function(){n("nodeClick",e.node),g.value&&e.selectOnClickNode&&n("selectedChange",e.node)},m=function(o){if(e.editable&&!C.editing){C.editing=!0;var r=function c(i){var u;i.target!==o.target&&((u=i.target)===null||u===void 0?void 0:u.parentElement)!==o.target&&(C.editing=!1,document.removeEventListener("click",c))};document.removeEventListener("click",r),document.addEventListener("click",r)}};return function(){var o,r=e.node;return(0,a.createVNode)("div",{class:{"vjs-tree-node":!0,"has-selector":e.showSelectController,"has-carets":e.showIcon,"is-highlight":e.highlightSelectedNode&&e.checked},onClick:B,style:e.style},[e.showLineNumber&&(0,a.createVNode)("span",{class:"vjs-node-index"},[r.id+1]),e.showSelectController&&g.value&&r.type!=="objectEnd"&&r.type!=="arrayEnd"&&(0,a.createVNode)(re,{isMultiple:s.value,checked:e.checked,onChange:P},null),(0,a.createVNode)("div",{class:"vjs-indent"},[Array.from(Array(r.level)).map(function(c,i){return(0,a.createVNode)("div",{key:i,class:{"vjs-indent-unit":!0,"has-line":e.showLine}},null)}),e.showIcon&&(0,a.createVNode)(ae,{nodeType:r.type,onClick:D},null)]),r.key&&(0,a.createVNode)("span",{class:"vjs-key"},[(o=e.renderNodeKey,o?o({node:e.node,defaultKey:v.value||""}):v.value),(0,a.createVNode)("span",null,[(0,a.createTextVNode)(":")])]),(0,a.createVNode)("span",null,[r.type!=="content"&&r.content?(0,a.createVNode)(oe,{data:r.content.toString(),onClick:T},null):(0,a.createVNode)("span",{class:p.value,onClick:!e.editable||e.editableTrigger&&e.editableTrigger!=="click"?void 0:m,onDblclick:e.editable&&e.editableTrigger==="dblclick"?m:void 0},[e.editable&&C.editing?(0,a.createVNode)("input",{value:O.value,onChange:S,style:{padding:"3px 8px",border:"1px solid #eee",boxShadow:"none",boxSizing:"border-box",borderRadius:5,fontFamily:"inherit"}},null):x()]),r.showComma&&(0,a.createVNode)("span",null,[","]),e.showLength&&e.collapsed&&(0,a.createVNode)("span",{class:"vjs-comment"},[(0,a.createTextVNode)(" // "),r.length,(0,a.createTextVNode)(" items ")])])])}}});function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),n.push.apply(n,l)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?G(Object(n),!0).forEach(function(l){L(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}var ce=(0,a.defineComponent)({name:"Tree",props:y(y({},W),{},{data:{type:Object,default:null},deep:{type:Number,default:1/0},pathCollapsible:{type:Function,default:function(){return!1}},rootPath:{type:String,default:"root"},virtual:{type:Boolean,default:!1},height:{type:Number,default:400},itemHeight:{type:Number,default:20},selectedValue:{type:[String,Array],default:function(){return""}},collapsedOnClickBrackets:{type:Boolean,default:!0},style:Object,onSelectedChange:{type:Function}}),slots:["renderNodeKey","renderNodeValue"],emits:["nodeClick","bracketsClick","iconClick","selectedChange","update:selectedValue","update:data"],setup:function(e,t){var n=t.emit,l=t.slots,p=(0,a.ref)(),v=(0,a.computed)(function(){return V(e.data,e.rootPath)}),s=(0,a.reactive)({translateY:0,visibleData:null,hiddenPaths:v.value.reduce(function(o,r){var c,i=r.level>=e.deep,u=(c=e.pathCollapsible)===null||c===void 0?void 0:c.call(e,r);return r.type!=="objectStart"&&r.type!=="arrayStart"||!i&&!u?o:y(y({},o),{},L({},r.path,1))},{})}),j=(0,a.computed)(function(){for(var o=null,r=[],c=v.value.length,i=0;i<c;i++){var u=y(y({},v.value[i]),{},{id:i}),f=s.hiddenPaths[u.path];if(o&&o.path===u.path){var w=o.type==="objectStart",F=y(y(y({},u),o),{},{showComma:u.showComma,content:w?"{...}":"[...]",type:w?"objectCollapsed":"arrayCollapsed"});o=null,r.push(F)}else{if(f&&!o){o=u;continue}if(o)continue;r.push(u)}}return r}),g=(0,a.computed)(function(){var o=e.selectedValue;return o&&e.selectableType==="multiple"&&Array.isArray(o)?o:[o]}),C=(0,a.computed)(function(){return!e.selectableType||e.selectOnClickNode||e.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}),S=function(){var o=j.value;if(e.virtual){var r,c=e.height/e.itemHeight,i=((r=p.value)===null||r===void 0?void 0:r.scrollTop)||0,u=Math.floor(i/e.itemHeight),f=u<0?0:u+c>o.length?o.length-c:u;f<0&&(f=0);var w=f+c;s.translateY=f*e.itemHeight,s.visibleData=o.filter(function(F,E){return E>=f&&E<w})}else s.visibleData=o},O=function(){S()},x=function(o){var r,c,i=o.path,u=e.selectableType;if(u==="multiple"){var f=g.value.findIndex(function(N){return N===i}),w=h(g.value);f!==-1?w.splice(f,1):w.push(i),n("update:selectedValue",w),n("selectedChange",w,h(g.value))}else if(u==="single"&&g.value[0]!==i){var F=(r=g.value,c=1,function(N){if(Array.isArray(N))return N}(r)||function(N,U){var A=N==null?null:typeof Symbol<"u"&&N[Symbol.iterator]||N["@@iterator"];if(A!=null){var Z,X,$=[],q=!0,ee=!1;try{for(A=A.call(N);!(q=(Z=A.next()).done)&&($.push(Z.value),!U||$.length!==U);q=!0);}catch(ie){ee=!0,X=ie}finally{try{q||A.return==null||A.return()}finally{if(ee)throw X}}return $}}(r,c)||b(r,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())[0],E=i;n("update:selectedValue",E),n("selectedChange",E,F)}},T=function(o){n("nodeClick",o)},D=function(o,r){if(o)s.hiddenPaths=y(y({},s.hiddenPaths),{},L({},r,1));else{var c=y({},s.hiddenPaths);delete c[r],s.hiddenPaths=c}},P=function(o,r){e.collapsedOnClickBrackets&&D(o,r),n("bracketsClick",o)},B=function(o,r){D(o,r),n("iconClick",o)},m=function(o,r){var c=K(e.data),i=e.rootPath;new Function("data","val","data".concat(r.slice(i.length),"=val"))(c,o),n("update:data",c)};return(0,a.watchEffect)(function(){C.value&&function(o){throw new Error("[VueJSONPretty] ".concat(o))}(C.value)}),(0,a.watchEffect)(function(){j.value&&S()}),function(){var o,r,c=(o=e.renderNodeKey)!==null&&o!==void 0?o:l.renderNodeKey,i=(r=e.renderNodeValue)!==null&&r!==void 0?r:l.renderNodeValue,u=s.visibleData&&s.visibleData.map(function(f){return(0,a.createVNode)(le,{key:f.id,node:f,collapsed:!!s.hiddenPaths[f.path],showDoubleQuotes:e.showDoubleQuotes,showLength:e.showLength,checked:g.value.includes(f.path),selectableType:e.selectableType,showLine:e.showLine,showLineNumber:e.showLineNumber,showSelectController:e.showSelectController,selectOnClickNode:e.selectOnClickNode,nodeSelectable:e.nodeSelectable,highlightSelectedNode:e.highlightSelectedNode,editable:e.editable,editableTrigger:e.editableTrigger,showIcon:e.showIcon,renderNodeKey:c,renderNodeValue:i,onNodeClick:T,onBracketsClick:P,onIconClick:B,onSelectedChange:x,onValueChange:m,style:e.itemHeight&&e.itemHeight!==20?{lineHeight:"".concat(e.itemHeight,"px")}:{}},null)});return(0,a.createVNode)("div",{ref:p,class:{"vjs-tree":!0,"is-virtual":e.virtual},onScroll:e.virtual?O:void 0,style:e.showLineNumber?y({paddingLeft:"".concat(12*Number(v.value.length.toString().length),"px")},e.style):e.style},[e.virtual?(0,a.createVNode)("div",{class:"vjs-tree-list",style:{height:"".concat(e.height,"px")}},[(0,a.createVNode)("div",{class:"vjs-tree-list-holder",style:{height:"".concat(j.value.length*e.itemHeight,"px")}},[(0,a.createVNode)("div",{class:"vjs-tree-list-holder-inner",style:{transform:"translateY(".concat(s.translateY,"px)")}},[u])])]):u])}}})}(),H}()})})(te);const ye=ue(te.exports);export{ye as V};
