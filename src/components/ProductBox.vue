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

const word = props.productData.product_type;
const letterToRemove = "s";

function removeLetter(word, letterToRemove) {
  return word.replace(new RegExp(letterToRemove, 'gi'), '');
}
const formattedType = removeLetter(word, letterToRemove);
</script>


<template>
  <div class="production-box">
    <input type="checkbox" class="delete-checkbox" id="delete-checkbox" @click="handleCheckboxChange">
    <p>{{ productData.SKU }}</p>
    <p>{{ formattedType}}: {{ productData.name }}</p>
    <p>{{ productData.price }} $</p>
    <p>{{ productData.attribute }}: {{ productData.attribute_value }} {{ productData.unit }}</p>
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