<template>
  <div class="r">
    <p>$router.name : {{ $route.name }}</p>
    <router-link :to="{ name: 'NVExample', params: { topdata: 'top' } }">
      NVExample 命名圖表的範例
    </router-link>
    |
    <router-link to="/nv">redirect to NVExample 重新導向</router-link> |
    <router-link to="/nv/nva">alias to NV 別名</router-link>
    <router-view name="top"></router-view>
    <router-view name="middle"></router-view>
    <router-view></router-view>
  </div>
</template>
