<script setup>
// COMPONENTS
import ButtonClicker from "@/components/ButtonClicker.vue";
import PropsComponent from "@/components/PropsComponent.vue";
import { ref, computed, defineEmits } from 'vue';

const text = 'hallo'
const textRef = ref('welt')

const number = ref(0)
const doubleNumber = computed(() => number.value * 2)

const emit = defineEmits(['updateMessage'])

function notifyParent() {
  emit('updateMessage', 'new message from the child')
}

function submit() {
  console.log("submit function has been clicked")
}

function change() {
  console.log(`textRef value is now ${textRef}`)
  textRef.value = textRef.value === 'welt' ? 'Banane' : 'welt'
}

function increase() {

  number.value += 1
  console.log(`number is now ${doubleNumber.value}`)
}

function sendEmit() {


}

</script>

<template>

  <h1>{{text}}</h1>
  <div v-if="number > 0">
    <p>Number is greater than 0</p>
  </div>
  <div v-else-if="number < 0">
    <p>Number is smaller than 0</p>
  </div>
  <div v-else>
    <p>Number is 0</p>
  </div>

  <div class="align_buttons">
    <button @click="submit">Klick</button>
    <button @click="change">Change textRef value</button>
    <button @click="increase">Change doublenumber value</button>
    <h1>{{textRef}}</h1>
    <h1>DoubleNumber = {{ doubleNumber}}</h1>
  </div>
  <button @click="increase">test emit</button>
</template>

<style scoped>
.align_center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
}

.align_buttons {
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  flex-direction: column;
}
</style>
