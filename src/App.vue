<template>
  <NavMin />
  <ConTent />
  <br /><br />
  <AsidCon />
  <router-view />
  <br />
  <FooTer />
</template>

<script>
import AsidCon from "@/components/AsidCon.vue";
import NavMin from "@/components/NavMin.vue";
import ConTent from "@/components/ConTent.vue";
import FooTer from "@/components/FooTer.vue";
export default {
  components: {
    NavMin,
    ConTent,
    AsidCon,
    FooTer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding-top: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #307f5b;
    }
  }
}

/*/desktop/*/
@media (max-width: 1366px) {
  #jum {
    gap: 150px;
  }
  /*نقل من و الي */
  #jum .leftdiv1 {
    left: 500px;
    position: relative;
    top: 200px;
  }
  /*المحلات*/
  #jum .leftdiv2 {
    left: -0px;
    right: px;
    position: relative;
    top: -120px;
    flex: 1 0 30%;
  }
  /*السباحه*/
  #jum .rightdiv1 {
    left: 500px;
    right: 0px;
    position: relative;
    top: 200px;
  }
  /*البنك*/
  #jum .rightdiv2 {
    left: 100px;
    right: 0px;
    position: relative;
    top: -240px;
  }
  /*الغرف*/
  #jum .topdiv {
    top: -560px;
    right: 990px;
    flex: 1 0 20%;
  }
  #headerdiv {
    left: -1rem;
  }
  /*الامن*/
  #jum .phot {
    top: -530px;
    right: 0px;
    flex: 1 0 30%;
  }

  #jum div {
    position: relative;
  }
  #form {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 600px;
    gap: 10px;
    position: relative;
  }
  #form input {
    width: 100%;
    margin-bottom: 5px;
    position: relative;
    display: block;
    padding: 8px 8px 8px 50px;
    outline: none;
    font-size: 20px;
    border-radius: 5px;
  }
  #form span {
    position: relative;
  }

  #form div {
    position: relative;
    text-align: center;
    margin: 0px;
  }
  #na {
    flex: 1 0 40%;
  }
  #em {
    flex: 1 0 40%;
  }
  #carin {
    flex: 1 0 40%;
  }
  #cardata {
    flex: 1 0 40%;
  }
  #carid {
    flex: 1 0 40%;
  }
  #carphone {
    flex: 1 0 40%;
  }
  #chin {
    margin-right: px;
    flex: 1 0 40%;
  }
  #chout {
    flex: 1 0 40%;
  }
  #garandp {
    display: flex;
    flex-flow: row wrap;
    position: relative;
    gap: 10rem;
    flex: 1 0 100%;
    left: 0;
  }
  #garandp div {
    left: 35rem;
  }
  #room {
    flex: 1 0 100%;
    left: 20px;
  }
  #placeh {
    top: 35px;
    left: 0px;
    opacity: 0.6;
    z-index: 4;
  }
  #placeh1 {
    top: 35px;
    left: 80px;
    opacity: 0.6;
    z-index: 4;
  }
  #sub {
    top: 50px;
    transition: all 3s;
    background-color: #e0ddddb1;
    flex: 1 0 100%;
    width: 100%;
    margin-bottom: 5px;
    position: relative;
    display: block;
    padding: 8px 8px 8px 50px;
    outline: none;
    font-size: 20px;
    border-radius: 5px;
    border: none;
  }
  #con2 {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    margin-block: 80px;
  }
  #con0 {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    margin-block: 80px;
  }
  #card3 {
    flex: 1 0 50%;
    margin-inline: 0px;
    margin-block: 10px;
    left: 50px;
    width: 100;
    height: 400px;
  }
  #card4 {
    flex: 0 0 50%;
    margin-inline: 0px;
    margin-block: 10px;
    left: 50px;
    width: 10px;
    height: 400px;
  }
  .front img {
    height: 400px;
    width: 260px;
    border-radius: 5px;
  }
  #big {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    height: auto;
    position: relative;
    margin-block-start: 18rem;
    top: -300px;
  }
  #myrow {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    position: relative;
    column-gap: 12%;
    flex: 0 0 84%;
  }
  #myimg {
    position: relative;
    height: 400px;
    border-radius: 10px;
    flex-grow: 0;
    width: 260px;
  }
  #conhelp {
    width: 400px;
  }
}
/*/tablet/*/
@media (max-width: 991px) {
  #jum {
    gap: 150px;
  }
  /*نقل من و الي */
  #jum .leftdiv1 {
    left: 0px;
    top: 50px;
  }
  /*المحلات*/
  #jum .leftdiv2 {
    left: 0px;
    right: 0px;
    position: relative;
    top: 70px;
  }
  /*السباحه*/
  #jum .rightdiv1 {
    left: 0px;
    right: 0px;
    position: relative;
    top: 50px;
  }
  /*البنك*/
  #jum .rightdiv2 {
    left: 0px;
    right: 0px;
    position: relative;
    top: 70px;
  }
  /*الغرف*/
  #jum .topdiv {
    top: -800px;
    left: -250px;
  }
  #headerdiv {
    left: 0rem;
  }
  /*الامن*/
  #jum .phot {
    top: -510px;
    left: 220px;
  }

  #jum div {
    position: relative;
  }
  #form {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 600px;
    gap: 10px;
    position: relative;
  }

  #form input {
    width: 100%;
    margin-bottom: 5px;
    position: relative;
    display: block;
    padding: 8px 8px 8px 50px;
    outline: none;
    font-size: 20px;
    border-radius: 5px;
  }

  #form span {
    position: relative;
  }

  #form div {
    position: relative;
    text-align: center;
    margin: 0px;
    left: 0px;
  }
  #con2 {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    margin-block: 80px;
  }
  #con0 {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    margin-block: 80px;
  }
  #na {
    flex: 1 0 40%;
  }
  #em {
    flex: 1 0 40%;
  }
  #carin {
    flex: 1 0 40%;
  }
  #cardata {
    flex: 1 0 40%;
  }
  #carid {
    flex: 1 0 40%;
  }
  #carphone {
    flex: 1 0 40%;
  }
  #chin {
    margin-right: px;
    flex: 1 0 40%;
  }
  #chout {
    flex: 1 0 40%;
  }
  #garandp {
    display: flex;
    flex-flow: row wrap;
    position: relative;
    gap: 10rem;
    flex: 1 0 100%;
    left: 0rem;
  }
  #garandp div {
    left: 15rem;
  }
  #sub {
    flex: 0 0 100%;
  }
  #card3 {
    flex: 1 0 40%;
    margin-inline: 0px;
    margin-block: 10px;
    left: 0px;
    width: 100;
    height: 400px;
  }
  #card4 {
    flex: 0 0 50%;
    margin-inline: 0px;
    margin-block: 10px;
    left: 0px;
    width: 10px;
    height: 400px;
  }
  .front img {
    height: 400px;
    width: 260px;
    border-radius: 5px;
  }
  /*contener aboutcard */
  #big {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    height: auto;
    position: relative;
    margin-block-start: 15px;
    margin-block-end: 150px;
    top: 100px;
  }
  /*row aboutcard */
  #myrow {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    position: relative;
    gap: 0px;
    flex: 1 0 80%;
  }
  /*img card aboutcard */
  #myimg {
    position: relative;
    height: 400px;
    border-radius: 10px;
    flex-grow: 0;
    width: 250px;
    flex: 0 0 30%;
  }
  #placeh {
    top: 35px;
    left: 100px;
    opacity: 0.6;
    z-index: 4;
  }
  #placeh1 {
    top: 35px;
    left: 80px;
    opacity: 0.6;
    z-index: 4;
  }
  #conhelp {
    width: 400px;
  }
}

