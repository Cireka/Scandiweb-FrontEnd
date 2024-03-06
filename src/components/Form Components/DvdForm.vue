<script setup>

</script>

<template>
<form>
  <div>
    <label for="size">Size (mb)</label>
    <input required id="size" type="number"/>
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