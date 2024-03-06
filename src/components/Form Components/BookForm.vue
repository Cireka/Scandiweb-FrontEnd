<script setup>

</script>

<template>
  <form>
    <div>
      <label for="weight">Weight (KG)</label>
      <input required id="weight" type="number"/>
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