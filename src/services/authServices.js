export const authService = {
  login(email, password) {
    if (email === 'admin@admin.com' && password === '123456') {
      localStorage.setItem('auth', 'true')
      return true
    }
    return false
  },

  logout() {
    localStorage.removeItem('auth')
  },

  inscription(userData) {
    console.log('new user:', userData)

    return true
  },
}
export const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true'
}
