<template>
  <div>
    <!-- <p>{{ greeting }}</p> -->
		<ul>
			<li v-for="item in items">{{ item.name }}</li>
		</ul>
    <!-- <button @click="removeComponent">Удалить компонент</button> -->
		<button @click="addIvan">Add</button>
  </div>
</template>

<script>
import { ref, onUnmounted, onMounted, onUpdated } from 'vue';
import useData from "../services/Data"

export default {
  setup() {
    const greeting = ref('Привет! Это компонент Vue');
		const { items, addItems } = useData()

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

    return {
      greeting,
      removeComponent,
			items,
			addIvan
    };
  }
};
</script>
