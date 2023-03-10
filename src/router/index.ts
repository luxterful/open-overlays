import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'overlays' }
    },
    {
      path: '/overlays',
      name: 'overlays',
      component: () => import('../views/AdminView.vue'),
      children: [
        {
          path: ':id',
          name: 'overlays-detail',
          component: () => import('../views/OverlayOperatorView.vue')
        }
      ]
    },

    {
      path: '/embed/:id',
      name: 'embed',
      component: () => import('../views/OverlayEmbedView.vue')
    }
  ]
})
