import { createStore } from 'vuex'
import TodoService from '../services/TodoService'

export default createStore({
    state: {
        todos: [
            {
                id: 1,
                created_by: 'Zaccaria',
                created_at: '2020-09-03',
                todo_text: 'ipsum primis in faucibus orci luctus',
                todo_done: true,
            },
        ],
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
