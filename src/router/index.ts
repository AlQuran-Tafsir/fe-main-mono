import { createRouter, createWebHistory } from 'vue-router'

import DumpSurah from '@/views/dump/Surah.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DumpSurah
    },
  ]
})

export default router
