import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Booking from '../views/Booking.vue'
import Contact from '../views/Contact.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'About',
    component: About
    
  },
  {
    path: '/our-services',
    name: 'Services',
    component: Services
    
  },
  {
    path: '/booking-online',
    name: 'Booking',
    component: Booking
    
  },
  {
    path: '/contact-us',
    name: 'Contact',
    component: Contact
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
