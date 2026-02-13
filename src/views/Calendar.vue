<script setup>
import ListTask from '@/components/ListTask.vue';
import AddEvent from './AddEvent.vue';
import { ref } from 'vue';

import { useRouter } from 'vue-router';
import { authService } from '@/services/authServices';

const currentDay = ref("")

const router = useRouter();

const deconnect = () => {
    authService.logout();
    router.push({ name: 'login'});
} 

</script>


<template>
<router-link to="addevent">Modal</router-link>
<h1>Data: Mois/Annee</h1>
<ListTask @currentDay = "(e)=>currentDay=e"></ListTask>
<AddEvent :currentDay="currentDay"></AddEvent>
<router-view></router-view>
    <h1>Calendar</h1>
    <button @click="deconnect">Se déconnecter</button>
</template>


<style scoped>


</style>