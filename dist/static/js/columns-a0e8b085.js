import{P as b}from"./print-0dbbb737.js";import{b as d}from"./data-cc5c031c.js";import{b as c}from"./index-1d030a9b.js";function m(e){const a=Vue.ref(c(d,!0)),t=[{label:"ID",prop:"id"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}],o=()=>{b(e.value.getTableDoms().tableWrapper).toPrint};function n({column:{property:r},rowIndex:f}){if(r==="id")return f<3?{background:"#87baf9"}:{background:"#87e8de"}}function l({columnIndex:r}){return r===0?{background:"#f3b2d0"}:{background:"#fafafa"}}function u({rowIndex:r}){return r%2===1?{background:"#ffa39e"}:{background:"#91d5ff"}}return{columns:t,dataList:a,print:o,rowStyle:u,cellStyle:n,headerCellStyle:l}}export{m as useColumns};
