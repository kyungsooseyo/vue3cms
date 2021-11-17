import ksRequest from '../index';
import kyRequest from '../index';
import { IAccount, IDataType, ILoginResult } from './types';
enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/' // 用法 /role/1/menu
}
//, 用户登录
export function accountLoginRequest(account: IAccount) {
  return kyRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  });
}

//, 请求用户的userInfo
export function requestUserInfoById(id: number) {
  return kyRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id
  });
}

//, 请求用户的菜单
export function requestUserMenusById(id: number) {
  return ksRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu'
  });
}
