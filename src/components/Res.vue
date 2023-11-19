<template>
  <div>
    <p>{{ greeting }}</p>
    <button @click="removeComponent">Удалить компонент</button>
  </div>
</template>

<script>
import { ref, onUnmounted } from 'vue';

export default {
  setup() {
    const greeting = ref('Привет! Это компонент Vue');

    onUnmounted(() => {
      console.log('Компонент размонтирован!');
    });

    const removeComponent = () => {
      console.log('Удаление компонента');
    };

    return {
      greeting,
      removeComponent
    };
  }
};
</script>
