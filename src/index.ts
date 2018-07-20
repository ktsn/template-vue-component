import _Vue from 'vue'
import Counter from './Counter.vue'

export { Counter }

export default function install(Vue: typeof _Vue): void {
  Vue.component('counter', Counter)
}

declare const window: any
if (typeof window !== 'undefined' && typeof window.Vue === 'function') {
  window.Vue.use(install)
}
