import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Nav from '../components/Nav.vue'

const routes = [
  
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router
