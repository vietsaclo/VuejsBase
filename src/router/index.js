import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '../components/home-page/HomeIndex';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomeIndex,
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomeIndex,
    }
  ]
})