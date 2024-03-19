<script setup>
const props = defineProps({
  productData: Object,
});

const handleCheckboxChange = (event) => {
  const checkStatus = event.target.checked;
  const sku = props.productData.SKU;

  // push this data to global state
  // inside state where all of the selected ids will gather

};

</script>


<template>
  <div class="production-box">
    <input type="checkbox" class="delete-checkbox" @click="handleCheckboxChange">
    <p>{{ productData.name }}</p>
    <p>{{ productData.product_type }}</p>
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