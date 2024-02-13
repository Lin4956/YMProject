import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [{
        path: 'Home',
        component: Home,
      }, 
      {
        path: 'Category',
        component: Category,
      }
    ]
    },
    {
      path: '/Login',
      component: Login
    }
  ]

})

export default router