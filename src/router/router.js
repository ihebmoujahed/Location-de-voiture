import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Nav from '../components/Nav.vue'
import Signin from '../components/Sign Up/SignUp.vue'
import Login from '../components/Log in/Login.vue'

const routes = [
  
    {
      path: '',
      name: 'home',
      component: Home
    },
    
    {
      path: '/inscreption',
      name: 'inscreption',
      component: Signin
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: Login
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: Home
    },
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router
