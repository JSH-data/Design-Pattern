import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuth = defineStore('auth', () => {
  const auth = ref(false)
  function login() {
    auth.value = true
  }
  function logout() {
    auth.value = false
  }
  function isAuth() {
    return auth.value
  }

  return { auth, logout, login, isAuth }
})
