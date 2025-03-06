<script setup>
import { computed } from "vue";
import { Appstate } from "../Appstate";
import { ticTacToeService } from "../services/TicTacToeService";

const props = defineProps({ gameName: String, gameResult: Number })
const gameResult = computed(() => Appstate.ticTacToe.gameStates[props.gameResult])

</script>


<template>
  <section>
    <div class="banner-filter"></div>
    <div class="game-title text-center d-flex flex-column justify-content-between">
      <p class="display-3 fw-bold">{{ gameResult }}</p>
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
    z-index: 1;
  }
}

.game-title {
  position: relative;
  width: 100dvw;
  height: 100dvh;
  z-index: 2;
}

p {
  color: var(--bs-text);
}
</style>