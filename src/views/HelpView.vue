<template>
  <div class="my">
    <keep-alive><HelpContent /></keep-alive>
  </div>
</template>
<script>
import HelpContent from "@/components/HelpContent.vue";
export default {
  components: {
    HelpContent,
  },
  methods: {},
};
</script>
<style scoped>
li {
  text-align: center;
  background-color: red;
}

ol {
  list-style-type: none;
}
</style>
