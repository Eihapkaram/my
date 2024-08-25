<template>
  <div id="cone" class="container-fluid">
    <div class="row">
      <div id="con1" class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div id="top-right"></div>
        <div id="top-left"></div>
      </div>
      <div id="con1" class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div id="top-right"></div>
        <div id="top-left"></div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted: function () {
    window.setTimeout(function () {
      $("#top-left").hover(
        function () {
          $("#con1").css({ transform: "rotateY(-35deg)" });
        },
        function () {
          $("#con1").css({ transform: "rotateX(-35deg)" });
        }
      );
      $("#top-right").hover(function () {
        $("#con1").css({ transform: "rotateY(35deg)" });
      });
      $("#bottom-left").hover(function () {
        $("#con1").css({ transform: "rotateY(-35deg)" });
      });
      $("#bottom-right").hover(function () {
        $("#con1").css({ transform: "rotateY(35deg)" });
      });
      $("#top-left").mouseleave(function () {
        $("#con1").css({ transform: "rotateY(0deg)" });
      });
      $("#top-right").mouseleave(function () {
        $("#con1").css({ transform: "rotateY(0deg)" });
      });
    }, 100);
  },
};
</script>
<style scoped lang="css">
#cone {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  position: relative;
  border: 2px solid orange;
}
#top-left {
}
#top-right {
  float: right;
}
#imgcard {
  width: 200px;
  height: 300px;
  position: relative;
  z-index: 0;
}
#con1 {
  background-image: url(../assets/caf4.jpg);
  background-size: cover;
  width: 300px;
  height: 400px;
  z-index: 0;
  transition: all, 3s;
}
/* #top-left :not(:hover) #con {
   transform: rotateY(360deg);
  transition: all,3s;
  }*/

#con1 div {
  width: 80px;
  height: 100%;
  position: relative;
  margin-block-end: 200px;
  z-index: 3;
  transition: all, 3s;
}
.row {
  perspective: 2000px;
  perspective-origin: center center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  flex: 0 0 100%;
  gap: 20px;
  border: 2px solid black;
}
</style>
