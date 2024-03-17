import {createStore} from "vuex";
import axios from "axios";

export const store = createStore({
    state() {
        return {
            data: [],
            formData: {}
        }
    },
    actions: {
        fetchData({commit}) {
            axios.get('http://localhost:8000/products')
                .then(response => {
                    commit("setData", response.data)
                })
                .catch(error => {
                    console.log(error)
                });
        },
        setFormData({commit},payload){
            console.log(payload);
        }
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        },
        setForm(state, payload) {
            state.formData = payload;
        }
    },


})
