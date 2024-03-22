import {createStore} from "vuex";
import axios from "axios";

export const store = createStore({
    state() {
        return {
            data: [],
            toDeleteItems: {
                type: [],
                sku: []
            }
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
        postProduct({commit}, payload) {
            const {formData, typeProps} = payload
            axios.post('http://localhost:8000/postProduct', {
                ...formData.value, ...typeProps.value


            })
                .then(response => {

                    console.log(response);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        },
        massDelete() {
            axios.delete('http://localhost:8000/deleteProducts')
                .then(response => {
                    console.log(response)
                }).catch(error => {
                console.log(error)
            })
        },
        deleteById(context) {
            const {type, sku} = context.state.toDeleteItems

            axios.patch('http://localhost:8000/deleteProductsById',{
                type:["books"],
                SKU: ["2"]
            })
                .then(response => {
                    console.log(response)
                }).catch(error => {
                console.log(error)
            })
        },
        gatherIds({commit}, payload) {
            commit('setToBeDeletedIds', payload);
        },
        removeIds({commit}, payload) {
            commit('removeToBeDeletedIds', payload);
        }
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        },
        setToBeDeletedIds(state, payload) {
            const {sku, type} = payload;
            state.toDeleteItems.sku.push(sku)
            state.toDeleteItems.type.push(type)
        },
        removeToBeDeletedIds(state, payload) {
            const {sku, type} = payload;
            state.toDeleteItems.sku = state.toDeleteItems.sku.filter(item => item !== sku);
            state.toDeleteItems.type = state.toDeleteItems.type.filter(item => item !== type);
        }
    },


})
