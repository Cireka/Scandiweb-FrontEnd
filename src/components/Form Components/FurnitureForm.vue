<script setup>
import {ref} from "vue";

const furnitureProps = ref({
  height: 0,
  width: 0,
  length: 0
})
</script>

<template>
  <div @change="$emit('setDvdProps',furnitureProps)">
    <div>
      <label for="height">Height (CM)</label>
      <input v-model="furnitureProps.height" required id="height" type="text"/>
    </div>
    <div>
      <label for="width">Width (CM)</label>
      <input v-model="furnitureProps.width" required id="width" type="text"/>
    </div>
    <div>
      <label for="length">Length (CM)</label>
      <input v-model="furnitureProps.length" required id="length" type="text"/>
    </div>
  </div>

</template>

<style scoped>
form > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
</style>