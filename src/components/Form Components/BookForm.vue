<script setup>
import {ref} from "vue";

const bookWeight = ref({
  weight: null
})
</script>

<template>
  <div @change="$emit('setBookWeight',bookWeight)">
    <label for="weight">Weight (KG)</label>
    <input v-model="bookWeight.weight" required id="weight" type="number"/>
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