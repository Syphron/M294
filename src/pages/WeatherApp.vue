<script setup>
import { ref, computed, watchEffect } from 'vue'

const celsius = ref(10)

const fahrenheit = computed(() => celsius.value * 9 / 5 + 32)

const kelvin = computed(() => celsius.value + 273.15)

const isBelowFreezing = computed(() => celsius.value < 0 ? `Ja` : 'Nein')

/*
const fahrenheit = computed(() => {
  return celsius.value * 9 / 5 + 32
})
*/

const change = (amountNumber) => {
  celsius.value += amountNumber
}

</script>

<template>
  <h1>
    Wetterstation
  </h1>
  <table class="table">
    <tr>
      <th>Temperatur in Celsius</th>
      <td>{{ celsius }}°C</td>
    </tr>
    <tr>
      <th>Temperatur in Fahrenheit</th>
      <td>{{ fahrenheit }}</td>
    </tr>
    <tr>
      <th>Temperatur in Kelvin</th>
      <td>{{ kelvin }}</td>
    </tr>
    <tr>
      <th>Gefrierpunkt unterschritten</th>
      <td>{{ isBelowFreezing }}</td>
    </tr>
  </table>
  <div>
    <button @click="change(-1)">
      Es wird kälter
    </button>
    <button @click="change(1)">
      Es wird wärmer
    </button>
  </div>
</template>

<style scoped>
body {
  text-align: center;
}

.table {
  width: 320px;
  margin: 20px auto;
}

.table th {
  text-align: left;
}

.table td {
  text-align: right;
}

button+button {
  margin-left: 20px;
}
</style>