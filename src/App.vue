<script setup>
</script>

<template>
  <div>
    <header>
      <nav class="text-center">
        <RouterLink to="/">Compteur</RouterLink>
        <RouterLink :to="{ name: 'DemoJWT' }" class="ms-3">DemoJWT</RouterLink>
        <RouterLink :to="{ name: 'Tableau' }" class="ms-3">Tableau</RouterLink>
        <RouterLink :to="{ name: 'Connexion' }" class="ms-3"
          >Connexion</RouterLink
        >
        <RouterLink :to="{ name: 'FormBootstrap' }" class="ms-3"
          >FormBootstrap</RouterLink
        >
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
</style>
