import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/container',
      name: 'container',
      component: () => import('../views/ContainerAndPresentation.vue')
    },
    {
      path: '/mediator',
      name: 'mediator',
      meta: { requireAuth: true },
      component: () => import('../views/MediatorView.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  const authChecking = to.matched.some(routerRecord => routerRecord.meta.requireAuth)
  if(authChecking) {
    const {isAuth} = useAuth()
    console.log('인증이 필요한 페이지입니다.')
    if(isAuth()) {
      console.log('인증이 확인되었습니다.')
      next()
    } else {
      console.error('인증이 확인되지 않았습니다.')
      next('/login')
    }
  } else {
    console.log('인증이 필요없는 페이지입니다.')
    next()
  }
})

export default router
