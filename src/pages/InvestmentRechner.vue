<script setup>
import { ref, computed } from 'vue'

const bitcoinPrice = 16914

const investments = ref([])

const inputCount = ref('')
const inputPrice = ref('')

function add() {
  investments.value.push({
    count: parseFloat(inputCount.value) || 0,
    price: parseFloat(inputPrice.value) || 0
  })
  inputCount.value = ''
  inputPrice.value = ''
}

const totalBTC = computed(() => {
  return investments.value.reduce((sum, investment) => sum + investment.count, 0)
})


const totalInvestedCHF = computed(() => {
  return investments.value.reduce((sum, investment) => sum + (investment.count * investment.price), 0)
})

const currentValueCHF = computed(() => {
  return totalBTC.value * bitcoinPrice
})


const totalProfitLoss = computed(() => {
  return currentValueCHF.value - totalInvestedCHF.value
})

</script>

<template>
  <h1>
    Bitcoin-Investment-Rechner
  </h1>

  <form @submit.prevent="add" class="investment-form box">
    <h3>
      Neues Investment erfassen
    </h3>
    <div class="flex">
      <div class="flex-1">
        <label for="count">Anzahl gekaufte Bitcoins</label>
        <input type="number" id="count" v-model="inputCount">
      </div>
      <div class="flex-1">
        <label for="price">Bitcoin-Kurs</label>
        <input type="number" id="price" v-model="inputPrice">
      </div>
      <button type="submit">
        Erfassen
      </button>
    </div>
  </form>

  <div class="box">
    <dl>
      <dt>Dein Kontostand</dt>
      <dd>{{ totalBTC.toFixed(2) }} BTC</dd>

      <dt>Investiert</dt>
      <dd>{{ totalInvestedCHF.toFixed(2) }} CHF</dd>

      <dt>Wert heute</dt>
      <dd>{{ currentValueCHF.toFixed(2) }} CHF</dd>

      <dt>Gewinn</dt>
      <dd>{{ totalProfitLoss.toFixed(2) }} CHF</dd>
    </dl>
  </div>

  <ul class="box">
    <li v-for="investment in investments" :key="investment.count">
      {{ investment.count }} BTC zum Preis von {{ investment.price }} Fr.
    </li>
  </ul>
</template>

<style>
:root {
  --input-height: 38px;
}
* {
  box-sizing: border-box;
}
body {
  margin: 80px
}
label {
  display: block;
  margin-bottom: 4px;
  font-size: 15px;
}
input {
  padding: 4px;
  height: var(--input-height);
  appearance: none;
  border: 1px solid #aaa;
  border-radius: 4px;
  width: 100%;
}
button {
  appearance: none;
  background: #3861fb;
  color: #fff;
  height: var(--input-height);
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
}
.box {
  background: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
}
.box + .box {
  margin-top: 20px;
}
.investment-form {
  margin-top: 40px;
}
.investment-form h3 {
  margin-top: 0;
}
.flex {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
}
.flex-1 {
  flex: 1;
}
dl {
  margin: 0;
}
dt {
  font-weight: bold;
  font-size: 15px;
}
dt:not(:first-child) {
  margin-top: 20px;
}
dd {
  margin: 4px 0 0;
}
ul {
  margin: 0;
  list-style: none;
}
li {
  padding: 8px 0;
}
li:not(:last-child) {
  border-bottom: 1px solid #e0e0e0;
}
</style>