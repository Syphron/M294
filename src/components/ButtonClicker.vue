<script>

export default {
  data() {
    return {
      count: 0,
      text: "React",
    }
  }
}

</script>

<template>
  <h1>{{ text }}</h1>
  <button @click="count++">You clicked me {{ count }} times!</button>
</template>

<style scoped>

</style>