import Counter from './Counter.vue'

export default function install(Vue) {
  Vue.component('counter', Counter)
}

/* global window */
if (typeof window !== 'undefined' && typeof window.Vue === 'function') {
  window.Vue.use(install)
}
