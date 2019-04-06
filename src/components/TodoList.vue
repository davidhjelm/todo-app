<template>
  <div class="todolist">
    <div class="showDoneToggle" @click="showDone()">
      <font-awesome-icon :icon="checkIcon[getShowDone]" />
      <div id="showDone">Show Done</div>
    </div>
    <div class="todo" v-for="todo in allTodos" :key="todo.id">
      <div class="todoText"> {{todo.text}} </div>
      <div class="added">Added: {{todo.dateAdded}} </div>
      <font-awesome-icon class="delete" @click="DeleteTodo(todo.id)" icon="trash" />
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
    DeleteTodo: function (id) {
      this.deleteTodo(id)
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
  }
</style>
