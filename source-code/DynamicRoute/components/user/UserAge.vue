<template>
  <div class="r">
    <h2>使用者年齡:{{ user.age }}</h2>
  </div>
</template>

<script>
export default {
  name: "UserAge",
  data() {
    return {
      user: {},
      name: "",
      age: "",
    };
  },
  mounted() {
    this.user = this.getUser(this.$route.params.id);
    this.name = "/dr/user/" + this.$route.params.id + "/name/";
    this.age = "/dr/user/" + this.$route.params.id + "/age/";
  },
  beforeRouterUpdate(to, from, next) {
    this.user = this.getUser(to.params.id);
    this.name = "/user/" + to.params.id + "/name/";
    this.age = "/user/" + to.params.id + "/age/";
    next();
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
