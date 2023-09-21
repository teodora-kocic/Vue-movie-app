<script setup>
const { btnMessage } = defineProps(["btnMessage"]);
</script>

<template>
  <button class="p-2 bg-orange-400 text-white cursor-pointer">
    {{ btnMessage }}
  </button>
</template>
