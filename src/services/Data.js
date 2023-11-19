import { ref } from "vue"


export default function useData(){

	const items = ref([
		{
			name: "Isa"
		},
		{
			name: "Artem"
		}
	])

	const addItems = (data) => {
		items.value.push(data)
	}

	return {
		addItems,
		items
	}

}
