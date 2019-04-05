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
  },
  flipDone: (state, todoId) => {
    const isDone = state.todos.find(t => t.id === todoId).done
    state.todos.find(t => t.id === todoId).done = !isDone
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
    context.commit('popTodo', todoId)
  },
  toggleDone: (context, todoId) => {
    context.commit('flipDone', todoId)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
