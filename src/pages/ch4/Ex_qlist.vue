<template>
    <q-page class="q-pq-md">
        <q-list bordered separator class="rounded-borders" style="max-width: 600px; margin: 0 auto;">
        <q-item-label header class="text-h6">My Todo List</q-item-label>
        <q-item v-for="item in todoList" :key="item.id" clickable v-ripple
          :class="item.done ? 'bg-green-1' : 'bg-white'" @click="toggleTodo(item.id)">
          <q-item-section avatar>
          <q-icon :name="item.done ? 'check_circle' : 'radio_button_unchecked'"
          :color="item.done ? 'positive' : 'grey-5'" size="28px" />
          </q-item-section>

          <q-item-section>
            <q-item-label :class="item.done ? 'text-strikethrough text-grey-6' : 'text-dark'">
            {{ item.title }}
            </q-item-label>
            <q-item-label caption lines="1">
            Due date: {{ item.dueDate }} | {{ item.category }}
            </q-item-label>
            </q-item-section>
            <q-item-section side>
            <q-badge :color="getPriorityColor(item.priority)" :label="item.priority" />
            </q-item-section>
          </q-item>
        <q-item v-if="todoList.length === 0">
        <q-item-section class="text-center text-grey">NO List</q-item-section>
        </q-item>
        </q-list>
    </q-page>
</template>
<script setup>
import {ref} from 'vue';
const todoList = ref([
    {id: 1, title: 'Frontend Class',done: false,
    dueDate: '2026-07-20', category: 'Education', priority: 'high' },
    { id: 2, title: 'Grocery shopping', done: true,
    dueDate: '2026-07-19', category: 'Shopping', priority: 'medium' },
    { id: 3, title: 'Excercise', done: false,
    dueDate: '2026-07-21', category: 'Health', priority: 'low' }
])
const toggleTodo = (id) => {
const index = todoList.value.findIndex(todo => todo.id === id)
    if (index !== -1) {
    todoList.value[index].done = !todoList.value[index].done
}
}
const getPriorityColor = (priority) => {
    const colors = {
        high: 'negative',
        medium: 'warning',
        low: 'positive'
 }
 return colors[priority] || 'grey'
}
</script>

<style scoped>
.text-strikethrough { text-decoration: line-through; }
</style>