<script setup>
import { ref } from "vue";
import * as jose from "jose";

const compteur = ref(0);

const tokenToDecode = ref("");
const decodedToken = ref("");

const token = ref(localStorage.getItem("token") ?? "");
const connectedUser = ref(null);

if (token.value) {
  connectedUser.value = jose.decodeJwt(token.value);
}

setInterval(() => {
  compteur.value++;
}, 1000);

function resetCompteur() {
  compteur.value = 0;
}

function decodeToken() {
  const claims = jose.decodeJwt(tokenToDecode.value);
  decodedToken.value = JSON.stringify(claims);
}

function saveToken() {
  localStorage.setItem("token", token.value);
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
      <textarea v-model="tokenToDecode"></textarea>
      <button v-on:click="decodeToken()">Décoder</button>
      <label>Décodage des claims</label>
      <textarea v-model="decodedToken"></textarea>
    </div>

    <div class="column">
      <label>Token à enregistrer</label>
      <textarea v-model="token"></textarea>
      <button v-on:click="saveToken()">Enregistrer</button>
      <textarea v-if="connectedUser !== null" readonly>{{
        JSON.stringify(connectedUser)
      }}</textarea>
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
