<script setup lang="ts">
import { computed, ref } from "vue";
import { Appstate } from "../Appstate";
import { ticTacToeService } from "../services/TicTacToeService";
import GameStartEndOverlay from "./GameStartEndOverlay.vue";

const currentPlayer = computed(() => Appstate.ticTacToe.currentPlayer)
const playerSymbol = computed(() => Appstate.ticTacToe.players[Number(currentPlayer.value)])
const currentGameState = ref(0)
const board = computed(() => Appstate.ticTacToe.board)
const boardSettled = ref(false)
const cellReset = ref(false)

function fillCell(cellIndex: number) {
  boardSettled.value = true
  setTimeout(() => boardSettled.value = false, 333)
  if (currentGameState.value != 0) {
    return;
  }
  if (board.value[cellIndex] === "") {
    const winnerIs = ticTacToeService.fillCell(cellIndex, playerSymbol.value)
    if (winnerIs) {
      if (currentPlayer.value) {
        currentGameState.value = 2;
        return
      }
      if (!currentPlayer.value) {
        currentGameState.value = 1;
        return
      }
    }
    if (!winnerIs && !board.value.includes("")) {
      currentGameState.value = 3;
    }
    else {
      ticTacToeService.switchPlayer()
    }
  }
  return
}

function resetGame() {
  boardSettled.value = true;
  cellReset.value = true;
  currentGameState.value = 0;
  setTimeout(() => {
    cellReset.value = false
    ticTacToeService.resetGame()
    boardSettled.value = false;
  }, 333)
}

</script>


<template>
  <section class="board">
    <div @click="fillCell(index)" v-for="(cell, index) in board" :key="index" class="cell">
      <div class="cell-indicator d-flex justify-content-center align-items-center">
        <p class="display-2 text-light" :class="{ 'd-none': cell != '' }">{{ playerSymbol
        }}
        </p>
      </div>
      <p class="text-light display-2" :class="{ 'filled-in': cell != '' && cellReset === false }">{{
        cell
      }}</p>
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
    <GameStartEndOverlay :gameName="`Tic Tac Toe`" :gameResult="currentGameState" v-if="currentGameState != 0" />
  </Transition>
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

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  position: relative;
  cursor: pointer;

  .cell-indicator {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 2;
    opacity: 0;

    p {
      opacity: 0;
    }
  }

  &:hover {
    .cell-indicator {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;

      p {
        opacity: 0.2;
      }
    }
  }

  p {
    font-weight: bold;
    user-select: none;
    opacity: 0.2;
    transition: opacity .33s ease-in;

    &.filled-in {
      opacity: 1;
    }
  }
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
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