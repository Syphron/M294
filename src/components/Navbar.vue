<template>
    <div class="navbar">
        <ul>
            <li><router-link to="">Contact</router-link></li>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="">Pricing</router-link></li>
        </ul>
    </div>
</template>


<style scoped>
.navbar {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 95%;
    height: 3rem;

    margin: 1rem auto;

    border-radius: 15px;
    background-color: #00000084;
}

a {
    text-decoration: none;
    color: white;
}

ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 2rem;
}

li {
    color: white;
    list-style: none;
    font-weight: bold;
    cursor: pointer;
}

li:hover::after {
    padding: 0;
    margin: auto;
    display: block;
    content: '';
    border-bottom: 1px solid white;

    transform-origin: center;
    animation: grow 0.5s ease-in-out alternate;
}

@keyframes grow {
    from {
        transform: scaleX(0);
    }

    to {
        transform: scaleX(1);
    }
}
</style>