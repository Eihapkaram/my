<template>
  <div id="asd">
    <ul id="menu">
      <button id="bt" @click="mybt()" v-show="myside">
        <label for="bt">
          <img src="@/assets/menu-burger.png" />
        </label>
      </button>
      <button id="bt2" @click="mybt2">
        <label for="bt2">
          <img src="@/assets/x.png" />
        </label>
      </button>
      <li id="li1"><a id="l" href="#jum">service</a></li>
      <li><a id="l" href="#bookercon">book room</a></li>
      <li><a id="l" href="#location">location</a></li>
      <li><a id="l" href="#gallery">room view</a></li>
      <li><a id="l" href="HelpView">contact us</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myside: true,
    };
  },
  methods: {
    mybt() {
      this.myside = false;
      window.asd.style.left = "0px";
    },
    mybt2() {
      window.asd.style.left = "-240px";
      this.myside = true;
    },
  },
  mounted() {},
};
</script>
<style scoped>
ul {
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 100%;
  padding: 0px;
}
#asd {
  background-color: #e9e9e9;
  height: 130rem;
  width: 15rem;
  border: ;
  display: flex;
  flex-flow: row wrap;
  justify-content: ;
  align-content: start;
  position: absolute;
  top: 0px;
  left: -240px;
  transition: all, 3s;
  position: fixed;
  z-index: 20;
}
ul li {
  list-style-type: none;
  padding: 20px;
  margin: 0px;
  transition: all, 3s;
  align-self: center;
  width: 100%;
  text-align: center;
  border-radius: 5px;
}
ul li a {
  text-decoration: none;
  padding: 50px;
  font-size: 16px;
  color: #2e2e2e;
}
ul li:hover {
  background-color: #ffffffde;
}
#bt {
  position: absolute;
  top: 300px;
  left: 240px;
  padding: 5px;
  border-radius: 5px;
  background-color: #efefef;
  z-index: 2;
  border: 2px solid #efefef;
}
#bt img {
  width: 40px;
  height: 40px;
}
#bt2 {
  position: absolute;
  top: 300px;
  left: 240px;
  padding: 5px;
  border-radius: 5px;
  background-color: #efefef;
  z-index: 0;
  border: 2px solid #efefef;
}
#bt2 img {
  width: 40px;
  height: 40px;
}
</style>
