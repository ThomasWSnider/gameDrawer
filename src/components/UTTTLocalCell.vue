<script setup>
import { computed } from "vue";
import { GlobalCell } from "../models/GlobalCell";
import { Appstate } from "../Appstate";


defineProps({ globalCell: GlobalCell, index: Number })
const board = computed(() => Appstate.ultimateTTT.board)

</script>


<template>
  <section class="global-cell" :class="{ 'invalid-cell': globalCell != '' }">
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
.global-cell {
  width: 23dvh;
  height: 23dvh;
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
    height: 23dvh;
    width: 0.3rem;
    background-color: var(--bs-text);
  }
}

.horizontal-lines {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;

  div {
    width: 23dvh;
    height: 0.3rem;
    background-color: var(--bs-text);
  }
}
</style>