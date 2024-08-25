<template>
  <div class="container-fluid" id="con2">
    <div id="con3" class="row">
      <div id="he" class="col-lg-12 col-sm-12 col-xs-12">
        <header id="h">اطلالات للغرف</header>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div
          id="card3"
          data-aos="fade-up"
          data-aos-offset="500"
          data-aos-duration="3000"
          @click="show1"
        >
          <div class="back">
            <div>
              <h3>back</h3>
              <p>fffffff</p>
            </div>
          </div>
          <div class="front">
            <img src="../assets/h6.jpg" class="img-rounded" />
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div
          id="card3"
          @mouseenter="mybt"
          @mouseleave="mybt2"
          data-aos="fade-up"
          data-aos-offset="500"
          data-aos-duration="2000"
        >
          <div class="back">
            <div>
              <h3>back</h3>
              <p>fffffff</p>
            </div>
          </div>
          <div class="front">
            <img src="../assets/h7.jpg" class="img-rounded" />
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div
          id="card3"
          data-aos="fade-up"
          data-aos-offset="500"
          data-aos-duration="1500"
        >
          <div class="back">
            <div>
              <h3>back</h3>
              <p>fffffff</p>
            </div>
          </div>
          <div class="front">
            <img src="../assets/h8.jpg" class="img-rounded" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      myhov: false,
      ar: " اطلالات للفندق",
      en: "hotile viwe",
    };
  },
  mounted: function () {
    window.setTimeout(function () {
      $("#btn").click(function () {
        $("#con3").slideToggle();
      });
    }, 1000);
  },
  methods: {
    mybt2() {
      this.myhov = false;
    },
    mybt() {
      this.myhov = true;
    },
  },
};
</script>
<style scoped lang="css">
#he {
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}
.front {
  height: 400px;
  width: 250px;
  position: absolute;
  backface-visibility: hidden;
}
.front img {
  height: 400px;
  width: 260px;
  border-radius: 5px;
}
.back {
  height: 400px;
  width: 250px;
  background-color: #8b8b8b;
  position: absolute;
  transform: rotateY(180deg);
  border-radius: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}
#card3 {
  position: relative;
  transform-style: preserve-3d;
  height: 400px;
  width: 250px;
}
#card3:hover {
  transform: rotateY(-180deg);
  transition: all, 3s;
}
div {
  transition: all, 3s;
}
.disf {
  position: relative;
  top: -250px;
  height: 200px;
  text-align: start;
  letter-spacing: 3px;
  color: #c4c4c4;
}
#my {
  position: relative;
  top: -250px;
  left: -60px;
}
header {
  width: 300px;
  flex: 1 0 100%;
  top: -50px;
  position: relative;
  font-size: 40px;
  letter-spacing: 2px;
}
#show {
  width: 300px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid black;
  background-image: url("../assets/h12.jpg");
}
/*@media (max-width: 1366px) {
  #con2 {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    margin-block: 80px;
  }
  #card3 img {
    height: 400px;
    width: 250px;
  }
  #card3 {
    flex: 1 0 50%;
    margin-inline: 0px;
    margin-block: 10px;
    width: 100;
    height: 400px;
  }
}*/
</style>
