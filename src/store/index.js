import { createStore } from 'vuex'
import TodoService from '../services/TodoService'

export default createStore({
    state: {
        todos: [],
    },
    mutations: {
        ADD_TODO(state, todo) {
            state.todos.push(todo)
        },
    },
    actions: {
        createTodo({ commit }, todo) {
            return TodoService.postTodo(todo)
                .then(() => {
                    commit('ADD_TODO', todo)
                })
                .catch(error => {
                    console.log(error)
                })
        },
    },
    modules: {},
})
