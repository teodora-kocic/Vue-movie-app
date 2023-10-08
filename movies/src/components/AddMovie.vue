<script setup>
import { Axios } from "axios";
import { useRouter } from "vue-router";
import { ref } from "vue";
import TheModal from "./TheModal.vue";

const http = new Axios({
  headers: {
    "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

const router = useRouter();

const inputTitle = ref("");
const inputUrl = ref("");
const inputYear = ref(null);
const inputGenre = ref([]);
const inputRating = ref(null);
const inputDirector = ref("");
const inputDescription = ref("");
const inputStars = ref("");
const inputFavorite = ref("");
const isDone = ref(false);
const invalidUrl = ref(false);
const invalidInputField = ref(false);
const message = "You successfully added a movie!";

const addMovie = () => {
  if (
    inputTitle.value.trim() === "" ||
    inputUrl.value.trim() === "" ||
    inputYear.value === null ||
    inputGenre.value === "" ||
    inputDirector.value.trim() === "" ||
    inputRating.value === null ||
    inputStars.value === "" ||
    inputDescription.value === "" ||
    inputFavorite.value === ""
  ) {
    return;
  }

  if (!inputUrl.value.includes("https")) {
    invalidUrl.value = true;
    invalidInputField.value = true;
    return;
  } else {
    invalidInputField.value = false;
  }

  const movie = {
    title: inputTitle.value,
    src: inputUrl.value,
    year: inputYear.value + "",
    genre: inputGenre.value,
    director: inputDirector.value,
    rating: inputRating.value + "",
    stars: inputStars.value,
    text: inputDescription.value,
    favorite: inputFavorite.value,
  };

  http
    .post("http://localhost:3000/movies", JSON.stringify(movie))
    .then((response) => {
      invalidUrl.value = false;

      const data = JSON.parse(response.data);

      inputTitle.value = "";
      inputUrl.value = "";
      inputYear.value = null;
      inputGenre.value = [];
      inputDirector.value = "";
      inputRating.value = null;
      inputStars.value = "";
      inputDescription.value = "";
      inputFavorite.value = "";

      isDone.value = true;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const goToAllMovies = () => {
  router.push("/all-movies");
};

const goToAddMovies = () => {
  invalidUrl.value = false;
};
</script>

<template>
  <div>
    <h1 class="text-center m-3 text-orange-400">Add movie</h1>

    <form
      class="p-3 mx-auto w-6 border-solid border-orange-400 flex flex-column"
      @submit.prevent="addMovie"
    >
      <div class="p-2 text-center">
        <label for="title" class="inline-block w-3 font-bold text-orange-400"
          >Title:</label
        >
        <input class="p-1" type="text" id="title" v-model="inputTitle" />
      </div>

      <div class="p-2 text-center">
        <label
          for="url"
          class="inline-block w-3 font-bold text-orange-400"
          :class="[{ invalid: invalidInputField }]"
          >Image URL:</label
        >
        <input
          class="p-1"
          type="text"
          id="url"
          v-model="inputUrl"
          :class="[{ invalidInput: invalidInputField }]"
        />
      </div>

      <div class="p-2 text-center">
        <label for="year" class="inline-block w-3 font-bold text-orange-400"
          >Year:</label
        >
        <input
          class="p-1"
          type="number"
          min="1900"
          id="year"
          v-model="inputYear"
        />
      </div>

      <div class="p-2 flex justify-content-center w-7 mx-auto">
        <p class="text-orange-400 font-bold p-2 text-center">Genre:</p>
        <div class="flex flex-wrap justify-content-center">
          <div class="p-2 flex justify-content-center align-items-center">
            <label for="action" class="text-orange-400">Action</label>
            <input
              type="checkbox"
              name="genre"
              id="action"
              class="m-1"
              value="Action"
              v-model="inputGenre"
            />
          </div>

          <div class="p-2 flex justify-content-center align-items-center">
            <label for="drama" class="text-orange-400">Drama</label>
            <input
              type="checkbox"
              name="genre"
              id="drama"
              class="m-1"
              value="Drama"
              v-model="inputGenre"
            />
          </div>

          <div class="p-2 flex justify-content-center align-items-center">
            <label for="horror" class="text-orange-400">Horror</label>
            <input
              type="checkbox"
              name="genre"
              id="horror"
              class="m-1"
              value="Horror"
              v-model="inputGenre"
            />
          </div>

          <div class="p-2 flex justify-content-center align-items-center">
            <label for="sci-fi" class="text-orange-400">Sci-fi</label>
            <input
              type="checkbox"
              name="genre"
              id="sci-fi"
              class="m-1"
              value="Sci-fi"
              v-model="inputGenre"
            />
          </div>

          <div class="p-2 flex justify-content-center align-items-center">
            <label for="thriller" class="text-orange-400">Thriller</label>
            <input
              type="checkbox"
              name="genre"
              id="thriller"
              class="m-1"
              value="Thriller"
              v-model="inputGenre"
            />
          </div>

          <div class="p-2 flex justify-content-center align-items-center">
            <label for="romance" class="text-orange-400">Romance</label>
            <input
              type="checkbox"
              name="genre"
              id="romance"
              class="m-1"
              value="Romance"
              v-model="inputGenre"
            />
          </div>

          <div class="p-2 flex justify-content-center align-items-center">
            <label for="comedy" class="text-orange-400">Comedy</label>
            <input
              type="checkbox"
              name="genre"
              id="comedy"
              class="m-1"
              value="Comedy"
              v-model="inputGenre"
            />
          </div>

          <div class="p-2 flex justify-content-center align-items-center">
            <label for="crime" class="text-orange-400">Crime</label>
            <input
              type="checkbox"
              name="genre"
              id="crime"
              class="m-1"
              value="Crime"
              v-model="inputGenre"
            />
          </div>

          <div class="p-2 flex justify-content-center align-items-center">
            <label for="musical" class="text-orange-400">Musical</label>
            <input
              type="checkbox"
              name="genre"
              id="musical"
              class="m-1"
              value="Musical"
              v-model="inputGenre"
            />
          </div>

          <div class="p-2 flex justify-content-center align-items-center">
            <label for="western" class="text-orange-400">Western</label>
            <input
              type="checkbox"
              name="genre"
              id="western"
              class="m-1"
              value="Western"
              v-model="inputGenre"
            />
          </div>

          <div class="p-2 flex justify-content-center align-items-center">
            <label for="adventure" class="text-orange-400">Adventure</label>
            <input
              type="checkbox"
              name="genre"
              id="adventure"
              class="m-1"
              value="Adventure"
              v-model="inputGenre"
            />
          </div>

          <div class="p-2 flex justify-content-center align-items-center">
            <label for="mystery" class="text-orange-400">Mystery</label>
            <input
              type="checkbox"
              name="genre"
              id="mystery"
              class="m-1"
              value="Mystery"
              v-model="inputGenre"
            />
          </div>

          <div class="p-2 flex justify-content-center align-items-center">
            <label for="biographical" class="text-orange-400"
              >Biographical</label
            >
            <input
              type="checkbox"
              name="genre"
              id="biographical"
              class="m-1"
              value="Biographical"
              v-model="inputGenre"
            />
          </div>

          <div class="p-2 flex justify-content-center align-items-center">
            <label for="history" class="text-orange-400">History</label>
            <input
              type="checkbox"
              name="genre"
              id="history"
              class="m-1"
              value="History"
              v-model="inputGenre"
            />
          </div>

          <div class="p-2 flex justify-content-center align-items-center">
            <label for="war" class="text-orange-400">War</label>
            <input
              type="checkbox"
              name="genre"
              id="war"
              class="m-1"
              value="War"
              v-model="inputGenre"
            />
          </div>
        </div>
      </div>

      <div class="p-2 text-center">
        <label for="rating" class="inline-block w-3 font-bold text-orange-400"
          >Rating:</label
        >
        <input
          type="number"
          step="0.1"
          min="1"
          id="rating"
          class="p-1"
          v-model="inputRating"
        />
      </div>

      <div class="p-2 text-center">
        <label for="director" class="inline-block w-3 font-bold text-orange-400"
          >Director:</label
        >
        <input class="p-1" type="text" id="director" v-model="inputDirector" />
      </div>

      <div class="p-2 text-center">
        <label
          for="description"
          class="inline-block w-3 font-bold text-orange-400"
          >Description:</label
        >
        <input
          class="p-1"
          type="text"
          id="description"
          v-model="inputDescription"
        />
      </div>

      <div class="p-2 text-center">
        <label for="stars" class="inline-block w-3 font-bold text-orange-400"
          >Stars:</label
        >
        <input class="p-1" type="text" id="stars" v-model="inputStars" />
      </div>

      <div
        class="p-2 flex flex-column justify-content-center align-items-center"
      >
        <p class="text-orange-400 font-bold p-2">Favorite movie?</p>

        <div class="p-1 flex justify-content-center align-items-center">
          <label for="yes" class="text-orange-400">Yes</label>
          <input
            type="radio"
            name="favorite"
            id="yes"
            value="true"
            class="m-1"
            v-model="inputFavorite"
          />
        </div>

        <div class="p-1 flex justify-content-center align-items-center">
          <label for="no" class="text-orange-400">No</label>
          <input
            type="radio"
            name="favorite"
            id="no"
            value="false"
            class="m-1"
            v-model="inputFavorite"
          />
        </div>
      </div>

      <div class="p-2 text-center">
        <button
          class="cursor-pointer p-2 bg-orange-400 border-round-sm text-white outline-none my-2"
        >
          Submit
        </button>
      </div>
    </form>

    <the-modal v-if="isDone" :message="message" :goToAllMovies="goToAllMovies">
    </the-modal>

    <the-modal
      v-if="invalidUrl"
      message="Some of the inputs are invalid!"
      :goToAllMovies="goToAddMovies"
    >
    </the-modal>
  </div>
</template>

<style scoped>
.invalid {
  color: red !important;
}

.invalidInput {
  outline-color: red !important;
  border-color: red !important;
}
</style>
