import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import What from '../views/What/What.vue'
import Portfolio from '../views/Portfolio/Portfolio.vue'
import Testimonials from '../views/Testimonial/Testimonials.vue'
import Contact from '../views/Contact/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    parh: '/what',
    name: 'what',
    component: What
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: Testimonials
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
