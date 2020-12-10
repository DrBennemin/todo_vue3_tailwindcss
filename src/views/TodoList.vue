<template>
    <div>
        <Header />
        <TodoItem
            v-for="(todo, index) in todos"
            :key="index"
            :todo="todo"
            class="my-2 max-w-4xl mx-auto"
        />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import TodoItem from '../components/TodoItem.vue'
import TodoService from '../services/TodoService'

export default {
    name: 'TodoList',
    components: { Header, TodoItem },
    data() {
        return {
            todos: null,
        }
    },
    created() {
        TodoService.getTodos()
            .then(response => {
                this.todos = response.data
            })
            .catch(error => {
                console.log(error)
            })
    },
}
</script>
