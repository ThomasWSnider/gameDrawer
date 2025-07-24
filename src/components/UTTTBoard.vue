<script setup lang="ts">
import { computed, ref } from "vue";
import { Appstate } from "../Appstate";
import UTTTGlobalCell from "./UTTTGlobalCell.vue";
import { uTTTService } from "../services/UTTTService";


const board = computed(() => Appstate.ultimateTTT.board);
const currentGameState = ref(0);
const activeGlobalCell = computed(() => Appstate.ultimateTTT.activeGlobalCell);


function handleMove(globalCellIndex: number) {
  const localWinner = uTTTService.checkForLocalWinner(globalCellIndex);
  if (localWinner) {
    const globalWinner = uTTTService.checkForGlobalWinner();
    if (globalWinner && board.value.globalCells.every((globalCell) => globalCell.value !== "")) {
      currentGameState.value = 3;
    }
    if (globalWinner) {
      currentGameState.value = Appstate.ultimateTTT.currentPlayer ? 2 : 1;
    }
  }
}

</script>


<template>
  <section class="board">
    <div v-for="(globalCell, index) in board.globalCells" :key="index"
      class="d-flex justify-content-center align-items-center">
      <UTTTGlobalCell @moveMade="() => handleMove(index)" :globalCell="globalCell" :globalCellIndex="index"
        :currentGameState="currentGameState" :activeGlobalCell="activeGlobalCell" />
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