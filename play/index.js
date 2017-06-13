import { play } from 'vue-play'
import Counter from '../src/Counter.vue'

play(Counter)
  .add('Normal', {
    template: `
      <counter :value="count" @increment="count += 1" @decrement="count -= 1"></counter>
    `,
    data() {
      return {
        count: 0
      }
    }
  })
