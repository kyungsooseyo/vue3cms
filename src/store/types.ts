import { ILoginState } from './login/types';
export interface IRootState {
  name: string;
  age: number;
}
export interface IRootWithModule {
  loginModule?: ILoginState;
}
//, 通过结合的方式能够让vuex更加兼容ts，否则是无法访问到vuex中模块中的数据（只能一些state）
export type IStoreType = IRootState & IRootWithModule;
