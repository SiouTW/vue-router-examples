<template>
  <div class="r">
    <button @click="StringRouter">String 字串</button>
    <button @click="ObjectRouter">Object 對象</button>
    <button @click="NamedRouter">Named Route 命名的路由</button>
    <button @click="WithQuery">Name with Query 带查询参数</button>
    <button @click="QueryWithPath">Path with Query 带查询参数</button>
    <button @click="PreviousPage">Previous Page 前一頁</button>
    <button @click="NextPage">Next Page 下一頁</button>
    <button @click="RouterReplace">Router Replace 路由替換</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "ProgrammaticNavigation",
  methods: {
    StringRouter() {
      this.$router.push("/pn/stringrouter");
    },
    ObjectRouter() {
      this.$router.push({ path: "/pn/objectrouter" });
    },
    NamedRouter() {
      this.$router.push({ name: "NamedRouter", params: { data: "from pn" } });
    },
    WithQuery() {
      this.$router.push({ name: "withquery", query: { data: "something" } });
    },
    QueryWithPath() {
      this.$router.push({
        path: "/pn/withquery",
        query: { data: "something2" },
      });
    },

    PreviousPage() {
      this.$router.go(-1);
    },
    NextPage() {
      this.$router.go(1);
    },

    RouterReplace() {
      this.$router.replace({ name: "routerreplace" });
    },
  },
};
</script>

<style scoped>
button {
  margin: 0px 5px;
  padding: 5px;
}
</style>
