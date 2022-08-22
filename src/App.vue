<template>
  <div id="app">
    <NavBar/>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    NavBar
  }
}
</script>

<style>
body{
  margin: 0;
  font-family: "Lato", sans-serif !important;
  text-align: center;
}
html, body{
  height: 100%;
  background: #70e1f5;
  background: linear-gradient(to top, #ffd194, #70e1f5);
}

.md-btn-second {
  color: #00e676;
}
.md-btn-accent {
    color: #f44336;
}

.mat-form-field {
  font-family: "Lato", sans-serif !important;
}

.mat-toolbar,
.mat-toolbar h1,
.mat-toolbar h2,
.mat-toolbar h3,
.mat-toolbar h4,
.mat-toolbar h5,
.mat-toolbar h6 {
  font: 400 20px/32px lato, sans-serif;
}



</style>
