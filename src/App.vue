<template>
  <div>
    <button @click="toggleComponent">Показать/скрыть компонент</button>
    <Res v-if="showComponent" :hello="info" />
  </div>
</template>

<script setup>

import { ref } from 'vue';

import Res from './components/Res.vue'

  const showComponent = ref(true);

  const toggleComponent = () => {
    showComponent.value = !showComponent.value;
  };

  const info = ref("World of warcraft")

</script>
