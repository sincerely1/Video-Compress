import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@renderer/views/Home.vue'
import Setting from '@renderer/views/Setting.vue'

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'setting', path: '/setting', component: Setting }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
