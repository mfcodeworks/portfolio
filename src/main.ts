import { createApp } from 'vue';
import '@/assets/css/app.scss';
import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router';

createApp(App)
    .use(router)
    .mount('#app');
