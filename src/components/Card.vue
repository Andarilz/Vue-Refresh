<script>

import { ref, reactive, toRef, toRefs, onMounted, onUnmounted, onUpdated } from "vue"

export default {

	props: {
		stock: {
			type: String,
			required: true
		},
		trio: {
			type: String,
			required: true
		},
		del: {
			type: Array
		}
	},
	emits: ["remove", "another-remove"],
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

		const anotherEmitter = () => context.emit("another-remove", name.value)

		const del = props.del

		return {
			mess,
			name,
			info,
			infoData,
			changeName,
			propsName,
			trio,
			emitHandler,
			anotherEmitter,
			del
		}

	}

}

</script>

<template>
<!--
<ul>
    <li v-for="d in del">{{ d.price }}</li>
</ul>

<hr> -->

<ul>
    <li v-for="d in del">Удаленная инфа - {{ d.price }}</li>
  </ul>

<h4>{{ propsName }}</h4>

<br>

<h5>{{ trio }}</h5>

<p>{{ mess }}</p>

<p>{{ name }}</p>

<p>{{ infoData.price }}</p>

<button @click="changeName">Click</button>

<br>

<button @click="emitHandler">Emit</button>

<br>

<button @click="anotherEmitter">Another emitter</button>

</template>

<style>

</style>
