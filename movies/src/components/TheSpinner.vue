<template>
  <div class="spin mx-auto my-5"></div>
</template>

<style scoped>
.spin {
  border: 15px solid rgb(16, 141, 141);
  border-radius: 50%;
  border-top: 15px solid #3295b7;
  border-right: 15px solid orange;
  border-bottom: 15px solid #96f9db;
  border-left: 15px solid rgb(255, 200, 97);
  width: 50px;
  height: 50px;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
