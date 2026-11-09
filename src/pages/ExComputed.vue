<template>
<div class="q-ma-md">
    <q-input v-model="searchText" type="text"
     label="Type to search" color="teal" ></q-input>
     <ul>
        <li v-for="item in filterItem" :key="item.name">
            {{ item.name }} Price: {{ item.price }} Baht
        </li>
     </ul>
</div>
</template>
<script setup>
import { computed,ref } from 'vue';
const items = ref([
    {name:'Banana cake',price:100},
    {name:'Chesse cake',price:150}
    ])
const searchText = ref('')
const filterItem = computed (()=>{
    return items.value.filter(
        item => item.name.toLocaleLowerCase().includes(searchText.value)
    )
})
</script>
