<script setup>
import { useListStore, useModalStore } from '@/stores/listTask'
const modaleStore = useModalStore()

const taskStore = useListStore()

function ConfirmDelelte(id){
taskStore.setDeletedTask(id)
}
function updateTask(task) {
  modaleStore.open()
  taskStore.setEditedTask(task)
  taskStore.toggleEdit()
}

</script>

<template>
  <tr
    v-for="task in taskStore.tasksByDate('Jeudi')"
    :key="task.id"
    class="group "
    draggable="true"
    @dragstart="(e) => e.dataTransfer.setData('task', task.id.toString())"
    
  >
    <td class="w-xl max-w-[300px]" >
      <div
        class="relative bg-white rounded-xl border border-slate-200 px-4 py-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-indigo-300"
      >
        <!-- Accent subtle -->
        <div
          class="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-indigo-500/70 opacity-0 group-hover:opacity-100 transition-all duration-300"
        ></div>

        <!-- Contenu -->
        <div class="flex items-start justify-between gap-4">
          <div class="flex-1">
            <p class="text-sm font-medium text-slate-700 leading-relaxed">
              {{ task.task }}
            </p>
          </div>

          <!-- Actions -->
          <div
            class="flex items-center gap-2 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          >
            <!-- Edit -->
            <button
              @click="updateTask(task)"
              class="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-200 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>

            <!-- Delete -->
            <button
              @click="ConfirmDelelte(task.id)"
              class="flex items-center justify-center w-8 h-8 rounded-lg bg-red-50 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-200 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>

<style scoped></style>
