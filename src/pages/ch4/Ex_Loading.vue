<template>
    <div class="q-pa-md">
        <q-btn label="Load data" @click="loadData" />
    </div>
</template>
<script setup>
import { useQuasar} from 'quasar';
const $q= useQuasar()
const loadData = () => {
    $q.loading.show()
    // $q.loading.show({
    //     spinner: null,
    //     message: `<div class = 'text-center'>
    //         <img src = https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?resize=476%2C280&ssl=1
    //         style="width: 350px; height: 350px; border-radius: 8px;">
    //             <div class="q-mt-md text-h4">Loading...</div>

    //         </div>`,
    //     html: true,
    //     backgroundColor:'dark',
    //     messageColor: 'white'
    // })
    // $q.loading.show({
    //     message: 'Loading data...',
    //     spinner: QSpinnerFacebook,
    //     spinnerColor: 'red',
    //     spinnerSize: 200,
    //     backgroundColor: 'yellow',
    //     messageColor: 'orange'

    
    // })
    setTimeout(()=>{
        $q.loading.hide()
        $q.notify({
            type:'positive',
            message:'Load data success'
        })

    },3000)
}
</script>