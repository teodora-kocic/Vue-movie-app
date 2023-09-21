import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/views/HomeView.vue";
import AllMovies from "../components/AllMovies.vue";
import AddMovie from "../components/AddMovie.vue";
import MovieDetails from "../components/MovieDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/all-movies", component: AllMovies },
    { path: "/add-movie", component: AddMovie },
    { path: "/movies/:id", component: MovieDetails },
  ],
});

export default router;
