import 'material-design-lite';
import '../node_modules/material-design-lite/dist/material.blue-red.min.css';


import Vue    from 'vue'
import App    from './App'
import router from './router'
import store  from './store/index'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: { App }
});
