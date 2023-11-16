<script>

import { ref, reactive } from "vue"

export default {
  setup(){
    const message = ref("Hello")
    const num = ref(0)
    const obj = reactive({
      name: "Data"
    })

    const changeObj = () => {
      obj.name = "New info"
    }

    const inc = () => num.value++

    const dec = () => num.value--

    return {
      message,
      num,
      inc,
      dec,
      obj,
      changeObj
    }
  }
}

</script>

<template>

  <h4>{{ num }}</h4>

  <h5>Object: {{ obj.name }}</h5>

  <button @click="changeObj">Change</button>

  <hr>

  <button @click="inc">+</button>
  <br>
  <button @click="dec">-</button>

</template>

<style>
</style>
