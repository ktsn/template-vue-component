import Vue from 'vue'
import App from './App'
import Counter from '../src/index'

Vue.use(Counter)

new Vue({
  render: h => h(App)
}).$mount('#app')
