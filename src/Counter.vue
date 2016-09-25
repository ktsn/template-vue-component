<template>
  <div class="counter">
    <p class="counter-value">{{ value }}</p>
    <div class="counter-controls">
      <button type="button" @click="increment">+</button>
      <button type="button" @click="decrement">-</button>
    </div>
  </div>
</template>

<script>
// @flow

export default {
  props: {
    value: Number
  },

  methods: {
    increment () {
      this.$emit('increment')
    },

    decrement () {
      this.$emit('decrement')
    }
  }
}
</script>

<style>
.conter,
.counter-value,
.counter-controls {
  display: inline-block;
}

.counter-value,
.counter-controls {
  vertical-align: middle;
}

.counter-value {
  margin: 0 5px 0 0;
}
</style>
