<script setup lang="ts">
import { computed, ref } from "vue";
import { Appstate } from "../Appstate";
// @ts-ignore
import GameStartEndOverlay from "./GameStartEndOverlay.vue";

const currentPlayer = ref(false)
const playerSymbol = computed(() => Appstate.ticTacToe.players[Number(currentPlayer.value)])
const currentGameState = ref(0)
const board = computed(() => Appstate.ticTacToe.board)

function handleClick(cellIndex: number) {
  if (currentGameState.value != 0) return
  if (board.value.cells[cellIndex] === "") {
    board.value.cells[cellIndex] = playerSymbol.value;
    const winnerIs = checkForWinner(playerSymbol.value);
    currentPlayer.value = !currentPlayer.value;
    if (winnerIs) {
      if (currentPlayer.value) currentGameState.value = 2;
      if (!currentPlayer.value) currentGameState.value = 1;
    }
    if (!winnerIs && !board.value.cells.includes("")) {
      currentGameState.value = 3;
    }
  }
  return
}

function checkForWinner(playerSymbol: string) {
  const winStates = Appstate.ticTacToe.winStates;
  const gameBoard = board.value.cells;
  for (const combination of winStates) {
    const [a, b, c] = combination;
    if (gameBoard[a] === playerSymbol && gameBoard[b] === playerSymbol && gameBoard[c] === playerSymbol) return true;
  }
  return false;
}


</script>


<template>
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
  <GameStartEndOverlay :gameName="`Tic Tac Toe`" v-if="currentGameState != 0" />
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
</style>