<template>
  <div class="about">
    <AboutJum />
    <AboutCard />
  </div>
</template>
<script>
import AboutCard from "@/components/AboutCard.vue";
import AboutJum from "@/components/AboutJum.vue";
export default {
  components: {
    AboutJum,
    AboutCard,
  },
};
</script>
