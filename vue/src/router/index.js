import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Card from '@/pages/card'
import Tetris from '@/pages/tetris'
import Resume from '@/pages/resume'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/tetris',
      component: Tetris,
    },
    {
      path: '/card',
      component: Card,
    },
    {
      path: '/resume',
      component: Resume,
    },
  ]
})
