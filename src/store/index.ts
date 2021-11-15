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
