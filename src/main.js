import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import FastClick from 'fastclick';
import store from './store';
import 'utils/request';
import 'style/index.scss';
import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';

Vue.config.productionTip = false;
Vue.use(Vant);
FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
