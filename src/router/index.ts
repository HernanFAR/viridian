import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue';
import NotFound from '@/views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/Map'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/Map'
      },
      {
        path: 'Recomendations',
        component: () => import('@/views/Recomendations.vue')
      },
      {
        path: 'Map',
        component: () => import('@/views/Map.vue')
      },
      {
        path: 'Stadistics',
        component: () => import('@/views/Stadistics.vue')
      }
    ]
  }, {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
