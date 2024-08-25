<template>
  <div
      class="card"
      data-aos="fade-up"
      data-aos-offset="500"
      data-aos-duration="1000"
    >
      <div class="frontc">
        <label for=".card">
          <img src="../assets/h5.jpg" class="img-rounded" />
        </label>
      </div>
      <div class="discretion">
        <h3>head</h3>
        <p>gggg</p>
      </div>
    </div>
</template>
<style>
  .frontc {
  height: 100px;
  width: 250px;
  position: absolute;
  backface-visibility: hidden;
}
.frontc img {
  height: 200px;
  width: 200px;
  position: relative;
  top: ;
  left: 20px;
  z-index: 2;
}
.card {
  height: 100px;
  width: 300px;
  backface-color: #eee;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  align-content: center;
}
.discretion {
  position: relative;
  top: 100px;
  left: ;
  width: 100%;
  z-index: 0;
}
.card:hover {
  height: 300px;
}
</style>