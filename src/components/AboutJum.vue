<template>
  <div class="container-fluid" id="jum">
    <div id="headerdiv" class="container-fluid">
      <h3>About VISTA</h3>
    </div>
    <div
      class="leftdiv1"
      data-aos="fade-up"
      data-aos-offset="500"
      data-aos-duration="1500"
    >
      <h3>اقل سعر للغرفة</h3>
      <img class="icon" src="../assets/road-map.png" />
      <p>
        تترواح اسعار الغرف لديناالي ثلاث فئات هي-1الاقتصاديه من 5000ج - 10000ج و
        -2المتوسطه وهي تبداء من 15000ج الي 25000 الفءه 3-المميزه من 28000الي
        35000
      </p>
    </div>
    <div
      class="rightdiv1"
      data-aos="fade-up"
      data-aos-offset="500"
      data-aos-duration="1000"
    >
      <h3>مميزات الحجز لدينا</h3>
      <img class="icon" src="../assets/floating.png" />
      <p>
        ترقية الغرفة إلى الفئة التالية خصم 15٪ لدى المطاعم والردهات وتجربه تناول
        الطعام في الغرفة ضمان أفضل سعر إلغاء مجاني حتى الساعة 6 مساءً من يوم
        الوصول فرصة لـ "ربح إقامة مجانية"
      </p>
    </div>
    <div
      class="leftdiv2"
      data-aos="fade-up"
      data-aos-offset="500"
      data-aos-duration="2000"
    >
      <h3>نوفر لك افضل وسائل الرحه</h3>
      <img class="icon" src="../assets/market.png" />
      <p>
        ومن تلك الوسائل هي : 1-الانترنت المجاني 2-المطاعم 3-سهوله التنقل 4- جميع
        بيوت الجماال و اسواق متعدده و قريبه
      </p>
    </div>
    <div
      class="rightdiv2"
      data-aos="fade-up"
      data-aos-offset="500"
      data-aos-duration="1500"
    >
      <h3>ملعبنا</h3>
      <img class="icon" src="../assets/bank.png" />
      <p>
        هو مجمع رياضي، يضم مدرجات للجماهير/المشاهدين ومرافق تخدمهم، تحيط بمساحة
        في وسط الملعب وقد يكون في تلك المساحة ساحة ألعاب متعددة أو ملعب كرة قدم
        أو منصة يتحدث منها قائد سياسي، أو مسرح تقام عليه أعمال فنية، والساحة
      </p>
    </div>
    <div
      class="phot"
      src="@/assets/hotl.png"
      data-aos="fade-up"
      data-aos-offset="500"
      data-aos-duration="1000"
    >
      <h3>الغرف</h3>
      <img class="icon" src="../assets/police-officer.png" />
      <p>
        نوفر لك اكثر من 750 غرفه بمختلف المساحات وتبدا من 70متر الي 250 متر
        الغرف لها اكثر من viewe
      </p>
    </div>
    <div
      class="topdiv"
      data-aos="fade-up"
      data-aos-offset="500"
      data-aos-duration="2000"
    >
      <h3>البوول</h3>
      <img class="icon" src="../assets/hotel.png" />
      <p>
        هو النوع الأكثر عملية بين أنواع حمامات السباحة المختلفة، هو أحد أنواع
        حمامات السباحة الحديثة والمبتكرة، وهو حمام سباحة ذو مظهر يعتمد في عمله
        على آلة خارجية تثبت على حافة حوض السباحة مساحتها 80سم × 80سم، تقوم هذه
        الآلة بضخ المياه إلى حمام السباحة، كما تساهم في خلق تموجيات على سطح
        المسبح تزيده جمالاً وتجعل السباحة به أكثر متعةجمالي وجذاب
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#jum {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 150px;
  width: 100%;
  margin: 0px;
  padding: 0px;
  height: 1000px;
}
#jum #headerdiv {
  position: relative;
  transition: all, 2s;
  flex: 1 0 500px;
}
#jum #headerdiv h3 {
  font-size: 40px;
  letter-spacing: 2px;
}
#jum #headerdiv img {
  width: 70px;
  height: 60px;
}
#jum .phot {
  width: 250px;
  height: 250px;
  position: relative;
  border-radius: 5px;
}
#jum .leftdiv1 {
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 5px;
}

#jum .leftdiv2 {
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 5px;
}

