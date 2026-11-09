<template>
 <q-page padding>
  <!-- <div v-if="isLogged">Welcome</div>
  <div v-else>Please Login</div>
  <div v-if= "score >= 80" >Excellent</div>
  <div v-else-if="score >=50">Pass</div>
  <div v-else>Fail</div>
  <div v-show="isVisible">Show or Hide</div>
  <q-btn color="primary" :label="isVisible ? 'Show' : 'Hide'"
  @click="isVisible = !isVisible"/> -->
   <!-- <div>{{ msg.toUpperCase() }}</div>
   <div>{{ isActive ? 'Open' : 'Close' }}</div>
   <div>{{ 5+3 }}</div>
   <img :src="url" >
   <q-btn :color="my_color" icon="check" label="OK"/> -->
   <!-- <ul>
    <li v-for="(item, index ) in items" :key="index">
      {{index+1}}.{{ item.name }} - {{ item.price }}Baht
    </li>
   </ul> -->
   <form @reset="onReset" @submit.prevent="onSubmit">
    <div class="q-gutter-md">
      <q-input type ="text" label="Your username" v-model="username"></q-input>
      <q-input type ="text" label="Your email" v-model="email"
      @keyup.alt.enter="onReset"></q-input>
      <q-select v-model="role" :options="roleOptions" label="Role"></q-select>
      <q-btn color="primary" type="submit" label="OK" />
      <q-btn color="grey" type="reset" label="RESET" />
    </div>
   </form>
 </q-page>
</template>

<script setup>
import { QSelect } from 'quasar'
import { ref } from 'vue'
const username = ref('')
const email = ref('')
const role = ref(null)
const roleOptions = ['Student','Teacher','Staff']
const onReset = () => {
  username.value = ""
  email.value=""
  role.value=null
}
const onSubmit = () => {
if(!username.value || !email.value){
  alert("Username or Email is empty")
  return
}
console.log("Form was Submitted:",{
  username:username.value,
  email: email.value,
  role: role.value
})
alert("Data Saved")
}
// import { useMeta } from 'quasar';
// useMeta( 
//   {title:'หน้าหลัก'}
// )
// const items = ref([{
//   id: 1, name: 'ProductA', price: 100},
//   {id: 2, name: 'ProductB', price: 200
// }])
// const isVisible = ref(true)
// const isLogged = ref(true)
// const score = ref(80)
// const my_color = ref("yellow")
// const url = ref("images/hull.jpeg")
// const msg = ref("Hello")
// const isActive = ref(true)
// console.log(msg.value)

// const items = ref(['Apple','Banana',1100])
// items.value.push(100)
// console.log(items.value)

// const Products = ref({
//   id: 1,
//   name: "Notebook",
//   price:15000
// })
// console.log(Products.value)

// const user = reactive({name:"Jack",age:20})
// console.log(user.name, user.age)

// const {name,age} = toRefs(user)
// console.log(name.value,age.value)
</script>
