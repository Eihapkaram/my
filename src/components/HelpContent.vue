<template>
  <div id="conhelp" class="container-fluid">
    <form id="conhelp1" @submit.prevent="btn">
      <h3 id="hed">write youer problem</h3>
      <textarea
        required
        placeholder="wirte problem detilse"
        id="txt"
        @keydown="act"
      ></textarea>
      <input type="submit" id="btn" @click="act2" />
    </form>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      my: false,
      txt1: 1,
    };
  },
  methods: {
    act() {
      this.my = true;
    },
    act2() {
      if (this.my) {
        $("#conhelp1").text("done");

        /*.append('<img id="hj" src="../assets/alert.gif" />');
        $("#h").hide();
        $("#hj").css({ width: "200px", height: "200px", flex: "0 0 100%" });*/
      }
    },
  },
  mounted: function () {
    window.setTimeout(function () {
      $("#btn").click(
        function () {
          $("#conhelp1").fadeOut(2000);
          $("#h").hide();
        },
        function () {}
      );
    }, 200);
  },
};
</script>
<style lang="css" scoped>
#conhelp {
  height: 400px;
  width: 400px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  gap: 20px;
}
#txt {
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  height: 200px;
}
#conhelp1 {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  gap: 50px;
}
#btn {
  outline: none;
  border: none;
}
</style>
>
