<template>
  <div class="r">
    <h2>使用者名字:{{ user.name }}</h2>
  </div>
</template>

<script>
export default {
  name: "UserName",
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.user = this.getUser(this.$route.params.id);
  },
  methods: {
    getUser(id) {
      switch (id) {
        case "1":
          return { id: 1, name: "Jack", age: 25 };
        case "2":
          return { id: 2, name: "Vina", age: 27 };
        default:
          return { id: -1 };
      }
    },
  },
};
</script>
