<template>
  <div class="AddTodo">
    <input v-model="newTodo" placeholder="New todo" @keyup.enter="addTodo"/>
    <button @click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data: function () {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo: function () {
      this.todos.unshift({ text: this.newTodo, done: false, dateAdded: 'today' })
      this.newTodo = ''
    }
  }
}
</script>

<style scoped>
  .AddTodo {
    width: 50%;
    margin: auto;
  }
</style>
