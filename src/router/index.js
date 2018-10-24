import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search'
import goods from '@/components/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Home',
      component:Home
      
    },
    {
      path:'/seach',
      name:'Search',
      component:Search
    },
    {
      path:'/goods',
      name:'goods',
      component:goods
    }
    
  ]
})
