(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2227e2"],{cf9b:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-container",[o("b-row",[o("b-col",[o("b-form-select",{attrs:{options:e.options},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),o("b-col",[e._v(" "),o("b-button",{attrs:{variant:"primary"},on:{click:e.downloadReport}},[e._v("下載報告")])],1)],1),o("b-row",[o("b-col",[o("h1",[e._v(e._s(e.options[e.selected].text))])])],1)],1),o("b-img",{attrs:{src:e.options[e.selected].url,fluid:"",alt:"Responsive image"}})],1)},l=[],i=o("2b0e"),s=i["default"].extend({name:"decisionReport",data:function(){return{selected:0,options:[{value:0,text:"颱風版",url:"https://yliflood.yunlin.gov.tw/Warning/Typhoon.jpg"},{value:1,text:"豪雨版",url:"https://yliflood.yunlin.gov.tw/Warning/HeavyRain.jpg"}]}},methods:{downloadReport:function(){var e=document.createElement("a");e.href=this.options[this.selected].url,e.download="report.jpg",e.click()}}}),r=s,a=o("2877"),c=Object(a["a"])(r,n,l,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d2227e2.c90c81ba.js.map