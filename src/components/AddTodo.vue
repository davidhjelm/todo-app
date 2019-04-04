<template>
  <div class="AddTodo">
    <input v-model="newTodo" placeholder="New todo" @keyup.enter="AddTodo"/>
    <button @click="AddTodo">Add</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddTodo',
  data: function () {
    return {
      newTodo: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    AddTodo: function () {
      const dateNow = () => {
        const newDate = Date()
        return newDate.toLocaleString(Date.now())
      }
      this.addTodo({ text: this.newTodo, done: false, dateAdded: dateNow() })
      this.newTodo = ''
    }
    // addTodo: function () {
    // this.todos.unshift({ text: this.newTodo, done: false, dateAdded: 'today' })
    // this.newTodo = ''
    // }
  }
}
</script>

<style scoped>
  .AddTodo {
    width: 50%;
    margin: auto;
  }
</style>
