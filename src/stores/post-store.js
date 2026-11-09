import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/boot/axios'
// import { is } from "quasar";

export const usePostStore = defineStore('post', () => {
  const postItems = ref([])
  const isLoading = ref(false)

  async function fetchAllPosts() {
    isLoading.value = true
    try {
      const res = await api.get('/posts')
      postItems.value = res.data
      console.log('Listing all:', res.data)
    } catch (error) {
      console.error('Fetch Error:', error)
    } finally {
      isLoading.value = false
    }
  }

  async function createNewPost(newpost) {
    try {
      // const res = await api.post('/posts', newpost, {
      //   headers: {
      //     'Content-Type': 'application/json; charset=UTF-8',
      //   },
      // })
      const res = await api.post('/posts', newpost,)
      console.log('create success:', res.data)
      postItems.value.unshift(res.data)
    } catch (error) {
      console.log('create error:', error)
    }
  }
  async function updatePost(id, updateData) {
    try {
      // const res = await api.post(`/posts/${id}`, updateData, {
      //   headers: {
      //     'Content-Type': 'application/json; charset=UTF-8',
      //   },
      // })
      const res = await api.post(`/posts/${id}`, updateData,)
      console.log('Update success:', res.data)
      const index = postItems.value.findIndex((item) => item.id == id)
      if (index != -1) postItems.value[index] = res.data
    } catch (error) {
      console.log('Update error:', error)
    }
  }

  async function deletePost(id) {
    try {
      await api.delete(`/posts/${id}`)
      console.log(`Deleting Success at ID: ${id}`)
      postItems.value = postItems.value.filter((item) => item.id !== id)
    } catch (error) {
      console.error('DELETE Error:', error)
    }
  }

  async function filterPostsByUserId(userId) {
    isLoading.value = true
    try {
      const response = await api.get(`/posts?userId=${userId}`)
      postItems.value = response.data
      console.log(`Filtering Success for User ${userId}:`, response.data)
    } catch (error) {
      console.error('Filter Error:', error)
    } finally {
      isLoading.value = false
    }
  }

  async function fetchPostComments(id) {
    try {
      const response = await api.get(`/posts/${id}/comments`)
      console.log(`Comments for Post ${id}:`, response.data)
      return response.data
    } catch (error) {
      console.error('Nested Fetch Error:', error)
    }
  }

  return { postItems, isLoading, fetchAllPosts, createNewPost, updatePost, deletePost,filterPostsByUserId,fetchPostComments }
})
