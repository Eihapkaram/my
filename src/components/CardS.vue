<template>
    <div class="container-fluid" id="con">
    <div class="card" id="card1">
      <img src="@/assets/caf1.jpeg" class="img-rounded" />
      <div class="card-duscrption">
        <h3>card</h3>
        <span>cards</span>
      </div>
    </div>
    <div class="card" id="card2">
      <img src="@/assets/caf1.jpeg" class="img-rounded" />
      <div class="card-duscrption">
        <h3>card</h3>
        <span>cards</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .card img {
  width: 300px;
  height: 400px;
  border-radius: 5px;
}
.card:hover {
  transform: rotateY(180deg);
  transition: all, 3s;
}
#con {
  border: 2px solid black;
  height: 600px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  gap: 20px;
  perspective: 800px;
}
</style>