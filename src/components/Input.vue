<template>
    <div>
        <form @submit.prevent="createTodo">
            <div class="flex max-w-4xl mx-auto my-8">
                <input
                    type="text"
                    class=" rounded-l-lg px-4 py-2  text-primary outline-none flex-grow"
                    placeholder="Hier kannst du ein neues Todo hinzufügen"
                    v-model="todo"
                />
                <button @click="alert" type="submit" class="bg-primary w-12 h-12 justify-center rounded-r-lg">
                    <i class="fas fa-plus self-center"></i>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'input',
    data() {
        return {
            todos: this.$store.state.todos.todo_text,
        }
    },
    methods: {
        createTodo() {
            this.$store.dispatch('createTodo', this.todo)
        },
        alert() {
            alert(this.todo)
        },
    },
}
</script>
