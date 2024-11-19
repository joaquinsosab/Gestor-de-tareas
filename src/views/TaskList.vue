<template>
    <div class="task-list-container">
        <h1>Lista de Tareas</h1>
        <button @click="fetchTasks" class="btn btn-primary mb-3">Cargar Tareas</button>
        <div v-if="tasks.length > 0" class="task-list">
            <div v-for="task in tasks" :key="task.id" class="task-item">
                <span :class="{ completed: task.completed }">{{ task.todo }}</span>
                <div>
                    <button @click="toggleCompletion(task)" class="btn btn-success btn-sm">
                        {{ task.completed ? 'Desmarcar' : 'Completar' }}
                    </button>
                    <button @click="deleteTask(task)" class="btn btn-danger btn-sm">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "TaskList",
    data() {
        return {
            tasks: [] // Almacenamiento local de las tareas traídas de la API
        };
    },
    methods: {
        async fetchTasks() {
            try {
                const response = await axios.get('https://dummyjson.com/todos');
                this.tasks = response.data.todos;
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        },
        toggleCompletion(task) {
            task.completed = !task.completed;
        },
        deleteTask(task) {
            this.tasks = this.tasks.filter(t => t.id !== task.id);
        }
    }
};
</script>

<style scoped>
.task-list-container {
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
}

.task-list {
    margin-top: 20px;
}

.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.completed {
    text-decoration: line-through;
    color: gray;
}
</style>
