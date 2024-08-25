<template>
  <div class="continer-fluid" id="connot">
    <h1>page not found</h1>
    <img id="img1" src="../assets/err404.jpg" />
  </div>
</template>
,
<script>
export default {};
</script>
<style scoped>
#connot {
  position: relative;
  height: 30rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
h1 {
  flex: 1 0 100%;
}
#img1 {
  width: 300px;
  height: 300px;
  align-self: center;
}
</style>
