// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import {store} from './vuex/store.js'

Vue.config.productionTip = false

Vue.use(infiniteScroll);

Vue.use(VueLazyLoad, {
  loading:"/static/loading/loading-cylon-red.svg",
  error:"/static/loading/loading-cylon.svg"
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
