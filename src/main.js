import Vue from 'vue'
import router from './router'
import App from './App'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App)
})
