<template>
  <nav class="flex justify-content-around align-items-center p-3 bg-orange-400">
    <router-link to="/">Home</router-link>
    <router-link to="/all-movies">All movies</router-link>
    <router-link to="/add-movie">Add a movie</router-link>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  color: white;
  padding: 10px;
}
</style>
