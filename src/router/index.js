import Vue from 'vue'
import VueRouter from 'vue-router'
import RootView from '../views/RootView.vue'
import AuthMiddleware from './auth.guard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: RootView
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
    meta: { protected: true }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(AuthMiddleware)

export default router
