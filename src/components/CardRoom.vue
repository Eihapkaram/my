<template>
  <br />
  <div class="container-fluid" id="location">
    <header>
      <img src="../assets/road-map.png" width="40px" height="40px" />
      location
    </header>
    <iframe
      src="https://maps.google.com/maps?q=egypt%20Cairo%20university%20&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    >
    </iframe>
  </div>
  <div class="container-fluid" id="bookercon">
    <h3 id="head">
      <div id="btnbook">احجز غرفتك الان</div>
    </h3>
    <form @submit.prevent="mybt3" id="form">
      <div id="na">
        <div id="placeh">
          <label for="namein"><span>your name: </span></label>
        </div>
        <input required id="namein" type="text" v-model="booker.fillname" />
      </div>
      <div id="em">
        <div id="placeh">
          <label for="emilin"><span>your Email: </span></label>
        </div>
        <input required id="emilin" type="email" v-model="booker.email" />
      </div>
      <div id="carid">
        <div id="placeh">
          <label for="idin"><span>your id: </span></label>
        </div>
        <input required id="idin" type="number" v-model="booker.id" />
      </div>
      <div id="carphone">
        <div id="placeh">
          <label for="phonee"><span>your phone: </span></label>
        </div>
        <input required id="phonee" type="number" v-model="booker.phone" />
      </div>
      <div id="cardata">
        <div id="placeh">
          <label for="idin2"><span>your id2: </span></label>
        </div>
        <input
          required
          id="idin2"
          type="nember"
          v-model="booker.cardinfo.code"
        />
      </div>
      <div id="carin">
        <div id="placeh">
          <label for="idin3"><span>your id3: </span></label>
        </div>
        <input required id="idin3" type="number" v-model="booker.cardinfo.id" />
      </div>
      <div id="chin">
        <div id="placeh">
          <label for="checkiin"><span>chek in data: </span></label>
        </div>
        <input required id="checkiin" type="date" v-model="booker.checkin" />
      </div>
      <div id="chout">
        <div id="placeh">
          <label for="checkout"><span>chek out data: </span></label>
        </div>
        <input required id="checkout" type="date" v-model="booker.checkout" />
      </div>
      <div id="garandp">
        <div>
          <input
            required
            id="gin1"
            type="radio"
            value="mail"
            v-model="booker.garand"
          /><span><label for="gin1">mail</label></span>
        </div>
        <div>
          <input
            required
            id="gin2"
            type="radio"
            value="femail"
            v-model="booker.garand"
          /><label for="gin2">femail</label>
        </div>
      </div>
      <div>
        <div id="placeh1">
          <label for="room"><span>booking room: </span></label>
        </div>
        <input required id="room" type="number" v-model="booker.room" />
      </div>
      <button id="sub">book room</button>
    </form>
  </div>
  <div id="datebook" class="container-fluid">
    <ul>
      <li v-for="(booker, i) in bookers" :key="i">
        <p>name: {{ booker.fillname }}</p>
        <p>email: {{ booker.email }}</p>
        <p>id: {{ booker.id }}</p>
        <p>garand: {{ booker.room }}</p>
        <p>phone: {{ booker.phone }}</p>
        <p>card code: {{ booker.cardinfo.code }}</p>
        <p>card id: {{ booker.cardinfo.id }}</p>
        <p>check in date: {{ booker.checkin }}</p>
        <p>check out date: {{ booker.checkout }}</p>
        <p>garand: {{ booker.garand }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      myhov: false,
      mycom: "",
      mycom2: false,
      bookers: [],
      booker: {
        fillname: "",
        email: "",
        id: "",
        checkin: "",
        checkout: "",
        garand: "",
        phone: "",
        room: "",
        cardinfo: {
          code: "",
          id: "",
        },
      },
    };
  },
  mounted: function () {
    window.setTimeout(function () {
      $("#btnbook").css({ "background-color": "transparent", border: "none" });
      $("input").focus(function () {
        $(this).prev().addClass("focus");
      });
      $("input").blur(function () {
        $(this).prev().removeClass("focus");
      });
      $("input").keydown(function () {
        $(this).prev().hide();
      });
    }, 200);
  },
  methods: {
    mybt3() {
      this.bookers.push(this.booker);
      this.booker = {
        fillname: "",
        email: "",
        id: "",
        checkin: "",
        checkout: "",
        garand: "",
        phone: "",
        room: "",
        cardinfo: {
          code: "",
          id: "",
        },
      };
    },
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
div {
  transition: all, 3s;
}
#form input {
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  background-color: #fff;
  opacity: 0.6;
}
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
  width: 400px;
  height: 300px;
}
#icon {
  width: 300px;
  height: 500px;
  position: relative;
  left: -350px;
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
  width: 200px;
  flex: 1 0 100%;
  top: -15px;
  position: relative;
  font-size: 40px;
  letter-spacing: 2px;
}
#bookercon {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  position: relative;
  height: 900px;
  background-color: transparent;
  top: 20px;
  text-align: center;
}
#bookercon img {
  width: 60px;
  height: 60px;
}
#head {
  position: relative;
  flex: 1 0 100%;
  font-size: 40px;
  font-style: italic;
}
/*background-image: url("../assets/user.png");
  background-repeat: no-repeat;
  padding-left: 15px;
  background-size:50px;*/
#namein {
  background-image: url("../assets/user.png");
  background-size: 40px;
  background-repeat: no-repeat;
  background-position-y: 10px;
}
#emilin {
  background-image: url("../assets/envelope.png");
  background-repeat: no-repeat;
  background-size: 30px;
  background-position-y: 15px;
}
#checkout {
}
#checkiin {
}
#idin {
  background-image: url("../assets/atm-card.png");
  background-repeat: no-repeat;
  background-size: 40px;
  background-position-y: 10px;
}
#idin2 {
  background-image: url("../assets/atm-card.png");
  background-repeat: no-repeat;
  background-size: 40px;
  background-position-y: 10px;
}
#idin3 {
  background-image: url("../assets/atm-card.png");
  background-repeat: no-repeat;
  background-size: 40px;
  background-position-y: 10px;
}
#gin1 {
}
#gin2 {
}
#phonee {
  background-image: url("../assets/iphone.png");
  background-repeat: no-repeat;
  background-size: 35px;
  background-position-y: 10px;
}
#room {
  background-image: url("../assets/keys.gif");
  background-repeat: no-repeat;
  background-size: 40px;
  background-position-y: 15px;
}
#sub {
  top: 50px;
  transition: all 3s;
  background-color: #e0ddddb1;
}
#sub:hover {
  background-color: #fff;
}
.focus {
  transform: translateY(-20px);
  opacity: 1;
  transition: all, 2s;
  color: blue;
  font-size: 50;
}
</style>
