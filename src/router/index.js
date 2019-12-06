import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/mb-main';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    meta: {
      exit: true,
      keepAlive: false
    }
  }]
})