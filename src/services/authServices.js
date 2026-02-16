import { ref } from "vue";

export const authService = {
    login(email, password){
        if (email === 'admin@admin.com' && password === '123456') {
            localStorage.setItem('auth', 'true');
            auth.value = true
            return true;
        }return false
    },

     logout(){
        localStorage.removeItem('auth')
        auth.value = false
    },

  inscription(userData) {
    console.log('new user:', userData)

    return true
  },
}
export const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true'
}

export const auth = ref(localStorage.getItem('auth') === 'true')
