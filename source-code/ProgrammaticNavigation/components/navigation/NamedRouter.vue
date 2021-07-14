<template>
  <div class="r">
    <h2>NamedRoute</h2>
    <p>data : {{ $route.params.data }}</p>
    <p>PS:如果提供了 path ， params 會被忽略</p>
    <p>( 所以用 params 時一定要用 name )</p>
    <p>一定要去 path 可以用下面的作法</p>
    <p>router.push({ path: `/user/${data}` })</p>
    <hr />
    <p>語法:</p>
    <p>
      this.$router.push({ name: "NamedRouter", params: { data: "from pn" } });
    </p>
  </div>
</template>

<script>
export default {
  name: "NamedRoute",
};
</script>
