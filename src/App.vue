<script>

import { ref, reactive, toRefs, toRef, computed, watch, watchEffect, onUnmounted, onMounted, onUpdated } from "vue"
import Card from './components/Card.vue'

export default {

  setup(){
    const message = ref("Hello, world from App")
    const dataInf = ref("Leader")
    const num = ref(0)
    const obj = reactive({
      name: "Data",
      price: 2
    })

    const del = ref([
      {
        price: 100,
        name: "Info"
      },
      {
        price: 200
      }
    ])

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

    const alertRemove = () => del.value.splice(0, 1)

    const anotherAlert = (data) => alert("Info from " + data)

    onUnmounted(() => {
      console.log("Deleted")
    })

    onUpdated(() => {
      console.log("Up")
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
      priceCheck,
      dataInf,
      alertRemove,
      anotherAlert,
      del
    }
  }, components: {
		Card
	}
}

</script>

<template>

  <!-- <h4>Price: {{ price }}</h4>

  <button @click="obj.price += obj.price">Click</button>

  <h3>Total: {{ priceCheck }}</h3> -->

   <h4>{{ num }}</h4>

  <!-- <h5>Object: {{ obj.name }}</h5>

  <h4>Obj: {{ name }}</h4>

  <h4>Another: {{ nameAnother }}</h4>

  <button @click="changeObj">Change</button> -->

  <hr>

  <button @click="inc">+</button>

  <br>

  <button @click="dec">-</button>

  <hr>
<!--
  <p>------------------</p>

  -->

  <ul>
    <li v-for="d in del">Удаленная инфа - {{ d.price }}</li>
  </ul>

  <hr>


  <Card v-if="num < 5" :stock="message" :trio="dataInf" @remove="alertRemove" @another-remove="anotherAlert" :del="del" />

</template>

<style>



</style>
