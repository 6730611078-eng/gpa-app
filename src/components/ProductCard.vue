<template>
    <q-card class="q-ma-md">
        <q-img :src="product.image" style="height:140px;max-width:150px,"
        spinner-color="primary" spinner-size="82px"></q-img>
        <q-card-section>
            <slot name="card-header"></slot>
            <div class="text-h6">{{ product.name }}</div>
            <div class="text-subtitle2">{{ product.price }}</div>
        </q-card-section>
        <q-card-section vertical>
            <q-btn outline color="primary" icon="check" label="ADD to cart" @click="addToCart" />
        </q-card-section>
        </q-card>
</template>
<script setup>
const props = defineProps({
    product:{
        type: Object,
        required: true
    }
})
const addToCart = () => {
    emit('add-to-cart',props.product)
}
const emit = defineEmits(['add-to-cart'])
</script>