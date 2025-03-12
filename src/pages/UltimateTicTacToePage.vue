<script setup>

</script>


<template>
  <div class="row h-100 justify-content-center">
    <div class="col-8 d-flex justify-content-center align-items-center">
      <section class="board">
        <div class="vertical-lines justify-content-evenly">
          <div class="rounded-pill"></div>
          <div class="rounded-pill"></div>
        </div>
        <div class="horizontal-lines flex-column justify-content-evenly">
          <div class="rounded-pill"></div>
          <div class="rounded-pill"></div>
        </div>
      </section>
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