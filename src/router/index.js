import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/counter',
  },
  {
    path: '/counter',
    name: 'CounterPage',
    component: () => import(/* webpackChunkName: "counter" */ '../views/CounterPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFoundPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//process.env.BASE_URL

export default router
