<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { GlobalCell } from "../models/GlobalCell";
import { Appstate } from "../Appstate";
import { uTTTService } from "../services/UTTTService";


const props = defineProps<{ globalCell: GlobalCell, globalCellIndex: number }>();
const localBoard = computed(() => Appstate.ultimateTTT.board.globalCells[props.globalCellIndex].localCells);
const globalBoard = computed(() => Appstate.ultimateTTT.board);
const activeGlobalCell = computed(() => Appstate.ultimateTTT.activeGlobalCell);
const playerSymbol = computed(() => Appstate.ticTacToe.players[Number(Appstate.ultimateTTT.currentPlayer)])
const currentGameState = ref(0)
const boardSettled = ref(false)
const cellReset = ref(false)

function fillLocalCell(index: number) {
  uTTTService.fillCell(props.globalCellIndex, index);
  console.log(`You clicked on local cell ${index + 1} on global cell ${props.globalCellIndex + 1}`);
  return;
}

</script>


<template>
  <section class="global-cell"
    :class="{ 'invalid-cell': globalCellIndex != activeGlobalCell && activeGlobalCell != null }">
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
  </section>
</template>


<style lang="scss" scoped>
.global-cell {
  width: 23dvh;
  height: 23dvh;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  pointer-events: none;
  user-select: none;

  &.invalid-cell {
    opacity: 25%;
  }
}

.local-cell {
  pointer-events: auto;
  cursor: pointer;
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