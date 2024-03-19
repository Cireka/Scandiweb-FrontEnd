import {createStore} from "vuex";
import axios from "axios";

export const store = createStore({
    state() {
        return {
            data: [],
            formData: []
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
        postProduct({commit},payload) {
            const {formData, typeProps} = payload

            axios.post('http://localhost:8000/postProduct', {
                ...formData.value, ...typeProps.value


            }, {})
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
        }
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        },

    },


})
