<template>
  <q-page padding>
    <q-btn color="primary" label="Load Album" @click="albumstore.loadAlbum()" />
    <!-- Loading -->
    <div v-if="albumstore.loading" class="q-mt-md">
      <q-spinner-dots color="primary" size="40px" />
    </div>
    <!-- Error -->
    <q-banner v-else-if="albumstore.errMsg" class="bg-red-1 text-negative q-mt-md" rounded>
      <template #avatar>
        <q-icon name="error" color="negative" />
      </template>
      {{ albumstore.errMsg }}
    </q-banner>
    <!-- API -->
    <q-list v-else bordered separator class="q-mt-md">
      <q-item v-for="item in albumstore.album" :key="item.id">
        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
          <q-item-label caption>Album ID : {{ item.id }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
<script setup>
import { useAlbumStore } from '@/stores/album-store'
const albumstore = useAlbumStore()
</script>
