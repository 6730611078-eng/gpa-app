<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="toggleRightDrawer" />
        <q-toolbar-title> My Application </q-toolbar-title>
        <div v-if="store.user">
          <q-btn size="sm" color="negative" icon="logout" @click="onLogout" />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useAuthStore } from '@/stores/auth-store'
const router = useRouter()
const $q = useQuasar()
const store = useAuthStore()
const onLogout = () => {
  $q.dialog({
    title: 'Logout',
    message: 'Are you sure you want to logout?',
    cancel: true,
    persistent: true
  }).onOk(() => {
    store.logout()
    $q.notify({
      type: 'positive',
      message: 'Logout successful.'
    })
    router.replace({ name: 'login' })
  })
}

const rightDrawerOpen = ref(false)
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>