/*/mobile/*/
@media (max-width: 500px) {
  #jum {
    gap: 100px;
  }
  /*نقل من و الي */
  #jum .leftdiv1 {
    left: 0px;
    right: 0px;
    position: relative;
    top: 60px;
    flex: 1 0 15%;
  }
  /*المحلات*/
  #jum .leftdiv2 {
    left: 0px;
    right: 0px;
    position: relative;
    top: 80px;
    flex: 1 0 30%;
  }
  /*السباحه*/
  #jum .rightdiv1 {
    left: 0px;
    right: 0px;
    position: relative;
    top: 380px;
    flex: 1 0 10%;
  }
  /*البنك*/
  #jum .rightdiv2 {
    left: 0px;
    right: 0px;
    position: relative;
    top: -240px;
    flex: 1 0 10%;
  }
  /*الغرف*/
  #jum .topdiv {
    left: -110px;
    right: 0px;
    position: relative;
    top: -400px;
    flex: 1 0 15%;
  }
  #headerdiv {
    left: -15px;
  }
  /*الامن*/
  #jum .phot {
    top: -680px;
    right: 0px;
    left: 120px;
  }

  #jum div {
    position: relative;
  }

  #con2 {
    height: 600px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    position: relative;
    gap: 0px;
    width: 100%;
    margin-block: 0px;
  }
  #con0 {
    height: 600px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    position: relative;
    gap: 10px;
    width: 100%;
    margin-block: 0px;
  }
  #con4 {
    perspective: 800px;
  }
  #con3 {
    perspective: 800px;
  }
  #na {
    flex: 1 0 40%;
  }
  #em {
    flex: 1 0 40%;
  }
  #carin {
    flex: 1 0 40%;
  }
  #cardata {
    flex: 1 0 40%;
  }
  #carid {
    flex: 1 0 40%;
  }
  #carphone {
    flex: 1 0 40%;
  }
  #chin {
    margin-right: px;
    flex: 1 0 40%;
  }
  #conhelp {
    width: 350px;
  }
  #chout {
    flex: 1 0 40%;
  }
  #garandp {
    display: flex;
    flex-flow: row wrap;
    position: relative;
    gap: 10rem;
    flex: 1 0 100%;
    left: 0rem;
  }
  #garandp div {
    left: 1rem;
  }
  #con2 {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    position: relative;
    gap: px;
    width: 100%;
    height: 85rem;
    margin-block: 10px;
  }
  #con0 {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    position: relative;
    gap: px;
    width: 100%;
    height: 85rem;
    margin-block: 10px;
  }
  #card3 {
    flex: 1 0 50%;
    margin-inline: 100px;
    margin-block: 10px;
    height: 400px;
    width: 200px;
  }
  #card4 {
    flex: 1 0 50%;
    margin-inline: 35px;
    margin-block: 10px;
    height: 400px;
    width: 200px;
  }
  .front img {
    height: 400px;
    width: 260px;
    border-radius: 5px;
  }
  #big {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    height: auto;
    position: relative;
    margin-block-start: 15px;
    margin-block-end: 300px;
    top: 100px;
  }
  #myrow {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-content: center;
    position: relative;
    gap: 10px;
    flex: 0 0 50%;
    top: 180px;
  }
  #myimg {
    position: relative;
    width: 260px;
    height: 400px;
    border-radius: 10px;
  }
  #placeh {
    top: 35px;
    left: 0px;
    opacity: 0.6;
    z-index: 4;
  }
}
</style>
