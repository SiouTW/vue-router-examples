(function(e){function t(t){for(var n,c,o=t[0],i=t[1],s=t[2],d=0,b=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&b.push(u[c][0]),u[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==u[i]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},u={app:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-router-examples/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"294a":function(e,t,r){"use strict";r("4cd3")},"4cd3":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),u={id:"nav",class:"r"},a=Object(n["d"])("Nested Routes 嵌套路由的範例"),c=Object(n["d"])(" | "),o=Object(n["d"])(" Dynamic Route Matching 動態路由配置的範例 "),i=Object(n["d"])(" | "),s=Object(n["d"])("Programmatic Navigation 程序化導航");function l(e,t){var r=Object(n["t"])("router-link"),l=Object(n["t"])("router-view");return Object(n["n"])(),Object(n["c"])("div",u,[Object(n["e"])(r,{to:"/"},{default:Object(n["y"])((function(){return[a]})),_:1}),c,Object(n["e"])(r,{to:"/dr"},{default:Object(n["y"])((function(){return[o]})),_:1}),i,Object(n["e"])(r,{to:"/pn"},{default:Object(n["y"])((function(){return[s]})),_:1}),Object(n["e"])(l)])}r("90fe");const d={};d.render=l;var b=d,p=r("6c02"),j={class:"r"},O=Object(n["d"])("Nested Prdfile"),h=Object(n["d"])(" | "),f=Object(n["d"])("Nested Post");function m(e,t,r,u,a,c){var o=Object(n["t"])("router-link"),i=Object(n["t"])("router-view");return Object(n["n"])(),Object(n["c"])("div",j,[Object(n["e"])(o,{to:"/nestedprofile"},{default:Object(n["y"])((function(){return[O]})),_:1}),h,Object(n["e"])(o,{to:"/nestedpost"},{default:Object(n["y"])((function(){return[f]})),_:1}),Object(n["e"])(i)])}var v={name:"NestedRoutes"};v.render=m;var g=v,y={class:"r"},P=Object(n["e"])("h2",null,"Profile 元件",-1),R=Object(n["d"])("Detail");function N(e,t,r,u,a,c){var o=Object(n["t"])("router-link"),i=Object(n["t"])("router-view");return Object(n["n"])(),Object(n["c"])("div",y,[P,Object(n["e"])(o,{to:"/nestedprofile/detail"},{default:Object(n["y"])((function(){return[R]})),_:1}),Object(n["e"])(i)])}var $={name:"NestedProfile"};$.render=N;var w=$,k={class:"r"},_=Object(n["e"])("h2",null,"Post 元件",-1);function U(e,t,r,u,a,c){return Object(n["n"])(),Object(n["c"])("div",k,[_])}var q={name:"NestedPost"};q.render=U;var x=q,S={class:"r"},Q=Object(n["e"])("h2",null,"Detail 元件",-1);function C(e,t,r,u,a,c){return Object(n["n"])(),Object(n["c"])("div",S,[Q])}var W={name:"Detail"};W.render=C;var D=W,J={class:"r"},M=Object(n["d"])("User 1"),V=Object(n["d"])(" | "),A=Object(n["d"])("User 2");function T(e,t,r,u,a,c){var o=Object(n["t"])("router-link"),i=Object(n["t"])("router-view");return Object(n["n"])(),Object(n["c"])("div",J,[Object(n["e"])(o,{to:"/dr/user/1"},{default:Object(n["y"])((function(){return[M]})),_:1}),V,Object(n["e"])(o,{to:"/dr/user/2"},{default:Object(n["y"])((function(){return[A]})),_:1}),Object(n["e"])(i)])}var z={name:"NestedRoutes"};z.render=T;var I=z,B=(r("b0c0"),{class:"r"}),E=Object(n["e"])("br",null,null,-1),F=Object(n["d"])("name detail"),G=Object(n["d"])(" | "),H=Object(n["d"])("age detail");function K(e,t,r,u,a,c){var o=Object(n["t"])("router-link"),i=Object(n["t"])("router-view");return Object(n["n"])(),Object(n["c"])("div",B,[Object(n["e"])("p",null,"User id number is "+Object(n["v"])(a.user.id),1),Object(n["e"])("p",null,"User id name is "+Object(n["v"])(a.user.name),1),Object(n["e"])("p",null,"User id age is "+Object(n["v"])(a.user.age),1),E,Object(n["e"])(o,{to:a.name},{default:Object(n["y"])((function(){return[F]})),_:1},8,["to"]),G,Object(n["e"])(o,{to:a.age},{default:Object(n["y"])((function(){return[H]})),_:1},8,["to"]),Object(n["e"])(i)])}var L={name:"NestedRoutes",data:function(){return{user:{},name:"",age:""}},mounted:function(){this.user=this.getUser(this.$route.params.id),this.name="/dr/user/"+this.$route.params.id+"/name/",this.age="/dr/user/"+this.$route.params.id+"/age/"},beforeRouteUpdate:function(e,t,r){this.user=this.getUser(e.params.id),this.name="/dr/user/"+e.params.id+"/name/",this.age="/dr/user/"+e.params.id+"/age/",r()},methods:{getUser:function(e){switch(e){case"1":return{id:1,name:"Jack",age:25};case"2":return{id:2,name:"Vina",age:27};default:return{id:-1}}}}};L.render=K;var X=L,Y={class:"r"};function Z(e,t,r,u,a,c){return Object(n["n"])(),Object(n["c"])("div",Y,[Object(n["e"])("h2",null,"使用者名字:"+Object(n["v"])(a.user.name),1)])}var ee={name:"UserName",data:function(){return{user:{}}},mounted:function(){this.user=this.getUser(this.$route.params.id)},methods:{getUser:function(e){switch(e){case"1":return{id:1,name:"Jack",age:25};case"2":return{id:2,name:"Vina",age:27};default:return{id:-1}}}}};ee.render=Z;var te=ee,re={class:"r"};function ne(e,t,r,u,a,c){return Object(n["n"])(),Object(n["c"])("div",re,[Object(n["e"])("h2",null,"使用者年齡:"+Object(n["v"])(a.user.age),1)])}var ue={name:"UserAge",data:function(){return{user:{},name:"",age:""}},mounted:function(){this.user=this.getUser(this.$route.params.id),this.name="/dr/user/"+this.$route.params.id+"/name/",this.age="/dr/user/"+this.$route.params.id+"/age/"},beforeRouterUpdate:function(e,t,r){this.user=this.getUser(e.params.id),this.name="/user/"+e.params.id+"/name/",this.age="/user/"+e.params.id+"/age/",r()},methods:{getUser:function(e){switch(e){case"1":return{id:1,name:"Jack",age:25};case"2":return{id:2,name:"Vina",age:27};default:return{id:-1}}}}};ue.render=ne;var ae=ue,ce=Object(n["z"])("data-v-22940b4d");Object(n["q"])("data-v-22940b4d");var oe={class:"r"};Object(n["o"])();var ie=ce((function(e,t,r,u,a,c){var o=Object(n["t"])("router-view");return Object(n["n"])(),Object(n["c"])("div",oe,[Object(n["e"])("button",{onClick:t[1]||(t[1]=function(){return c.StringRouter&&c.StringRouter.apply(c,arguments)})},"String 字串"),Object(n["e"])("button",{onClick:t[2]||(t[2]=function(){return c.ObjectRouter&&c.ObjectRouter.apply(c,arguments)})},"Object 對象"),Object(n["e"])("button",{onClick:t[3]||(t[3]=function(){return c.NamedRouter&&c.NamedRouter.apply(c,arguments)})},"Named Route 命名的路由"),Object(n["e"])("button",{onClick:t[4]||(t[4]=function(){return c.WithQuery&&c.WithQuery.apply(c,arguments)})},"Name with Query 带查询参数"),Object(n["e"])("button",{onClick:t[5]||(t[5]=function(){return c.QueryWithPath&&c.QueryWithPath.apply(c,arguments)})},"Path with Query 带查询参数"),Object(n["e"])("button",{onClick:t[6]||(t[6]=function(){return c.PreviousPage&&c.PreviousPage.apply(c,arguments)})},"Previous Page 前一頁"),Object(n["e"])("button",{onClick:t[7]||(t[7]=function(){return c.NextPage&&c.NextPage.apply(c,arguments)})},"Next Page 下一頁"),Object(n["e"])("button",{onClick:t[8]||(t[8]=function(){return c.RouterReplace&&c.RouterReplace.apply(c,arguments)})},"Router Replace 路由替換"),Object(n["e"])(o)])})),se=(r("ac1f"),r("5319"),{name:"ProgrammaticNavigation",methods:{StringRouter:function(){this.$router.push("/pn/stringrouter")},ObjectRouter:function(){this.$router.push({path:"/pn/objectrouter"})},NamedRouter:function(){this.$router.push({name:"NamedRouter",params:{data:"from pn"}})},WithQuery:function(){this.$router.push({name:"withquery",query:{data:"something"}})},QueryWithPath:function(){this.$router.push({path:"withquery",query:{data:"something2"}})},PreviousPage:function(){this.$router.go(-1)},NextPage:function(){this.$router.go(1)},RouterReplace:function(){this.$router.replace({name:"routerreplace"})}}});r("294a");se.render=ie,se.__scopeId="data-v-22940b4d";var le=se,de={class:"r"},be=Object(n["e"])("h2",null,"StringRouter",-1),pe=Object(n["e"])("p",null,"語法:",-1),je=Object(n["e"])("p",null,'this.$router.push("/pn/stringrouter");',-1);function Oe(e,t){return Object(n["n"])(),Object(n["c"])("div",de,[be,pe,je])}const he={};he.render=Oe;var fe=he,me={class:"r"},ve=Object(n["e"])("h2",null,"ObjectRouter",-1),ge=Object(n["e"])("p",null,"語法:",-1),ye=Object(n["e"])("p",null,'this.$router.push({ path: "/pn/objectrouter" });',-1);function Pe(e,t){return Object(n["n"])(),Object(n["c"])("div",me,[ve,ge,ye])}const Re={};Re.render=Pe;var Ne=Re,$e={class:"r"},we=Object(n["e"])("h2",null,"NamedRoute",-1),ke=Object(n["e"])("p",null,"PS:如果提供了 path ， params 會被忽略",-1),_e=Object(n["e"])("p",null,"( 所以用 params 時一定要用 name )",-1),Ue=Object(n["e"])("p",null,"一定要去 path 可以用下面的作法",-1),qe=Object(n["e"])("p",null,"router.push({ path: `/user/${data}` })",-1),xe=Object(n["e"])("hr",null,null,-1),Se=Object(n["e"])("p",null,"語法:",-1),Qe=Object(n["e"])("p",null,' this.$router.push({ name: "NamedRouter", params: { data: "from pn" } }); ',-1);function Ce(e,t,r,u,a,c){return Object(n["n"])(),Object(n["c"])("div",$e,[we,Object(n["e"])("p",null,"data : "+Object(n["v"])(e.$route.params.data),1),ke,_e,Ue,qe,xe,Se,Qe])}var We={name:"NamedRoute"};We.render=Ce;var De=We,Je={class:"r"},Me=Object(n["e"])("h2",null,"WithQuery",-1),Ve=Object(n["e"])("hr",null,null,-1),Ae=Object(n["e"])("p",null,"語法:",-1),Te=Object(n["e"])("p",null,' this.$router.push({ name: "WithQuery", query: { data: "something" } }); ',-1),ze=Object(n["e"])("p",null,' this.$router.push({ path: "WithQuery", query: { data: "something2" } }); ',-1);function Ie(e,t,r,u,a,c){return Object(n["n"])(),Object(n["c"])("div",Je,[Me,Object(n["e"])("p",null,"$route.query : "+Object(n["v"])(e.$route.query),1),Object(n["e"])("p",null,"$route.query.data : "+Object(n["v"])(e.$route.query.data),1),Ve,Ae,Te,ze])}var Be={};Be.render=Ie;var Ee=Be,Fe={class:"r"},Ge=Object(n["e"])("h2",null,"RouterReplace",-1),He=Object(n["e"])("p",null,"跟 router.push 很像，唯一的不同就是，他不會向 history 添加新紀錄",-1),Ke=Object(n["e"])("p",null,"而是和他的名字一樣 -> 替換掉當前的 history",-1),Le=Object(n["e"])("p",null,"PS: 會當作他沒進過，剛剛的網頁",-1),Xe=Object(n["e"])("p",null,"還想不到要用在甚麼時候",-1),Ye=Object(n["e"])("p",null,"語法:",-1),Ze=Object(n["e"])("p",null,'this.$router.replace({ name: "routerreplace" });',-1),et=Object(n["e"])("p",null,"this.$router.replace(location, onComplete?, onAbort?)",-1);function tt(e,t){return Object(n["n"])(),Object(n["c"])("div",Fe,[Ge,He,Ke,Le,Xe,Ye,Ze,et])}const rt={};rt.render=tt;var nt=rt,ut=[{path:"/",name:"Nestedroutes",component:g,children:[{path:"nestedprofile",name:"NestedProfile",component:w,children:[{path:"detail",name:"Detail",component:D}]},{path:"nestedpost",name:"NestedPost",component:x}]},{path:"/dr",component:I,children:[{path:"/dr/user/:id",component:X,children:[{path:"name",component:te},{path:"age",component:ae}]}]},{path:"/pn",component:le,children:[{path:"stringrouter",component:fe},{path:"objectrouter",component:Ne},{path:"namedroute/:data",name:"NamedRouter",component:De},{path:"withquery",name:"withquery",component:Ee},{path:"routerreplace",name:"routerreplace",component:nt}]}],at=Object(p["a"])({history:Object(p["b"])("/vue-router-examples/"),routes:ut}),ct=at;Object(n["b"])(b).use(ct).mount("#app")},"87aa":function(e,t,r){},"90fe":function(e,t,r){"use strict";r("87aa")}});
//# sourceMappingURL=app.a02101a0.js.map