<script setup lang="ts">
import { useRouter } from "vue-router";


const router = useRouter();


function sendToHome() {
  router.push({ name: "Home" })
}
</script>

<template>
  <main class="container-fluid">
    <router-view />
  </main>
  <button @click="sendToHome()" class="home-btn btn btn-outline-text rounded"><i
      class="mdi mdi-home m-0 p-0"></i></button>
</template>

<style scoped>
main {
  height: 100dvh;
  width: 100dvw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-btn {
  position: fixed;
  bottom: 8px;
  left: 8px;
}
</style>
