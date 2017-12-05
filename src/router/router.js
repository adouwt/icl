import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/indexPage'
import details from '@/page/detailsPage'
import Learn from '@/page/learningPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/courses/:id/detail',
      name: 'details',
      component: details
    },
    {
      path: '/course/:id/learning',
      name: 'learning',
      component: Learn
    }
  ]
})
