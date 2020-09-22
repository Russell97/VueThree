import { createRouter, createWebHashHistory } from 'vue-router'

const routes = []

routes.push({
  path: '/',
  name: '首页',
  redirect: '/home'
})

const routesList = [
  'Home',
  'About'
]

routesList.map(item => {
  routes.push({
    path: `/${item}`,
    name: item.split('/')[0],
    component: () => import('@/views/' + item + '.vue')
  })
})

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
