import kyRequest from '../index';
import { IAccount, IDataType, ILoginResult } from './types';
enum LoginApi {
  AccountLogin = '/login'
}
export function accountLoginRequest(account: IAccount) {
  return kyRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  });
}
