<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6">Authentication</div>
      </q-card-section>
      <q-card-section>
        <p>UID:{{ authStore.uid }}</p>
        <p>USERNAME:{{ authStore.username }}</p>
        <p>Status:{{ authStore.loginStatus }}</p>
      </q-card-section>
      <q-card-section>
        <q-btn color="primary" label="Login" @click="authStore.login('Natt')" />
        <q-btn color="negative" label="Logout" @click="authStore.logout()" />
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script setup>
import { useAuthStore } from '@/stores/authStore'
const authStore = useAuthStore()
</script>
