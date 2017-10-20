// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ButtonComponent from '@/components/ButtonComponent'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
    'b2b-button': ButtonComponent
  },
  data: function () {
    return {
      'button_main_attr': {
        value: 'normal'
      },
      'button_secondary_attr': {
        value: 'secondary'
      }
    }
  }
})
