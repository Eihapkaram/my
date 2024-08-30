<template>
  <body>
    <div class="home">
      <HelloWorld msg="Welcome in Vista hotel" />
      <JumBe />
      <CardCom />
      <GallaryCom />
      <CardRoom />
    </div>
  </body>
</template>

<script>
import CardCom from "@/components/CardCom.vue";
import JumBe from "@/components/JumBe.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import CardRoom from "../components/CardRoom.vue";
import GallaryCom from "../components/GallaryCom.vue"
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    JumBe,
    CardCom,
    CardRoom,
   GallaryCom,
  },
};
</script>
<style>
body {
  /* background-repeat: no-repeat;
  background-size: cover;
  background-position: center;*/
}
</style>
