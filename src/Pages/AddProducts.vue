<script setup>
import router from "../Router/Router.js";
import Form from "../components/Form Components/Form.vue";
import {ref} from "vue";

const childComponent = ref()


const AbandonFormHandler =() => {
  router.back()
}

const submitForm = (event) => {
  event.preventDefault()
  childComponent.value.dispatchPostRequest();


}

</script>

<template>
  <form @submit="submitForm">
    <header>
      <h1>Add Product</h1>
      <div class="Buttons-Parent">
        <button @click="AbandonFormHandler" class="leftButton">Cancel</button>
        <button type="submit" class="saveButton">Save</button>
      </div>
    </header>
   <Form ref="childComponent"/>
  </form>

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