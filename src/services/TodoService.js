import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://localhost:3000`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export default {
    getTodos() {
        return apiClient.get('/todos')
    },
    postTodo(todo) {
        console.log(todo)
        return apiClient.post('/todos', todo)
    },
}
