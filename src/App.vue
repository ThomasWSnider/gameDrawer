<script setup lang="ts">
import { Transition } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();


function sendToHome() {
  router.push({ name: "Home" })
}
</script>

<template>
  <main>
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <div class="container-fluid w-100" :key="route.path">
          <component :is="Component" />
        </div>
      </Transition>
    </router-view>
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.33s ease-in-out;
}

.fade-enter-from {
  transform: translateY(-15px);
  opacity: 0;
}

.fade-leave-to {
  transform: translateY(15px);
  opacity: 0;
}
</style>
