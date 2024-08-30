<template>
  <div class="container-fluid">
    <div class="image-container row">
      <header class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="h">
        اطلالات للغرف
      </header>
      <div
        class="image col-lg-4 col-md-4 col-sm-12 col-xs-12"
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-duration="1500"
      >
        <img src="../assets/h6.jpg" />
      </div>
      <div
        class="image col-lg-4 col-md-4 col-sm-12 col-xs-12"
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-duration="1500"
      >
        <img src="../assets/h7.jpg" />
      </div>
      <div
        class="image col-lg-4 col-md-4 col-sm-12 col-xs-12"
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-duration="1500"
      >
        <img src="../assets/h8.jpg" />
      </div>
      <div
        class="image col-lg-4 col-md-4 col-sm-12 col-xs-12"
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-duration="1500"
      >
        <img src="../assets/ho.jpg" />
      </div>
      <div
        class="image col-lg-4 col-md-4 col-sm-12 col-xs-12"
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-duration="1500"
      >
        <img src="../assets/ho1.jpg" />
      </div>
      <div
        class="image col-lg-4 col-md-4 col-sm-12 col-xs-12"
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-duration="1500"
      >
        <img src="../assets/ho2.jpg" />
      </div>
    </div>
    <div class="popup-image">
      <span>&times;</span>
      <img src="../assets/caf4.jpg" />
    </div>
  </div>
</template>
<script>
export default {
  mounted: function () {
    document.querySelectorAll(".image-container img").forEach((imge) => {
      imge.onclick = () => {
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src =
          imge.getAttribute("src");
      };
    });
    document.querySelector(".popup-image span").onclick = () => {
      document.querySelector(".popup-image").style.display = "none";
    };
  },
};
</script>
<style lang="css" scoped>
.container {
  position: relative;
  height: 150vh;
  background-color: transparent;
  border: 2px solid black;
}
#h {
  width: 300px;
  flex: 1 0 100%;
  top: -50px;
  position: relative;
  font-size: 40px;
  letter-spacing: 2px;
}
.image-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 10px;
  gap: 100px;
  position: relative;
  perspective: 1000px;
  perspective-origin: 200px;
}
.image-container .image {
  position: relative;
  height: 400px;
  width: 300px;
  overflow: hidden;
  cursor: pointer;
}
.image-container .image img {
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 2s linear;
  border-radius: 5px;
}
.popup-image {
  position: fixed;
  top: 0;
  left: 0;
  background: grey;
  height: 100%;
  width: 100%;
  z-index: 100;
  display: none;
}
.popup-image span {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 60px;
  font-weight: bolder;
  cursor: pointer;
  color: #fff;
  z-index: 100;
}
.popup-image img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  object-fit: cover;
}

/*tablate */
@media (max-width: 991px) {
  .popup-image img {
    width: 80%;
  }
  .image-container {
    gap: 0px;
    row-gap: 10px;
    column-gap: 0px;
  }
  .image-container .image {
    width: 300px;
    height: 400px;
    flex: 0 0 33%;
  }
}
/*laptop */
@media (max-width: 1366px) {
  .popup-image img {
    width: 80%;
  }
}
/*mobail */
@media (max-width: 500px) {
  .popup-image img {
    width: 95%;
  }
  .container {
    height: 400vh;
  }
  .image-container .image {
    width: 300px;
    height: 400px;
    flex: 0 0 60%;
  }
}
</style>
