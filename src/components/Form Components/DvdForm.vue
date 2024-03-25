<script setup>
import {ref} from "vue";

const dvdProps = ref({
  size_mb: null
})

</script>

<template>

  <div>
    <div class="subInputParent" @change="$emit('setDvdSize',dvdProps)">
      <label for="size">Size (mb)</label>
      <input required id="#size" type="number" v-model="dvdProps.size_mb"/>
    </div>
    <p>Please provide value in Megabytes</p>
  </div>
</template>

<style scoped>
.subInputParent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
</style>