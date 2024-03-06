<script setup>

import ProductBox from "./ProductBox.vue";
</script>

<template>
<section class="Products-list">
  <ProductBox/>
  <ProductBox/>
</section>
</template>

<style scoped>
.Products-list{
  padding-top: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: start;
  gap: 32px;
  margin-bottom: 32px;
  height: auto;

}
</style>