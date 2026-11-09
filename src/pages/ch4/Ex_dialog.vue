<template>
    <div class="q-pa-md">
        <q-btn color="primary" label="Delete"
         @click="confrimdialog = true" />
    </div>
    <q-dialog v-model="confrimdialog" persistent>
        <q-card style="min-width: 300px;">
            <q-card-section class="row items-center">
                <q-icon name="warning" color="orange"
                size="40px" class="q-mr-md"></q-icon>
            <div>
                <div class="text-h6">Confrim</div>
                <div class="text-body2">Are you sure to delete?</div>
            </div>
        </q-card-section>
        <q-card-section>
            <q-btn label="Cancle" color="grey" v-close-popup />
            <q-btn label="Comfrim Delete" color="negative" @click="deleteAction" />
        </q-card-section>
        </q-card>
    </q-dialog>
</template>
<script setup>
import { ref } from 'vue';
const confrimdialog = ref(false)
const deleteAction = () => {
    console.log("Delete success")
    confrimdialog.value=false
}
</script>