<script setup lang="ts">
import Landing from "../src/components/Landing.vue"

</script>

<template>
  <Landing class="w-full h-full"/>
</template>

<style>
body {
  margin: 0;
  height: 100vh;
  background: Linear-gradient(-45deg, #C8A2C8, #e560dc,
      #ffb374, #ef5f5f, #d84040);
  background-size: 400% 400%;
  animation: bg 12s ease infinite;
}

@keyframes bg {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 100%;
  }

  100% {
    background-position: 0% 50%;

  }
}
</style>
