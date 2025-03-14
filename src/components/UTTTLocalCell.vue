<script setup>
import { computed, onMounted } from "vue";
import { GlobalCell } from "../models/GlobalCell";
import { Appstate } from "../Appstate";


defineProps({ globalCell: GlobalCell, globalCellIndex: Number })
const board = computed(() => Appstate.ultimateTTT.board)

onMounted(() => {
  console.log(Appstate.ultimateTTT.activeGlobalCell)
})

</script>


<template>
  <section class="global-cell">
    <div v-if="Appstate.ultimateTTT.activeGlobalCell != globalCellIndex || null" class="invalid-cell"></div>
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

.invalid-cell {
  height: 29dvh;
  width: 29dvh;
  position: absolute;
  top: -13.5%;
  left: -13.5%;
  background-color: var(--bs-page);
  opacity: 85%;
  z-index: 3;
}
</style>