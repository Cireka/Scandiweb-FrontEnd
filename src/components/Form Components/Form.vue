<script setup>
import DvdForm from "./DvdForm.vue";
import FurnitureForm from "./FurnitureForm.vue";
import BookForm from "./BookForm.vue";
import {ref} from "vue";

const SelectedType = ref(null);


</script>

<template>
  <form id="product_id">
    <div>
      <label for="sku">SKU</label>
      <input required id="sku" type="text"/>
    </div>
    <div>
      <label for="name">Name</label>
      <input required id="name" type="text"/>
    </div>
    <div>
      <label for="price">Price ($)</label>
      <input required id="price" type="number"/>
    </div>
    <div>
      <label for="productType">Type Switcher</label>
      <select required v-model="SelectedType" id="productType">
        <option selected disabled value="null">Type Switcher</option>
        <option value="DVD">DVD</option>
        <option value="Book">Book</option>
        <option value="Furniture">Furniture</option>
      </select>
    </div>
    <div>
      <DvdForm v-if="SelectedType === 'DVD'"/>
      <FurnitureForm v-if="SelectedType === 'Furniture'"/>
      <BookForm v-if="SelectedType === 'Book'"/>
    </div>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 300px;
}

form > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

form > div > input {
  transition: ease-in-out 0.15s;
  padding: 4px;
  outline: none;
  border: 1px outset rgba(164, 164, 164, 0.6);
  border-radius: 4px;

}

form > div > input:focus {
  transition: ease-in-out 0.15s;
  border: 1px outset rgba(73, 66, 228, 0.6);

  box-shadow: 0px -1px 8px 1px rgba(73, 66, 228, 0.75);
  -webkit-box-shadow: 0px -1px 8px 1px rgba(73, 66, 228, 0.75);
  -moz-box-shadow: 0px -1px 8px 1px rgba(73, 66, 228, 0.75);
}

form > div > select {
  padding: 4px;
  outline: none;
}
</style>