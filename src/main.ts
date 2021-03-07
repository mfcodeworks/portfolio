import { createApp } from 'vue';
import '@/assets/css/app.css';
import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router';

const app = createApp(App)
    .use(router)
    .mount('#app');

console.log('Loaded:', app);
