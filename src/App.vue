<script setup>
import { ref } from "vue";

const compteur = ref(0);

setInterval(() => {
  compteur.value++;
}, 1000);
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <p>{{ compteur }}</p>
  </div>
</template>

<style></style>
