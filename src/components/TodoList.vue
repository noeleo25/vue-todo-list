<template>
  <div class="main-container">
    <div class="input-container">
      <form class="md-layout item-form">
        <div 
          class="field-group"
          >
          <md-field :class="invalidInputForm ? 'error' : ''">
            <label for="new-todo-item">Item</label>
            <md-input 
              class="mat-input-element"
              type="text" 
              name="new-todo-item" 
              id="new-todo-item" 
              autocomplete="off" 
              v-model.trim="newItemName"
              @keyup.enter="addItem($event)"
              @focus="isInputActive = true"
              @blur="isInputActive = false" 
            />
          </md-field>
          <md-button
            @click.stop="addItem($event)"
            id="add-new-item-btn"
            :disabled="newItemName.length <= 0"
            class="md-raised md-primary add-button"
            color="primary"
          >
            Add
          </md-button>
        </div>
          
      </form>
      <p 
        class="error-msg"
        v-if="invalidInputForm"
      > 
      Please write something
      </p>

    </div>
    <div class="todo-area">
      <div class="example-container">
        <h2>To do</h2>
        <div
          class="example-list"
        >
          <draggable class="draggable-box"
            :list="todoItems" group="list-items"
          >
            <div
              v-for="(item, index) in todoItems"
              :key="index+'-todo'"
              class="example-box todo-list-item"
            >
              {{ item.description }}
              <md-button class="md-icon-button md-btn-accent" 
               @click="deleteTodoItem(item)">
                <span class="material-icons">delete</span>
              </md-button>
            </div>
          </draggable>
        </div>
      </div>

      <div class="example-container" id="done">
        <h2>Done</h2>

        <div
          class="example-list"
          
        >
          <draggable
            :list="doneItems" group="list-items" class="draggable-box"
          >
            <div
            v-for="(item, index) in doneItems"
              :key="index+'-done'" class="example-box" :class="index">
              {{ item.description }}
              <div class="icons-box">
                <md-button 
                  class="md-icon-button md-btn-accent" 
                  @click="deleteDoneItem(item)">
                  <span class="material-icons">delete</span>
                </md-button>
                <md-button class="md-icon-button md-btn-second">
                  <span class="material-icons">check_circle </span>
                </md-button>
              </div>
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import draggable from 'vuedraggable'
 export default {
   components: { draggable },
   data() {
     return {
       newItemName: "",
       todoItems: [
          { description: "Clone the Angular Repo" },
          { description: "Analyze the Angular Project" },
          { description: "Create the Vue Repo" },
          { description: "Migrate the Angular code to Vue" },
          { description: "Publish the Vue Repo" }
       ],
       doneItems: [],
       isInputActive: false
     }
   },
   methods: {
     addItem(event){
       event.preventDefault();
       const newItem = {
          description: this.newItemName, 
       }
       this.todoItems.push(newItem);
     },
     deleteTodoItem(item){
        this.todoItems.splice(item, 1);
     },
     deleteDoneItem(item){
        this.doneItems.splice(item, 1);
     }
   },
   computed: {
     invalidInputForm() {
      return this.isInputActive === true && this.newItemName.length <= 0;
     }
   },
 }
</script>

<style scoped>
.main-container{
  max-width: 900px;
  margin: auto;
}
.item-form{
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.field-group{
  width: 100%;
  display: flex;
  align-items: center;
}
.md-field{
  padding-top: 0;
  color: inherit;
}
.md-field.error{
  color: #f44336;
}
.md-field:after{
  background-color: #3f51b5;
}
.md-field.error:after{
  background-color:#f44336;
}
.input-width {
  width: 20%;
}
.error-msg{
  color: #f44336;
  margin: 0;
  font-size: 16px;
}
.add-button {
  margin-left: 8px;
  background-color: #3f51b5;
  border-radius: 4px;
  color: #fff;
  text-transform: capitalize;
  font-family: Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 500;
}

.input-container {
  margin-top: 26px;
}
.todo-area{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
#done{
  margin-top: 40px;
}
.example-container {
  width: 400px;
  max-width: 100%;
  /*margin: 0 25px 25px 0;
  display: inline-block;
  vertical-align: top;*/
}

.example-list {
  border: solid 1px #ccc;
  min-height: 60px;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  display: block;
}

.draggable-box{
  min-height: 60px;
}

.example-box {
  padding: 10px 10px;
  border-bottom: solid 1px #ccc;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: move;
  background: white;
  font-size: 16px;
}
.mat-input-element {
    font: inherit;
    background: transparent;
    color: currentColor;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 100%;
    vertical-align: bottom;
    text-align: left;
    box-sizing: content-box;
    height: 48px !important;
    padding-top: 10px !important;
}
.example-box:last-child {
  border: none;
}
.icons-box {
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 10px;
}

@media (min-width: 992px) {
  .todo-area{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  #done{
    margin-top: 0;
  }
  .example-box{
    padding: 20px 10px;
  }
}

</style>