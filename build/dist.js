(()=>{"use strict";var e={986:e=>{e.exports=require("body-parser")},22:e=>{e.exports=require("chalk")},212:e=>{e.exports=require("sitemap")},884:e=>{e.exports=require("zlib")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{require("babel-polyfill");const e=require("express");var t=n.n(e);const r=require("react-router-config"),o=require("react");var i=n.n(o);const a=require("react-dom/server"),c=require("react-helmet"),s=require("react-redux"),u=require("react-router-dom"),l=require("serialize-javascript");var p=n.n(l),g="GLOBAL_INIT",d="GLOBAL_SUCCESS",f="GLOBAL_FAILED";function m(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}const h={component:function(){return i().createElement("div",null,i().createElement("h1",null,"Home Page"))}};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const w=[y(y({},{component:(0,s.connect)((function(e){return console.log("state",e),{globalData:e.globalData.globalstore}}),(function(e){return{globalAction:function(){return e(function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:g}),e.abrupt("return",r.get("/users").then((function(e){console.log("===========",e),t({type:d,payload:e})})).catch((function(e){t({type:f,payload:e})})));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){m(i,r,o,a,c,"next",e)}function c(e){m(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(e,n,r){return t.apply(this,arguments)}}())}}}))((function(e){return(0,o.useEffect)((function(){e.globalAction()}),[]),i().createElement("div",null,i().createElement("h1",null,"hello"),(0,r.renderRoutes)(e.route.routes))}))}),{},{routes:[y(y({path:"/home"},h),{},{exact:!0})]})];var j={NODE_ENV:"production",WebUrl:"http://localhost:8555",BaseUrl:"https://jsonplaceholder.typicode.com",PORT:8555}.RenderUrl;const O=require("redux"),x=require("redux-thunk");var E=n.n(x);const k=require("axios");var P=n.n(k);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D={globalstore:null};const L=(0,O.combineReducers)({globalData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return _({},e);case d:case f:return _(_({},e),{},{globalstore:t.payload});default:return e}}});n(212).SitemapStream,n(884).createGzip;var T=n(986),I=(n(22),t()());I.use(T.urlencoded({extended:!1})),I.use(T.json()),I.get("/dist.js",(function(e,t,n){e.url=e.url+".gz",t.set("Content-Encoding","gzip"),t.set("Content-Type","text/javascript"),n()})),I.use(t().static("public")),I.get("*",(function(e,t){var n=function(e){var t=P().create({baseURL:"https://jsonplaceholder.typicode.com",headers:{cookie:e.get("cookie")||""}});return(0,O.createStore)(L,{},(0,O.applyMiddleware)(E().withExtraArgument(t)))}(e),o=(0,r.matchRoutes)(w,e.path).map((function(e){var t=e.route,r=e.match;return t.loadData?t.loadData(n,r):null})).map((function(e){if(e)return new Promise((function(t,n){e.then(t).catch(t)}))}));Promise.all(o).then((function(){var o={},l=function(e,t,n){var o=(0,a.renderToString)(i().createElement(s.Provider,{store:t},i().createElement(u.StaticRouter,{location:e.path,context:n},i().createElement(i().Fragment,null,(0,r.renderRoutes)(w))))),l=c.Helmet.renderStatic();return'<!DOCTYPE html>\n    <html lang="en">\n      <head>\n        '.concat(l.title.toString(),"\n        ").concat(l.meta.toString(),"\n        ").concat(l.link.toString(),'\n        <meta charset="utf-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1"/>\n        <meta data-react-helmet="true" name="robots" content="INDEX, FOLLOW" />\n        <meta data-react-helmet="true" name="googlebot" content="INDEX, FOLLOW">\n\n        <link data-react-helmet="true" rel="canonical" href="https://www.gyftr.com/rblbankoffers/" />\n        <link rel="icon" type="image/x-icon" href="').concat(j,'images/favicon.ico">\n        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">\n        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">\n        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap" rel="stylesheet">\n\n\n       \n        \n        <script id=\'_webengage_script_tag\' type=\'text/javascript\'>\n          var webengage;!function(w,e,b,n,g){function o(e,t){e[t[t.length-1]]=function(){r.__queue.push([t.join("."),\n          arguments])}}var i,s,r=w[b],z=" ",l="init options track screen onReady".split(z),a="feedback survey notification".split(z),c="options render clear abort".split(z),p="Open Close Submit Complete View Click".split(z),u="identify login logout setAttribute".split(z);if(!r||!r.__v){for(w[b]=r={__queue:[],__v:"6.0",user:{}},i=0;i < l.length;i++)o(r,[l[i]]);for(i=0;i < a.length;i++){for(r[a[i]]={},s=0;s < c.length;s++)o(r[a[i]],[a[i],c[s]]);for(s=0;s < p.length;s++)o(r[a[i]],[a[i],"on"+p[s]])}for(i=0;i < u.length;i++)o(r.user,["user",u[i]]);setTimeout(function(){var f=e.createElement("script"),d=e.getElementById("_webengage_script_tag");f.type="text/javascript",f.async=!0,f.src=("https:"==e.location.protocol?"https://ssl.widgets.webengage.com":"http://cdn.widgets.webengage.com")+"/js/webengage-min-v-6.0.js",d.parentNode.insertBefore(f,d)})}}(window,document,"webengage");\n          webengage.init("~47b6601c")\n        <\/script>\n\n\t\t  </head>\n    <body>\n      <div id="root">').concat(o,"</div>\n      <script>\n          window.INITIAL_STATE = ").concat(p()(t.getState()),'\n      <\/script>\n\n      <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"><\/script>\n\n      <script src="').concat(j,'dist.js"><\/script>\n\n      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"><\/script>\n      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"><\/script>\n\n      \x3c!-- Google Tag Manager (noscript) --\x3e\n      <noscript>\n        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K9DXL56" height="0" width="0" style="display:none;visibility:hidden"></iframe>\n      </noscript>\n      \x3c!-- End Google Tag Manager (noscript) --\x3e\n\n      <script>\n        if (\'serviceWorker\' in navigator) {\n          window.addEventListener(\'load\', function() {\n            navigator.serviceWorker.register(\'').concat(j,"service-worker.js').then(function(registration) {\n              return null;\n            }, function(err) {\n              return null;\n            });\n          });\n        }\n      <\/script>\n\n      <script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-697132182\"><\/script>\n      <script>\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', 'AW-697132182');\n      <\/script>\n      <script type='text/javascript'>\n        window.__lo_site_id = 225825;\n        (function() {\n        var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;\n        wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';\n        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);\n      })();\n      <\/script>\n\n\t  </body>\n    </html>\n  ")}(e,n,o);if(o.url)return t.redirect(301,o.url);o.notFound&&t.status(404),t.send(l)})).catch((function(e){return console.log(e)}))})),I.listen(8555,(function(){}))})()})();