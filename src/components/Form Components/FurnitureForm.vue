<script setup>
import {ref} from "vue";

const furnitureProps = ref({
  height_cm: null,
  width_cm: null,
  length_cm: null
})
</script>

<template>
  <div class="subFormsParent" @change="$emit('setDvdProps',furnitureProps)">
    <div>
      <label for="height">Height (CM)</label>
      <input v-model="furnitureProps.height_cm" required id="height" type="text"/>
    </div>
    <div>
      <label for="width">Width (CM)</label>
      <input v-model="furnitureProps.width_cm" required id="width" type="text"/>
    </div>
    <div>
      <label for="length">Length (CM)</label>
      <input v-model="furnitureProps.length_cm" required id="length" type="text"/>
    </div>
  </div>

</template>

<style scoped>
.subFormsParent {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
}

.subFormsParent > div {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>