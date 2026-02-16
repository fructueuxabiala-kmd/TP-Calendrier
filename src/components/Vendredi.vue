<script setup>
import { useListStore } from '@/stores/listTask';



const taskStore = useListStore()
</script>

<template>

 
<tr v-for="task in taskStore.tasksByDate('Vendredi')">
  <td class="py-4 px-6 border-b border-gray-200">{{ task.task }}</td>
</tr>
</template>

<style scoped>


</style>