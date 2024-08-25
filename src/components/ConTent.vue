<template>
  <div class="container-fluid" id="corsal">
    <video src="../assets/hotlvid.mp4" id="intro" loop autoplay muted></video>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="scss">
#corsal {
  display: inline, block;
  width: 100%;
  top: -100px;
  position: relative;
  z-index: -5;
}
#intro {
  width: 100%;
}
</style>
