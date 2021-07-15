<template>
  <div class="r">
    <h2>WithQuery</h2>
    <p>用 query 傳參數時，最好用 name <span>不要用 path</span></p>
    <p>( name 也比較方便，不會出錯，要用 path 路徑要寫正確)</p>
    <p>像是點進 <span>Programmatic Navigation 程序化導航</span> 時</p>
    <p>( 如果路徑沒寫好 )</p>
    <p>如果直接點選 <span>Path with Query 带查询参数</span> 會連結失敗</p>
    <p>$route.query : {{ $route.query }}</p>
    <p>$route.query.data : {{ $route.query.data }}</p>
    <hr />
    <p>語法:</p>
    <p>
      this.$router.push({ name: "WithQuery", query: { data: "something" } });
    </p>
    <p>
      this.$router.push({ path: "WithQuery", query: { data: "something2" } });
    </p>
  </div>
</template>

<style scoped>
span {
  color: red;
}
</style>
