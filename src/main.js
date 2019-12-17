import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(vueSmoothScroll);

Vue.use(VueScrollTo);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')