<script setup>
import {RouterView} from 'vue-router'

import {ref, watchEffect} from "vue";

let name = ref('')

const prefixes = [
  'Hype',
  'Biz',
  'Lolz',
  'Rofl',
  'Galaxy',
  'Biz',
  'Fan',
  'Buzz',
  'Real',
  'Solid',
  'Inter',
  'Active',
  'Swoosh',
]

const suffixes = [
  'park',
  'span',
  'cloud',
  'loop',
  'verse',
  'layer',
  'er',
  'r',
  'dot',
  'dock',
  'space',
  'yard',
  'scale',
  'signal',
  'press',
  'ware',
  'port',
]

// check if string is empty
watchEffect(() => {
  if (name.value === '') {
    name.value = '???'
  }
})

const generate = () => {
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)]
  const randomSuffix = suffixes[Math.floor((Math.random()) * suffixes.length)]

  name.value = randomPrefix + randomSuffix
  console.log(name.value)
}

</script>

<template>
  <div class="flex-center">
    <div class="main_container">
      <h1>Dein Startup heißt</h1>
      <div class="generate_field">
        {{name}}
      </div>
      <button class="button" @click="generate">Namen generieren</button>
    </div>
  </div>



</template>

<style scoped>

h1, p {
  font-family: Arial;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

.main_container {
  text-align: center;
  width: 50%;
}


.generate_field {
  width: 100%;
  padding: 1rem 0;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 5px;
  margin: 1rem 0;
}

.button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}
</style>
