<template>
  <div>
    <button @click="toggleComponent">Показать/скрыть компонент</button>
    <Res v-if="showComponent" />
  </div>
</template>

<script>
import { ref } from 'vue';
import Res from './components/Res.vue';

export default {
  components: {
    Res
  },
  setup() {
    const showComponent = ref(true);

    const toggleComponent = () => {
      showComponent.value = !showComponent.value;
    };

    return {
      showComponent,
      toggleComponent
    };
  }
};
</script>
