<template>
<div>Notes Page</div>
    <div v-for="value in notes" :key="value.id">
    <div>{{ value.id }} - {{ value.name }} <q-icon name="description"
    @click="viewNote(item)" /></div>
    </div>
<div>
    <q-btn color="green-7" icon="file_download" label="Go to new note"
    class="q-ma-sm" @click="$router.push({ name: 'newNoteApp' })" />
</div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const notes = ref([
{ id: 1, name: "Task1" },
{ id: 2, name: "Task2" }
])
const viewNote = (item) => {
router.push({
name: 'NoteDetail',
params: { id: item.id }
})
}
</script>