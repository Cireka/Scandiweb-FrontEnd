<script setup>
import ProductBox from "./ProductBox.vue";
import {onMounted} from "vue";
import {useStore} from "vuex";

const {dispatch,state,} = useStore();

onMounted(() => {
  dispatch("fetchData");
})

// dispatch("setFormData",formData)


</script>


<template>
  <section class="Products-list">
    <ProductBox v-for="product in state.data" :product-data="product"/>
  </section>
</template>

<style scoped>
.Products-list {
  padding-top: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: start;
  gap: 32px;
}
</style>