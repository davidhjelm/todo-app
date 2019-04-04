const state = {
  todos: []
}

const getters = {
  allTodos: state => state.todos
}

const mutations = {
  pushTodo: (state, newTodo) => state.todos.unshift(newTodo),
  popTodo: (state, todoId) => {
    state.todos = state.todos.filter(t => (t.id !== todoId))
  }
}

const actions = {
  addTodo: (context, todoString) => {
    const dateNow = () => {
      const newDate = Date()
      return newDate.toLocaleString(Date.now())
    }
    const newTodo = {
      text: todoString,
      done: false,
      dateAdded: dateNow(),
      id: Math.floor(Math.random() * 100000)
    }
    context.commit('pushTodo', newTodo)
  },
  deleteTodo: (context, todoId) => {
    console.log(`deleting ${todoId}`)
    context.commit('popTodo', todoId)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
