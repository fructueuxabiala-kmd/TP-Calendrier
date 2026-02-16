<script setup>
import ListTask from '@/components/ListTask.vue'
import AddEvent from './AddEvent.vue'
import { ref } from 'vue'

import { useRouter } from 'vue-router'
import { authService } from '@/services/authServices'

const router = useRouter()

const deconnect = () => {
  authService.logout()
  router.push({ name: 'login' })
}
</script>

<template>
  <router-link to="addevent">Modal</router-link>

  <ListTask></ListTask>
  <AddEvent></AddEvent>
  <router-view></router-view>

  <button @click="deconnect">Se déconnecter</button>
</template>

<style scoped></style>
