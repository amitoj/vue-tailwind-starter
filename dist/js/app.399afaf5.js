(function(e){function t(t){for(var n,i,l=t[0],s=t[1],u=t[2],f=0,p=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-tailwind-starter/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"antialiased text-gray-900 flex flex-col min-h-screen bg-gray-200",attrs:{id:"app"}},[r("div",{staticClass:"flex-shrink-0 py-12 text-center"},[r("Hello"),e._m(0)],1)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-2"},[r("a",{staticClass:"text-sm font-semibold text-gray-600 hover:underline",attrs:{href:"https://github.com/james2doyle/vue-tailwind-starter"}},[e._v(" Source on GitHub ")])])}],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello-wrapper"},[r("p",{staticClass:"p-2",domProps:{textContent:e._s(e.message)}}),e._m(0)])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{staticClass:"mx-auto",attrs:{src:r("cf05"),alt:"Logo",width:"50"}})])}],s={name:"Hello",data:function(){return{message:"Vue + Tailwind Starter"}}},u=s,c=r("2877"),f=Object(c["a"])(u,i,l,!1,null,null,null),p=f.exports,d={name:"App",components:{Hello:p}},v=d,h=(r("034f"),Object(c["a"])(v,a,o,!1,null,null,null)),m=h.exports,b=r("8c4f");n["a"].use(b["a"]);var g=new b["a"]({mode:"history",base:"/vue-tailwind-starter/"});n["a"].config.productionTip=!1,new n["a"]({router:g,render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.6b03b6d2.png"}});
//# sourceMappingURL=app.399afaf5.js.map