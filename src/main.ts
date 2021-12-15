import { createApp } from 'vue';
// import KYRequest from './service/index';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
// import ElementPlus from 'element-plus';
// import 'normalize.css';
import { globalRegister } from './global';
// ~因为html提供了Menu这个元素，所有要起个别名
import {
  Edit,
  SetUp,
  Fold,
  Menu as Me,
  Monitor,
  GoodsFilled,
  User,
  ChatDotRound,
  ArrowDown
} from '@element-plus/icons-vue';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
import { setupStore } from './store/index';
const app = createApp(App);
app
  .component('edit', Edit)
  .component('set-up', SetUp)
  .component('fold', Fold)
  .component('me', Me)
  .component('monitor', Monitor)
  .component('GoodsFilled', GoodsFilled)
  .component('User', User)
  .component('ChatDotRound', ChatDotRound)
  .component('ArrowDown', ArrowDown);
// app.use(ElementPlus);
app.use(router);
app.use(store);
setupStore();
app.use(globalRegister);
app.mount('#app');
// interface DataType {
//   data: [];
//   returnCode: string;
//   success: boolean;
// }
//! 通过指定泛型的方式来确定返回的东西里面会有什么
// KYRequest.request<DataType>({
//   url: '/home/multidata',
//   method: 'GET'
// }).then((res) => {
//   console.log(res.data);
//   console.log(res.returnCode);
//   console.log(res.success);
// });
// KYRequest.get<DataType>({
//   url: '/home/multidata'
// }).then((res) => {
//   console.log(res.data);
//   console.log(res.returnCode);
//   console.log(res.success);
// });
//console.log(process.env.VUE_APP_BASE_NAME); //= 若想在ts中使用，必须在shims-vue.d.ts文件里面声明一下
