<script setup>

import router from "../Router/Router.js";
import Form from "../components/Form Components/Form.vue";

const goBack = () => {
  router.back()
}

</script>

<template>
  <header>
    <h1>Add Product</h1>
    <div class="Buttons-Parent">
      <button @click="goBack" class="Add-Button">Cancel</button>
      <button class="saveButton">Save</button>
    </div>
  </header>
  <Form/>
</template>

<style scoped>
.saveButton {
  transition: ease-in-out 0.3s;
  border: none;
  width: auto;
  height: auto;
  padding: 12.2px;
  border-radius: 4px;
  transition: ease-in-out 0.3s;
  cursor: pointer;
  background-color: #d13e3e;
  color: white;
}

</style>