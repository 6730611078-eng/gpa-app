import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/boot/axios'

export const useAlbumStore = defineStore('album', () => {
  const album = ref([])
  const loading = ref(false)
  const errMsg = ref('')
  async function loadAlbum() {
    loading.value = true
    errMsg.value = ''
    try {
      const response = await api.get('https://jsonplaceholder.typicode.com/albums')
      album.value = response.data
    } catch (error) {
      if (error.response) {
        errMsg.value = `Server Error(${error.response.status})`
      } else if (error.request) {
        errMsg.value = 'Unable to connect'
      } else {
        errMsg.value = error.message
      }
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  return { album, loading, errMsg, loadAlbum }
})
