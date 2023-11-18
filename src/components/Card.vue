<script>

import { ref, reactive, toRef, toRefs } from "vue"

export default {

	props: {
		stock: {
			type: String,
			required: true
		}
	},
	setup(props){

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

		const propsName = props.stock

		return {
			mess,
			name,
			info,
			infoData,
			changeName,
			propsName
		}

	}

}

</script>

<template>

<h4>{{ propsName }}</h4>

<br>

<p>{{ mess }}</p>

<p>{{ name }}</p>

<p>{{ infoData.price }}</p>

<button @click="changeName">Click</button>

</template>

<style>

</style>
