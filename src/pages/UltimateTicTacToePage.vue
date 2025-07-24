<script setup>
import { computed, onMounted } from "vue";
import UTTTBoard from "../components/UTTTBoard.vue";
import { Appstate } from "../Appstate";
import { gameService } from "../services/GameService";

const currentPlayer = computed(() => Appstate.ultimateTTT.currentPlayer)

onMounted(() => {
  gameService.startUltimateTTT(["X", "O"])
})

</script>


<template>
  <div class="row justify-content-center position-relative h-100">
    <div class="col-12 d-flex justify-content-between position-absolute top-0 mb player-indicator">
      <p class="display-1 fw-bold ms-3 mb-0" :class="{ 'active-player': currentPlayer === false }">
        X
      </p>
      <p class="display-1 fw-bold me-3 mb-0" :class="{ 'active-player': currentPlayer === true }">
        O
      </p>
    </div>
    <div class="col-12 d-flex flex-column justify-content-center align-items-center h-100">
      <UTTTBoard />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.player-indicator {
  p {
    user-select: none;
  }
}
</style>