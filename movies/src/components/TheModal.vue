<script setup>
import BaseButton from "./BaseButton.vue";

const { message, goToAllMovies } = defineProps(["message", "goToAllMovies"]);
</script>

<template>
  <div>
    <div
      class="fixed top-0 left-0 w-full h-screen surface-800 z-1"
      @click="goToAllMovies"
    ></div>

    <div
      class="modal fixed p-5 flex flex-column justify-content-center align-items-center border-round-xl shadow-5 overflow-hidden bg-white z-5"
    >
      <slot>
        <p class="p-2 m-1 text-cyan-700">
          {{ message }}
        </p>
      </slot>

      <base-button btnMessage="OK" @click="goToAllMovies"></base-button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
