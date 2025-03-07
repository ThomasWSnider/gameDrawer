<script setup>
import { computed } from "vue";
import GameStartEndOverlay from "../components/GameStartEndOverlay.vue";
import TicTacToeBoard from "../components/TicTacToeBoard.vue";
import { Appstate } from "../Appstate";

const currentPlayer = computed(() => Appstate.ticTacToe.currentPlayer)

</script>


<template>
  <div class="container-fluid d-flex flex-column justify-content-between align-items-center">
    <div class="row">
      <div class="col-12">
        <p class="display-1 fw-bold position-absolute top-0 start-0 ms-5"
          :class="{ 'active-player': currentPlayer === false }">
          X
        </p>
        <p class="display-1 fw-bold position-absolute top-0 end-0 me-5"
          :class="{ 'active-player': currentPlayer === true }">
          O
        </p>
      </div>
    </div>
    <div class="row w-100 justify-content-center">
      <div class="col-4 d-flex flex-column justify-content-between align-items-center">
        <TicTacToeBoard />
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
  opacity: 75%;
  transition: color .33s ease-in;
}

p {
  user-select: none;

}
</style>