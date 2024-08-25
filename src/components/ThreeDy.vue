<template>
  <div id="cone" class="container-fluid">
    <div id="con">
      <div id="top-right"></div>
      <div id="top-left"></div>
      <div id="bottom-right"></div>
      <div id="bottom-left"></div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted: function () {
    window.setTimeout(function () {
      $("#top-right").hover(function () {
        $("#con").css({ transform: "rotateY(35deg)" });
      });
      $("#top-left").hover(function () {
        $("#con").animate({ transform: "rotateY(35deg)" });
      });
      $("#bottom-left").hover(function () {
        $("#con").css({ transform: "rotateY(-35deg)" });
      });
      $("#bottom-right").hover(function () {
        $("#con").css({ transform: "rotateY(35deg)" });
      });
      $("#top-left").mouseleave(function () {
        $("#con").css({ transform: "rotateY(0deg)" });
      });
      $("#top-right").mouseleave(function () {
        $("#con").css({ transform: "rotateY(0deg)" });
      });
      $("#bottom-left").mouseleave(function () {
        $("#con").css({ transform: "rotateY(0deg)" });
      });
      $("#bottom-right").mouseleave(function () {
        $("#con").css({ transform: "rotateY(0deg)" });
      });
    }, 100);
  },
};
</script>
<style scoped lang="css">
#cone {
  perspective: 1000px;
  perspective-origin: center center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  position: relative;
}
#top-left {
  background-color: green;
}
#top-right {
  background-color: blue;
  float: right;
}
#bottom-left {
  background-color: black;
}
#bottom-right {
  background-color: orange;
  float: right;
}
#imgcard {
  width: 200px;
  height: 300px;
  position: relative;
  z-index: 0;
}
#con {
  background-image: url(../assets/caf4.jpg);
  background-size: cover;
  width: 300px;
  height: 400px;
  z-index: 0;
  transition: all, 3s;
}
#top-left :not(:hover) #con {
  transform: rotateY(360deg);
  transition: all, 3s;
}

#con div {
  width: 80px;
  height: 100px;
  position: relative;
  margin-block-end: 200px;
  z-index: 3;
  transition: all, 3s;
}
</style>
