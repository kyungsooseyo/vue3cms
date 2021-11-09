import { createApp } from 'vue';

import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './service/axios.demo.ts';
// import ElementPlus from 'element-plus';
const app = createApp(App);
app.use(router);
app.use(store);
// app.use(ElementPlus);
app.mount('#app');
console.log(process.env.VUE_APP_BASE_NAME); //= 若想在ts中使用，必须在shims-vue.d.ts文件里面声明一下
