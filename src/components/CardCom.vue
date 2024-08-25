<template>
  <div class="container-fluid" id="con0">
    <div id="con4" class="row">
      <div id="he" class="col-lg-12 col-sm-12 col-xs-12">
        <header id="h">اطلالات للفندق</header>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div
          id="card4"
          data-aos="fade-up"
          data-aos-offset="500"
          data-aos-duration="3000"
          @click="show1"
        >
          <div class="back">
            <div>
              <h3>وجهات الغرف</h3>
              <p>
                جميع الغرف تطل علي البواال وبها نظام تهويه طبيعي بلاضافه
                للتصميمات المختلفه لها
              </p>
            </div>
          </div>
          <div class="front">
            <img src="../assets/h10.jpg" class="img-rounded" />
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div
          id="card4"
          @mouseenter="mybt"
          @mouseleave="mybt2"
          data-aos="fade-up"
          data-aos-offset="500"
          data-aos-duration="2000"
        >
          <div class="back">
            <div>
              <h3>توفير وجهه متعددة المداخل</h3>
              <p>
                مع وجو توزيع جيد للمساحات الخضراء من الاشجار المثمرة وغير
                المثمره لاعطاء المنظر الجمالي و لزيادة الراحة النفسيه للنزلاء
              </p>
            </div>
          </div>
          <div class="front">
            <img src="../assets/h3.jpg" class="img-rounded" />
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div
          id="card4"
          data-aos="fade-up"
          data-aos-offset="500"
          data-aos-duration="1500"
        >
          <div class="back">
            <div>
              <h3>البوول</h3>
              <p>
                هو النوع الأكثر عملية بين أنواع حمامات السباحة المختلفة، هو أحد
                أنواع حمامات السباحة الحديثة والمبتكرة، وهو حمام سباحة ذو مظهر
                يعتمد في عمله على آلة خارجية تثبت على حافة حوض السباحة مساحتها
                80سم × 80سم، تقوم هذه الآلة بضخ المياه إلى حمام السباحة، كما
                تساهم في خلق تموجيات على سطح المسبح تزيده جمالاً وتجعل السباحة
                به أكثر متعةجمالي وجذاب
              </p>
            </div>
          </div>
          <div class="front">
            <img src="../assets/h5.jpg" class="img-rounded" />
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
.front img {
  height: 400px;
  width: 250px;
  border-radius: 5px;
}
.front {
  height: 400px;
  width: 250px;
  position: absolute;
  backface-visibility: hidden;
}
.back {
  height: 400px;
  width: 250px;
  background-color: #69d6e9;
  position: absolute;
  transform: rotateY(180deg);
  border-radius: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}
#card4 {
  position: relative;
  transform-style: preserve-3d;
  height: 400px;
  width: 250px;
}
#card4:hover {
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
  #con0 {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    margin-block: 80px;
  }
  #card4 {
    flex: 1 0 50%;
    margin-inline: 0px;
    margin-block: 10px;
    width: 100;
    height: 400px;
  }
}*/
</style>
