import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import router from './Router/Router.js';
import {store} from "./stores/store.js";



const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');


