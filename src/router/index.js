import { isAuthenticated } from '@/services/authServices'
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/Demo.vue'),
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/SignIn.vue'),
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('@/views/Calendar.vue'),
    meta: { requireAuth: true },
    children: [
      {
        path: '/addevent',
        name: 'addevent',
        component: () => import('@/views/AddEvent.vue'),
        meta: { requireAuth: true },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})


router.beforeEach((to,from,next) => {
  const logged = isAuthenticated();
  if (to.meta.requireAuth && !logged) {
     next ({ name: 'login'})
  } else  if (to.name === 'login' && logged) {
    next ({name: 'calendar'})
  } else {
    next()
  }
})

export default router
