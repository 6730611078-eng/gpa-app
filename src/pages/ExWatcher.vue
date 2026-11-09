<template>
    <div class="q-ma-md">
        <q-btn color="primary" icon="add" label="Increase count" @click="count++" />
        <q-btn color="secondary" label="Add Score" @click="state.score++" />
        <q-input v-model="state.user.name" type="text" label="Edit your name" filled />
        <div class="q-mt-md">
            <p>Count: {{ count }}</p>
            <p>Score: {{ state.score }}</p>
            <p>User Name: {{ state.user.name }}</p>
        </div>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue'
const count = ref(0)
const state = ref({
    user: { name: 'Jack' },
    score: 10
})

watch(count, (newValue, oldValue) => {
    console.log(`Change count from ${oldValue} to ${newValue}`)
})

watch(
() => state.value.score,
(newScore) => {
    console.log(`New score: ${newScore}`)
}
)

watch(
    () => state.value.user,
    (newUser) => {
    console.log('New user object: ' + JSON.stringify(newUser))
    },
    { deep: true } 
)
</script>
