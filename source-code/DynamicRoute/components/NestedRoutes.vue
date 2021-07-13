<template>
  <div class="r">
    <router-link to="/nestedprofile">Nested Prdfile</router-link> |
    <router-link to="/nestedpost">Nested Post</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "NestedRoutes",
};
</script>
