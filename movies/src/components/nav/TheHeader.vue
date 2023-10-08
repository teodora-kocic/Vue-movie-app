<template>
  <nav class="flex justify-content-around align-items-center p-3 bg-orange-400">
    <router-link active-class="active" to="/">Home</router-link>
    <router-link active-class="active" to="/all-movies">All movies</router-link>
    <router-link active-class="active" to="/add-movie">Add a movie</router-link>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  color: white;
  font-size: 1.25rem;
  padding: 0.5rem;
}

.active {
  font-weight: bold;
  border: 1px solid white;
  border-radius: 4px;
}
</style>
