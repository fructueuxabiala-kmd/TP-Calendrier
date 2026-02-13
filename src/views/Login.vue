<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { authService } from '@/services/authServices';

const router = useRouter();
const email = ref('');
const password = ref();

const login =() => {
    if (authService.login(email.value, password.value)) {
        router.push('/calendar')
    }
}
</script>


<template>
<!-- <nav>
  <div>
    <RouterLink to="/demo">DEMO</RouterLink>
  </div>
  <div>
    <RouterLink to="/signin">SIGN IN</RouterLink>
  </div>
</nav> -->
<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-white-200 via-blue-200 to-white-200 p-6">
  
  <div class="w-full max-auto max-w-md backdrop-blur-lg bg-black/15 p-8 rounded-3xl shadow-2xl border border-white/30">
    
    <div class="text-center mb-10">
      <h1 class="text-4xl font-extrabold text-white tracking-tight">LOGIN</h1>
      <p class="text-white/80 mt-2 text-sm">Ravi de vous revoir !</p>
    </div>

    <form @submit.prevent="login" class="space-y-6">
      <div class="group">
        <label class="block text-white text-xs font-semibold uppercase mb-2 ml-1">Email</label>
        <input 
          v-model="email" 
          type="email" 
          required 
          placeholder="votre@email.com" 
          class="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all duration-300"
        />
      </div>

      <div class="group">
        <label class="block text-white text-xs font-semibold uppercase mb-2 ml-1">Mot de passe</label>
        <input 
          v-model="password" 
          type="password" 
          required 
          placeholder="••••••••" 
          class="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all duration-300"
        />
      </div>

      <button 
        type="submit" 
        class="w-full py-4 bg-white text-indigo-600 font-bold rounded-2xl shadow-lg hover:bg-indigo-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
      >
        Se connecter
      </button>
    </form>

    <div class="mt-8 text-center text-white/90">
      <p class="text-sm">
        Je n'ai pas de compte ? 
        <RouterLink to="/signin" class="font-bold underline hover:text-white transition-colors">
          Créer un compte
        </RouterLink>
      </p>
    </div>
    
  </div>
</div>
</template>


<style scoped>


</style>