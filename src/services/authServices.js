import { ref } from "vue";

export const authService = {
   
    login(email, password) {
      
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
    
        const userFound = users.find(u => u.email === email && u.password === password);

       
        if ((email === 'admin@admin.com' && password === '123456') || userFound) {
            localStorage.setItem('auth', 'true');
            auth.value = true;
            return true;
        }
        return false;
    },

    logout() {
        localStorage.removeItem('auth');
        auth.value = false;
    },


    inscription(userData) {
       
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        if (users.find(u => u.email === userData.email)) {
            alert("Cet email est déjà utilisé");
            return false;
        }

       
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        
        console.log('Utilisateur enregistré avec succès !');
        return true;
    },
};

export const isAuthenticated = () => {
    return localStorage.getItem('auth') === 'true';
};

export const auth = ref(localStorage.getItem('auth') === 'true');