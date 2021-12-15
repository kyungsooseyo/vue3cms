import { Module } from 'vuex';
import { ILoginState } from './types';
import { IRootState } from '../types';
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById
} from '@/service/login/login';
import localCache from '@/utils/cache';
import router from '@/router';
import { mapMenuToRoutes } from '@/utils/mapMenu';
const loginModule: Module<ILoginState, IRootState> = {
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus;
      // userMenus 映射到routes里面
      const routes = mapMenuToRoutes(userMenus);
      // console.log(routes);
      routes.forEach((item) => {
        router.addRoute('main', item);
      });
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      const loginResult = await accountLoginRequest(payload);
      // console.log(loginResult);
      const { code, data } = loginResult;
      // ~因为在post方法里面已经指定泛型了，所以必须要站在types里面定义一下，然后让外面的函数调用时也写传一下泛型，否则是无法解构到的
      const { id, token } = data;
      commit('changeToken', token);
      localCache.setCache('token', token);
      const userInfoResult = await requestUserInfoById(id);
      const userInfo = userInfoResult.data;
      // console.log(userInfo);
      commit('changeUserInfo', userInfo);
      localCache.setCache('userInfo', userInfo);

      // 跳转到首页、不同的用户有不同的菜单
      const userMenuResult = await requestUserMenusById(userInfo.role.id);
      const userMenus = userMenuResult.data;
      commit('changeUserMenus', userMenus);
      localCache.setCache('userMenus', userMenus);
      // console.log(userMenus);
      //- 跳到首页
      router.push('/main');
    },
    //~ 浏览器刷新时也要维持vuex中的数据
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token');
      if (token) {
        commit('changeToken', token);
      }
      const userInfo = localCache.getCache('userInfo');
      if (userInfo) {
        commit('changeUserInfo', userInfo);
      }
      const userMenus = localCache.getCache('userMenus');
      if (userMenus) {
        commit('changeUserMenus', userMenus);
      }
    }
  }
};
export default loginModule;
