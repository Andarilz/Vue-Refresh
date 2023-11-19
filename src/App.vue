<template>
  <div>
    <button @click="toggleComponent">Показать/скрыть компонент</button>
    <Res v-if="showComponent" :hello="info" @change="nameNew" />
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

  const nameNew = () => info.value = "RDR 2"

</script>
