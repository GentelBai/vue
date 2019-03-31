import Vue from 'vue'

import App from './App.vue'

Vue.config.productionTip = false

import './assets/css/bootstrap.css';
import './assets/css/style.css';
import router from './plugins/router.config';
import './assets/js/jquery-1.11.1.min.js'
import './assets/js/bootstrap.min.js'
// import './assets/js/jquery.flexisel.js'
// import './assets/js/jquery.swipebox.min.js'
// import './assets/js/responsiveslides.min.js'



new Vue({
  el:'#app',
  router,
  render: h => h(App)
})


