<script setup>
import ProductsSection from "../components/ProductsSection.vue";
import router from "../Router/Router.js";
import {useStore} from "vuex";

const {dispatch, state} = useStore();
const AddProductPage = () => {
  router.push('/AddProducts')
}
const handleDelete = () => {
  if (state.toDeleteItems.sku.length >= 1) {
    dispatch("deleteById")
  } else {
    dispatch('massDelete');
  }
    router.go();

}
</script>


<template>
  <header>
    <h1>Product List</h1>
    <div class="Buttons-Parent">
      <button @click="AddProductPage" class="leftButton">ADD</button>
      <button @click="handleDelete" id="delete-product-btn">MASS DELETE</button>
    </div>
  </header>
  <ProductsSection/>


</template>


<style>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px outset rgba(164, 164, 164, 0.3);
  border-radius: 4px;
  margin-bottom: 42px;
}

.Buttons-Parent {
  display: flex;
  justify-content: space-between;
  gap: 12px;

}

.leftButton, #delete-product-btn {
  transition: ease-in-out 0.3s;
  border: none;
  width: auto;
  height: auto;
  padding: 12.2px;
  border-radius: 4px;
}

.leftButton, #delete-product-btn:hover {
  transition: ease-in-out 0.3s;
  cursor: pointer;
}


#delete-product-btn {
  background-color: #d13e3e;
  color: white;
}

#delete-product-btn:hover {
  background-color: #d65151;
}

.leftButton:hover {
  background-color: #e5e1da;
}

.leftButton {
  background-color: #cecbc4;
  color: black;
}

.products-footer-container {
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>

