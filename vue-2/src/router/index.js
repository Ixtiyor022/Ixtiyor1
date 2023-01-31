import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home/Home";
import Aboutus from "@/views/Aboutus/Aboutus";
import Buyersguides from "@/views/Buyersguides/Buyersguides";
import Categories from "@/views/Categories/Categories";
import Ourteam from "@/views/Ourteam/Ourteam";
import Shop from "@/views/Shop/Shop"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: Aboutus
  },
  {
    path: '/buyersguides',
    name: 'buyersguides',
    component: Buyersguides
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories
  },
  {
    path: '/ourteam',
    name: 'ourteam',
    component: Ourteam
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
