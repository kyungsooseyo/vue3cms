import Axios from 'axios';
// Axios.get('http://123.207.32.32:8000/home/multidata').then(
//   (res: AxiosResponse) => {
//     console.log(res);
//   }
// );

// 定义泛型
// new Promise<string>((resolve) => {
//   resolve(12);  // ~指定string后，这传入number机会报错
// }).then((res) => {
//   console.log(res);
// });
// axios 配置选项

Axios.defaults.baseURL = 'http://httpbin.org';

// 等所有请求都有数据后再进行后续操作
Axios.all([
  Axios.get('/get', { params: { name: 'why', age: 18 } }),
  Axios.post('/post', { params: { name: 'why', age: 18 } })
]).then((res) => {
  console.log(res); //- 返回的res是个数组
});
//= axios拦截器,
// fn1 请求发送成功时会执行的函数，fn2 请求发送失败时会执行的函数
// Axios.interceptors.request.use(fn1, fn2);
// Axios.interceptors.response(fn1, fn2);

Axios.interceptors.request.use(
  (config) => {
    // 给请求添加token, 添加loading动画
    // 你相信吗，原来这么长的时间已经过去了，可能是2016年听过的歌，莫名地就过了5年了，在莫名地的这辈子就这么过去了
    return config;
  },
  (err) => {
    console.log(err);
  }
);

// 拿到数据，就不会再进行手动拿data了，这样就可以直接拿到data
Axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    console.log('服务器相应失败');
    return err;
  }
);

process.env.NODE_ENV == 's';
const a = 12;
export { a };
