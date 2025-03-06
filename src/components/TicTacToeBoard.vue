<script setup lang="ts">
import { computed, ref } from "vue";
import { Appstate } from "../Appstate";
// @ts-ignore
import { ticTacToeService } from "../services/TicTacToeService";
// @ts-ignore
import GameStartEndOverlay from "./GameStartEndOverlay.vue";

const currentPlayer = computed(() => Appstate.ticTacToe.currentPlayer)
const playerSymbol = computed(() => Appstate.ticTacToe.players[Number(currentPlayer.value)])
const currentGameState = ref(0)
const board = computed(() => Appstate.ticTacToe.board)

function handleClick(cellIndex: number) {
  if (currentGameState.value != 0) {
    return;
  }
  if (board.value.cells[cellIndex] === "") {
    const winnerIs = ticTacToeService.fillCell(cellIndex, playerSymbol.value)
    if (winnerIs) {
      if (currentPlayer.value) currentGameState.value = 2;
      if (!currentPlayer.value) currentGameState.value = 1;
      return
    }
    if (!winnerIs && !board.value.cells.includes("")) {
      currentGameState.value = 3;
      return
    }
    else {
      ticTacToeService.switchPlayer()
    }
  }
  return
}

function resetGame() {
  ticTacToeService.resetGame()
  currentGameState.value = 0;
}

</script>


<template>
  <div class="mt-5"></div>
  <section class="board">
    <div @click="handleClick(index)" v-for="(cell, index) in board.cells" :key="index" class="cell">
      <p class="text-light display-2 filled-cell">{{ cell }}</p>
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
  <div class="w-75 text-center">
    <button @click="resetGame()" class="btn btn-outline-text w-100 mt-5 mb-3">Reset</button>
  </div>
  <GameStartEndOverlay :gameName="`Tic Tac Toe`" :gameResult="currentGameState" v-if="currentGameState != 0" />
</template>


<style lang="scss" scoped>
.board {
  width: 65dvh;
  height: 65dvh;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  pointer-events: none;
  user-select: none;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  cursor: pointer;

  p {
    font-weight: bold;
    user-select: none;
  }
}

.vertical-lines {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;

  div {
    height: 65dvh;
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
    width: 65dvh;
    height: 1.2rem;
    background-color: var(--bs-text);
  }
}

button {
  position: relative;
  z-index: 5;
}
</style>