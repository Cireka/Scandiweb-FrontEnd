<script setup>
import {defineProps} from "vue";

const props = defineProps({
  productData: Object,
});


</script>


<template>
  <div class="production-box" id="{{productData.sku}}">
    <input type="checkbox" class="delete-checkbox">
    <p>{{productData.name}}</p>
    <p>{{productData.product_type}}</p>
    <p>{{ productData.price }}</p>
    <p>To Be Implemented</p>
  </div>
</template>

<style scoped>
.production-box {
  padding: 12px;
  width: 300px;
  height: auto;
  border: 1px outset rgba(164, 164, 164, 0.7);
  border-radius: 4px;
}

p {
  text-align: center;
}
</style>