<script setup>
import { computed } from "vue";
import GameStartEndOverlay from "../components/GameStartEndOverlay.vue";
import TicTacToeBoard from "../components/TicTacToeBoard.vue";
import { Appstate } from "../Appstate";

const currentPlayer = computed(() => Appstate.ticTacToe.currentPlayer)

</script>


<template>
  <div class="container-fluid">
    <div class="row h-100">
      <div class="col-4 d-flex justify-content-center align-items-center">
        <p class="display-1 fw-bold position-absolute top-0 start-0 ms-5"
          :class="{ 'active-player': currentPlayer == false }">X
        </p>
      </div>
      <div class="col-4 d-flex flex-column justify-content-between align-items-center">
        <TicTacToeBoard />
      </div>
      <div class="col-4 d-flex justify-content-center align-items-center">
        <p class="display-1 fw-bold position-absolute top-0 end-0 me-5"
          :class="{ 'active-player': currentPlayer == true }">O</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
div.container-fluid {
  height: 100%;
}

.active-player {
  color: var(--bs-text);
}
</style>