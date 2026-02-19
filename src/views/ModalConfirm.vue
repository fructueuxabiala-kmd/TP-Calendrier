<script setup>
import { useListStore, useNotificationStore } from '@/stores/listTask';

const taskStore = useListStore()
const notifStore = useNotificationStore()

function remove(){
    const id = taskStore.deletedTask
    taskStore.removeTask(id)
    notifStore.show('Tâche supprimer')
}
function closeConfirm(){
    taskStore.closeConfirm()
}

</script>


<template>

<div v-if="taskStore.isOpenConfirm" class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
  <!-- Overlay sombre semi-transparent -->
  <div class="fixed inset-0  transition-opacity"></div>

  <!-- Contenu modal -->
  <div
    class="bg-white rounded-2xl shadow-xl transform transition-all sm:max-w-lg sm:w-full mx-4 sm:mx-0 p-6 sm:p-8 z-50"
  >
    <!-- Header -->
    <div class="flex items-center">
      <div class="flex-shrink-0 bg-red-100 rounded-full p-3">
        <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </div>
      <h3 class="ml-4 text-lg font-semibold text-gray-900">Confirmez la suppression</h3>
    </div>

    <!-- Message -->
    <p class="mt-4 text-gray-600 text-sm">
      Êtes-vous sûr de vouloir supprimer cette tâche ? Cette action est irréversible.
    </p>

    <!-- Boutons -->
    <div class="mt-6 flex justify-end gap-3">
      <button
        @click="closeConfirm"
        class="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
      >
        Annuler
      </button>
      <button
        @click="remove"
        class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
      >
        Supprimer
      </button>
    </div>
  </div>
</div>



</template>


<style scoped>


</style>