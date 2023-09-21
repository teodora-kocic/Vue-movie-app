<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Axios } from "axios";
import TheMovie from "./TheMovie.vue";
import TheSpinner from "./TheSpinner.vue";

const route = useRoute();

const http = new Axios({
  headers: {
    "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

const movie = ref(undefined);

onMounted(() => {
  http
    .get(`http://localhost:3000/movies/${route.params.id}`)
    .then((response) => {
      const data = JSON.parse(response.data);
      console.log(response);

      movie.value = data.movie;
    })
    .catch(function (error) {
      console.log(error);
    });
});
</script>

<template>
  <the-movie v-if="movie" :movie="movie" class="mx-auto"></the-movie>
  <the-spinner v-else></the-spinner>
</template>
