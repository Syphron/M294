<script setup>

</script>

<template>

  <div class="title">
    <h1>Ük Aufgaben M294</h1>
  </div>
  <div class="elements">
    <router-link to="/weather">Weather App (Aufgabe 1)</router-link>
    <router-link to="/namegenerator">Name Generator (Aufgabe 2)</router-link>
    <router-link to="/investmentrechner">Investment Rechner (Aufgabe 3)</router-link>
    <router-link to="/todo">ToDo (Aufgabe 4)</router-link>
  </div>

</template>

<style scoped>
* {
  font-family: "Arial";
}

.title {
  margin-top: 2rem;
}

.elements {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 5rem;
  margin-top: 1rem;
}
</style>