import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home')
const Category = () => import('views/category/category')
const Profile = () => import('views/profile/profile')
const Cart = () => import('views/cart/cart')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Category',
    component: Category
  },
  {
    path: '/Cart',
    component: Cart
  },
  {
    path: '/Profile',
    component: Profile
  }

]

const router = new VueRouter({
  mode: 'history',
  routes,

})

export default router
