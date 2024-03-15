<script setup>
import {useProductStore} from "../stores/products.js";
import ProductsSection from "../components/ProductsSection.vue";
import router from "../Router/Router.js";

const AddProductPage = () => {
  router.push('/AddProducts')
}
const product= useProductStore();

product.getAllProducts()
</script>


<template>
    <header>
      <h1>Product List</h1>
      <div class="Buttons-Parent">
        <button @click="AddProductPage" class="Add-Button">ADD</button>
        <button id="delete-product-btn">MASS DELETE</button>
      </div>
    </header>
    <ProductsSection/>


</template>


<style >

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

.Add-Button, #delete-product-btn {
  transition: ease-in-out 0.3s;
  border: none;
  width: auto;
  height: auto;
  padding: 12.2px;
  border-radius: 4px;
}

.Add-Button, #delete-product-btn:hover {
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

.Add-Button:hover {
  background-color: #e5e1da;
}

.Add-Button {
  background-color: #cecbc4;
  color: black;
}

.products-footer-container{
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>

