import{M as p}from"./more-2-fill-1db5715e.js";import{_ as v}from"./index-1d030a9b.js";const f={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-shop",viewBox:"0 0 16 16"},C=Vue.createElementVNode("path",{fill:"currentColor",d:"M8 1a2.5 2.5 0 0 0-2.5 2.5V5h-2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-2V3.5A2.5 2.5 0 0 0 8 1zm1.5 5v2h1V6H12v8H4V6h1.5v2h1V6h3zm0-1h-3V3.5a1.5 1.5 0 1 1 3 0V5z"},null,-1),k=[C];function x(e,t){return Vue.openBlock(),Vue.createElementBlock("svg",f,k)}const g={render:x},B={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-laptop",viewBox:"0 0 16 16"},w=Vue.createElementVNode("path",{fill:"currentColor",d:"M2.5 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-11zm0-1h11V4h-11v7zM15 13H1v1h14v-1z"},null,-1),N=[w];function $(e,t){return Vue.openBlock(),Vue.createElementBlock("svg",B,N)}const y={render:$},z={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-service",viewBox:"0 0 16 16"},E=Vue.createElementVNode("path",{fill:"currentColor",d:"M2.52 6.37a5.5 5.5 0 0 1 10.98.13v4c0 .05 0 .1-.02.15A4.5 4.5 0 0 1 9 14.7H8v-1h1a3.5 3.5 0 0 0 3.4-2.7h-1.9a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5h1.93a4.5 4.5 0 0 0-8.86 0H5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-4c0-.04 0-.09.02-.13zM12.5 7H11v3h1.5V7zm-9 0v3H5V7H3.5z"},null,-1),H=[E];function M(e,t){return Vue.openBlock(),Vue.createElementBlock("svg",z,H)}const b={render:M},I={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-calendar",viewBox:"0 0 16 16"},S=Vue.createElementVNode("path",{fill:"currentColor",d:"M10 3H6V1.5H5V3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2V1.5h-1V3zM5 5h1V4h4v1h1V4h2v2H3V4h2v1zM3 7h10v6H3V7z"},null,-1),D=[S];function A(e,t){return Vue.openBlock(),Vue.createElementBlock("svg",I,D)}const F={render:A},O={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-user-avatar",viewBox:"0 0 16 16"},T=Vue.createElementVNode("path",{fill:"currentColor",d:"M8 10.5c1.24 0 2.42.31 3.5.88v1.12h1v-1.14a.94.94 0 0 0-.49-.84 8.48 8.48 0 0 0-8.02 0 .94.94 0 0 0-.49.84v1.14h1v-1.12A7.47 7.47 0 0 1 8 10.5zM10.5 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"},null,-1),j=Vue.createElementVNode("path",{fill:"currentColor",d:"M2.5 1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11zm11 1v11h-11v-11h11z"},null,-1),L=[T,j];function R(e,t){return Vue.openBlock(),Vue.createElementBlock("svg",O,L)}const q={render:R},G={class:"list-card-item_detail bg-bg_color"},J={class:"list-card-item_detail--operation"},K={class:"list-card-item_detail--name text-text_color_primary"},P={class:"list-card-item_detail--desc text-text_color_regular"},Q=Vue.defineComponent({name:"ReCard"}),U=Vue.defineComponent({...Q,props:{product:{type:Object}},emits:["manage-product","delete-item"],setup(e,{emit:t}){const n=e,r=o=>{t("manage-product",o)},a=o=>{t("delete-item",o)},u=Vue.computed(()=>["list-card-item",{"list-card-item__disabled":!n.product.isSetup}]),d=Vue.computed(()=>["list-card-item_detail--logo",{"list-card-item_detail--logo__disabled":!n.product.isSetup}]);return(o,c)=>{const i=Vue.resolveComponent("el-tag"),s=Vue.resolveComponent("IconifyIconOffline"),l=Vue.resolveComponent("el-dropdown-item"),V=Vue.resolveComponent("el-dropdown-menu"),m=Vue.resolveComponent("el-dropdown"),h=Vue.resolveComponent("el-row");return Vue.openBlock(),Vue.createElementBlock("div",{class:Vue.normalizeClass(Vue.unref(u))},[Vue.createElementVNode("div",G,[Vue.createVNode(h,{justify:"space-between"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",{class:Vue.normalizeClass(Vue.unref(d))},[e.product.type===1?(Vue.openBlock(),Vue.createBlock(Vue.unref(g),{key:0})):Vue.createCommentVNode("",!0),e.product.type===2?(Vue.openBlock(),Vue.createBlock(Vue.unref(F),{key:1})):Vue.createCommentVNode("",!0),e.product.type===3?(Vue.openBlock(),Vue.createBlock(Vue.unref(b),{key:2})):Vue.createCommentVNode("",!0),e.product.type===4?(Vue.openBlock(),Vue.createBlock(Vue.unref(q),{key:3})):Vue.createCommentVNode("",!0),e.product.type===5?(Vue.openBlock(),Vue.createBlock(Vue.unref(y),{key:4})):Vue.createCommentVNode("",!0)],2),Vue.createElementVNode("div",J,[Vue.createVNode(i,{color:e.product.isSetup?"#00a870":"#eee",effect:"dark",class:"mx-1 list-card-item_detail--operation--tag"},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(e.product.isSetup?"\u5DF2\u542F\u7528":"\u5DF2\u505C\u7528"),1)]),_:1},8,["color"]),Vue.createVNode(m,{trigger:"click",disabled:!e.product.isSetup},{dropdown:Vue.withCtx(()=>[Vue.createVNode(V,{disabled:!e.product.isSetup},{default:Vue.withCtx(()=>[Vue.createVNode(l,{onClick:c[0]||(c[0]=_=>r(e.product))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" \u7BA1\u7406 ")]),_:1}),Vue.createVNode(l,{onClick:c[1]||(c[1]=_=>a(e.product))},{default:Vue.withCtx(()=>[Vue.createTextVNode(" \u5220\u9664 ")]),_:1})]),_:1},8,["disabled"])]),default:Vue.withCtx(()=>[Vue.createVNode(s,{icon:Vue.unref(p),class:"text-[24px]"},null,8,["icon"])]),_:1},8,["disabled"])])]),_:1}),Vue.createElementVNode("p",K,Vue.toDisplayString(e.product.name),1),Vue.createElementVNode("p",P,Vue.toDisplayString(e.product.description),1)])],2)}}});const Y=v(U,[["__scopeId","data-v-d061c9a2"]]);export{Y as default};
