# vue-router-examples (路由器相關的範例)
## 如何使用
環境配置 package.json 裡都有，就是vue3的基本配置

然後把除了 source-code 以外的資料都抓下來就可以使用了

然後 source-code 資料夾裡面有我下面所寫的主題的原程式碼

------

###  NestedRoutes (崁套路由)

個人認為的重點是 template 裡的 <router-link to="/path"> 後面的path要詳細寫好

還有 index.js 裡的 routes 裡的 path 也是

(一開始的斜線代表的是主頁的位置)

------

### DynamicRoute (動態路由)
  
重點是如果再同一路由中元件並沒有切換的話，
  
原本 mounted 裡的程式並不會執行，
  
這時需要使用 beforeRouteUpdate 來更新
