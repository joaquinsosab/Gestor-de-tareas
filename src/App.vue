<template>
  <div id="app">
    <header class="navbar navbar-dark bg-primary w-100 text-center">
      <router-link to="/" class="navbar-brand mb-0 h3 nav-item">Gestor de Tareas</router-link>
    </header>
    <div class="d-flex">
      <nav class="sidebar bg-light">
        <ul class="nav flex-column">
          <li class="nav-item bg-light">
            <router-link to="/addtask" class="nav-link">Agregar Tarea</router-link>
          </li>
          <li class="nav-item bg-light">
            <router-link to="/tasks" class="nav-link">Lista de Tareas</router-link>
          </li>
          <li class="nav-item bg-light">
            <router-link to="/combined" class="nav-link">Vista Combinada</router-link>
          </li>
        </ul>
      </nav>
      <main class="p-4 flex-grow-1">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar {
  padding: 20px;
  display: flex;
  justify-content: center;
}

.d-flex {
  height: 100vh; /* Full height container */
}

.sidebar {
  width: 200px;
  padding-top: 20px;
}

.nav-link {
  color: #2c3e50;
}

.nav-item.bg-light {
  background-color: #f8f9fa; /* Gris claro */
}

.nav-item.bg-secondary {
  background-color: #e9ecef; /* Gris un poco más oscuro */
}

.nav-item.bg-dark {
  background-color: #dee2e6; /* Gris más oscuro */
}

.nav-link.router-link-exact-active {
  background-color: #ced4da; /* Color de fondo sutil para enlace activo */
  color: #007bff; /* Color del enlace activo */
}
</style>
