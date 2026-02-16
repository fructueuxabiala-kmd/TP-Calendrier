<script setup>
import ListTask from '@/components/ListTask.vue';
import { useListStore, useModalStore } from '@/stores/listTask';
import { ref, watch } from 'vue'
const modalStore = useModalStore()
const taskStore = useListStore()


const newTask = ref('')

watch(
  ()=>taskStore.editedTask,
  (newVal)=>{
    newTask.value = newVal.task
  }
)
function addTask() {

  if(taskStore.isEdit){
    taskStore.updateTask(newTask.value)
    modalStore.close()
     taskStore.toggleEdit()
  }else{
    const obj = {id:Date.now(), task:newTask.value, day: modalStore.selectedDay}
    taskStore.addTask(obj)
    
  }
  newTask.value = ''
}

</script>

<template>
 

  <Transition name="fade">
    <div v-if="modalStore.isOpen" 
         class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      
      <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all">
        
        <div class="px-6 py-4 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
          <div>
            <h3 class="text-lg font-bold text-slate-800">Nouvelle tâche</h3>
            <p class="text-xs text-indigo-600 font-bold uppercase tracking-widest">{{ modalStore.selectedDay }}</p>
          </div>
          <button @click="modalStore.close()" class="text-slate-400 hover:text-slate-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="p-6">
          <label class="block text-sm font-medium text-slate-700 mb-2">Description de la tâche</label>
          <input 
            v-model="newTask"
            type="text" 
            placeholder="Ex: Réunion de design..."
            autofocus
            class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-slate-800 placeholder:text-slate-400"
            @keyup.enter="addTask"
          />
        </div>

        <div class="px-6 py-4 bg-slate-50/50 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
          <button 
            @click="modalStore.close()" 
            class="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors"
          >
            Retour
          </button>
          <button 
            @click="addTask" 
            class="px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-200 rounded-xl transition-all active:scale-95"
            
            >
            {{taskStore.isEdit?'Modifier':'Ajouter une tâche'}}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Animation d'apparition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>