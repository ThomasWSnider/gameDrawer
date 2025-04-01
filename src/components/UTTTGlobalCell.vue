<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { GlobalCell } from "../models/GlobalCell";
import { Appstate } from "../Appstate";
import { uTTTService } from "../services/UTTTService";


const props = defineProps<{ globalCell: GlobalCell, globalCellIndex: number }>();
const localBoard = computed(() => Appstate.ultimateTTT.board.globalCells[props.globalCellIndex].localCells);
const globalBoard = computed(() => Appstate.ultimateTTT.board);
const activeGlobalCell = computed(() => Appstate.ultimateTTT.activeGlobalCell);
// const playerSymbol = computed(() => Appstate.ticTacToe.players[Number(Appstate.ultimateTTT.currentPlayer)])
const currentGameState = ref(0)
// const boardSettled = ref(false)
// const cellReset = ref(false)


function fillLocalCell(localCellIndex: number) {
  if (currentGameState.value != 0) {
    return;
  }
  if (localBoard.value[localCellIndex] === "") {
    uTTTService.fillCell(props.globalCellIndex, localCellIndex);
  }

}

</script>


<template>
  <section class="global-cell">

    <div class="d-flex justify-content-center align-items-center global-cell-indicator">
      <p class="fw-semibold" :class="{ 'd-none': globalBoard.globalCells[props.globalCellIndex].value == '' }">{{
        globalBoard.globalCells[props.globalCellIndex].value }}</p>
    </div>
    <div class="local-board"
      :class="{ 'invalid-cell': (globalCellIndex != activeGlobalCell && activeGlobalCell !== null) || globalBoard.globalCells[globalCellIndex].value !== '' }">

      <div @click="fillLocalCell(index)" v-for="(cell, index) in globalCell?.localCells" :key="index"
        class="local-cell d-flex justify-content-center align-items-center">
        <p class="m-0 text-center fs-2">{{ cell }}</p>
      </div>

      <div class="vertical-lines justify-content-evenly">
        <div class="rounded-pill"></div>
        <div class="rounded-pill"></div>
      </div>
      <div class="horizontal-lines flex-column justify-content-evenly">
        <div class="rounded-pill"></div>
        <div class="rounded-pill"></div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.global-cell {
  width: 23dvh;
  height: 23dvh;
  position: relative;
  pointer-events: none;
  user-select: none;

}

.global-cell-indicator {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 1;
  z-index: 3;

  p {
    font-size: 9.75rem;
  }
}

.local-cell {
  pointer-events: auto;
  cursor: pointer;
}

.local-board {
  width: 23dvh;
  height: 23dvh;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  pointer-events: none;
  user-select: none;


  &.invalid-cell {
    opacity: 0.25;
  }
}

.vertical-lines {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;

  div {
    height: 23dvh;
    width: 0.3rem;
    background-color: var(--bs-text);
  }
}

.horizontal-lines {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;

  div {
    width: 23dvh;
    height: 0.3rem;
    background-color: var(--bs-text);
  }
}
</style>