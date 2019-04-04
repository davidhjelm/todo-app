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
      if (this.newTodo.length === 0) return
      this.addTodo(this.newTodo)
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
