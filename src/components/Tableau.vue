<script setup>
import { ref } from "vue";

const newObjetLastName = ref("");
const newObjetFirstName = ref("");
const listeObjets = ref([
  { id: 0, nom: "nom1", prenom: "Alice" },
  { id: 1, nom: "nom2", prenom: "Bob" },
  { id: 2, nom: "nom3", prenom: "Charlie" },
]);

function ajouter() {
  let id = listeObjets.value[listeObjets.value.length - 1]?.id;

  if (!id) id = 0;
  else id++;

  listeObjets.value.push({
    id: id,
    nom: newObjetLastName.value,
    prenom: newObjetFirstName.value,
  });
}

function supprimer(id) {
  listeObjets.value = listeObjets.value.filter((obj) => obj.id !== id);
}
</script>

<template>
  <div>
    <input type="text" v-model="newObjetLastName" placeholder="Nom" />
    <input type="text" v-model="newObjetFirstName" placeholder="Prénom" />
    <button @click="ajouter()">Ajouter</button>

    <div
      v-for="monObjet in listeObjets"
      :key="monObjet.id"
      @click="supprimer(monObjet.id)"
    >
      <h2>{{ monObjet.nom }} {{ monObjet.prenom }}</h2>
      <p>{{ monObjet.id }}</p>
    </div>
  </div>
</template>

<style>
</style>