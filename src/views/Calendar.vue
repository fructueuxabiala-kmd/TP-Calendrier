<script setup>

import { useRouter } from 'vue-router';
import { authService } from '@/services/authServices';

const router = useRouter();

const deconnect = () => {
    authService.logout();
    router.push({ name: 'login'});
} 

</script>


<template>
    <h1>Calendar</h1>
    <button @click="deconnect">Se déconnecter</button>
</template>


<style scoped>


</style>