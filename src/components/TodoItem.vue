<template>
    <div class="flex">
        <div class="px-4 py-2 bg-white text-primary text-lg text-left flex-grow flex-wrap rounded-l-lg">
            {{ todo.todo_text }}
        </div>
        <button class="bg-green w-12 h-12 flex justify-center">
            <i class="fas fa-check self-center"></i>
        </button>
        <button class="bg-primary w-12 h-12 flex justify-center rounded-r-lg">
            <i class="fas fa-trash self-center"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },
}
</script>
