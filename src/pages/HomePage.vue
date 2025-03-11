<script setup lang="ts">
import { onMounted } from "vue";
import { Appstate } from "../Appstate";
import { ticTacToeService } from "../services/TicTacToeService";


onMounted(() => {
  if (Appstate.ticTacToe.board.cells != Array(9).fill("")) ticTacToeService.resetGame()
})


</script>


<template>
  <div class="row w-100 justify-content-center">
    <div class="col-2 text-center">
      <RouterLink :to="{ name: 'TicTacToe' }">
        <p>Tic Tac Toe</p>
      </RouterLink>
    </div>
    <div class="col-2 text-center">
      <RouterLink :to="{ name: 'UltimateTicTacToe' }">
        <p>Ultimate Tic Tac Toe</p>
      </RouterLink>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>