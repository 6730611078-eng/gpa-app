<template>
    <div>
        <ProductCard v-for="p in Products" :key="p.id" 
        :product="p" @add-to-cart="handleAddToCart">
        <template #card-header>Product No.{{ P.id }}</template>
        </ProductCard>
        
    </div>
</template>

<script setup>
import {ref} from 'vue';
import ProductCard from '@/components/ProductCard.vue';

const Products = ref([
    {id: 1, name: 'ProductA', price: 100, image:'images/fk.jpg'},
   {id: 2, name: 'ProductB', price: 200, image:'images/fish.png'},
   {id: 3, name: 'ProductC', price: 500, image:''}
])

const handleAddToCart = (product) => {
    console.log("Add: ",product.name,product.price,"Baht")
}
</script>