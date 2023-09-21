<script setup>
import { Axios } from "axios";
import { ref } from "vue";

import BaseButton from "../BaseButton.vue";
import TheMovie from "../TheMovie.vue";
import TheSpinner from "../TheSpinner.vue";

const inputSearch = ref("");
const btnMessage = "Search";
const http = new Axios({
  headers: {
    "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

const movies = ref(undefined);
const movieNotFound = ref(false);

const searchMovie = () => {
  if (inputSearch.value === "") {
    return;
  }

  http
    .get("http://localhost:3000/movies")
    .then((response) => {
      movieNotFound.value = false;
      const data = JSON.parse(response.data);

      movies.value = data.movies.filter((movie) =>
        movie.title.toLowerCase().includes(inputSearch.value.toLowerCase()),
      );
      inputSearch.value = "";
      if (movies.value.length === 0) {
        movieNotFound.value = true;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
</script>

<template>
  <h1 class="text-center m-3 text-orange-400">Search for a favorite movie</h1>

  <div class="flex justify-content-center align-items-center">
    <input
      type="search"
      name=""
      id=""
      class="p-2 border-round border-orange-400 outline-none w-3"
      v-model="inputSearch"
      @keydown.enter="searchMovie"
    />
    <base-button :btnMessage="btnMessage" @click="searchMovie"></base-button>
  </div>

  <div class="flex flex-wrap justify-content-center align-items-center">
    <the-movie
      v-if="movies"
      :movies="movies"
      :movie="movie"
      v-for="movie in movies"
    ></the-movie>
    <the-spinner v-else></the-spinner>
  </div>

  <p class="text-center my-5 text-cyan-700" v-if="movieNotFound">
    Sorry, there is no movie with this title 🤨. Try again!
  </p>
</template>

<!-- <script>
import { Axios } from "axios";

import BaseButton from "../BaseButton.vue";
import TheMovie from "../TheMovie.vue";
import TheSpinner from "../TheSpinner.vue";
export default {
  components: {
    BaseButton,
    TheMovie,
    TheSpinner,
  },
  data() {
    return {
      inputSearch: "",
      btnMessage: "Search",

      http: new Axios({
        headers: {
          "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
          Accept: "*/*",
          "Content-Type": "application/json",
        },
      }),

      movie: undefined,
      movies: undefined,
      movieNotFound: false,
    };
  },

  methods: {
    searchMovie() {
      if (this.inputSearch === "") {
        return;
      }

      this.http
        .get("http://localhost:3000/movies")
        .then((response) => {
          this.movieNotFound = false;
          const data = JSON.parse(response.data);

          this.movies = data.movies.filter((movie) =>
            movie.title.toLowerCase().includes(this.inputSearch.toLowerCase()),
          );
          this.inputSearch = "";
          if (this.movies.length === 0) {
            this.movieNotFound = true;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script> -->
