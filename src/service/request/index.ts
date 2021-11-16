import axios, { AxiosRequestHeaders } from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElLoading } from 'element-plus';
import { ILoadingInstance } from 'element-plus/lib/components/loading/src/loading.type';
interface KSRequestInterceptors<T = AxiosResponse> {
  // ? requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig; 如果这么写的话 那边通过config.header.Authorization会报错
  requestInterceptor?: (config: any) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}
//, 这样做的原因就是可以让外界传入拦截器
interface KSRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: KSRequestInterceptors<T>;
  showLoading?: boolean;
}
export default class KSRequest {
  instance: AxiosInstance;
  interceptors?: KSRequestInterceptors;
  loading?: ILoadingInstance;
  showLoading?: boolean;
  constructor(config: KSRequestConfig) {
    // ` 这个实例是由axios创造出来的，指定AxiosInstance这个类型,这个类型又继承于Axios，Axios这个类本身就有interceptors这个属性、换句话说你想写this.instance.inter 也是写不了的，只能写interceptors这个属性
    this.instance = axios.create(config);
    //? 为什么config.showLoading 是undefined？
    this.showLoading = config.showLoading; // 这就是默认要展示loading
    // debugger;
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
    // debugger;
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例的拦截-请求成功');

        if (this.showLoading == true) {
          this.loading = ElLoading.service({
            lock: true,
            text: '加载中...',
            background: 'rgba(0,0,0,0.3)'
          });
        }

        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例的拦截-响应成功');
        // - 在响应成功后要移除loading
        this.loading?.close();
        return res.data;
      },
      (err) => {
        this.loading?.close();
        return err;
      }
    );
  }
  request<T>(config: KSRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      if (config.showLoading == false) {
        this.showLoading = false;
      }
      this.instance.request<any, T>(config).then((res) => {
        if (config.interceptors?.responseInterceptor) {
          // res = config.interceptors.responseInterceptor(res);
        }
        resolve(res);
      });
      this.showLoading = true;
    });
  }
  get<T>(config: KSRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'get' });
  }
  post<T>(config: KSRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'post' });
  }
  delete<T>(config: KSRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'delete' });
  }
  patch<T>(config: KSRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'patch' });
  }
}
