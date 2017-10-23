import Vue from 'vue'
import Router from 'vue-router'
import WelcomeComponent from '@/components/WelcomeComponent/WelcomeComponent'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'default',
    component: WelcomeComponent
  }]
})
