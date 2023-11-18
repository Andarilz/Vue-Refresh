<script>

import { ref, reactive, toRefs, toRef, computed, watch, watchEffect } from "vue"
import Card from './components/Card.vue'

export default {

  setup(){
    const message = ref("Hello")
    const num = ref(0)
    const obj = reactive({
      name: "Data",
      price: 2
    })

    const changeObj = () => {
      obj.name = "New info"
    }

    const nameAnother = toRef(obj, "name")

    const { name, price } = toRefs(obj)

    const inc = () => num.value++

    const dec = () => num.value--

    const doublePrice = computed(() => obj.price * 2)

    const priceCheck = computed(() => obj.price * 5)

    watch(price, (oldPrice, newPrice) => {
      console.log(oldPrice)
      if(oldPrice > 5){
        alert("Hello")
      }
    }, { immediate: true })

    watchEffect(() => {
      if(price > 5){
        alert("Hi")
      }
    })

    return {
      message,
      num,
      inc,
      dec,
      obj,
      changeObj,
      name,
      nameAnother,
      doublePrice,
      price,
      priceCheck
    }
  }, components: {
		Card
	}
}

</script>

<template>

  <h4>Price: {{ price }}</h4>

  <button @click="obj.price += obj.price">Click</button>

  <h3>Total: {{ priceCheck }}</h3>

  <!-- <h4>{{ num }}</h4>

  <h5>Object: {{ obj.name }}</h5>

  <h4>Obj: {{ name }}</h4>

  <h4>Another: {{ nameAnother }}</h4>

  <button @click="changeObj">Change</button>

  <hr>

  <button @click="inc">+</button>

  <br>

  <button @click="dec">-</button>

  <hr> -->
<!--
  <p>------------------</p>

  <Card /> -->

</template>

<style>



</style>
