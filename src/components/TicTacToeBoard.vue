<script setup lang="ts">
import { ref } from "vue";
import { Appstate } from "../Appstate";

const players = ref(['X', 'O'])
const currentPlayer = ref(false)
const board = ref({ cells: Array(9).fill("") } as { cells: string[] })

function handleClick(cellIndex: number) {
  const playerSymbol = players.value[Number(currentPlayer.value)]
  if (board.value.cells[cellIndex] === "") {
    board.value.cells[cellIndex] = playerSymbol
  }
  const winnerIs = checkForWinner(playerSymbol)
  if (winnerIs) console.log(`${currentPlayer.value} Wins!`)
  currentPlayer.value = !currentPlayer.value
  return
}

function checkForWinner(playerSymbol: string) {
  const winStates = Appstate.ticTacToeWinStates;
  const gameBoard = board.value.cells;
  for (const combination of winStates) {
    const [a, b, c] = combination;
    if (gameBoard[a] === playerSymbol && gameBoard[b] === playerSymbol && gameBoard[c] === playerSymbol)
      return true
  }
  return false
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