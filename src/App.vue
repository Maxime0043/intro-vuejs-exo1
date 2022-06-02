<script setup>
import { ref } from "vue";
import * as jose from "jose";

const compteur = ref(0);
const token = ref("");
const decodedToken = ref("");

setInterval(() => {
  compteur.value++;
}, 1000);

function resetCompteur() {
  compteur.value = 0;
}

function decodeToken() {
  const claims = jose.decodeJwt(token.value);
  decodedToken.value = JSON.stringify(claims);
}
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <p>{{ compteur }}</p>

    <div>
      <button v-on:click="resetCompteur()">Reset Compteur</button>
      <input type="number" v-model="compteur" />
    </div>

    <div class="column">
      <label>Token</label>
      <textarea v-model="token"></textarea>
      <button v-on:click="decodeToken()">Décoder</button>
      <label>Décodage des claims</label>
      <textarea v-model="decodedToken"></textarea>
    </div>
  </div>
</template>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
}
.column > * {
  width: max-content;
}
</style>
