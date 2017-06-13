<template>
  <div>
    <counter :value="count" @increment="count += 1" @decrement="count -= 1"></counter>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  }
}
</script>
