<script setup>
import router from '@/router';
import { computed, ref } from 'vue';

const task = ref('')
const tasks = ref([])
const props = defineProps(
    {
        currentDay: String
    }
)
function closeModal(){
    router.back()
}
function addTask() {
    const obj ={id:Date.now(),task: task,day:props.currentDay}
    tasks.value.push(obj)
    console.log(tasks.value);
    
    localStorage.setItem('listTasks',JSON.stringify(tasks.value))
}

</script>


<template>

<section class="bg-white mt-4 p-1 xs:p-8">
  <div class=" max-w-96 sm:max-w-4xl mx-auto border border-[#4D7C0F] rounded-lg p-8">
    <h2 class="sm:text-xl text-[12px] font-bold mb-6">Ajouter une tâche</h2>
    <form @submit.prevent="addTask">
      <div class="space-y-6">
        <div class="job-description mb-[20px]"><label for="job-desc" class="block mb-[5px]">{{ currentDay }}</label>
          <div class="text-editor-toolbar  border rounded-[5px] h-14 border-[#ccc] mb-[10px]">
          {{ currentDay }}
        </div>
          <textarea name="description" style="resize:none" id="job-desc" class="w-full sm:h-[150px] h-[120px] border border-[#4D7C0F] rounded-[5px] p-[10px]" v-model = "task"></textarea>
        </div>
        <div class="grid sm:grid-cols-1 grid-cols-1 gap-6">
          <div><label for="skills" class="text-xs xs:text-sm font-medium text-gray-700 mb-1">Required Skills</label>
           
          </div>
        </div>
      </div>
      <div class="mt-8 pt-6 border-t border-gray-200 flex justify-between">
        <button type="submit" class="hidden sm:block underline-offset-8" @click="closeModal">Annuler</button>
        <button type="submit" class=" sm:w-[86px] w-full h-[50px] text-xs sm:text-base bg-[#4D7C0F] rounded-[5px] p-[13px_25px] gap-[10px] text-white" >Ajouter</button>
      </div>
    </form>
  </div>
</section>

</template>


<style scoped>


</style>