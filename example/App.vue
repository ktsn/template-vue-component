<template>
  <div>
    <counter :value="count" @increment="count += 1" @decrement="count -= 1"></counter>
  </div>
</template>

<script>
import Counter from '../src/index'

export default {
  data () {
    return {
      count: 0
    }
  },
  components: {
    Counter
  }
}
</script>
