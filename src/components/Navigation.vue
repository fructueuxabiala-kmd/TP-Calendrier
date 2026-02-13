<script setup>
import { useRouter } from 'vue-router'
import { auth } from '@/services/authServices';
import { authService } from '@/services/authServices';

const router = useRouter();

const deconnect = () => {
    authService.logout();
    router.push({ name: 'login'});
} 


const table = [
    { title: "Calendar", path: "/calendar" },
 
    { title: "Demo", path: "/demo" },
]
</script>

<template>
<nav class="fixed top-0 left-0  w-full z-50 px-6 py-4">
  <div class="max-w-6xl mx-auto backdrop-blur-md bg-white/80 border border-gray-100 rounded-2xl px-6 py-3 shadow-sm flex items-center justify-between">
    
    <div class="flex items-center gap-3">
      <div class="w-8 h-7 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-[10px] font-extrabold">K.M</div>
      <span class="text-gray-900 font-extrabold tracking-tight text-4xl">KA.MI</span>
    </div>

    <div class="hidden sm:flex items-center gap-50 ">
      <RouterLink 
        v-for="item in table" 
        :key="item.path" 
        :to="item.path"
        class="text-xl font-medium transition-colors duration-200"
        :class="router.path === item.path ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'"
      >
        {{ item.title }}
      </RouterLink>
    </div>

    <div class="flex items-center gap-4">
      <RouterLink 
        v-if="!auth" 
        to="/signin" 
        class="text-2xl  font-semibold text-blue-700 hover:text-indigo-600 transition-colors"
      >
        SIGN IN
      </RouterLink>

      <button 
        v-else 
        @click="deconnect"
        class="px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-lg hover:bg-gray-800 transition-all shadow-sm"
      >
        DÉCONNEXION
      </button>
    </div>
  </div>
</nav>
</template>

<style scoped>
/* Ajout d'une petite animation d'entrée */
nav {
  animation: slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideDown {
  from { transform: translate(-50%, -100%); opacity: 0; }
  to { transform: translate(-50%, 0); opacity: 1; }
}
</style>