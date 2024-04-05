<script setup>
import {ref} from "vue";
import {useStore} from "vuex";
const {dispatch} = useStore()
const sendError = (status, message) => {
  dispatch("setErrorMessage", {status, message})
}
const clearError = (messageToRemove) => {
  dispatch("setErrorMessage", {messageToRemove})
}

const bookWeight = ref({
  weight: null
})
</script>

<template>
  <div>
    <div class="subInputParent" @change="$emit('setBookWeight',bookWeight)">
      <label for="weight">Weight (KG)</label>
      <input @input="clearError('Invalid Weight Input')" @invalid="sendError(true,'Invalid Weight Input')" v-model="bookWeight.weight" required id="weight" type="number"/>
    </div>
    <p>Please provide value in Kilograms</p>
  </div>
</template>

<style scoped>

.subInputParent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

</style>