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
            axios.get('https://tsotne.alwaysdata.net/products')
                .then(response => {
                    commit("setData", response.data)
                })
                .catch(error => {
                    console.log(error)
                });
        },
        postProduct({commit}, payload) {
            const {formData, typeProps} = payload
            axios.post('https://tsotne.alwaysdata.net/postProduct', {
                ...formData.value, ...typeProps.value
            })
                .then(response => {

                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        },
        massDelete() {
            axios.delete('https://tsotne.alwaysdata.net/deleteProducts')
                .then(response => {
                }).catch(error => {
                console.log(error)
            })
        },
        deleteById(context) {
            const {type, sku} = context.state.toDeleteItems

            axios.patch('https://tsotne.alwaysdata.net/deleteProductsById',{
                type:[...type],
                SKU: [...sku]
            })
                .then(response => {

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
