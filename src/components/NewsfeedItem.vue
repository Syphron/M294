<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    teaser: String,
    image: String,
    numberOfWords: Number
});

// Methode zur Berechnung der Lesezeit
const berechneLesezeit = (numberOfWords) => {
    const worteProMinute = 300;
    return Math.ceil(numberOfWords / worteProMinute);
}

</script>

<template>
    <div class="newsfeed__item">
        <div class="newsfeed__image">
            <img :src="image" alt="">
        </div>
        <div class="newsfeed__text">
            <h2 class="newsfeed__heading">
                {{ title }}
            </h2>
            <p class="newsfeed__teaser">
                {{ teaser }}
            </p>
            <p class="newsfeed__meta">
                {{ berechneLesezeit(numberOfWords) }} Minuten Lesezeit
            </p>
        </div>
    </div>
</template>


<style scoped>
.newsfeed__image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.newsfeed__text {
    padding: 20px;
}

.newsfeed__item {
    display: grid;
    grid-template-columns: 200px auto;
}

.newsfeed__heading {
    font-size: 18px;
    margin: 10px 0;
}

.newsfeed__teaser {
    font-size: 15px;
    line-height: 1.25;
}

.newsfeed__meta {
    font-size: 15px;
    line-height: 1.25;
    color: rgba(255, 255, 255, .6);
}

.newsfeed__item+.newsfeed__item {
    border-top: 1px solid hsla(0, 0%, 100%, .05);
}
</style>