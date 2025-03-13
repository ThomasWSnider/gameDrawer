<script setup>
import { computed, onUnmounted } from "vue";
import GameStartEndOverlay from "../components/GameStartEndOverlay.vue";
import TicTacToeBoard from "../components/TicTacToeBoard.vue";
import { Appstate } from "../Appstate";
import { ticTacToeService } from "../services/TicTacToeService";

const currentPlayer = computed(() => Appstate.ticTacToe.currentPlayer)

onUnmounted(() => {
  ticTacToeService.resetGame()
})

</script>


<template>
  <div class="row justify-content-center position-relative">
    <div class="col-12 d-flex justify-content-between position-absolute top-0 mb">
      <p class="display-1 fw-bold ms-3 mb-0" :class="{ 'active-player': currentPlayer === false }">
        X
      </p>
      <p class="display-1 fw-bold me-3 mb-0" :class="{ 'active-player': currentPlayer === true }">
        O
      </p>
    </div>
    <div class="col-4 d-flex flex-column justify-content-center align-items-center">
      <TicTacToeBoard />
    </div>
  </div>
</template>


<style lang="scss" scoped>
div.container-fluid {
  height: 100%;
}

.active-player {
  color: var(--bs-text);
  opacity: 100%;
  transition: all .33s ease-in;
}

p {
  user-select: none;
  opacity: 25%;
  transition: all .33s ease-in;
}
</style>