<script setup>
import { ref, watchEffect, computed } from 'vue'
import '@/assets/main.css'
import Navbar from '../components/Navbar.vue';

const tasks = ref([
    { id: 1, text: 'Rasen mähen', done: false, priority: 'Hoch', estimatedHours: 1.5 },
    { id: 2, text: 'Französisch lernen', done: false, priority: 'Normal', estimatedHours: 2 },
    { id: 3, text: 'Einkaufen', done: false, priority: 'Hoch', estimatedHours: 1 },
    { id: 4, text: 'Abfall rausbringen', done: false, priority: 'Tief', estimatedHours: 0.5 },
])

const prios = ref([
    { id: 1, text: 'Tief' },
    { id: 2, text: 'Normal' },
    { id: 3, text: 'Hoch' },
])

const inputRef = ref('')
const estimatedHoursRef = ref()
const prioRef = ref('')


const toggleDone = (task) => {
    task.done = !task.done
}

const add = () => {
    tasks.value.push({
        id: tasks.value.length + 1,
        text: inputRef.value,
        done: false,
        priority: prioRef.value,
        estimatedHours: parseFloat(estimatedHoursRef.value) || 0,
    })

    inputRef.value = ''
    estimatedHoursRef.value = 0
}

const calculateDoneTasks = computed(() => {
    return tasks.value.filter(task => task.done).length
})

const calculateTasksLength = computed(() => {
    return tasks.value.length
})

const totalOpenHours = computed(() => {
    return tasks.value.filter(task => !task.done).reduce((sum, task) => sum + task.estimatedHours, 0);
});

const deleteTask = (taskToDelete) => {
    tasks.value = tasks.value.filter(task => task !== taskToDelete);
}

const getPrio = (event) => {
    const selectedPriorityId = parseInt(event.currentTarget.value);
    const priority = prios.value.find(prio => prio.id === selectedPriorityId);

    const priorityText = priority ? priority.text : '';
    console.log(priorityText);

    prioRef.value = priorityText;
}

watchEffect(() => {
    tasks.value.sort((a, b) => {
        if (a.priority && !b.priority) {
            return -1;
        }
        if (b.priority && !a.priority) {
            return 1;
        }

        return 0;
    });
});

</script>

<template>

    <Navbar />

    <div class="container">

        <h2>
            Aufgabenliste
        </h2>

        <p>
            {{ calculateDoneTasks }} von {{ calculateTasksLength }} Tasks sind erledigt
        </p>
        <form @submit.prevent="add">
            <div class="form-group">
                <label for="task">Neuer Task</label>
                <input class="form-control" id="task" type="text" v-model="inputRef" placeholder="..." required>
            </div>

            <div class="form-group">
                <label for="hours">Geschätzte Stunden</label>
                <input id="hours" type="number" v-model="estimatedHoursRef" class="form-control" placeholder="0"
                    required>
            </div>

            <label for="prio">Prio auswählen</label>
            <select name="prio" id="prio" @change="getPrio">
                <option disabled selected>Bitte auswählen</option>
                <option v-for="prio in prios" :key="prio.id" :value="prio.id">
                    {{ prio.text }}
                </option>
            </select>

            <div class="form-actions">
                <button>
                    Task hinzufügen
                </button>
            </div>
        </form>

        <table>
            <thead>
                <tr>
                    <th>Prio</th>
                    <th>Task</th>
                    <th>Stunden</th>
                    <th>Aktionen</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="task in tasks" :key="task.id"
                    :class="{ 'is-done': task.done, 'high-priority': task.priority === 'Hoch', 'medium-priority': task.priority === 'Normal', 'low-priority': task.priority === 'Tief' }">
                    <td>{{ task.priority }}</td>
                    <td>{{ task.text }}</td>
                    <td>{{ task.estimatedHours }}h</td>
                    <td>
                        <button @click="deleteTask(task)">Löschen</button>
                        <input type="checkbox" v-model="task.done">
                    </td>
                </tr>
            </tbody>
        </table>


        <!-- <ul>
            <li v-for="task in tasks" :key="task.id"
                :class="{ 'is-done': task.done, 'high-priority': task.priority === 'Hoch', 'medium-priority': task.priority === 'Normal', 'low-priority': task.priority === 'Tief' }">
                <div class="items">
                    <button @click="deleteTask(task)">Delete</button>
                    <input type="checkbox" v-model="task.done" class="input_field"> {{ task.estimatedHours }}h {{
                task.text }}
                </div>
            </li>
        </ul> -->

    </div>

</template>

<style scoped>
* {
    font-family: Arial, Helvetica, sans-serif;
}

.items {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
}


table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
}

.is-done {
    text-decoration: line-through;
}

.high-priority {
    font-weight: bold;
    color: red;
}

.medium-priority {
    color: orange;
}

.low-priority {
    color: rgb(255, 255, 255);
}

.form-group {
    display: block;
}

.form-group label {
    display: block;
    margin-bottom: 2px;
}

.form-control {
    width: 100%;
    padding: 2px 5px;
    height: 32px;
    margin-bottom: 5px;
}

.form-actions {
    display: block;
    margin-top: 1rem;
    margin-bottom: 2rem;
}

.container {
    margin: 20px auto;
    max-width: 400px;
    width: 100%;
}

.input_field {
    width: 15px;
    height: 15px;
}
</style>