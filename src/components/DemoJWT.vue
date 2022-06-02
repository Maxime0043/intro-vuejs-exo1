<script setup>
import { ref } from "vue";
import * as jose from "jose";
const tokenToDecode = ref("");
const decodedToken = ref("");

const token = ref(localStorage.getItem("token") ?? "");
const connectedUser = ref(null);

if (token.value) {
  connectedUser.value = jose.decodeJwt(token.value);
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
    <div class="column">
      <label>Token</label>
      <textarea v-model="tokenToDecode"></textarea>
      <button v-on:click="decodeToken()">Décoder</button>
      <label>Décodage des claims</label>
      <textarea v-model="decodedToken"></textarea>
    </div>

    <hr />

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