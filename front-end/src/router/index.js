import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeedView from '../views/FeedView.vue'
import AnalyticView from '../views/AnalyticView.vue'
import IncomeView from '../views/IncomeView.vue'
import AdminView from '../views/AdminView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/feeds',
    name: 'feeds',
    component: FeedView
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: AnalyticView
  },
  {
    path: '/income',
    name: 'income',
    component: IncomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
