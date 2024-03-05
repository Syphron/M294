import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Vault from "@/vault.vue";
import WeatherApp from "@/pages/WeatherApp.vue";
import Home from "@/pages/Home.vue";
import StartupNameGenerator from "@/pages/StartupNameGenerator.vue";
import InvestmentRechner from "@/pages/InvestmentRechner.vue";
import Todo from './pages/Todo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/weather', component: WeatherApp },
        { path: '/namegenerator', component: StartupNameGenerator },
        { path: '/investmentrechner', component: InvestmentRechner },
        { path: '/todo', component: Todo },
    ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')