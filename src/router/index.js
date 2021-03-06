import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Personnalisation from '../views/Personnalisation.vue'
import Faq from '../views/Faq.vue'
import MesCreations from '../views/MesCreations.vue'
import Precommande from '../views/Precommande.vue'
import Contact from '../views/Contact.vue'
import Compte from '../views/Compte.vue'
import MentionsLegales from '../views/MentionsLegales.vue'
import Concept from '../views/Concept.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/concept',
    name: 'Concept',
    component: Concept
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path:'/login',
    name:'Login',
    component: Login
  },
  {
    path:'/personnalisation',
    name:'personnalisation',
    component: Personnalisation
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/Precommande',
    name: 'Precommande',
    component: Precommande
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Compte',
    name: 'Compte',
    component: Compte
  },
  {
    path:'/MentionsLegales',
    name:'MentionsLegales',
    component: MentionsLegales
  },
  {
    path: '/MesCreations',
    name: 'MesCreations',
    component: MesCreations
  },
  {
    path: '/Concept',
    name: 'Concept',
    component: Concept
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
