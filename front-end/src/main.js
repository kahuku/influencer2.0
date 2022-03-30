import Vue from 'vue'
import App from './App.vue'
import router from './router'

import mock from './mock-data.js'
import sponsorships from "./mock-data-sponsorships.js"
import affiliate from "./mock-data-affiliate.js"

Vue.config.productionTip = false

let data = {
  posts: mock,
  sponsorships: sponsorships,
  affiliate: affiliate
}

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')
