(function(t){function e(e){for(var a,i,r=e[0],s=e[1],u=e[2],c=0,d=[];c<r.length;c++)i=r[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);m&&m(e);while(d.length)d.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],a=!0,i=1;i<n.length;i++){var r=n[i];0!==o[r]&&(a=!1)}a&&(l.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o={app:0},l=[];function r(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"da72af6c","chunk-098f440f":"77889d7c","chunk-2d0e2010":"18fd7e2d","chunk-2d0e636c":"17e0418d","chunk-2d215cdc":"4b0d7673","chunk-2d21af92":"9ad10dcf","chunk-2d229ba7":"2a1b4eec","chunk-31c3224a":"7a9873a0","chunk-32974746":"dceb34cb","chunk-374ee108":"94b2478f","chunk-3ddfc656":"74b144f9","chunk-446ee83c":"78e61676","chunk-5a4ea8f8":"b5aeac7d","chunk-344927ef":"640d778f","chunk-563fc650":"a4b2ac95","chunk-f473a17a":"e267343f","chunk-67a1a988":"3b33e1db","chunk-7b5a1732":"b83ab53b","chunk-e5ee3182":"c911718b","chunk-fb28f522":"7e749d51"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-5a4ea8f8":1,"chunk-563fc650":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-098f440f":"31d6cfe0","chunk-2d0e2010":"31d6cfe0","chunk-2d0e636c":"31d6cfe0","chunk-2d215cdc":"31d6cfe0","chunk-2d21af92":"31d6cfe0","chunk-2d229ba7":"31d6cfe0","chunk-31c3224a":"31d6cfe0","chunk-32974746":"31d6cfe0","chunk-374ee108":"31d6cfe0","chunk-3ddfc656":"31d6cfe0","chunk-446ee83c":"31d6cfe0","chunk-5a4ea8f8":"f535c01d","chunk-344927ef":"31d6cfe0","chunk-563fc650":"1c9c3736","chunk-f473a17a":"31d6cfe0","chunk-67a1a988":"31d6cfe0","chunk-7b5a1732":"31d6cfe0","chunk-e5ee3182":"31d6cfe0","chunk-fb28f522":"31d6cfe0"}[t]+".css",o=s.p+a,l=document.getElementsByTagName("link"),r=0;r<l.length;r++){var u=l[r],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===a||c===o))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],c=u.getAttribute("data-href");if(c===a||c===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||o,l=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=a,delete i[t],m.parentNode.removeChild(m),n(l)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var l=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=l);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(t);var d=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(m);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}o[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/ylfs_demo/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var m=c;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"3edd":function(t,e,n){"use strict";var a=n("c598"),i=n.n(a);i.a},7605:function(t,e,n){"use strict";var a=n("ffd4"),i=n.n(a);i.a},"85ec":function(t,e,n){},c598:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var a=n("2b0e"),i=n("5f5b");n("ab8b"),n("2dd8");a["default"].use(i["a"]);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"OMap"}}),a("div",{attrs:{id:"logo"}},[a("b-img",{attrs:{src:n("cf05"),width:"350px",height:"83px"}})],1),a("div",{staticClass:"rounded shadow",attrs:{id:"mymenu"}},[a("my-menu")],1),a("div",{attrs:{id:"layer"}},[a("font-awesome-icon",{attrs:{icon:"layer-group",size:"4x"},on:{click:t.logout}})],1),t._m(0)])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"version"}},[n("strong",[t._v("ver. 0.1.1127")])])}],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border",attrs:{id:"menuarea"}},[n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{colclass:"col_item"}},[n("b-button",{staticClass:"h-100",attrs:{block:"",variant:"outline-primary"},on:{click:function(e){return t.setSubMenu(0)}}},[t._v("天氣概況")])],1),n("b-col",{staticClass:"col_item"},[n("b-button",{staticClass:"h-100",attrs:{block:"",variant:"outline-primary"},on:{click:function(e){return t.setSubMenu(1)}}},[t._v("雨量")])],1),n("b-col",{staticClass:"col_item"},[n("b-button",{staticClass:"h-100",attrs:{block:"",variant:"outline-primary"},on:{click:function(e){return t.setSubMenu(2)}}},[t._v("水位")])],1)],1),n("b-row",[n("b-col",{staticClass:"col_item"},[n("b-button",{staticClass:"h-100",attrs:{block:"",variant:"outline-primary"},on:{click:function(e){return t.setSubMenu(3)}}},[t._v("淹水感測器")])],1),n("b-col",{staticClass:"col_item"},[n("b-button",{staticClass:"h-100",attrs:{block:"",variant:"outline-primary"},on:{click:function(e){return t.setSubMenu(4)}}},[t._v("即時監控")])],1),n("b-col",{staticClass:"col_item"},[n("b-button",{staticClass:"h-100",attrs:{block:"",variant:"outline-primary"},on:{click:function(e){return t.setSubMenu(5)}}},[t._v("防汛工具")])],1)],1),n("b-row",[n("b-col",{staticClass:"col_item"},[n("b-button",{staticClass:"h-100",attrs:{block:"",variant:"outline-primary"},on:{click:function(e){return t.setSubMenu(6)}}},[t._v("歷史資料")])],1),n("b-col",{staticClass:"col_item"},[n("b-button",{staticClass:"h-100",attrs:{block:"",variant:"outline-primary"},on:{click:function(e){return t.setSubMenu(7)}}},[t._v("相關連結")])],1),n("b-col",{staticClass:"col_item"},[n("b-button",{staticClass:"h-100",attrs:{block:"",variant:"outline-primary"},on:{click:function(e){return t.setSubMenu(8)}}},[t._v("系統管理")])],1)],1),t.hasB1Menu?n("div",[n("b-row",[n("b-col",[n("hr")])],1),n("b-row",t._l(t.b1Menu,(function(e,a){return n("b-col",{key:a,staticClass:"col_item",attrs:{cols:6}},[n("b-button",{staticClass:"h-100",attrs:{block:"",variant:"outline-primary"},on:{click:function(n){return t.onB1ItemClick(e)}}},[!0===e.state?n("font-awesome-icon",{attrs:{icon:"check-square",size:"lg"}}):t._e(),!1===e.state?n("font-awesome-icon",{attrs:{far:"",icon:"square",size:"lg"}}):t._e(),void 0===e.state?n("font-awesome-icon",{attrs:{icon:"search-plus",size:"lg"}}):t._e(),t._v(" "+t._s(e.title)+" "),e.download_url?n("font-awesome-icon",{staticClass:"float-right border",attrs:{icon:"download",size:"lg"},on:{click:function(n){return n.stopPropagation(),t.openLink(e.download_url)}}}):t._e()],1)],1)})),1)],1):t._e(),n("b-row",[n("b-col",[n("hr")])],1),t.hasB2Menu?n("b-row",[n("b-col",[n("b-list-group",{staticClass:"menuItem",attrs:{flush:""}},t._l(t.b2Menu,(function(e,a){return n("menu-list",{key:a,attrs:{item:e},on:{showPage:t.onShowPage}})})),1)],1)],1):t._e()],1),n("b-modal",{attrs:{id:"pageModal",size:"xl",title:t.pageTitle,scrollable:"",centered:"","hide-footer":!0}},[n("router-view")],1)],1)},s=[],u=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-list-group-item",{attrs:{button:!0}},[t.isFolder?n("div",{on:{click:function(e){return e.stopPropagation(),t.toggle(e)}}},[t.isOpen?t._e():n("font-awesome-icon",{attrs:{icon:"angle-right",size:"lg"}}),t.isOpen?n("font-awesome-icon",{attrs:{icon:"angle-down",size:"lg"}}):t._e(),t._v(" "+t._s(t.item.title)+" "),t.item.download_url?n("font-awesome-icon",{staticClass:"float-right border",attrs:{icon:"download",size:"lg"},on:{click:function(e){return e.stopPropagation(),t.openLink(t.item.download_url)}}}):t._e(),t.item.detail_name?n("font-awesome-icon",{staticClass:"float-right border",attrs:{icon:"search-plus",size:"lg"},on:{click:function(e){return e.stopPropagation(),t.goDetail(t.item.title,t.item.detail_name,t.item.detail_params)}}}):t._e()],1):n("div",{on:{click:function(e){return e.stopPropagation(),t.goLink(e)}}},[!0===t.item.state?n("font-awesome-icon",{attrs:{icon:"check-square",size:"lg"}}):t._e(),!1===t.item.state?n("font-awesome-icon",{attrs:{far:"",icon:"square",size:"lg"}}):t._e(),t._v(" "+t._s(t.item.title)+" "),t.item.download_url?n("font-awesome-icon",{staticClass:"float-right border",attrs:{icon:"download",size:"lg"},on:{click:function(e){return e.stopPropagation(),t.openLink(t.item.download_url)}}}):t._e(),t.item.detail_url?n("font-awesome-icon",{staticClass:"float-right border",attrs:{icon:"search-plus",size:"lg"},on:{click:function(e){return e.stopPropagation(),t.goDetail(t.item.name,t.item.detail_url)}}}):t._e()],1),t.isFolder?n("b-list-group",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}]},t._l(t.item.children,(function(e,a){return n("menu-list",{key:a,staticClass:"item",attrs:{item:e},on:{showPage:t.passEvt}})})),1):t._e()],1)}),c=[],d={name:"MenuList",props:{item:Object,topLevel:Boolean},data:function(){return{isOpen:!1}},computed:{isFolder:function(){return this.item.children&&this.item.children.length}},methods:{toggle:function(){this.isFolder&&(this.isOpen=!this.isOpen)},goLink:function(){this.item&&(void 0!==this.item.state&&(this.item.state=!this.item.state,this.item.state&&this.item.msg&&alert(this.item.msg)),this.item.name?this.$emit("showPage",{title:this.item.title,name:this.item.name,params:this.item.params}):this.item.url?this.$emit("showPage",{title:this.item.title,url:this.item.url}):this.item.extern_url&&window.open(this.item.extern_url))},goDetail:function(t,e,n){this.$emit("showPage",{title:t,name:e,params:n})},passEvt:function(t){this.$emit("showPage",t)},openLink:function(t){window.open(window.location.origin+"/"+t)}}},m=d,p=(n("7605"),n("2877")),f=Object(p["a"])(m,u,c,!1,null,"1e449a46",null),h=f.exports,b=(n("d3b7"),n("8c4f")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},g=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),t._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[t._v("typescript")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[t._v("pwa")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],x=n("9f12"),k=n("8b83"),y=n("c65a"),E=n("c03e"),B=n("9ab4"),C=n("60a3"),T=function(t){function e(){return Object(x["a"])(this,e),Object(k["a"])(this,Object(y["a"])(e).apply(this,arguments))}return Object(E["a"])(e,t),e}(C["c"]);B["a"]([Object(C["b"])()],T.prototype,"msg",void 0),T=B["a"]([C["a"]],T);var O=T,S=O,A=(n("3edd"),Object(p["a"])(S,v,w,!1,null,"9985f5ea",null)),D=A.exports,j={name:"home",components:{HelloWorld:D}},P=j,M=Object(p["a"])(P,_,g,!1,null,null,null),L=M.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-page"},[n("div",{staticClass:"form"},[n("form",{staticClass:"login-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],attrs:{type:"text",placeholder:"帳號"},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"密碼"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{on:{click:t.login}},[t._v("登入")])])])])},G=[],F={name:"login",data:function(){return{user:"",password:""}},methods:{login:function(){this.$router.push("/")}}},W=F,$=(n("cfdb"),Object(p["a"])(W,I,G,!1,null,"400d037b",null)),N=$.exports;a["default"].use(b["a"]);var z,V,q="login",R=[{path:"/",name:"home",component:L},{path:"/".concat(q),name:q,component:N},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/cwb",name:"cwb",component:function(){return n.e("chunk-2d0e2010").then(n.bind(null,"7d9f"))},props:{url:"https://www.cwb.gov.tw"}},{path:"/ncdr",name:"ncdr",component:function(){return n.e("chunk-2d0e2010").then(n.bind(null,"7d9f"))},props:{url:"https://watch.ncdr.nat.gov.tw/watch_typhoon.aspx"}},{path:"/rain_alert",name:"rain_alert",component:function(){return Promise.all([n.e("chunk-5a4ea8f8"),n.e("chunk-563fc650")]).then(n.bind(null,"7d6a"))}},{path:"/rain_report",name:"rain_report",component:function(){return n.e("chunk-2d0e636c").then(n.bind(null,"9890"))}},{path:"/rain_forecast/:period",name:"rain_forecast",component:function(){return n.e("chunk-32974746").then(n.bind(null,"b4f1"))}},{path:"/rain_accumulation/:period",component:function(){return n.e("chunk-446ee83c").then(n.bind(null,"a795"))}},{path:"/water_level_alert",name:"water_level_alert",component:function(){return Promise.all([n.e("chunk-5a4ea8f8"),n.e("chunk-344927ef")]).then(n.bind(null,"2257"))}},{path:"/water_level_report",name:"water_level_report",component:function(){return n.e("chunk-2d229ba7").then(n.bind(null,"df4c"))}},{path:"/water_level_detail/:profile_url",name:"water_level_detail",component:function(){return n.e("chunk-098f440f").then(n.bind(null,"6c89"))},props:!0},{path:"/waterLevel/:river/:site",name:"waterLevel",component:function(){return n.e("chunk-e5ee3182").then(n.bind(null,"62ec"))}},{path:"/flood_alert",name:"flood_alert",component:function(){return Promise.all([n.e("chunk-5a4ea8f8"),n.e("chunk-f473a17a")]).then(n.bind(null,"4260"))}},{path:"/cctv_alert",name:"cctv_alert",component:function(){return n.e("chunk-2d215cdc").then(n.bind(null,"c081"))}},{path:"/yl_pump_system",name:"yl_pump_system",component:function(){return n.e("chunk-2d0e2010").then(n.bind(null,"7d9f"))},props:{url:"http://61.216.39.38:99/Default.aspx"}},{path:"/pump",name:"pump",component:function(){return n.e("chunk-3ddfc656").then(n.bind(null,"e1e5"))}},{path:"/gate",name:"gate",component:function(){return n.e("chunk-7b5a1732").then(n.bind(null,"a61b"))}},{path:"/pond",name:"pond",component:function(){return n.e("chunk-fb28f522").then(n.bind(null,"d222"))}},{path:"/pump_list",name:"pump_list",component:function(){return n.e("chunk-31c3224a").then(n.bind(null,"100f"))}},{path:"/parts",name:"parts",component:function(){return n.e("chunk-374ee108").then(n.bind(null,"5f17"))}},{path:"/decisionReport",name:"decisionReport",component:function(){return n.e("chunk-67a1a988").then(n.bind(null,"cf9b"))}},{path:"/PumpLogistics",name:"PumpLogistics",component:function(){return n.e("chunk-2d21af92").then(n.bind(null,"be92"))}}],H=new b["a"]({mode:"history",base:"/ylfs_demo/",routes:R}),J=H,Y={b1:[{title:"中央氣象局",name:"cwb"},{title:"NCDR豪雨特報統計",extern_url:"https://watch.ncdr.nat.gov.tw/watch_extreme_rain"},{title:"NCDR台灣豪雨監測",extern_url:"https://watch.ncdr.nat.gov.tw/watch_heavyrain"},{title:"NCDR颱風監測",extern_url:"https://watch.ncdr.nat.gov.tw/watch_typhoon"}],b2:[]},K=Y,Z={b1:[{title:"雨量警戒",name:"rain_alert"},{title:"即時報表",name:"rain_report",download_url:"sample.xlsx"}],b2:[{title:"累積雨量",download_url:"sample.xlsx",children:[{title:"過去10分鐘",url:"/rain_accumulation/10min"},{title:"過去1小時",url:"/rain_accumulation/1h"},{title:"過去3小時",url:"/rain_accumulation/3h"},{title:"過去6小時",url:"/rain_accumulation/6h"},{title:"過去12小時",url:"/rain_accumulation/12h"},{title:"過去24小時",url:"/rain_accumulation/24"}]},{title:"雨量預報",download_url:"sample.xlsx",children:[{title:"未來1小時",url:"/rain_forecast/1"},{title:"未來2小時",url:"/rain_forecast/2"},{title:"未來3小時",url:"/rain_forecast/3"},{title:"未來4小時",url:"/rain_forecast/4"},{title:"未來5小時",url:"/rain_forecast/5"},{title:"未來6小時",url:"/rain_forecast/6"}]}]},U=Z,X={b1:[{title:"水位警戒",name:"water_level_alert"},{title:"即時報表",name:"water_level_report"}],b2:[{title:"牛挑灣溪",detail_name:"water_level_detail",detail_params:{profile_url:"http://210.61.11.56/yunlinFlood/%E6%B0%B4%E4%BD%8D%E8%B3%87%E8%A8%8A/WaterInfoChartVertical.aspx?riverType=NeioTiewWen&rivername=%E7%89%9B%E6%8C%91%E7%81%A3%E6%BA%AA&model=T10"},download_url:"sample.xlsx",children:[{title:"牛挑灣溪一",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"牛挑灣溪二",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"牛挑灣溪三",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"牛挑灣溪四",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"}]},{title:"尖山大排",detail_name:"water_level_detail",detail_params:{profile_url:"http://210.61.11.56/yunlinFlood/%E6%B0%B4%E4%BD%8D%E8%B3%87%E8%A8%8A/WaterInfoChartVertical.aspx?riverType=GianShan&rivername=%u5c16%u5c71%u5927%u6392&model=T10"},download_url:"sample.xlsx",children:[{title:"尖山大排一",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"尖山大排二",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"尖山大排三",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"尖山大排四",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"}]},{title:"蔦松大排",detail_name:"water_level_detail",detail_params:{profile_url:"http://210.61.11.56/yunlinFlood/%E6%B0%B4%E4%BD%8D%E8%B3%87%E8%A8%8A/WaterInfoChartVertical.aspx?riverType=NiouSong&rivername=%u8526%u677e%u5927%u6392&model=T10"},download_url:"sample.xlsx",children:[{title:"蔦松大排一",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"蔦松大排二",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"蔦松大排三",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"蔦松大排四",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"}]},{title:"施厝寮大排",detail_name:"water_level_detail",detail_params:{profile_url:"http://210.61.11.56/yunlinFlood/%E6%B0%B4%E4%BD%8D%E8%B3%87%E8%A8%8A/WaterInfoChartVertical.aspx?riverType=SC&rivername=%u65bd%u539d%u5bee%u5927%u6392&model=T10"},download_url:"sample.xlsx",children:[{title:"施厝寮大排一",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"施厝寮大排二",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"施厝寮大排三",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"施厝寮大排四",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"施厝寮大排五",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"}]},{title:"有才寮大排",detail_name:"water_level_detail",detail_params:{profile_url:"http://210.61.11.56/yunlinFlood/%E6%B0%B4%E4%BD%8D%E8%B3%87%E8%A8%8A/WaterInfoChartVertical.aspx?riverType=YuTsaiLiao&rivername=%u6709%u624d%u5bee%u5927%u6392&model=T10"},download_url:"sample.xlsx",children:[{title:"有才寮大排一",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"有才寮大排二",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"有才寮大排三",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"有才寮大排四",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"有才寮大排五",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"有才寮大排六",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"有才寮大排七",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"}]},{title:"馬公圳大排",detail_name:"water_level_detail",detail_params:{profile_url:"http://210.61.11.56/yunlinFlood/%E6%B0%B4%E4%BD%8D%E8%B3%87%E8%A8%8A/WaterInfoChartVertical.aspx?riverType=MaGong&rivername=%u99ac%u516c%u539d%u5927%u6392&model=T10"},download_url:"sample.xlsx",children:[{title:"馬公圳大排一",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"馬公圳大排二",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"馬公圳大排三",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"馬公圳大排四",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"馬公圳大排五",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"馬公圳大排六",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"馬公圳大排七",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"}]},{title:"新虎尾溪",detail_name:"water_level_detail",detail_params:{profile_url:"http://210.61.11.56/yunlinFlood/%E6%B0%B4%E4%BD%8D%E8%B3%87%E8%A8%8A/WaterInfoChartVertical.aspx?riverType=HsinHuWeiSi&rivername=%u65b0%u864e%u5c3e%u6eaa&model=T10"},download_url:"sample.xlsx",children:[{title:"新虎尾溪一",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"新虎尾溪二",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"新虎尾溪三",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"新虎尾溪四",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"新虎尾溪五",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"新虎尾溪六",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"新虎尾溪七",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"}]},{title:"舊虎尾溪",detail_name:"water_level_detail",detail_params:{profile_url:"http://210.61.11.56/yunlinFlood/%E6%B0%B4%E4%BD%8D%E8%B3%87%E8%A8%8A/WaterInfoChartVertical.aspx?riverType=Johowei&rivername=%u820a%u864e%u5c3e%u6eaa&model=T10"},download_url:"sample.xlsx",children:[{title:"舊虎尾溪一",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"舊虎尾溪二",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"舊虎尾溪三",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"舊虎尾溪四",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"舊虎尾溪五",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"舊虎尾溪六",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"舊虎尾溪七",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"舊虎尾溪七",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"}]},{title:"羊稠厝大排",detail_name:"water_level_detail",detail_params:{profile_url:"http://210.61.11.56/yunlinFlood/%E6%B0%B4%E4%BD%8D%E8%B3%87%E8%A8%8A/WaterInfoChartVertical.aspx?riverType=Yang&rivername=%u7f8a%u7a20%u539d%u5927%u6392&model=T10"},download_url:"sample.xlsx",children:[{title:"羊稠厝大排一",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"羊稠厝大排二",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"羊稠厝大排三",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"}]},{title:"湳仔大排",detail_name:"water_level_detail",detail_params:{profile_url:"http://210.61.11.56/yunlinFlood/%E6%B0%B4%E4%BD%8D%E8%B3%87%E8%A8%8A/WaterInfoChartVertical.aspx?riverType=NanZi&rivername=%u6e73%u4ed4%u5927%u6392&model=T10"},download_url:"sample.xlsx",children:[{title:"湳仔大排一",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"湳仔大排二",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"湳仔大排三",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"}]},{title:"客仔厝大排",detail_name:"water_level_detail",detail_params:{profile_url:"http://210.61.11.56/yunlinFlood/%E6%B0%B4%E4%BD%8D%E8%B3%87%E8%A8%8A/WaterInfoChartVertical.aspx?riverType=KeZiChu&rivername=%u5ba2%u4ed4%u539d%u5927%u6392&model=T10"},download_url:"sample.xlsx",children:[{title:"客仔厝大排一",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"客仔厝大排二",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"客仔厝大排三",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"}]},{title:"新街大排",detail_name:"water_level_detail",detail_params:{profile_url:"http://210.61.11.56/yunlinFlood/%E6%B0%B4%E4%BD%8D%E8%B3%87%E8%A8%8A/WaterInfoChartVertical.aspx?riverType=XinJie&rivername=%u65b0%u8857%u5927%u6392&model=T10"},download_url:"sample.xlsx",children:[{title:"新街大排一",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"新街大排二",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"新街大排三",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"}]},{title:"延潭大排",detail_name:"water_level_detail",detail_params:{profile_url:"http://210.61.11.56/yunlinFlood/%E6%B0%B4%E4%BD%8D%E8%B3%87%E8%A8%8A/WaterInfoChartVertical.aspx?riverType=Yantan&rivername=%u5ef6%u6f6d%u5927%u6392&model=T10"},download_url:"sample.xlsx",children:[{title:"延潭大排一",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"延潭大排二",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"延潭大排三",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"}]},{title:"八角亭大排",detail_name:"water_level_detail",detail_params:{profile_url:"http://210.61.11.56/yunlinFlood/%E6%B0%B4%E4%BD%8D%E8%B3%87%E8%A8%8A/WaterInfoChartVertical.aspx?riverType=BaJiaoTing&rivername=%E5%85%AB%E8%A7%92%E4%BA%AD%E5%A4%A7%E6%8E%92&model=T10"},download_url:"sample.xlsx",children:[{title:"八角亭大排一",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"八角亭大排二",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"八角亭大排三",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"}]},{title:"大義崙大排",detail_name:"water_level_detail",detail_params:{profile_url:"http://210.61.11.56/yunlinFlood/%E6%B0%B4%E4%BD%8D%E8%B3%87%E8%A8%8A/WaterInfoChartVertical.aspx?riverType=DaYiLun&rivername=%u5927%u7fa9%u5d19%u5927%u6392&model=T10"},download_url:"sample.xlsx",children:[{title:"大義崙大排一",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"大義崙大排二",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"},{title:"大義崙大排三",state:!1,msg:"勾選水位站，於地圖上彈出對應info box"}]}]},Q=X,tt={b1:[{title:"淹水警戒",name:"flood_alert"},{title:"淹水範圍預報",msg:"地圖上將套疊淹水範圍KML圖層..."}],b2:[{title:"淹水範圍模擬",children:[{title:"即時模擬",state:!1},{title:"未來1小時",state:!1},{title:"未來2小時",state:!1},{title:"未來3小時",state:!1},{title:"未來4小時",state:!1},{title:"未來5小時",state:!1},{title:"未來6小時"}]},{title:"口湖鄉(6)",detail_name:"asdf",children:[{title:"口湖鄉1",state:!1,msg:"地圖跳至對應之感測器位置，並顯示其infobox"},{title:"口湖鄉2",state:!1,msg:"地圖跳至對應之感測器位置，並顯示其infobox"}]},{title:"土庫鎮",children:[{title:"土庫鎮1",state:!1,msg:"地圖跳至對應之感測器位置，並顯示其infobox"},{title:"土庫鎮2",state:!1,msg:"地圖跳至對應之感測器位置，並顯示其infobox"}]},{title:"元長鄉",children:[]},{title:"斗南鎮",children:[]},{title:"水林鄉",children:[]}]},et=tt,nt={b1:[{title:"CCTV斷線警告",name:"cctv_alert"},{title:"移動式抽水機監控系統",name:"yl_pump_system"}],b2:[{title:"口湖鄉(2)",children:[{title:"口湖鄉1",state:!1,msg:"地圖上測站彈出後的資訊視窗內容，並顯示其infobox"},{title:"口湖鄉2",state:!1,msg:"地圖上測站彈出後的資訊視窗內容，並顯示其infobox"}]},{title:"土庫鎮(2)",children:[{title:"土庫鎮1",state:!1,msg:"地圖上測站彈出後的資訊視窗內容，並顯示其infobox"},{title:"土庫鎮2",state:!1,msg:"地圖上測站彈出後的資訊視窗內容，並顯示其infobox"}]},{title:"元長鄉(2)",children:[{title:"元長鄉1",state:!1,msg:"地圖上測站彈出後的資訊視窗內容，並顯示其infobox"},{title:"元長鄉2",state:!1,msg:"地圖上測站彈出後的資訊視窗內容，並顯示其infobox"}]},{title:"斗南鎮(2)",children:[{title:"斗南鎮1",state:!1,msg:"地圖上測站彈出後的資訊視窗內容，並顯示其infobox"},{title:"斗南鎮2",state:!1,msg:"地圖上測站彈出後的資訊視窗內容，並顯示其infobox"}]},{title:"水林鄉(2)",children:[{title:"水林鄉1",state:!1,msg:"地圖上測站彈出後的資訊視窗內容，並顯示其infobox"},{title:"水林鄉2",state:!1,msg:"地圖上測站彈出後的資訊視窗內容，並顯示其infobox"}]}]},at=nt,it={b1:[{title:"抽水機調度建議",name:"PumpLogistics"},{title:"決策建議分析報告",name:"decisionReport"}],b2:[{title:"自主防災社區",children:[{title:"社區1"},{title:"社區2"},{title:"社區3"}]},{title:"抽水站",name:"pump",detail_name:"pump",download_url:"sample.xlsx"},{title:"水閘門",name:"gate",detail_name:"gate",download_url:"sample.xlsx"},{title:"滯洪池",name:"pond",detail_name:"pond",download_url:"sample.xlsx"},{title:"移動式抽水機",name:"pump_list",detail_name:"pump_list",download_url:"sample.xlsx"},{title:"防汛備料",name:"parts",detail_name:"parts",download_url:"sample.xlsx"}]},ot=it,lt={b1:[],b2:[]},rt=lt,st={b1:[],b2:[{title:"防汛相關網站",children:[{title:"雲林水情圖資整合平台",extern_url:"http://210.61.11.56/ylloginSite/Login/Logon"},{title:"雲林縣公有雲平台",extern_url:"http://211.75.227.73/SensLink2/Account/LogOn?ReturnUrl=%2fSensLink2%2fHistoryData"},{title:"雲林縣防災資訊網",extern_url:"http://140.125.234.42/yunlin/"},{title:"災害情資網",extern_url:"http://eocdss.ncdr.nat.gov.tw/web/"},{title:"中央氣象局全球資訊網",extern_url:"https://watch.ncdr.nat.gov.tw/"},{title:"NCDR天氣與氣候監測網",extern_url:"https://watch.ncdr.nat.gov.tw/"},{title:"颱洪中心系集預報",extern_url:"https://tyqpfe.ttfri.narl.org.tw/"},{title:"Windty",extern_url:"https://www.windy.com/?23.500,121.000,4"},{title:"日本氣象廳",extern_url:"http://www.jma.go.jp/jma/index.html"},{title:"美軍氣象站",extern_url:"http://tropic.ssec.wisc.edu/tropic.php"},{title:"六國颱風路徑預測",extern_url:"http://www.typhoon2000.ph/multi/?name=LEEPI"},{title:"歐洲氣象ECMWF",extern_url:"https://www.ecmwf.int/"}]},{title:"其他相關網站",children:[{title:"雲林縣水利處水利工程科業務管理平台(新)",extern_url:"http://210.61.11.56/ylloginSite/Platform"},{title:"雲林縣水利處水利工程科業務管理平台(舊)",extern_url:"http://210.61.11.56/yunlinBusiness/login.aspx"},{title:"雲林縣政府水利處",extern_url:"http://www4.yunlin.gov.tw/water/"},{title:"經濟部水利署",extern_url:"https://www.wra.gov.tw/"},{title:"經濟部水利署災害緊急應變系統",extern_url:"http://fhy.wra.gov.tw/dmchyv2/"},{title:"經濟部水利署防災資訊服務網",extern_url:"http://fhy.wra.gov.tw/Pub_Web_2011/"},{title:"環保署空氣品質監測網",extern_url:"https://taqm.epa.gov.tw/taqm/tw/default.aspx"},{title:"農委會土石流防災資訊網",extern_url:"https://246.swcb.gov.tw/"},{title:"行政院人事行政總處",extern_url:"https://www.dgpa.gov.tw/typh/daily/nds.html"}]},{title:"相關文檔",children:[{title:"教育訓練文件"}]}]},ut=st,ct={b1:[],b2:[]},dt=ct,mt={name:"myMenu",components:{MenuList:h},data:function(){return{pageTitle:"",menuData:[K,U,Q,et,at,ot,rt,ut,dt],activeIndex:0}},computed:{hasB1Menu:function(){return!!this.menuData[this.activeIndex].b1&&0!==this.menuData[this.activeIndex].b1.length},b1Menu:function(){return this.menuData[this.activeIndex].b1},hasB2Menu:function(){return!!this.menuData[this.activeIndex].b2&&0!==this.menuData[this.activeIndex].b2.length},b2Menu:function(){return this.menuData[this.activeIndex].b2}},methods:{setSubMenu:function(t){this.activeIndex=t},onShowPage:function(t){this.pageTitle=t.title,t.name?this.$router.push({name:t.name,params:t.params}):t.url&&this.$router.push(t.url),this.$bvModal.show("pageModal")},onB1ItemClick:function(t){t.extern_url?window.open(t.extern_url):t.name?(this.$router.push({name:t.name,params:t.params}),this.pageTitle=t.title,this.$bvModal.show("pageModal")):t.url?this.$router.push(t.url):void 0!==t.state&&(t.state=!t.state,t.state&&t.msg&&alert(t.msg))},openLink:function(t){window.open(window.location.origin+"/"+t)}}},pt=mt,ft=(n("f6d6"),Object(p["a"])(pt,r,s,!1,null,"3241141a",null)),ht=ft.exports,bt="<B>雲林縣</B><br>雲林縣",_t=new TGOS.TGPoint(186065.13,2621248.49),gt="http://api.tgos.tw/TGOS_API/images/marker2.png";function vt(){var t=document.getElementById("OMap"),e={navigationControl:!1,navigationControlOptions:{controlPosition:TGOS.TGControlPosition.LEFT_BOTTOM,navigationControlStyle:TGOS.TGNavigationControlStyle.SMALL},scaleControl:!0};V=new TGOS.TGOnlineMap(t,TGOS.TGCoordSys.EPSG3826,e),V.setZoom(7),V.setCenter(_t);var n=new TGOS.TGImage(gt,new TGOS.TGSize(38,33),new TGOS.TGPoint(0,0),new TGOS.TGPoint(10,33)),a=new TGOS.TGMarker(V,_t,"",n),i={maxWidth:4e3,pixelOffset:new TGOS.TGSize(5,-30),zIndex:99};z=new TGOS.TGInfoWindow(bt,_t,i),TGOS.TGEvent.addListener(a,"mouseover",wt),TGOS.TGEvent.addListener(a,"mouseout",xt)}function wt(){z.open(V)}function xt(){z.close()}var kt={name:"app",components:{MyMenu:ht},mounted:function(){vt()},methods:{logout:function(){this.$router.push("login")}}},yt=kt,Et=(n("034f"),Object(p["a"])(yt,o,l,!1,null,null,null)),Bt=Et.exports,Ct=n("9483");Object(Ct["a"])("".concat("/ylfs_demo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Tt=n("2f62");a["default"].use(Tt["a"]);var Ot=new Tt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),St=n("ecee"),At=n("c074"),Dt=n("ad3d");St["c"].add(At["j"],At["i"],At["f"],At["d"],At["a"],At["b"],At["g"],At["e"],At["h"],At["c"]),a["default"].component("font-awesome-icon",Dt["a"]),a["default"].config.productionTip=!1,new a["default"]({router:J,store:Ot,render:function(t){return t(Bt)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.8d1c40bd.png"},cfdb:function(t,e,n){"use strict";var a=n("ea02"),i=n.n(a);i.a},ea02:function(t,e,n){},ede4:function(t,e,n){},f6d6:function(t,e,n){"use strict";var a=n("ede4"),i=n.n(a);i.a},ffd4:function(t,e,n){}});
//# sourceMappingURL=app.c2ee7c11.js.map