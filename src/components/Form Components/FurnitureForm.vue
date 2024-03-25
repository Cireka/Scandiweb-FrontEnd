<script setup>
import { ref, computed } from "vue";

const height = ref(null);
const width = ref(null);
const length = ref(null);

const dimensions = computed(() => {
  return `${width.value || ''}x${height.value || ''}x${length.value || ''}`;
});

const furnitureProps = computed(() => ({
  dimensions: dimensions.value,

}));
</script>

<template>
  <div class="subFormsParent" @change="$emit('setDvdProps', furnitureProps)">
    <div>
      <label for="height">Height (CM)</label>
      <input v-model="height" required id="#height" type="number" />
    </div>
    <div>
      <label for="width">Width (CM)</label>
      <input v-model="width" required id="#width" type="number" />
    </div>
    <div>
      <label for="length">Length (CM)</label>
      <input v-model="length" required id="#length" type="number" />
    </div>
    <p>Please provide value in centimeters</p>
  </div>
</template>

<style scoped>
.subFormsParent {
  width: 100%;
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