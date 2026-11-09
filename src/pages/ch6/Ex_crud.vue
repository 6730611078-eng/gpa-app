<template>
  <q-page class="q-pa-md bg-grey-1">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-5">
        <q-card flat bordered>
          <q-card-section class="bg-primary text-white">
            <div class="text-subtitle1 text-weight-medium">HTTP Method</div>
          </q-card-section>
          <q-list separator>
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-blue">
                  1.GET: List All
                </q-item-label></q-item-section>
              <q-item-section side>
                <q-btn color="blue" label="Fetch All" @click="handleFetchAll" :loading="isLoading" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-green">
                  2. Create: ID: 101
                </q-item-label></q-item-section>
              <q-item-section side>
                <q-btn color="green" label="Create Post" @click="handleCreate" :loading="isLoading" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-orange">
                  3. Update:
                </q-item-label></q-item-section>
              <q-item-section side>
                <q-btn color="orange" label="Update Post" @click="handleUpdate" :loading="isLoading" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-red">
                  4. Delete:
                </q-item-label></q-item-section>
              <q-item-section side>
                <q-btn color="red" label="Delete Post" @click="handleDelete(1)" :loading="isLoading" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-purple">
                  5. GET: Filter User ID: 2</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn color="purple" label="Filter User 2" @click="handleFilter(2)" :loading="isLoading" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-teal">
                  6. GET: List Comments for ID: 1</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn color="teal" label="Get Comments" @click="handleFetchComments(1)" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
      <div class="col-12 col-md-7"><q-card flat bordered>
          <q-card-section class="bg-grey-9 text-white row justify-between item-center q-py-xs">
            <div class="text-subtitle2">
              <q-icon name="terminal" />
              Live Data
            </div>
            <div class="text-caption text-grey-4">
              Total: {{ postItems.length }} records
            </div>
          </q-card-section>
          <q-card-section v-if="isLoading" class="text-center q-pa-xl">
            <q-spinner-matrix color="primary" size="3rem" />
            <div class="q-mt-sm text-grey-6">Syncing data with server...</div>
          </q-card-section>
          <q-card-section v-else>
            <div v-if="postItems.length == 0" class="text-center q-pa-xl text-grey-5">
              <q-icon name="layers_clear" size="4rem" />
              <div class="text-h6 q-mt-sm">NO Data</div>
            </div>
            <div v-else class="row q-col-gutter-sm">
              <div v-for="item in postItems.slice(0, 6)" :key="item.id" class="col=12 col-sm-6">
                <q-card flat bordered class="bg-white text-dark">
                  <q-card-section class="q-pa-sm">
                    <q-badge :color="item.id > 100 ? 'green' : 'blue'" class="q-mb-xs">ID:{{ item.id }}</q-badge>
                    <q-badge color="purple" class="q-ml-xs q-mb-xs">User:{{ item.userID }}</q-badge>
                    <div class="text-weight-bold text-subtitle2">{{ item.title }}</div>
                    <div class="text-caption text-grey-7 q-mt-xs">{{ item.body }}</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { usePostStore } from '@/stores/post-store'
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { storeToRefs } from 'pinia'
const $q = useQuasar()
const store = usePostStore()
const { postItems, isLoading } = storeToRefs(store)
const comments = ref([])
console.log(postItems)

const handleFetchAll = async () => {
  comments.value = []
  await store.fetchAllPosts()
  $q.notify({
    type: 'positive',
    message: 'Data fetched success',
    position: 'bottom-right',
  })
}
const handleCreate = async () => {
  const newPostData = {
    title: 'new post',
    body: 'body of new post',
    userID: 999,
  }
  await store.createNewPost(newPostData)
  $q.notify({
    type: 'positive',
    message: 'Data create success',
    icon: 'cloud_done',
  })
}
const handleUpdate = async () => {
  const newUpdateData = {
    title: 'update post2',
    body: 'body of new post',
    userID: 900,
  }
  await store.createNewPost(newUpdateData)
  $q.notify({
    type: 'positive',
    message: 'Data update success',
    icon: 'sync',
  })
}
const handleDelete = async (id) => {
  await store.deletePost(id)
  $q.notify({
    type: 'negative',
    message: `Deleted ID: ${id} successfully!`,
    icon: 'delete'
  })
}
const handleFilter = async (userId) => {
  comments.value = []
  await store.filterPostsByUserId(userId)
  $q.notify({
    color: 'purple',
    textcolor: 'white',
    message: `Filtering posts for User ID: ${userId}`,
    icon: 'filter_list'
  })
}
const handleFetchComments = async (id) => {
  const comments = await store.fetchPostComments(id)
  if (comments) {
    comments.value = comments
    $q.notify({
      type: 'positive',
      message: `Comments for Post ID: ${id} loaded successfully`,
      icon: 'forum'
    })
  }
}
</script>
