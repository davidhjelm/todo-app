<template>
  <div class="todolist">
    <div class="todo" v-for="todo in allTodos" :key="todo.id" >
      <div class="todoText"> {{todo.text}} </div>
      <div class="added">Added: {{todo.dateAdded}} </div>
      <div class="done" @click="DeleteTodo(todo.id)">X</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoList',
  computed: mapGetters(['allTodos']),
  methods: {
    ...mapActions(['deleteTodo']),
    DeleteTodo: function (id) {
      this.deleteTodo(id)
    }
  },
  data () {
    return {
      showDone: false
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
  .done {
    position: absolute;
    right: 10px;
    top: 5px;
  }
  .added {
    padding-top: 5px;
    font-style: italic;
    font-size: smaller;
  }
</style>
