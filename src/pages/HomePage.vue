<script setup lang="ts">


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