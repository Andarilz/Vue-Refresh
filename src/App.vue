<script>

import { ref } from "vue"

export default {
  setup(){
    const message = ref("Hello");
    const num = ref(1)

    const inc = () => num.value++

    const dec = () => num.value--

    return {
      message,
      num,
      inc,
      dec
    }
  }
}

</script>

<template>

  <h4>{{ num }}</h4>

  <button @click="inc">+</button>
  <br>
  <button @click="dec">-</button>

</template>

<style>

</style>
