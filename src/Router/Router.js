import {createWebHistory, createRouter} from "vue-router";
import Products from "../Pages/Products.vue";
import AddProducts from "../Pages/AddProducts.vue";

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes:[
    {
        path: "/",
        name: "Products Page",
        component: Products
    },
    {
        path: "/AddProducts",
        name: "Add Products Page",
        component: AddProducts
    }
]
})

export default router