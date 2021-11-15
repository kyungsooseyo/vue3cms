import { Module } from 'vuex';
import { ILoginState } from './types';
import { IRootState } from '../types';
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
    accountLoginAction({ commit }, payload: any) {
      console.log('执行action', payload);
    }
  }
};
export default loginModule;
