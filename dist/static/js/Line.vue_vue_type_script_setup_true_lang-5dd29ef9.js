import{z as n,e as o}from"./index-1d030a9b.js";const u=Vue.defineComponent({__name:"Line",setup(s){const{isDark:t}=n(),r=Vue.computed(()=>t.value?"dark":"light"),e=Vue.ref(null),{setOptions:a}=o(e,{theme:r});return a({tooltip:{trigger:"item"},grid:{containLabel:!0,top:"10px",bottom:"0",left:"0",right:"0"},xAxis:{type:"category",axisLabel:{interval:0},data:["open_issues","forks","watchers","star"],triggerEvent:!0},yAxis:{type:"value",triggerEvent:!0},series:[{data:[1e3,1e4,2e4,66666],type:"line",areaStyle:{}}],addTooltip:!0},{name:"click",callback:i=>{}}),(i,l)=>(Vue.openBlock(),Vue.createElementBlock("div",{ref_key:"lineChartRef",ref:e,style:{width:"100%",height:"35vh"}},null,512))}});export{u as _};
