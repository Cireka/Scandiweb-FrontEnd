<script setup>

</script>

<template>
  <form>
    <div>
      <label for="height">Height (CM)</label>
      <input required  id="height" type="text"/>
    </div>
    <div>
      <label for="width">Width (CM)</label>
      <input required  id="width" type="text"/>
    </div>
    <div>
      <label for="length">Length (CM)</label>
      <input  required id="length" type="text"/>
    </div>
  </form>
</template>

<style scoped>
form > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
</style>