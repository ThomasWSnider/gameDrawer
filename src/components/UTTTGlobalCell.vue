<script setup lang="ts">
import { computed } from "vue";
import { GlobalCell } from "../models/GlobalCell";
import { Appstate } from "../Appstate";
import { uTTTService } from "../services/UTTTService";


const props = defineProps<{ globalCell: GlobalCell, globalCellIndex: number, currentGameState: number, activeGlobalCell: number | null, boardSettled: boolean, localCellReset: boolean }>();
const globalBoard = computed(() => Appstate.ultimateTTT.board);
const emit = defineEmits(['moveMade'])

function handleMove(localCellIndex: number) {
  const moveIsValid = uTTTService.validateMove(props.currentGameState, props.globalCellIndex, localCellIndex);
  if (moveIsValid) {
    uTTTService.fillCell(props.globalCellIndex, localCellIndex);
    emit('moveMade')
    uTTTService.setActiveGlobalCell(localCellIndex);
    uTTTService.switchPlayer();
  }
  return;
}
</script>


<template>
  <section class="global-cell">

    <div class="d-flex justify-content-center align-items-center global-cell-indicator">
      <p class="fw-semibold" :class="{ 'd-none': globalBoard.globalCells[props.globalCellIndex].value === '' }">{{
        globalBoard.globalCells[props.globalCellIndex].value }}</p>
    </div>
    <div class="local-board"
      :class="{ 'invalid-cell': (activeGlobalCell !== null && globalCellIndex !== activeGlobalCell) || globalBoard.globalCells[props.globalCellIndex].value !== '' }">

      <div @click="handleMove(index)" v-for="(cell, index) in globalCell?.localCells" :key="index"
        class="local-cell d-flex justify-content-center align-items-center"
        :class="{ 'filled-in': cell != '' && localCellReset === false }">
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

  p {
    font-size: 9.75rem;
  }
}

.local-cell {
  pointer-events: auto;
  cursor: pointer;
  font-weight: bold;
  user-select: none;
  opacity: 0.2;
  transition: opacity .33s ease-in;

  &.filled-in {
    opacity: 1;
  }
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
  opacity: 1;
  transition: opacity .33s ease-in;


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