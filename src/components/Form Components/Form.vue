<script setup>
import DvdForm from "./DvdForm.vue";
import FurnitureForm from "./FurnitureForm.vue";
import BookForm from "./BookForm.vue";
import {ref} from "vue";
import {useStore} from "vuex";
import router from "../../Router/Router.js";

const {dispatch,state} = useStore()
const formData = ref({
  name: "",
  sku: "",
  price: null,
  type: "",
})
const typeProps = ref({})


const dispatchPostRequest = () => {
  dispatch("postProduct", {formData, typeProps})
  setTimeout(() => {
    router.back();
  }, 400)
}

const sendError = (status, message) => {
  dispatch("setErrorMessage", {status, message})
}
const clearError = (messageToRemove) => {
  dispatch("setErrorMessage", {messageToRemove})
}

const extractItemProps = (data) => {
  typeProps.value = data;
}
defineExpose({dispatchPostRequest})
</script>
<template>
  <div class="formContainer">
    <div>
      <label for="sku">SKU</label>
      <input   @input="clearError('Invalid Sku Input')"  @invalid="sendError(true,'Invalid Sku Input')" v-model="formData.sku" required id="sku" type="text" pattern="^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$"/>
    </div>
    <div>
      <label for="name">Name</label>
      <input @input="clearError('Invalid Name Input')" @invalid="sendError(true,'Invalid Name Input')"
             v-model="formData.name" required id="name" type="text"/>
    </div>
    <div>
      <label for="price">Price ($)</label>
      <input @input="clearError('Invalid Price Input')" @invalid="sendError(true,'Invalid Price Input')" required
             id="price" type="number" v-model="formData.price"/>
    </div>
    <div>
      <label for="productType">Type Switcher</label>
      <select required v-model="formData.type" id="productType">
        <option selected disabled value="null">Type Switcher</option>
        <option value="dvd">DVD</option>
        <option value="Book">Book</option>
        <option value="Furniture">Furniture</option>
      </select>
    </div>
    <div>
      <DvdForm @setDvdSize="extractItemProps" v-if="formData.type === 'dvd'"/>
      <FurnitureForm @setDvdProps="extractItemProps" v-if="formData.type === 'Furniture'"/>
      <BookForm @setBookWeight="extractItemProps" v-if="formData.type === 'Book'"/>
    </div>
    <p id="Invalid_Input" class="errorMessage" v-if="state.errorState.error">{{state.errorState.errorMessage[0]}}!</p>
  </div>
</template>

<style scoped>
.errorMessage{
  margin: 0;
  color: red;
}
.formContainer {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 300px;
}

.formContainer > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.formContainer > div > input {
  transition: ease-in-out 0.15s;
  padding: 4px;
  outline: none;
  border: 1px outset rgba(164, 164, 164, 0.6);
  border-radius: 4px;

}

.formContainer > div > input:focus {
  transition: ease-in-out 0.15s;
  border: 1px outset rgba(73, 66, 228, 0.6);

  box-shadow: 0px -1px 8px 1px rgba(73, 66, 228, 0.75);
  -webkit-box-shadow: 0px -1px 8px 1px rgba(73, 66, 228, 0.75);
  -moz-box-shadow: 0px -1px 8px 1px rgba(73, 66, 228, 0.75);
}

.formContainer > div > select {
  padding: 4px;
  outline: none;
}
</style>