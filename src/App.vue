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
        <div class="container-fluid w-100 h-100" :key="route.path">
          <component :is="Component" />
        </div>
      </Transition>
    </router-view>
  </main>
  <Transition name="fade" mode="out-in">
    <button v-if="route.name != 'Home'" @click="sendToHome()" class="home-btn btn btn-outline-text rounded"><i
        class="mdi mdi-home m-0 p-0"></i></button>
    <div v-else class="home-btn empty-div"></div>
  </Transition>
</template>

<style scoped>
main {
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.home-btn {
  position: fixed;
  bottom: 8px;
  left: 8px;
  z-index: 5;

  &.empty-div {
    aspect-ratio: 1/1;
    height: 38px;
    background-color: var(--bs-page);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.33s ease-in-out;
}

.fade-enter-from {
  transform: translateY(-25px);
  opacity: 0;
}

.fade-leave-to {
  transform: translateY(25px);
  opacity: 0;
}
</style>
