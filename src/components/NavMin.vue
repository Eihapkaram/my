<template>
  <nav>
    <ul>
      <li><span>VISTA</span></li>
      <li v-for="link in myRoutes" :key="link.name">
        <router-link :to="link.path">{{ link.meta.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      myRoutes: [],
    };
  },
  mounted() {
    this.myRoutes = this.$router.options.routes;
  },
};
</script>

<style scoped lang="css">
nav ul {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  z-index: 5;
}
nav {
  width: 100%;
}
li {
  list-style-type: none;
  text-decoration-style: none;
}
</style>
