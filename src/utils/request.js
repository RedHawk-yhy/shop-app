import axios from "axios";
import { Notify } from "vant";
import { serverUrl } from "./tools";

const instance = axios.create({
  timeout: 5000, // 请求超时时间，5s
  baseURL:serverUrl //  为网络请i去配置一个基地址，真实的请求地址是baseURL + url
});

//  全局拦截
// Add a request interceptor
//  返回的都是promise对象
//  全局请求拦截，网络请求之前触发
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config.headers.authorization = "Bearer " + localStorage.getItem("token");
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
// 全局响应拦截，网络请求完成之后触发
instance.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log("请求数据成功");
    console.log(response);
    return response.data;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error && error.message.indexOf("timeout") > -1) {
      console.log("网络超时了");
      Notify({ type: "danger", message: "网络不稳定，请刷新重试" });
    }
    if (error.response && error.response.status === 401) {
      Notify({ type: "danger", message: "用户信息异常，请重新登录" });
      setTimeout(() => {
        window.location.href = "/#/login";
      }, 3000);
    }
    return Promise.reject(error);
  }
);

/**
 * get请求封装
 * @param {*} url
 * @param {*} params
 */
export function get(url, params) {
  //  参数一 表示请求地址
  //  参数二 表示配置项
  //  params表示url中传递的参数
  return instance.get(url, {
    params, //  params:params
  });
}

/**
 * 发起一个post请求
 * @param {*} url  请求地址
 * @param {*} data 传递的数据
 */
export const post = (url, data) => {
  return instance.post(url, data);
};
