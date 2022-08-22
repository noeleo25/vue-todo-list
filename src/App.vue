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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
