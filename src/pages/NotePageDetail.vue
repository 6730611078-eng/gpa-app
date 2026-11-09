<template>
    <div>Notes Detail Page</div>
    <div>{{ id }}</div>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
</script>