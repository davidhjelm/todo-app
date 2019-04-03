<template>
  <div class="container">
    <input v-model="newTodo" placeholder="New todo" @keyup.enter="addTodo"/>
    <button @click="addTodo">Add</button>
    <div class="todo" v-for="todo in todos" :key="todo.id" >
      <div class="todoText"> {{todo.text}} </div>
      <div class="added">Added: {{todo.dateAdded}} </div>
      <div class="done">X</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  methods: {
    addTodo: function () {
      this.todos.unshift({ text: this.newTodo, done: false, dateAdded: 'today' })
      this.newTodo = ''
    }
  },
  data () {
    return {
      newTodo: '',
      showHidden: false,
      todos: [{
        text: 'do this',
        done: false,
        dateAdded: 'today'
      }, {
        text: 'do that',
        done: true,
        dateAdded: 'yesterday'
      }, {
        text: 'third todo',
        done: false,
        dateAdded: '2019-01-10'
      }]
    }
  }
}
</script>

<style scoped>
  .container {
    margin: auto;
    width: 50%;
  }
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
