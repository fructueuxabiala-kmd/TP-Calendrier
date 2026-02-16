<script setup>
import { computed } from 'vue';


const days = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]

const listTasks = JSON.parse(localStorage.getItem('listTasks'))
const emit = defineEmits(['currentDay'])
function addTask(day) {
    emit('currentDay',day)
    console.log(day);
}

</script>

<template>
  <div class="shadow-lg rounded-lg overflow-hidden mx-7 md:mx-10 flex">
    <table class="w-full table-fixed" v-for="day in days" :key="day">
      <thead>
        <tr class="bg-gray-100" @click="addTask(day)">
          <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">{{ day }}</th>
        </tr>
      </thead>
      <tbody class="bg-white" v-for="task in listTasks">
        <tr>
          <td class="py-4 px-6 border-b border-gray-200">{{ day===task.day?task.task:'' }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <table class="w-full table-fixed">
      <thead>
        <tr class="bg-gray-100">
          <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Mardi</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr>
          <td class="py-4 px-6 border-b border-gray-200"></td>
        </tr>
      </tbody>
    </table>
    <table class="w-full table-fixed">
      <thead>
        <tr class="bg-gray-100">
          <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Mercredi</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr>
          <td class="py-4 px-6 border-b border-gray-200">John Doe</td>
        </tr>
      </tbody>
    </table>
    <table class="w-full table-fixed">
      <thead>
        <tr class="bg-gray-100">
          <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Jeudi</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr>
          <td class="py-4 px-6 border-b border-gray-200">John Doe</td>
        </tr>
      </tbody>
    </table>
    <table class="w-full table-fixed">
      <thead>
        <tr class="bg-gray-100">
          <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Vendredi</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr>
          <td class="py-4 px-6 border-b border-gray-200">John Doe</td>
        </tr>
      </tbody>
    </table>
    <table class="w-full table-fixed">
      <thead>
        <tr class="bg-gray-100">
          <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Samedi</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr>
          <td class="py-4 px-6 border-b border-gray-200">{{   }}</td>
        </tr>
      </tbody>
    </table>
    <table class="w-full table-fixed">
      <thead>
        <tr class="bg-gray-100 ">
          <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Dimanche</th>
        </tr>
      </thead>
      <tbody class="bg-white min-h-40">
        <tr>
          <td class="py-4 px-6 border-b border-gray-200">fghg</td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<style scoped></style>