#jum .rightdiv1 {
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 5px;
}

#jum .rightdiv2 {
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 5px;
}
.topdiv {
  position: relative;
  width: 300px;
  height: 200px;
}
.icon {
  width: 40px;
  height: 40px;
}
/*/desktop/*/
@media (max-width: 1366px) {
  #jum {
    top: -200px;
  }
  /*اقل سعر للغرف*/
  #jum .leftdiv1 {
    left: -170px;
    position: relative;
    top: 200px;
    flex: 1 0 10%;
  }
  /*>نوفر لك افضل وسائل الرح*/
  #jum .leftdiv2 {
    left: 90px;
    right: 0px;
    position: relative;
    top: 10px;
    flex: 1 0 15%;
  }
  /*ميزات الحجز لدينا*/
  #jum .rightdiv1 {
    left: -100px;
    position: relative;
    top: 200px;
    flex: 1 0 10%;
  }
  /*ملعبنا*/
  #jum .rightdiv2 {
    left: 200px;
    right: 0px;
    position: relative;
    top: -10px;
    flex: 1 0 10%;
  }
  /*البوول*/
  #jum .topdiv {
    top: -370px;
    right: 1000px;
    flex: 1 0 16%;
  }
  #headerdiv {
    left: 25rem;
  }
  /*الغرف*/
  #jum .phot {
    top: 10px;
    left: 300px;
    flex: 0 0 15%;
  }

  #jum div {
    position: relative;
  }
}
/*/tablet/*/
@media (max-width: 991px) {
  #jum {
    top: 100px;
    left: -150px;
  }
  #jum .leftdiv1 {
    left: 0px;
    top: 50px;
  }
  #headerdiv {
    left: rem;
  }
  .topdiv {
    top: -800px;
    left: -240px;
  }
  .phot {
    top: -510px;
    left: 270px;
  }
  /*اقل سعر للغرف*/
  #jum .leftdiv1 {
    left: 750px;
    right: 0px;
    position: relative;
    top: 200px;
    flex: 1 0 20%;
  }
  /*>نوفر لك افضل وسائل الرح*/
  #jum .leftdiv2 {
    left: 100px;
    right: 0px;
    position: relative;
    top: -12rem;
    flex: 1 0 15%;
  }
  /*ميزات الحجز لدينا*/
  #jum .rightdiv1 {
    left: -150px;
    right: 0px;
    position: relative;
    top: -200px;
    flex: 1 0 20%;
  }
  /*ملعبنا*/
  #jum .rightdiv2 {
    left: 450px;
    right: 0px;
    position: relative;
    top: -630px;
    flex: 1 0 20%;
  }
  /*البوول*/
  #jum .topdiv {
    left: -140px;
    right: 0px;
    position: relative;
    top: -300px;
    flex: 1 0 25%;
  }
  #headerdiv {
    left: 10rem;
  }
  /*الغرف*/
  #jum .phot {
    top: -230px;
    right: 0px;
    left: -110px;
    flex: 0 0 15%;
  }

  #jum div {
    position: relative;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  #jum {
    top: 10px;
  }
  /*اقل سعر للغرف*/
  #jum .leftdiv1 {
    left: 150px;
    right: 0px;
    position: relative;
    top: -100px;
    flex: 1 0 20%;
  }
  /*>نوفر لك افضل وسائل الرح*/
  #jum .leftdiv2 {
    left: 150px;
    right: 0px;
    position: relative;
    top: 150px;
    flex: 1 0 20%;
  }
  /*ميزات الحجز لدينا*/
  #jum .rightdiv1 {
    left: 0px;
    right: 0px;
    position: relative;
    top: 500px;
    flex: 1 0 20%;
  }
  /*ملعبنا*/
  #jum .rightdiv2 {
    left: 150px;
    right: 0px;
    position: relative;
    top: -450px;
    flex: 1 0 25%;
  }
  /*البوول*/
  #jum .topdiv {
    left: 30px;
    right: 0px;
    position: relative;
    top: -550px;
    flex: 1 0 40%;
  }
  #headerdiv {
    left: 150px;
  }
  /*الغرف*/
  #jum .phot {
    top: -200px;
    right: 0px;
    left: 500px;
    flex: 1 0 18%;
  }

  #jum div {
    position: relative;
  }
}
</style>
