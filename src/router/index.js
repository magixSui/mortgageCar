import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/mb-main';
import Buy from '@/views/mb-buy';
import Login from '@/views/login';
import Detail from '@/views/mb-detail';
import UserCenter from '@/views/mb-user-center';
import Sell from '@/views/mb-sell';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/buy'
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    meta: {
      exit: true,
      keepAlive: false
    }
  }, {
    path: '/buy',
    name: 'buy',
    component: Buy,
    meta: {
      exit: true,
      keepAlive: false
    }
  }, {
    path: '/detail/:_id',
    name: 'detail',
    component: Detail,
    meta: {
      exit: true,
      keepAlive: false
    }
  },{
    path: '/center',
    name: 'center',
    component: UserCenter,
    meta: {
      exit: true,
      keepAlive: false
    }
  }, {
    path: '/sell',
    name: 'sell',
    component: Sell,
    meta: {
      exit: true,
      keepAlive: false
    }
  }, {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      exit: true,
      keepAlive: false
    }
  }]
})