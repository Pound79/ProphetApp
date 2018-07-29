import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import About from '@/components/About'
import Prophet from '@/components/Prophet'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/prophet',
      name: 'Prophet',
      component: Prophet
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
