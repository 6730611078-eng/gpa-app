<template>
 <q-page padding>
  <q-card shadow-3 bg-grey-2 class="q-ma-md note-card">
   <q-card-section>
    <div class="text-h6">My Note</div>
    <div class="text-body2">This is a beautiful note card.</div>
   </q-card-section>
  </q-card>
 </q-page>
</template>
<style scoped>
.note-card{
  cursor: pointer;
  border-radius: 16px;
}
.note-card:hover{
  box-shadow: 0 8px 12px blue !important;
}
</style>