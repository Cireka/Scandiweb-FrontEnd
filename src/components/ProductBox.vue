<script setup>
import {useStore} from "vuex";

const {dispatch} = useStore();
const props = defineProps({
  productData: Object,
});

const handleCheckboxChange = (event) => {
  const checkStatus = event.target.checked;
  const sku = props.productData.SKU;
  const type = props.productData.product_type
  if (checkStatus) {
    dispatch("gatherIds", {sku, type})
  } else {
    dispatch("removeIds", {sku, type})
  }
};

</script>


<template>
  <div class="production-box">
    <input type="checkbox" class="delete-checkbox" @click="handleCheckboxChange">
    <p>{{productData.SKU}}</p>
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