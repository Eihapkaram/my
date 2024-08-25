<template>
  <div class="container-fluid" id="foot">
    <div id="dfg0" class="row">
      <h3>follow us on</h3>
      <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <a id="e" href="www.facebook.com">
          <label for="e"><img id="v" src="../assets/google.png" /></label>
        </a>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <a id="t" href="www.youtube.com">
          <label for="t"><img id="v" src="../assets/instagram.png" /></label>
        </a>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <a id="c" href="www.facebook.com">
          <label for="c"><img id="v" src="../assets/youtube.png" /></label>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
#foot {
  position: relative;
  width: 100%;
  top: 0px;
  background-color: rgba(244, 244, 246, 0);
}
#foot #dfg0 a img {
  width: 50px;
  height: 50px;
  margin-left: 0px;
  margin-top: 100px;
  position: relative;
  left: px;
  bottom: px;
  cursor: pointer;
}
#foot #dfg0 h3 {
  text-align: center;
  position: relative;
  bottom: px;
  left: px;
}
#foot #dfg0 {
  display: flex;
  flex-flow: row, wrap;
  justify-content: space-between;
  align-content: center;
}
</style>
