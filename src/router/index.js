import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:{
      name:'login'
    }
  },
  {
    path: '/menuLists',
    name: 'menuLists',
    component: () => import('../components/menuLists.vue'),
    children:[
      {
        path: '/statistics',
        name: 'Statistics',
        component: () => import('../views/statistics.vue'),
        meta: ['首页管理','系统首页']
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue')
  },
  {
    path:'/notFound',
    name:'notFound',
    component:() => import('../views/notFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
