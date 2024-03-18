<script setup>
import DvdForm from "./DvdForm.vue";
import FurnitureForm from "./FurnitureForm.vue";
import BookForm from "./BookForm.vue";
import {ref} from "vue";

const formData = ref({
  name: "",
  sku: "",
  price: 0,
  type: "",
  typeProps: {}
})



const test = (event) => {
  event.preventDefault();
  console.log(formData.value)
}
const extractItemProps = (data) => {
  formData.value.typeProps = data;
}



</script>

<template>

  <form id="product_id">
    <div>
      <button @click="test">Test</button>
      <label for="sku">SKU</label>
      <input v-model="formData.name" required id="sku" type="text"/>
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
      <select required v-model="formData.type" id="productType">
        <option selected disabled value="null">Type Switcher</option>
        <option value="DVD">DVD</option>
        <option value="Book">Book</option>
        <option value="Furniture">Furniture</option>
      </select>
    </div>
    <div>
      <DvdForm @setDvdSize="extractItemProps"  v-if="formData.type === 'DVD'"/>
      <FurnitureForm @setDvdProps="extractItemProps" v-if="formData.type === 'Furniture'"/>
      <BookForm @setBookWeight="extractItemProps" v-if="formData.type === 'Book'"/>
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