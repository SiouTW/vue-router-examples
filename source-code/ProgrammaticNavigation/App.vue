<template>
  <div id="nav" class="r">
    <router-link to="/">Nested Routes 嵌套路由的範例</router-link> |
    <router-link to="/dr">
      Dynamic Route Matching 動態路由配置的範例
    </router-link>
    |
    <router-link to="/pn">Programmatic Navigation 程序化導航</router-link>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  color: rgb(174, 194, 211);
  background-color: #131516;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: rgb(174, 194, 211);
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.r {
  border: 1px solid #42b983;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
