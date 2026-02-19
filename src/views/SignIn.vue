
<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '@/services/authServices'

const router = useRouter()

const differencePW = ref('')
const showModal = ref(false)

const form = reactive({
  nom: '',
  prenom: '',
  email: '',
  dateNaissance: '',
  password: '',
  confirmPassword: '',
})

const newUser = () => {
  differencePW.value = ''

  if (form.password !== form.confirmPassword) {
    differencePW.value = 'Les mots de passe ne sont pas identiques.'
    return
  }

  const estBon = authService.inscription({ ...form })
  
  if (estBon) {
   
    showModal.value = true
  }
}

const goToLogin = () => {
  showModal.value = false
  router.push('/') 
}

</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-white-200 via-blue-200 to-white-200 p-4"
  >
    <div
      class="w-full max-w-2xl backdrop-blur-xl bg-black/25 p-8 rounded-[2rem] shadow-2xl border border-white/20"
    >
      <div class="text-center mb-8">
        <h1 class="text-3xl font-black text-white tracking-tight uppercase">Créer un compte</h1>
        <p class="text-white/70 text-sm">Rejoignez-nous en quelques clics</p>
      </div>

      <form @submit.prevent="newUser" class="space-y-5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="text-white/90 text-xs font-bold ml-1 uppercase">Nom</label>
            <input
              v-model="form.nom"
              type="text"
              required
              placeholder="Nom"
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-white/50 outline-none transition-all"
            />
          </div>
          <div class="space-y-1">
            <label class="text-white/90 text-xs font-bold ml-1 uppercase">Prénom</label>
            <input
              v-model="form.prenom"
              type="text"
              required
              placeholder="Prénom"
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-white/50 outline-none transition-all"
            />
          </div>
        </div>

        <div class="space-y-1">
          <label class="text-white/90 text-xs font-bold ml-1 uppercase">Email</label>
          <input
            v-model="form.email"
            type="email"
            required
            placeholder="votre@email.com"
            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-white/50 outline-none transition-all"
          />
        </div>

        <div class="space-y-1">
          <label class="text-white/90 text-xs font-bold ml-1 uppercase">Date de Naissance</label>
          <input
            v-model="form.dateNaissance"
            type="date"
            required
            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-white/50 outline-none transition-all [color-scheme:dark]"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="text-white/90 text-xs font-bold ml-1 uppercase">Mot de passe</label>
            <input
              v-model="form.password"
              type="password"
              required
              placeholder="••••••••"
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-white/50 outline-none transition-all"
            />
          </div>
          <div class="space-y-1">
            <label class="text-white/90 text-xs font-bold ml-1 uppercase">Confirmation</label>
            <input
              v-model="form.confirmPassword"
              type="password"
              required
              placeholder="••••••••"
              class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-white/50 outline-none transition-all"
            />
          </div>
        </div>

        <p v-if="differencePW" class="text-red-300 text-xs font-medium italic animate-pulse">
          ⚠️ {{ differencePW }}
        </p>

        <button
          type="submit"
          class="w-full mt-4 py-4 bg-white text-purple-600 font-black rounded-xl shadow-xl hover:bg-opacity-90 hover:scale-[1.01] active:scale-95 transition-all duration-200 uppercase tracking-wider"
        >
          S'inscrire
        </button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-white/70 text-sm">
          J'ai déjà un compte ?
          <RouterLink to="/" class="text-white font-bold hover:underline">Se connecter</RouterLink>
        </p>
      </div>
    </div>
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
  
  <div class="relative bg-white rounded-[2rem] p-8 max-w-sm w-full text-center shadow-2xl transform transition-all scale-100">
    <div class="mb-4 flex justify-center">
      <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
    
    <h3 class="text-2xl font-black text-gray-800 mb-2 uppercase">Succès !</h3>
    <p class="text-gray-600 mb-6">
      Votre compte a été créé avec succès. Vous pouvez maintenant vous connecter.
    </p>
    
    <button
      @click="goToLogin"
      class="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition-all uppercase tracking-wide"
    >
      Continuer
    </button>
  </div>
</div>
  </div>
</template>

<style scoped></style>
