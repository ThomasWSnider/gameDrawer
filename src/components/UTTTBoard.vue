<script setup>
import { computed } from "vue";
import { Appstate } from "../Appstate";
import UTTTGlobalCell from "./UTTTGlobalCell.vue";


const board = computed(() => Appstate.ultimateTTT.board)

</script>


<template>
  <section class="board">
    <div v-for="(globalCell, index) in board.globalCells" :key="index"
      class="d-flex justify-content-center align-items-center">
      <UTTTGlobalCell :globalCell="globalCell" :globalCellIndex="index" />
    </div>
    <div class="vertical-lines justify-content-evenly">
      <div class="rounded-pill"></div>
      <div class="rounded-pill"></div>
    </div>
    <div class="horizontal-lines flex-column justify-content-evenly">
      <div class="rounded-pill"></div>
      <div class="rounded-pill"></div>
    </div>
  </section>

</template>


<style lang="scss" scoped>
.board {
  width: 90dvh;
  height: 90dvh;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  pointer-events: none;
  user-select: none;
}

.vertical-lines {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  z-index: 4;


  div {
    height: 90dvh;
    width: 1.2rem;
    background-color: var(--bs-text);
  }
}

.horizontal-lines {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  z-index: 4;


  div {
    width: 90dvh;
    height: 1.2rem;
    background-color: var(--bs-text);
  }
}
</style>