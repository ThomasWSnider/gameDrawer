<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();


function sendToHome() {
  router.push({ name: "Home" })
}
</script>

<template>
  <main class="container-fluid">
    <router-view />
  </main>
  <button v-if="route.name != 'Home'" @click="sendToHome()" class="home-btn btn btn-outline-text rounded"><i
      class="mdi mdi-home m-0 p-0"></i></button>
</template>

<style scoped>
main {
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-btn {
  position: fixed;
  bottom: 8px;
  left: 8px;
  z-index: 5;
}
</style>
