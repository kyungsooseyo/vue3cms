import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
interface KSRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch: (err: any) => any;
}
//, 这样做的原因就是可以让外界传入拦截器
interface KSRequestConfig extends AxiosRequestConfig {
  interceptors: KSRequestInterceptors;
}
export default class KSRequest {
  instance: AxiosInstance;
  interceptors?: KSRequestInterceptors;
  constructor(config: KSRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    //~ 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      }
    );
  }
  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res);
    });
  }
}
