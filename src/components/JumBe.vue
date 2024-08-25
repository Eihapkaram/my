<template>
  <div class="container-fluid" id="jum">
    <div id="headerdiv" class="container-fluid">
      <h3><img src="../assets/social-care.gif" /> الخدمات</h3>
    </div>
    <div
      class="leftdiv1"
      data-aos="fade-up"
      data-aos-offset="500"
      data-aos-duration="2050"
    >
      <h3>نقل من والي المطار</h3>
      <img class="icon" src="../assets/road-map.png" />
      <p>hotil space is vary larg for have to your police</p>
    </div>
    <div
      class="rightdiv1"
      data-aos="fade-up"
      data-aos-offset="500"
      data-aos-duration="2050"
    >
      <h3>خدمه السباحه</h3>
      <img class="icon" src="../assets/floating.png" />
      <p>hotil space is vary larg for have to your police</p>
    </div>
    <div
      class="leftdiv2"
      data-aos="fade-up"
      data-aos-offset="500"
      data-aos-duration="2000"
    >
      <h3>المحلات/تجارية</h3>
      <img class="icon" src="../assets/market.png" />
      <p>hotil space is vary larg for have to your police</p>
    </div>
    <div
      class="rightdiv2"
      data-aos="fade-up"
      data-aos-offset="500"
      data-aos-duration="2000"
    >
      <h3>خدمه البنك</h3>
      <img class="icon" src="../assets/bank.png" />
      <p>hotil space is vary larg for have to your police</p>
    </div>
    <div
      class="phot"
      src="@/assets/hotl.png"
      data-aos="fade-up"
      data-aos-offset="500"
      data-aos-duration="2000"
    >
      <h3>خدمه الامن</h3>
      <img class="icon" src="../assets/police-officer.png" />
      <p>hotil space is vary larg for have to your police</p>
    </div>
    <div
      class="topdiv"
      data-aos="fade-up"
      data-aos-offset="500"
      data-aos-duration="2000"
    >
      <h3>خدمه الغرف</h3>
      <img class="icon" src="../assets/hotel.png" />
      <p>hotil space is vary larg for have to your police</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="css">
#jum {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 0px;
  padding: 0px;
  height: 1000px;
  top: 100px;
}
#jum #headerdiv {
  position: relative;
  transition: all, 2s;
  flex: 1 0 100%;
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
</style>
