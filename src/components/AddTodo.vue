<template>
  <div class="AddTodo">
    <div class="form">
      <label for="newTodo">Add a new todo item</label>
        <input v-model="newTodo" id="newTodo" placeholder="New todo" @keyup.enter="AddTodo"/>
      <button id="todoButton" @click="AddTodo">Add</button>
    </div>
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
  .form {
    padding-top: 1.5em;
    position: relative;
  }
  label {
    position: absolute;
    top: 0px;
  }
  #newTodo {
    border: 2px solid #006080;
    border-radius: 5%;
  }
  #todoButton {
    margin-left: 1em;
    padding: 0.3em;
    width: 5em;
  }
</style>
