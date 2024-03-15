import  {defineStore} from "pinia";
import {ref} from "vue";

export const useProductStore = defineStore("data",() =>{
    const product = ref({
        name: "",
        sku: "",
        price: "",
        productType: "",
        weight: "",
        height: "",
        length: "",
        size: "",
    })

    const setData = (dataObj) => {
        product.value.name = dataObj.name;
        product.value.sku = dataObj.sku;
        product.value.price = dataObj.price;
        product.value.productType = dataObj.productType;
        product.value.weight = dataObj.weight;
        product.value.length = dataObj.length;
        product.value.height = dataObj.height;
        product.value.size = dataObj.size;
    }

    const getAllProducts = () => {
        return ["test"]
    }
    const postProduct = (productObj) => {
        // post req
    }
    const deleteById = (id) => {
        // del req
    }
    const massDelete = () => {
        // del req
    }

    return{
        product,
        setData,
        getAllProducts,
        postProduct,
        deleteById,
        massDelete
    }
})