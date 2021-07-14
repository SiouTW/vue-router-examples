<template>
  <div class="r">
    <router-link to="/dr/user/1">User 1</router-link> |
    <router-link to="/dr/user/2">User 2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "NestedRoutes",
};
</script>
