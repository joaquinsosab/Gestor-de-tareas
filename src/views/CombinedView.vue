<template>
    <div>
        <h1>Lista de Tareas</h1>
        <AddTask :tasks="tasks" @add-task="addTask" @toggle-completion="toggleCompletion" @delete-task="deleteTask" />
        <TaskList :tasks="tasks" @toggle-completion="toggleCompletion" @delTodo="deleteTask" />
    </div>
</template>

<script>
import AddTask from '../views/AddTask.vue';
import TaskList from '../views/TaskList.vue';

export default {
    name: "CombinedView",
    components: {
        AddTask,
        TaskList
    },
    data() {
        return {
            tasks: JSON.parse(localStorage.getItem('tasks') || '[]') // Cargar tareas desde localStorage al inicio
        };
    },
    watch: {
        tasks: {
            handler(tasks) {
                localStorage.setItem('tasks', JSON.stringify(tasks)); // Guardar tareas en localStorage cuando cambien
            },
            deep: true
        }
    },
    methods: {
        addTask(newTask) {
            this.tasks.unshift(newTask); // Añade la nueva tarea al inicio de la lista
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
/* Aquí puedes agregar estilos personalizados para el componente. */
</style>
