<script setup>
import App from "@/App.vue";
import {ref} from "vue";

defineProps(['propsText'])

const message = ref('')
const newMessage = ref('')

function handleUpdateMessage() {
  message.value = newMessage
}

</script>

<template>
<h1>{{propsText}}</h1>
  <App @update-message="handleUpdateMessage"></App>
  <h1>{{newMessage}}</h1>
</template>

<style scoped>

</style>