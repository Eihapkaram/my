<template>
  <div class="container-fluid" id="con">
    <div class="dis">
      <h3>hgghv</h3>
      <p>bggggff</p>
    </div>
    <img
      src="../assets/iphon.png"
      id="icon"
      data-aos="fade-up"
      data-aos-offset="500"
      data-aos-duration="3000"
    />
  </div>
</template>
<style>
#con {
  height: 500px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}
.dis {
  position: relative;
  left: 350px;
  top: 100px;
  border: 2px solid black;
  width: 400px;
  height: 300px;
}
#icon {
  width: 300px;
  height: 500px;
  position: relative;
  left: -350px;
}
</style>
