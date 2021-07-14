<template>
  <div class="r">
    <h2>WithQuery</h2>
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

<script>
export default {};
</script>
