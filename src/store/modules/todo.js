const state = {
  todos: [],
  showDone: true,
  maxId: 0
}

const getters = {
  allTodos: state => !state.showDone ? state.todos.filter(t => t.done === false) : state.todos,
  getShowDone: state => state.showDone
}

const mutations = {
  pushTodo: (state, newTodo) => state.todos.unshift(newTodo),
  popTodo: (state, todoId) => {
    state.todos = state.todos.filter(t => (t.id !== todoId))
  },
  flipDone: (state, todoId) => {
    const isDone = state.todos.find(t => t.id === todoId).done
    state.todos.find(t => t.id === todoId).done = !isDone
  },
  showDone: (state, showDone) => {
    state.showDone = !state.showDone
  },
  incMaxId: (state) => state.maxId++
}

const actions = {
  addTodo: ({ commit, state }, todoString) => {
    const dateNow = () => {
      const newDate = Date()
      return newDate.toLocaleString(Date.now())
    }
    commit('incMaxId')
    const newTodo = {
      text: todoString,
      done: false,
      dateAdded: dateNow(),
      id: state.maxId
    }
    commit('pushTodo', newTodo)
  },
  deleteTodo: (context, todoId) => {
    context.commit('popTodo', todoId)
  },
  toggleDone: (context, todoId) => {
    context.commit('flipDone', todoId)
  },
  showDone: (context, showDone) => {
    context.commit('showDone', showDone)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
