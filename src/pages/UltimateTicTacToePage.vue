<script setup>
import UTTTBoard from "../components/UTTTBoard.vue";


</script>


<template>
  <div class="row justify-content-center position-relative h-100">
    <div class="col-12 d-flex justify-content-between position-absolute top-0 mb">
      <p class="display-1 fw-bold ms-3 mb-0" :class="{ 'active-player': currentPlayer === false }">
        X
      </p>
      <p class="display-1 fw-bold me-3 mb-0" :class="{ 'active-player': currentPlayer === true }">
        O
      </p>
    </div>
    <div class="col-4 d-flex flex-column justify-content-center align-items-center h-100">
      <UTTTBoard />
    </div>
  </div>
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
</style>