<template>
  <div class="hello">
    <br /><br />
    <h1 data-aos="fade-up" data-aos-offset="500" data-aos-duration="2000">
      {{ msg }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1 {
  letter-spacing: 3px;
  font-size: 20px;
}
</style>
