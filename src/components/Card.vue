<script>

import { ref, reactive, toRef, toRefs } from "vue"

export default {

	setup(){

		const mess = ref("Message")

		const info = reactive({
			price: 100,
			name: "Hello"
		})

		const name = toRef(info, "name")

		const infoData = toRefs(info)

		const changeName = () => {
			info.price = 200
		}

		return {
			mess,
			name,
			info,
			infoData,
			changeName
		}

	}

}

</script>

<template>

<h4>Hello, world</h4>

<p>{{ mess }}</p>

<p>{{ name }}</p>

<p>{{ infoData.price }}</p>

<button @click="changeName">Click</button>

</template>

<style>

</style>
