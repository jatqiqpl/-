import{d as i,z as o,s as n,r as c,t as l,c as p,j as u}from"./index-56b66478.js";const m=i({__name:"Bar",setup(h){const{isDark:t}=o(),a=n(()=>t.value?"dark":"light"),e=c(null),{setOptions:r}=l(e,{theme:a});return r({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{containLabel:!0,top:"10px",bottom:"0",left:"0",right:"0"},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},axisLabel:{interval:0},data:["open_issues","forks","watchers","star"],triggerEvent:!0}],yAxis:[{type:"value",triggerEvent:!0}],series:[{name:"GitHub\u4FE1\u606F",type:"bar",data:[1e3,1e4,2e4,66666]}],addTooltip:!0},{name:"click",callback:s=>{}}),(s,d)=>(p(),u("div",{ref_key:"barChartRef",ref:e,style:{width:"100%",height:"35vh"}},null,512))}});export{m as _};
