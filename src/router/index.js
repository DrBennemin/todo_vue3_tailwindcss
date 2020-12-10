import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../views/TodoList.vue'
import Done from '../views/Done.vue'

const routes = [
    {
        path: '/',
        name: 'TodoList',
        component: TodoList,
    },
    {
        path: '/done',
        name: 'Done',
        component: Done,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
