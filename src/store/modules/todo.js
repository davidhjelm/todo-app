const state = {
  todos: []
}

const getters = {
  allTodos: state => state.todos
}

const mutations = {
  pushTodo: (state, newTodo) => state.todos.unshift(newTodo)
}

const actions = {
  addTodo: (context, newTodo) => {
    context.commit('pushTodo', newTodo)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
