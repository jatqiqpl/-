import{m,b as f,u as _,d as x,c as w,t as c}from"./index-1d030a9b.js";const h=Vue.defineComponent({name:"ReTreeLine",props:{node:{type:Object,required:!0},data:{type:Array,default:()=>{}},treeData:{type:Array,default:()=>[]},indent:{type:Number,default:16},showLabelLine:{type:Boolean,default:!0}},setup(d,u){const{slots:l}=u;return{getScopedSlot:t=>{if(!t)return null;const a=t.split("||");let e=null;for(let n=0;n<a.length;n++){const s=a[n];e=(l||{})[s]}return e},getSlotValue:(t,a,e=null)=>m(t)?t(a)||e:t||e}},render(){const d=this.getScopedSlot("default"),u=this.getScopedSlot("node-label"),l=this.getScopedSlot("after-node-label"),i=d?this.getSlotValue(d,{node:this.node,data:this.data}):[u?this.getSlotValue(u,{node:this.node,data:this.data}):Vue.h("span",{class:"element-tree-node-label"},this.node.label),this.showLabelLine?Vue.h("span",{class:"element-tree-node-label-line"}):null,this.getSlotValue(l,{node:this.node,data:this.data})],o=[];let t=this.node;for(;t;){let e=t.parent;if(t.level===1&&!t.parent){if(!this.treeData||!Array.isArray(this.treeData))throw Error("if you using el-tree-v2 (Virtualized Tree) of element-plus,element-tree-line required data.");e={children:Array.isArray(this.treeData)?this.treeData.map(n=>({...n,key:n.id})):[],level:0,key:"node-0",parent:null}}if(e){const n=(e.children||e.childNodes).findIndex(s=>(s.key||s.id)===(t.key||t.id));o.unshift(n===(e.children||e.childNodes).length-1)}t=e}const a=[];for(let e=0;e<this.node.level;e++)a.push(Vue.h("span",{class:{"element-tree-node-line-ver":!0,"last-node-line":o[e]&&this.node.level-1!==e,"last-node-isLeaf-line":o[e]&&this.node.level-1===e},style:{left:this.indent*e+"px"}}));return Vue.h("span",{class:"element-tree-node-label-wrapper"},[i].concat(a).concat([Vue.h("span",{class:"element-tree-node-line-hor",style:{width:(this.node.isLeaf?24:8)+"px",left:(this.node.level-1)*this.indent+"px"}})]))}}),C=Vue.createElementVNode("div",{class:"card-header"},[Vue.createElementVNode("span",{class:"font-medium"}," \u6269\u5C55elemenet-plus\u7684\u6811\u5F62\u7EC4\u4EF6\u5305\u62EC\u865A\u62DF\u6811\u7EC4\u4EF6\uFF0C\u652F\u6301\u8FDE\u63A5\u7EBF ")],-1),y=Vue.createElementVNode("div",{class:"card-header"},[Vue.createElementVNode("span",{class:"font-medium"}," \u666E\u901A\u6811\u7ED3\u6784 ")],-1),N={class:"max-h-[550px] overflow-y-auto"},v={class:"text-sm"},E=Vue.createElementVNode("div",{class:"card-header"},[Vue.createElementVNode("span",{class:"font-medium"}," \u865A\u62DF\u6811\u7ED3\u6784 ")],-1),S={class:"max-h-[550px] overflow-y-auto"},b={class:"text-sm"},g=Vue.defineComponent({name:"LineTree"}),L=Vue.defineComponent({...g,setup(d){const u=f(_().wholeMenus,!0),l=Vue.computed(()=>x(u)),i=w(l.value),o={value:"uniqueId",children:"children"};return(t,a)=>{const e=Vue.resolveComponent("el-tree"),n=Vue.resolveComponent("el-card"),s=Vue.resolveComponent("el-col"),V=Vue.resolveComponent("el-tree-v2"),p=Vue.resolveComponent("el-row");return Vue.openBlock(),Vue.createBlock(n,null,{header:Vue.withCtx(()=>[C]),default:Vue.withCtx(()=>[Vue.createVNode(p,{gutter:24},{default:Vue.withCtx(()=>[Vue.createVNode(s,{xs:24,sm:24,md:12,lg:12,xl:12,class:"mb-[20px]"},{default:Vue.withCtx(()=>[Vue.createVNode(n,null,{header:Vue.withCtx(()=>[y]),default:Vue.withCtx(()=>[Vue.createElementVNode("div",N,[Vue.createVNode(e,{data:Vue.unref(l),props:o,"show-checkbox":"","default-expand-all":"","node-key":"uniqueId",indent:30},{default:Vue.withCtx(({node:r})=>[Vue.createVNode(Vue.unref(h),{node:r,showLabelLine:!0},{"node-label":Vue.withCtx(()=>[Vue.createElementVNode("span",v,Vue.toDisplayString(Vue.unref(c)(r.data.meta.title)),1)]),_:2},1032,["node"])]),_:1},8,["data"])])]),_:1})]),_:1}),Vue.createVNode(s,{xs:24,sm:24,md:12,lg:12,xl:12},{default:Vue.withCtx(()=>[Vue.createVNode(n,null,{header:Vue.withCtx(()=>[E]),default:Vue.withCtx(()=>[Vue.createElementVNode("div",S,[Vue.createVNode(V,{data:Vue.unref(l),props:o,"show-checkbox":"",height:550,"default-expanded-keys":Vue.unref(i)},{default:Vue.withCtx(({node:r})=>[Vue.createVNode(Vue.unref(h),{node:r,treeData:Vue.unref(l),showLabelLine:!0,indent:30},{"node-label":Vue.withCtx(()=>[Vue.createElementVNode("span",b,Vue.toDisplayString(Vue.unref(c)(r.data.meta.title)),1)]),_:2},1032,["node","treeData"])]),_:1},8,["data","default-expanded-keys"])])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{L as default};
