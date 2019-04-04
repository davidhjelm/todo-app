<template>
  <div class="container">
    <AddTodo/>
    <TodoList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'

export default {
  name: 'home',
  components: {
    TodoList,
    AddTodo
  }
}
</script>

<style>
.container {
  margin: auto;
  width: 50%;
}
</style>
