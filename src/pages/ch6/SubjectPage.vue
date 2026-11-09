<template>
    <q-page class="q-pa-md">
        <q-card class="q-mt-md" v-for="value in store.subjects" :key="value.id">
            <q-card-section>
                <div class="text-h6">{{ value.code }} {{ value.name }}</div>
                <div class="text-subtitle2">Credit: {{ value.credit }}</div>
            </q-card-section>
        </q-card>
    </q-page>
</template>
<script setup>
import { useSubjectsStore } from '@/stores/subject-store';
const store = useSubjectsStore()
store.fetchAll()
</script>