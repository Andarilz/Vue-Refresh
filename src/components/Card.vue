<script>

import { ref, reactive, toRef, toRefs } from "vue"

export default {

	props: {
		stock: {
			type: String,
			required: true
		},
		trio: {
			type: String,
			required: true
		}
	},
	emits: ["remove"],
	setup(props, context){

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

		const trio = props.trio

		const emitHandler = () => context.emit("remove", info.price)

		return {
			mess,
			name,
			info,
			infoData,
			changeName,
			propsName,
			trio,
			emitHandler
		}

	}

}

</script>

<template>

<h4>{{ propsName }}</h4>

<br>

<h5>{{ trio }}</h5>

<p>{{ mess }}</p>

<p>{{ name }}</p>

<p>{{ infoData.price }}</p>

<button @click="changeName">Click</button>

<br>

<button @click="emitHandler">Emit</button>

</template>

<style>

</style>
