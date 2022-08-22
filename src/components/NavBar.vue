<template>
  <div class="navbar">
    <md-button class="md-icon-button">
      <span class="material-icons">menu</span>
    </md-button>
    <span>My To-do list</span>
    <span class="example-spacer"></span>
  </div>
</template>

<style scoped>
.example-spacer {
  flex: 1 1 auto;
}
.navbar{
    display: flex;
    box-sizing: border-box;
    padding: 0 16px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
    font: 400 20px/32px lato, sans-serif;
    background: #f5f5f5;
    color: rgba(0,0,0,.87);
    height: 64px;
}
</style>