<template>
  <div id="cone" class="container-fluid">
    <div id="con">
      <div id="left">1</div>
      <div id="right">2</div>
      <div id="top">3</div>
      <div id="butt">4</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="css">
#cone {
  perspective: 550rem;
  perspective-origin: center center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  position: relative;
}
div {
  width: 200px;
  height: 300px;
  position: absolute;
}
#left {
  background: red;
  transform: rotateX(180deg);
}
#right {
  background: blue;
  transform: rotateY(180deg);
}
#top {
  background: skyblue;
  transform: rotateY(180deg);
}
#butt {
  background: orange;
}
</style>
