<script setup lang="ts">
import { computed, ref } from "vue";
import { Appstate } from "../Appstate";

const players = ref(['X', 'O'])
const currentPlayer = ref(false)
const playerSymbol = computed(() => players.value[Number(currentPlayer.value)])
const gameStates = ref([`inProgress`, `${playerSymbol} Wins!`, `It's a Draw!`])
const currentGameState = ref(0)
const board = ref({ cells: Array(9).fill("") } as { cells: string[] })

function handleClick(cellIndex: number) {
  if (currentGameState.value != 0) return

  if (board.value.cells[cellIndex] === "") {
    board.value.cells[cellIndex] = playerSymbol.value;
  }
  const winnerIs = checkForWinner(playerSymbol.value);

  if (winnerIs) {
    currentGameState.value = 1;
    console.log(`${currentPlayer.value} Wins!`);
  }

  if (!winnerIs && !board.value.cells.includes("")) {
    currentGameState.value = 2
    console.log("It's a Tie!")
  }

  currentPlayer.value = !currentPlayer.value;
  return
}

function checkForWinner(playerSymbol: string) {
  const winStates = Appstate.ticTacToeWinStates;
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