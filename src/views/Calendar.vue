<script setup>
import ListTask from '@/components/ListTask.vue';
import AddEvent from './AddEvent.vue';
import { ref } from 'vue';


const currentDay = ref("")


</script>


<template>
<router-link to="addevent">Modal</router-link>
<h1>Data: Mois/Annee</h1>
<ListTask @currentDay = "(e)=>currentDay=e"></ListTask>
<AddEvent :currentDay="currentDay"></AddEvent>
<router-view></router-view>
</template>


<style scoped>


</style>