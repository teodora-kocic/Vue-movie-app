<script setup>
import { Axios } from "axios";
import TheModal from "./TheModal.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const { movie, movies } = defineProps(["movie", "movies"]);

const isVisible = ref(false);
const isDeleted = ref(false);
const message = "You successfully deleted this movie!";
const text = ref("more");

const http = new Axios({
  headers: {
    "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

const showText = () => {
  isVisible.value = !isVisible.value;
  text.value = text.value === "more" ? "less" : "more";
};

const goToAllMovies = () => {
  router.push("/all-movies");
};

const deleteMovie = () => {
  http.delete(`http://localhost:3000/movies/${movie.id}`).then((response) => {
    isDeleted.value = true;
  });
};
</script>

<template>
  <div
    class="w-3 m-5 flex flex-column justify-content-center align-items-center border-round-xl shadow-5"
  >
    <h2 class="p-3 text-orange-400 text-center">{{ movie.title }}</h2>
    <img class="w-full h-25rem" :src="movie.src" alt="" />
    <div class="p-1 flex justify-content-between align-items-center w-9">
      <div class="font-bold text-orange-400">Year:</div>
      <div class="text-cyan-700 p-1">{{ movie.year }}</div>
    </div>

    <div class="p-1 flex justify-content-between align-items-center w-9">
      <div class="font-bold text-orange-400">Genre:</div>
      <div class="text-cyan-700 p-1 text-center" v-for="genre in movie.genre">
        {{ genre }}
      </div>
    </div>

    <div class="p-1 flex justify-content-between align-items-center w-9">
      <div class="font-bold text-orange-400">Rating:</div>
      <div
        class="border-solid p-1 w-2rem flex justify-content-center align-items-center"
        :class="[
          { red: movie.rating <= '5' },
          { yellow: movie.rating > '5' && movie.rating <= '7.5' },
          { green: movie.rating > '7.5' },
        ]"
      >
        {{ movie.rating }}
      </div>
    </div>
    <div class="p-1 flex justify-content-between align-items-center w-9">
      <div class="font-bold text-orange-400">Director:</div>
      <div class="text-cyan-700 p-1">{{ movie.director }}</div>
    </div>
    <button
      class="w-9 cursor-pointer p-2 bg-orange-400 border-round-sm text-white outline-none mb-4"
      @click="showText"
    >
      Show {{ text }}
    </button>

    <div
      class="flex flex-column justify-content-center align-items-stretch w-9 mb-4"
      v-if="isVisible"
    >
      <p class="text-cyan-700">{{ movie.text }}</p>
      <p>
        <span class="font-bold text-orange-400">Stars: </span>
        <span
          v-for="star in movie.stars"
          class="text-cyan-700 p-1 text-center"
          >{{ star }}</span
        >
      </p>

      <div class="flex justify-content-center">
        <button
          class="cursor-pointer p-2 bg-red-500 border-round-sm text-white outline-none my-4 w-full"
          @click="deleteMovie()"
        >
          Delete this movie
        </button>
      </div>
    </div>

    <the-modal
      v-if="isDeleted"
      :message="message"
      :goToAllMovies="goToAllMovies"
    >
    </the-modal>
  </div>
</template>

<style scoped>
.red {
  color: red;
}

.yellow {
  color: rgb(201, 201, 66);
}

.green {
  color: rgb(11, 163, 11);
}
</style>
