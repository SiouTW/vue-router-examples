<template>
  <div class="r">
    <p>User id number is {{ user.id }}</p>
    <p>User id name is {{ user.name }}</p>
    <p>User id age is {{ user.age }}</p>
    <br />
    <router-link :to="name">name detail</router-link> |
    <router-link :to="age">age detail</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "NestedRoutes",
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
  beforeRouteUpdate(to, from, next) {
    this.user = this.getUser(to.params.id);
    this.name = "/dr/user/" + to.params.id + "/name/";
    this.age = "/dr/user/" + to.params.id + "/age/";
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
