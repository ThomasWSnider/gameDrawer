<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { Appstate } from "../Appstate";
import UTTTGlobalCell from "./UTTTGlobalCell.vue";
import { uTTTService } from "../services/UTTTService";
import GameStartEndOverlay from "./GameStartEndOverlay.vue";
import { gameService } from "../services/GameService";
import { UltimateTicTacToe } from "../models/UltimateTicTacToe";
import { GlobalCell } from "../models/GlobalCell";


const board = computed(() => Appstate.ultimateTTT.board);
const currentGameState = ref(0);
const activeGlobalCell = computed(() => Appstate.ultimateTTT.activeGlobalCell);
const boardSettled = ref(false);
const localCellReset = ref(false);
const resetKey = ref(0);

onMounted(() => {
  gameService.startUltimateTTT(["X", "O"]);
})

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

function resetGame() {
  boardSettled.value = true;
  localCellReset.value = true;
  currentGameState.value = 0;
  setTimeout(() => {
    localCellReset.value = false
    gameService.startUltimateTTT(["X", "O"]);
    resetKey.value++;
    boardSettled.value = false;
  }, 333)
}

</script>


<template>
  <div>
    <section class="board">
      <div v-for="(globalCell, index) in board.globalCells" :key="index"
        class="d-flex justify-content-center align-items-center">
        <UTTTGlobalCell @moveMade="() => handleMove(index)" :globalCell="globalCell" :globalCellIndex="index"
          :currentGameState="currentGameState" :activeGlobalCell="activeGlobalCell" :boardSettled="boardSettled"
          :localCellReset="localCellReset" />
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
    <div class="reset-btn text-center">
      <button @click="resetGame()" class="btn btn-outline-text">Reset</button>
    </div>
    <Transition>
      <GameStartEndOverlay :gameName="`Ultimate Tic Tac Toe`" :gameResult="currentGameState"
        v-if="currentGameState != 0" />
    </Transition>
  </div>

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


.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.vertical-lines {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;


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


  div {
    width: 90dvh;
    height: 1.2rem;
    background-color: var(--bs-text);
  }
}

.reset-btn {
  position: fixed;
  bottom: 8px;
  left: 65px;
  height: 38.18px;
  width: 12rem;
  z-index: 5;

  button {
    width: 100%;
  }
}
</style>