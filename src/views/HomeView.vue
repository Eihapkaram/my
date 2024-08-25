<template>
  <body>
    <div class="home">
      <HelloWorld msg="Welcome in Vista hotel" />
      <JumBe />
      <CardCom />
      <RoomV1 />
      <RoomV2 />
      <CardRoom />
    </div>
  </body>
</template>

<script>
import CardCom from "@/components/CardCom.vue";
import JumBe from "@/components/JumBe.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import CardRoom from "../components/CardRoom.vue";
import RoomV1 from "@/components/RoomV1.vue";
import RoomV2 from "@/components/RoomV2.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    JumBe,
    CardCom,
    CardRoom,
    RoomV1,
    RoomV2,
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
