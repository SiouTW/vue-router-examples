<template>
  <div class="r">
    <h2>Profile 元件</h2>
    <router-link to="/nestedprofile/detail">Detail</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "NestedProfile",
};
</script>
