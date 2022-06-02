<script setup>
import { ref } from "vue";

const user = ref(null);

function login() {
  user.value = "Maxime";
}

function logout() {
  user.value = null;
}
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <hr />
    <h2 v-if="user === null">Hello Anonyme</h2>
    <h2 v-else>Hello {{ user }}</h2>
    <button v-if="user === null" @click="login()">Se connecter</button>
    <button v-else @click="logout()">Se déconnecter</button>
  </div>
</template>

<style>
</style>