<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import { Axios } from "axios";
import TheMovie from "./TheMovie.vue";

const http = new Axios({
  headers: {
    "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

const movies = ref([]);
const router = useRouter();

const seeDetails = (movId) => {
  router.push(`/movies/${movId}`);
};

onMounted(() => {
  http
    .get("http://localhost:3000/movies")
    .then((response) => {
      const data = JSON.parse(response.data);
      console.log(response);

      movies.value = data.movies;

      movies.value.forEach((movie) => {
        console.log({ ...movie });

        let mov = { ...movie };
        console.log(mov.favorite);
        if (mov.favorite == true) {
          console.log(movie);
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});
</script>

<template>
  <div>
    <h1 class="text-center m-3 text-orange-400">All movies</h1>

    <div class="flex align-items-center flex-wrap m-5 justify-content-center">
      <the-movie
        v-for="mov in movies"
        :movie="mov"
        :movies="movies"
        @click="seeDetails(mov.id)"
      ></the-movie>
    </div>
  </div>
</template>
