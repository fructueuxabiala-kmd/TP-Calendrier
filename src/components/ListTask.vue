<script setup>
import { useListStore, useModalStore } from '@/stores/listTask'
import { computed } from 'vue'
import Lundi from './Lundi.vue'
import Mardi from './Mardi.vue'
import Mercredi from './Mercredi.vue'
import Jeudi from './Jeudi.vue'
import Vendredi from './Vendredi.vue'
import Samedi from './Samedi.vue'
import Dimanche from './Dimanche.vue'

const taskStore = useListStore()
const modalStore = useModalStore()
// const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

const componentsMap = {
  Lundi,
  Mardi,
  Mercredi,
  Jeudi,
  Vendredi,
  Samedi,
  Dimanche,
}
function addTask(day) {
  modalStore.open()
  modalStore.setDay(day)
  console.log(day)
}

function dropTask(e,jour) {
  const id = Number(e.dataTransfer.getData('task'))
  taskStore.dropTask(id,jour)

}
</script>

<template>
  <div class="min-h-screen bg-slate-50 p-6 pt-30">
    <header class="mb-8 flex items-center justify-between pb-20">
      <h2 class="text-2xl font-extrabold text-slate-800 tracking-tight">Semaine de Travail</h2>
      <div class="flex space-x-2">
        <span
          class="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase"
          >Février 2026</span
        >
      </div>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
      <div
        v-for="jour in ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']"
        :key="jour"
         @dragover.prevent
             @drop="(e) => dropTask(e, jour)"
        class="flex flex-col group gap-6"
      >
        <div
          @click="addTask(jour)"
          class="flex items-center justify-between mb-4 cursor-pointer group-hover:translate-x-1 transition-transform duration-200"
        >
          <span
            class="text-sm font-bold text-slate-400 uppercase tracking-widest group-hover:text-indigo-600"
          >
            {{ jour }}
          </span>
          <button
            class="opacity-0 group-hover:opacity-100 bg-white shadow-sm border border-slate-200 rounded p-1 text-indigo-600 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>

        <div
          class="flex-1  bg-white/60 backdrop-blur-sm border-t-2 border-transparent group-hover:border-indigo-500 rounded-xl p-4 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md min-h-[300px] gap-6"
        
          
        >
          <div class="flex-1 bg-white/60 backdrop-blur-sm border-t-2 border-transparent group-hover:border-indigo-500 rounded-xl p-4 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md min-h-[300px] flex flex-col gap-3">
  <component :is="componentsMap[jour]" @drop="(e) => dropTask(e, jour)" />

</div>


          <div
            @click="addTask(jour)"
            class="mt-0 border-2 border-dashed border-slate-200 rounded-lg p-3 text-center text-slate-400 text-sm hover:border-indigo-300 hover:text-indigo-400 cursor-pointer transition-colors"
            
          >
            + Ajouter
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
