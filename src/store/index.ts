import { createStore } from 'vuex';
import { IRootState } from './types';
import loginModule from './login/login';
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'asd',
      age: 12
    };
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: { loginModule }
});
export default store;

// 初始化vuex 即使用户刷新，也要维持vuex中的数据
export function setupStore() {
  store.dispatch('loadLocalLogin');
}
