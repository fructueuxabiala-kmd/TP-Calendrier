


<script setup>
import { useNotificationStore } from '@/stores/listTask';



const notification = useNotificationStore()
</script>

<template>
  <transition name="slide-fade">
    <div
      v-if="notification.isOpen"
      class="fixed top-6 right-6 max-w-xs w-full rounded-lg shadow-lg px-4 py-3 text-white flex items-center gap-3 z-50"
      :class="{
        'bg-indigo-400': notification.type === 'success',
        'bg-red-600': notification.type === 'error',
        'bg-blue-600': notification.type === 'info',
      }"
    >
      <span class="flex-1 text-sm">✅ {{ notification.message }}</span>
      <button @click="notification.close" class="text-white font-bold">×</button>
    </div>
  </transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
