(function(e){function t(t){for(var n,c,o=t[0],i=t[1],s=t[2],p=0,b=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(b.length)b.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},u=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-router-examples/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=i;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"3fcf":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={id:"nav",class:"r"},u=Object(n["e"])("Nested Routes 嵌套路由的範例"),c=Object(n["e"])(" | "),o=Object(n["e"])(" Dynamic Route Matching 動態路由配置的範例 "),i=Object(n["e"])(" | "),s=Object(n["e"])("Programmatic Navigation 程序化導航"),l=Object(n["e"])(" | "),p=Object(n["e"])("Named Views 命名圖表");function b(e,t){var r=Object(n["u"])("router-link"),b=Object(n["u"])("router-view");return Object(n["o"])(),Object(n["c"])("div",a,[Object(n["f"])(r,{to:"/"},{default:Object(n["z"])((function(){return[u]})),_:1}),c,Object(n["f"])(r,{to:"/dr"},{default:Object(n["z"])((function(){return[o]})),_:1}),i,Object(n["f"])(r,{to:"/pn"},{default:Object(n["z"])((function(){return[s]})),_:1}),l,Object(n["f"])(r,{to:"/nv"},{default:Object(n["z"])((function(){return[p]})),_:1}),Object(n["f"])(b)])}r("c013");const f={};f.render=b;var d=f,j=r("6c02"),O={class:"r"},h=Object(n["e"])("Nested Prdfile"),m=Object(n["e"])(" | "),v=Object(n["e"])("Nested Post");function g(e,t,r,a,u,c){var o=Object(n["u"])("router-link"),i=Object(n["u"])("router-view");return Object(n["o"])(),Object(n["c"])("div",O,[Object(n["f"])(o,{to:"/nestedprofile"},{default:Object(n["z"])((function(){return[h]})),_:1}),m,Object(n["f"])(o,{to:"/nestedpost"},{default:Object(n["z"])((function(){return[v]})),_:1}),Object(n["f"])(i)])}var y={name:"NestedRoutes"};y.render=g;var N=y,w={class:"r"},P=Object(n["f"])("h2",null,"Profile 元件",-1),R=Object(n["e"])("Detail");function $(e,t,r,a,u,c){var o=Object(n["u"])("router-link"),i=Object(n["u"])("router-view");return Object(n["o"])(),Object(n["c"])("div",w,[P,Object(n["f"])(o,{to:"/nestedprofile/detail"},{default:Object(n["z"])((function(){return[R]})),_:1}),Object(n["f"])(i)])}var _={name:"NestedProfile"};_.render=$;var k=_,x={class:"r"},U=Object(n["f"])("h2",null,"Post 元件",-1);function V(e,t,r,a,u,c){return Object(n["o"])(),Object(n["c"])("div",x,[U])}var z={name:"NestedPost"};z.render=V;var Q=z,S={class:"r"},q=Object(n["f"])("h2",null,"Detail 元件",-1);function W(e,t,r,a,u,c){return Object(n["o"])(),Object(n["c"])("div",S,[q])}var C={name:"Detail"};C.render=W;var M=C,D={class:"r"},E=Object(n["e"])("User 1"),J=Object(n["e"])(" | "),A=Object(n["e"])("User 2");function T(e,t,r,a,u,c){var o=Object(n["u"])("router-link"),i=Object(n["u"])("router-view");return Object(n["o"])(),Object(n["c"])("div",D,[Object(n["f"])(o,{to:"/dr/user/1"},{default:Object(n["z"])((function(){return[E]})),_:1}),J,Object(n["f"])(o,{to:"/dr/user/2"},{default:Object(n["z"])((function(){return[A]})),_:1}),Object(n["f"])(i)])}var I={name:"NestedRoutes"};I.render=T;var B=I,F=(r("b0c0"),{class:"r"}),G=Object(n["f"])("br",null,null,-1),H=Object(n["e"])("name detail"),K=Object(n["e"])(" | "),L=Object(n["e"])("age detail");function X(e,t,r,a,u,c){var o=Object(n["u"])("router-link"),i=Object(n["u"])("router-view");return Object(n["o"])(),Object(n["c"])("div",F,[Object(n["f"])("p",null,"User id number is "+Object(n["w"])(u.user.id),1),Object(n["f"])("p",null,"User id name is "+Object(n["w"])(u.user.name),1),Object(n["f"])("p",null,"User id age is "+Object(n["w"])(u.user.age),1),G,Object(n["f"])(o,{to:u.name},{default:Object(n["z"])((function(){return[H]})),_:1},8,["to"]),K,Object(n["f"])(o,{to:u.age},{default:Object(n["z"])((function(){return[L]})),_:1},8,["to"]),Object(n["f"])(i)])}var Y={name:"NestedRoutes",data:function(){return{user:{},name:"",age:""}},mounted:function(){this.user=this.getUser(this.$route.params.id),this.name="/dr/user/"+this.$route.params.id+"/name/",this.age="/dr/user/"+this.$route.params.id+"/age/"},beforeRouteUpdate:function(e,t,r){this.user=this.getUser(e.params.id),this.name="/dr/user/"+e.params.id+"/name/",this.age="/dr/user/"+e.params.id+"/age/",r()},methods:{getUser:function(e){switch(e){case"1":return{id:1,name:"Jack",age:25};case"2":return{id:2,name:"Vina",age:27};default:return{id:-1}}}}};Y.render=X;var Z=Y,ee={class:"r"};function te(e,t,r,a,u,c){return Object(n["o"])(),Object(n["c"])("div",ee,[Object(n["f"])("h2",null,"使用者名字:"+Object(n["w"])(u.user.name),1)])}var re={name:"UserName",data:function(){return{user:{}}},mounted:function(){this.user=this.getUser(this.$route.params.id)},methods:{getUser:function(e){switch(e){case"1":return{id:1,name:"Jack",age:25};case"2":return{id:2,name:"Vina",age:27};default:return{id:-1}}}}};re.render=te;var ne=re,ae={class:"r"};function ue(e,t,r,a,u,c){return Object(n["o"])(),Object(n["c"])("div",ae,[Object(n["f"])("h2",null,"使用者年齡:"+Object(n["w"])(u.user.age),1)])}var ce={name:"UserAge",data:function(){return{user:{},name:"",age:""}},mounted:function(){this.user=this.getUser(this.$route.params.id),this.name="/dr/user/"+this.$route.params.id+"/name/",this.age="/dr/user/"+this.$route.params.id+"/age/"},beforeRouterUpdate:function(e,t,r){this.user=this.getUser(e.params.id),this.name="/user/"+e.params.id+"/name/",this.age="/user/"+e.params.id+"/age/",r()},methods:{getUser:function(e){switch(e){case"1":return{id:1,name:"Jack",age:25};case"2":return{id:2,name:"Vina",age:27};default:return{id:-1}}}}};ce.render=ue;var oe=ce,ie=Object(n["A"])("data-v-619d03d6");Object(n["r"])("data-v-619d03d6");var se={class:"r"};Object(n["p"])();var le=ie((function(e,t,r,a,u,c){var o=Object(n["u"])("router-view");return Object(n["o"])(),Object(n["c"])("div",se,[Object(n["f"])("button",{onClick:t[1]||(t[1]=function(){return c.StringRouter&&c.StringRouter.apply(c,arguments)})},"String 字串"),Object(n["f"])("button",{onClick:t[2]||(t[2]=function(){return c.ObjectRouter&&c.ObjectRouter.apply(c,arguments)})},"Object 對象"),Object(n["f"])("button",{onClick:t[3]||(t[3]=function(){return c.NamedRouter&&c.NamedRouter.apply(c,arguments)})},"Named Route 命名的路由"),Object(n["f"])("button",{onClick:t[4]||(t[4]=function(){return c.WithQuery&&c.WithQuery.apply(c,arguments)})},"Name with Query 带查询参数"),Object(n["f"])("button",{onClick:t[5]||(t[5]=function(){return c.QueryWithPath&&c.QueryWithPath.apply(c,arguments)})},"Path with Query 带查询参数"),Object(n["f"])("button",{onClick:t[6]||(t[6]=function(){return c.PreviousPage&&c.PreviousPage.apply(c,arguments)})},"Previous Page 前一頁"),Object(n["f"])("button",{onClick:t[7]||(t[7]=function(){return c.NextPage&&c.NextPage.apply(c,arguments)})},"Next Page 下一頁"),Object(n["f"])("button",{onClick:t[8]||(t[8]=function(){return c.RouterReplace&&c.RouterReplace.apply(c,arguments)})},"Router Replace 路由替換"),Object(n["f"])(o)])})),pe=(r("ac1f"),r("5319"),{name:"ProgrammaticNavigation",methods:{StringRouter:function(){this.$router.push("/pn/stringrouter")},ObjectRouter:function(){this.$router.push({path:"/pn/objectrouter"})},NamedRouter:function(){this.$router.push({name:"NamedRouter",params:{data:"from pn"}})},WithQuery:function(){this.$router.push({name:"WithQuery",query:{data:"something"}})},QueryWithPath:function(){this.$router.push({path:"/pn/withquery",query:{data:"something2"}})},PreviousPage:function(){this.$router.go(-1)},NextPage:function(){this.$router.go(1)},RouterReplace:function(){this.$router.replace({name:"routerreplace"})}}});r("e3da");pe.render=le,pe.__scopeId="data-v-619d03d6";var be=pe,fe={class:"r"},de=Object(n["f"])("h2",null,"StringRouter",-1),je=Object(n["f"])("p",null,"語法:",-1),Oe=Object(n["f"])("p",null,'this.$router.push("/pn/stringrouter");',-1);function he(e,t){return Object(n["o"])(),Object(n["c"])("div",fe,[de,je,Oe])}const me={};me.render=he;var ve=me,ge={class:"r"},ye=Object(n["f"])("h2",null,"ObjectRouter",-1),Ne=Object(n["f"])("p",null,"語法:",-1),we=Object(n["f"])("p",null,'this.$router.push({ path: "/pn/objectrouter" });',-1);function Pe(e,t){return Object(n["o"])(),Object(n["c"])("div",ge,[ye,Ne,we])}const Re={};Re.render=Pe;var $e=Re,_e={class:"r"},ke=Object(n["f"])("h2",null,"NamedRoute",-1),xe=Object(n["f"])("p",null,"PS:如果提供了 path ， params 會被忽略",-1),Ue=Object(n["f"])("p",null,"( 所以用 params 時一定要用 name )",-1),Ve=Object(n["f"])("p",null,"一定要去 path 可以用下面的作法",-1),ze=Object(n["f"])("p",null,"router.push({ path: `/user/${data}` })",-1),Qe=Object(n["f"])("hr",null,null,-1),Se=Object(n["f"])("p",null,"語法:",-1),qe=Object(n["f"])("p",null,' this.$router.push({ name: "NamedRouter", params: { data: "from pn" } }); ',-1);function We(e,t,r,a,u,c){return Object(n["o"])(),Object(n["c"])("div",_e,[ke,Object(n["f"])("p",null,"data : "+Object(n["w"])(e.$route.params.data),1),xe,Ue,Ve,ze,Qe,Se,qe])}var Ce={name:"NamedRoute"};Ce.render=We;var Me=Ce,De=Object(n["A"])("data-v-20eef6a5");Object(n["r"])("data-v-20eef6a5");var Ee={class:"r"},Je=Object(n["d"])("<h2 data-v-20eef6a5>WithQuery</h2><p data-v-20eef6a5>用 query 傳參數時，最好用 name <span data-v-20eef6a5>不要用 path</span></p><p data-v-20eef6a5>( name 也比較方便，不會出錯，要用 path 路徑要寫正確)</p><p data-v-20eef6a5>像是點進 <span data-v-20eef6a5>Programmatic Navigation 程序化導航</span> 時</p><p data-v-20eef6a5>( 如果路徑沒寫好 )</p><p data-v-20eef6a5>如果直接點選 <span data-v-20eef6a5>Path with Query 带查询参数</span> 會連結失敗</p>",6),Ae=Object(n["f"])("hr",null,null,-1),Te=Object(n["f"])("p",null,"語法:",-1),Ie=Object(n["f"])("p",null,' this.$router.push({ name: "WithQuery", query: { data: "something" } }); ',-1),Be=Object(n["f"])("p",null,' this.$router.push({ path: "WithQuery", query: { data: "something2" } }); ',-1);Object(n["p"])();var Fe=De((function(e,t){return Object(n["o"])(),Object(n["c"])("div",Ee,[Je,Object(n["f"])("p",null,"$route.query : "+Object(n["w"])(e.$route.query),1),Object(n["f"])("p",null,"$route.query.data : "+Object(n["w"])(e.$route.query.data),1),Ae,Te,Ie,Be])}));r("b069");const Ge={};Ge.render=Fe,Ge.__scopeId="data-v-20eef6a5";var He=Ge,Ke={class:"r"},Le=Object(n["f"])("h2",null,"RouterReplace",-1),Xe=Object(n["f"])("p",null,"跟 router.push 很像，唯一的不同就是，他不會向 history 添加新紀錄",-1),Ye=Object(n["f"])("p",null,"而是和他的名字一樣 -> 替換掉當前的 history",-1),Ze=Object(n["f"])("p",null,"PS: 會當作他沒進過，剛剛的網頁",-1),et=Object(n["f"])("p",null,"還想不到要用在甚麼時候",-1),tt=Object(n["f"])("p",null,"語法:",-1),rt=Object(n["f"])("p",null,'this.$router.replace({ name: "routerreplace" });',-1),nt=Object(n["f"])("p",null,"this.$router.replace(location, onComplete?, onAbort?)",-1);function at(e,t){return Object(n["o"])(),Object(n["c"])("div",Ke,[Le,Xe,Ye,Ze,et,tt,rt,nt])}const ut={};ut.render=at;var ct=ut,ot={class:"r"},it=Object(n["e"])(" NVExample 命名圖表的範例 "),st=Object(n["e"])(" | "),lt=Object(n["e"])("redirect to NVExample 重新導向"),pt=Object(n["e"])(" | "),bt=Object(n["e"])("alias to NV 別名");function ft(e,t){var r=Object(n["u"])("router-link"),a=Object(n["u"])("router-view");return Object(n["o"])(),Object(n["c"])("div",ot,[Object(n["f"])("p",null,"$router.name : "+Object(n["w"])(e.$route.name),1),Object(n["f"])(r,{to:{name:"NVExample",params:{topdata:"top"}}},{default:Object(n["z"])((function(){return[it]})),_:1}),st,Object(n["f"])(r,{to:"/nv"},{default:Object(n["z"])((function(){return[lt]})),_:1}),pt,Object(n["f"])(r,{to:"/nv/nva"},{default:Object(n["z"])((function(){return[bt]})),_:1}),Object(n["f"])(a,{name:"top"}),Object(n["f"])(a,{name:"middle"}),Object(n["f"])(a)])}const dt={};dt.render=ft;var jt=dt,Ot={class:"r"},ht=Object(n["f"])("h2",null,"NVT : Top",-1);function mt(e,t){return Object(n["o"])(),Object(n["c"])("div",Ot,[ht,Object(n["f"])("p",null,"$route.params.topdata :"+Object(n["w"])(e.$route.params.topdata),1)])}const vt={};vt.render=mt;var gt=vt,yt={class:"r"},Nt=Object(n["f"])("h2",null,"NVM : Middle",-1),wt=Object(n["f"])("p",null," 用的router-link :to=\"{ name: 'NVExample', params: { topdata: 'top' } }\" ",-1),Pt=Object(n["f"])("p",null,"來傳參數",-1);function Rt(e,t){return Object(n["o"])(),Object(n["c"])("div",yt,[Nt,wt,Pt])}const $t={};$t.render=Rt;var _t=$t,kt={class:"r"},xt=Object(n["f"])("h2",null,"NVD : default",-1);function Ut(e,t){return Object(n["o"])(),Object(n["c"])("div",kt,[xt])}const Vt={};Vt.render=Ut;var zt=Vt,Qt=[{path:"/",name:"Nestedroutes",component:N,children:[{path:"nestedprofile",name:"NestedProfile",component:k,children:[{path:"detail",name:"Detail",component:M}]},{path:"nestedpost",name:"NestedPost",component:Q}]},{path:"/dr",component:B,children:[{path:"/dr/user/:id",component:Z,children:[{path:"name",component:ne},{path:"age",component:oe}]}]},{path:"/pn",component:be,children:[{path:"stringrouter",name:"StringRouter",component:ve},{path:"objectrouter",component:$e},{path:"namedroute/:data",name:"NamedRouter",component:Me},{path:"withquery",name:"WithQuery",component:He},{path:"routerreplace",name:"routerreplace",component:ct}]},{path:"/nv",name:"NamedViews",component:jt,children:[{path:"nvexample",name:"NVExample",components:{default:zt,top:gt,middle:_t}},{path:"/nv",redirect:{name:"NVExample"}},{path:"/pn/stringrouter",component:ve,name:"StringRouter",alias:"nva"}]}],St=Object(j["a"])({history:Object(j["b"])("/vue-router-examples/"),routes:Qt}),qt=St;Object(n["b"])(d).use(qt).mount("#app")},7671:function(e,t,r){},a87e:function(e,t,r){},b069:function(e,t,r){"use strict";r("3fcf")},c013:function(e,t,r){"use strict";r("a87e")},e3da:function(e,t,r){"use strict";r("7671")}});
//# sourceMappingURL=app.39f41ba4.js.map