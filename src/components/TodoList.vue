<template>
  <div class="todolist">
    <div class="showDoneToggle">
      <font-awesome-icon :icon="checkIcon[getShowDone]" @click="showDone()"/>
      <div id="showDone" @click="showDone()" >Show Done</div>
      <button id="clearLocalStorage" @click="clearAll()">Clear All</button>
    </div>
    <div class="todo" v-for="todo in allTodos" :key="todo.id">
      <div class="todoText"> {{todo.text}} </div>
      <div class="added">Added: {{todo.dateAdded}} </div>
      <font-awesome-icon class="delete" @click="deleteTodo(todo.id)" icon="trash" />
      <font-awesome-icon id="taskDoneToggle" :icon="checkIcon[todo.done]" @click="toggleDone(todo.id)" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoList',
  computed: mapGetters(['allTodos', 'getShowDone']),
  methods: {
    ...mapActions(['deleteTodo', 'toggleDone', 'showDone']),
    clearAll () {
      localStorage.clear() // TODO: Requires doing a full reload after hitting the button
    }
  },
  data () {
    return {
      checkIcon: {
        true: ['far', 'check-square'],
        false: ['far', 'square']
      }
    }
  }
}
</script>

<style scoped>
  .todo {
    position: relative;
    background-color: #006080;
    border: 2px solid black;
    color: whitesmoke;
    padding: 10px;
    margin: 10px;
  }
  .delete {
    position: absolute;
    right: 10px;
    top: 5px;
    cursor: pointer;
  }
  .todoText {
    padding-left: 1.5rem;
  }
  .added {
    padding-top: 5px;
    padding-left: 1.5rem;
    font-style: italic;
    font-size: smaller;
  }
  .showDoneToggle {
    position: relative;
    margin-top: 0.5em;
  }
  #showDone {
    position: absolute;
    left: 1em;
    top: 0em;
  }
  #taskDoneToggle{
    position: absolute;
    top: 1.5rem;
    cursor: pointer;
  }
  #clearLocalStorage {
    position: absolute;
    right: 1em;
  }
</style>
