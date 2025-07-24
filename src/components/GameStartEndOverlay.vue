<script setup lang="ts">
import { Appstate } from "../Appstate";

const props = defineProps<{ gameName: string, gameResult: number }>();
const currentGameResult = Appstate.currentGame?.gameStates[props.gameResult];

</script>


<template>
  <section>
    <div class="banner-filter"></div>
    <div class="game-title text-center d-flex flex-column justify-content-between">
      <p class="display-3 fw-bold">{{ currentGameResult }}</p>
      <div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
section {
  position: absolute;
  top: 0;
  left: 0;

  div.banner-filter {
    background-color: black;
    filter: opacity(80%);
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100dvh;
    width: 100dvw;
    z-index: 2;
  }
}

.game-title {
  position: relative;
  width: 100dvw;
  height: 100dvh;
  z-index: 3;
}

p {
  color: var(--bs-text);
}
</style>