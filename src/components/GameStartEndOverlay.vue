<script setup>

const props = defineProps({ gameName: String })
</script>


<template>
  <section class="d-flex justify-content-center">
    <div class="banner-filter"></div>
    <p class="display-3 fw-bold">{{ props.gameName }}</p>
  </section>
</template>


<style lang="scss" scoped>
section {
  position: absolute;

  div.banner-filter {
    background-color: black;
    filter: opacity(80%);
    position: absolute;
  }

  p {
    color: var(--bs-text);
  }
}
</style>