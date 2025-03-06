<script setup>
import TicTacToeBoard from "../components/TicTacToeBoard.vue";
import GameStartEndOverlay from "./GameStartEndOverlay.vue";


</script>


<template>
  <div class="container-fluid">
    <div class="row h-100">
      <div class="col-4 d-flex justify-content-center align-items-center"></div>
      <div class="col-4 d-flex flex-column justify-content-between align-items-center">
        <TicTacToeBoard />
      </div>
      <div class="col-4 d-flex justify-content-center align-items-center"></div>
    </div>
  </div>
  <GameStartEndOverlay :gameName="`Tic Tac Toe`" :gameResult="currentGameState" v-if="currentGameState != 0" />
</template>


<style lang="scss" scoped>
div.container-fluid {
  height: 100%;
}
</style>