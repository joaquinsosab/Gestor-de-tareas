<template>
  <div class="home text-center">
    <h1>Bienvenido a la Aplicación de Tareas con Vue</h1>
    <img src="../assets/logo.png" alt="Vue logo" class="logo" />
    <h2>Secciones de la Aplicación</h2>
    <ul class="list-unstyled">
      <li><strong>Añadir Tarea:</strong> Permite ingresar nuevas tareas manualmente.</li>
      <li><strong>Lista de Tareas:</strong> Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas.</li>
      <li><strong>Vista Combinada:</strong> Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  padding: 20px;
}

.logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sutil sombreado */
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  font-size: 18px;
}
</style>
