<template>
  <div>
    <p>{{ hello }}</p>
		<ul>
			<li v-for="item in items">{{ item.name }}</li>
		</ul>
    <!-- <button @click="removeComponent">Удалить компонент</button> -->
		<button @click="addIvan">Add</button>
		<br>
		<button @click="changeName">Change name</button>
  </div>
</template>

<script setup>
	import { onUnmounted, onMounted, onUpdated, defineProps } from 'vue';
	import useData from "../services/Data"

	const props = defineProps({
		hello: {
			type: String,
			default: "Game"
		}
	})

		const emits = defineEmits(["change"])

		const { items, addItems } = useData()

		const changeName = () => {
			emits("change")
		}

    onUnmounted(() => {
      console.log('Компонент размонтирован!');
    })

		onMounted(() => {
			console.log("Компонент смонтирован")
		})

		onUpdated(() => {
			console.log("Компонент изменен")
		})

    const removeComponent = () => {
      console.log('Удаление компонента');
    }

		const addIvan = () => {
			addItems({name: "Ivan"})
		}

</script>
