const state = {
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

const getters = {
  allTodos: state => state.todos
}

const mutations = {

}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
