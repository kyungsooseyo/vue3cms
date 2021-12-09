import { createStore, Store, useStore as useVuexStore } from 'vuex';
import { IRootState, IStoreType } from './types';
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
// 初始化vuex 即使用户刷新，也要维持vuex中的数据
export function setupStore() {
  store.dispatch('loadLocalLogin');
}
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

export default store;
