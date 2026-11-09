<template>
    <div class="q-pa-md">
        <q-btn label="Save" @click="saveNote"></q-btn>
    </div>
</template>
<script setup>
import { useQuasar } from 'quasar';
const $q = useQuasar()
const saveNote = () => {
    $q.notify({
        type: 'positive',
        message: 'Save completed',
        position:'top-right',
        icon: 'print',
        timeout : 2000
    })
}
</script>