import assert from 'power-assert'
import Vue from 'vue'
import Counter from '../../src/Counter'

describe('Counter', () => {
  const Component = Vue.extend(Counter)

  it('accepts value prop', () => {
    const vm = new Component({
      propsData: {
        value: 3
      }
    })

    assert(vm.value === 3)
  })
})
