import axios from 'axios'
import store from "@/store";
import { changeBlogLoadingAction, changeBlogContentLoadingAction } from "@p/blog/store/actionCreators";
// 导入配置
import { BASE_URL, TIMEOUT } from './config'

//create a axios
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

const loading = (data, bool) => {
  if (data === "/blog") {
    store.dispatch(changeBlogLoadingAction(bool));
  }
  if (/\/blog\/\w/.test(data)) {
    store.dispatch(changeBlogContentLoadingAction(bool));
  }
}

instance.interceptors.request.use(config => {
  // 1.发送网络请求时, 在界面的中间位置显示Loading的组件
  loading(config.url ,true)
  // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

  // 3.params/data序列化的操作

  return config;
}, err => {

});



instance.interceptors.response.use(res => {
  loading(res.config.url,false)
  return res.data;
}, err => {
  loading(err.config.url,false)
  console.log(err)
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log("请求错误");
        break;
      case 401:
        console.log("未授权访问");
        break;
      default:
        console.log("其他错误信息");
    }
  }
  return Promise.reject(err);
});

export default instance;