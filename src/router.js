import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Venus from './views/Venus'
import Mercury from './views/Mercury'
import Earth from './views/Earth'
import Sun from './views/Sun'
import Mars from './views/Mars'
import Jupiter from './views/Jupiter'
import Saturn from './views/Saturn'
import Uranus from './views/Uranus'
import Neptune from './views/Neptune'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/Venus',
      name: 'venus',
      component: Venus
    },
    {
      path: '/Mercury',
      name: 'mercury',
      component: Mercury
    },
    {
      path: '/Earth',
      name: 'earth',
      component: Earth
    },
    {
      path: '/Sun',
      name: 'sun',
      component: Sun
    },
    {
      path: '/Mars',
      name: 'mars',
      component: Mars
    },
    {
      path: '/Jupiter',
      name: 'jupiter',
      component: Jupiter
    },
    {
      path: '/Saturn',
      name: 'saturn',
      component: Saturn
    },
    {
      path: '/Uranus',
      name: 'uranus',
      component: Uranus
    },
    {
      path: '/Neptune',
      name: 'neptune',
      component: Neptune
    }   
  ],
  scrollBehavior() {
    return {x: 0, y: 0}
}
})
