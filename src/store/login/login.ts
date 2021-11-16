import { Module } from 'vuex';
import { ILoginState } from './types';
import { IRootState } from '../types';
import { accountLoginRequest } from '@/service/login/login';
const loginModule: Module<ILoginState, IRootState> = {
  state() {
    return {
      token: '',
      userInfo: {}
    };
  },
  getters: {},
  mutations: {},
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      const loginResult = await accountLoginRequest(payload);
      console.log(loginResult);
      const { code, data } = loginResult; // ~因为在post方法里面已经指定泛型了，所以必须要站在types里面定义一下，然后让外面的函数调用时也写传一下泛型，否则是无法解构到的
    }
  }
};
export default loginModule;
