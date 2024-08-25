<template>
  <div id="big" class="container-fluid">
    <br />
    <div id="myrow" class="row">
      <div class="col-lg-12 col-md-12"><h3 id="big-h3">المشرفين</h3></div>
      <div
        data-aos="fade-up"
        data-aos-offset="500"
        data-aos-duration="3000"
        class="col-lg-3 col-md-4 col-sm-12 col-xs-12"
      >
        <div id="card1">
          <img id="myimg" class="img-rounded" src="../assets/man1.jpg" />
          <div id="dscrption">
            <h4>الشئون القانونيه</h4>
            <p>مسئول الشئون القانونيه الاستاذ :محمد عبد السلام</p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="500"
        data-aos-duration="2000"
        class="col-lg-3 col-md-4 col-sm-12 col-xs-12"
      >
        <div id="card1">
          <img id="myimg" class="img-rounded" src="../assets/man2.jpg" />
          <div id="dscrption">
            <h4>سوبر فايزر</h4>
            <p>الاستاذ: احمد ابراهيم ابو الدهب</p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="500"
        data-aos-duration="1500"
        class="col-lg-3 col-md-4 col-sm-12 col-xs-12"
      >
        <div id="card1">
          <img id="myimg" class="img-rounded" src="../assets/man3.jpg" />
          <div id="dscrption">
            <h4>مدير عام</h4>
            <p>الاستاذة: نجوي محمد ابراهيم</p>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted: function () {
    window.setTimeout(function () {
      $("#mine").hover(function () {
        $("#re1").css({ transform: "translateY(30px)", transition: "all,3s" });
      });
    }, 1000);
    $("#hed").text(this.txt1);
  },
};
</script>
<style scoped lang="css">
#card1 {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: auto;
  height: 400px;
  position: relative;
  border-radius: 10px;
  outline: none;
}
#dscrption {
  box-shadow: 0px 8px 24px black;
  outline: none;
  background-color: #fff;
  height: 130px;
  width: 260px;
  position: absolute;
  bottom: -2rem;
  border-radius: 8px;
  font-weight: 50px;
  font-style: bold;
  margin-inline: auto;
  padding: 1rem;
}
#card1:hover #dscrption {
  transform: translateY(-2rem);
  transition: all, 2s;
}
#card1:hover #dscrption {
  opacity: 1;
  animation: show-data 2s both;
}
#card1:not(:hover) {
  animation: overflowup 1s forwards;
}
#card1:not(:hover) #dscrption {
  animation: the-back 3s both;
}
#card1:hover {
  animation: overflowdown 2s forwards;
}
@keyframes show-data {
  50% {
    transform: translateY(-4rem);
  }
  100% {
    transform: translateY(2rem);
  }
}
@keyframes the-back {
  0% {
    transform: translateY(-4rem);
  }
  50% {
    transform: translateY(-5rem);
    opacity: 1;
  }
  100% {
    transform: translateY(7rem);
  }
}
@keyframes overflowdown {
  0% {
    overflow: hidden;
  }
  50% {
    overflow: initial;
  }
}
@keyframes overflowup {
  0% {
    overflow: initial;
    pointer-events: none;
  }
  100% {
    overflow: hidden;
  }
}
#big {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  height: auto;
  position: relative;
}
h3 {
  flex: 0 0 10%;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  font-size: 40px;
  font-weight: 10;
  font-style: italic;
  margin-block: 50px;
  margin-block-start: 0rem;
}
/*@media (max-width: 1366px) {
  #big {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    height: auto;
    position: relative;
  }
  #myrow {
    position: relative;
    flex: 0 0 90%;
    gap: 0px;
  }
  #myimg {
    position: relative;
    height: 400px;
    border-radius: 10px;
    flex-grow: 0;
    width: 260px;
  }
}*/
</style>
