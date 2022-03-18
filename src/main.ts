import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';

const VueApp = createApp(App);
VueApp.use(store).use(router).mount('#app');
