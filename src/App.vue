<script setup>
import { ref } from "vue";

const compteur = ref(0);

setInterval(() => {
  compteur.value++;
}, 1000);

function resetCompteur() {
  compteur.value = 0;
}
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <p>{{ compteur }}</p>
    <button v-on:click="resetCompteur()">Reset Compteur</button>
    <input type="number" v-model="compteur" />
  </div>
</template>

<style></style>
