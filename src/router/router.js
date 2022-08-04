import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Nav from '../components/Nav.vue'
import Signin from '../components/Sign Up/SignUp.vue'
import Login from '../components/Log in/Login.vue'
import Promotions from '../components/Promotions/Promotions.vue'
import Locations from '../components/Locations/Locations.vue'
import Agencies from '../components/Agencies/Agenc.vue'

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
    {
      path: '/Promotions',
      name: 'Promotions',
      component: Promotions
    },
    {
      path: '/professionnels/location-voiture-longue-duree-tunisie',
      name: 'professionnels/location-voiture-longue-duree-tunisie',
      component: Locations
    },
    {
      path: '/nos-agences',
      name: 'nos-agences',
      component: Agencies
    }
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router
