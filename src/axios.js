'use strict';

import axios from 'axios'
import qs from 'qs'   //qs组件来避开ajax信使请求，并兼容Android。
import Vue from 'vue'

// import router from './router'
let vm = new Vue({
    // router
});
// console.log(router)
/**
 * http请求拦截器
 */
axios.interceptors.request.use(config => {
  if (vm.cookie.get("xianyu_token")) {  // 判断是否存在token，如果存在的话，则每个http请求的header都加上token,username
      config.headers.Authorization = `Token ${vm.cookie.get("xianyu_token")}`;
  }
  return config
}, error => {
  return Promise.reject(error)
});

axios.interceptors.response.use(response => {
  return response
}, error => {
   vm.$message.error(error);
});

function checkStatus (response) {
  if (response && (response.status === 200)) {
    return response   //拿到接口请求成功并且登录成功后的请求结果
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }else{
    return response   //网络错误，服务器错误，未登录成功
  }
}

function checkCode (res) {
    /**
     * 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
     */
    // vm.$message.error("亲，您的网络出了一点小状况喔!");
  if(!res){
      vm.$message.error("亲，您的网络出了一点小状况喔!");                //接口请求不到报错

  }else if(res.data.code !== 200){                                 //接口异常错误
      if(res.data.code === 404.666){               //先判断是否处于登录状态
          window.location.href="/after.html#/login";

      }else{
          if(res.data.result === '暂无 /api/account/permission/info/ 接口的访问权限。'){
              vm.$notify({
                  title: '警告',
                  message: '请联系管理员配置权限 ',
                  type: 'warning',
                  duration:'10000',
                  onClose(){
                      window.location.href="/after.html#/login";
                      this.$notify.close();
                      this.$message.close();
                  }
              });
          }else{
              vm.$message.warning(res.data.result);
          }
          //直接返回错误

      }
  }else{
      return res
  }
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: '/',
      url,
      data: qs.stringify(data),
      timeout: 100000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: '/',
      url,
      params, // get 请求时带的参数
      timeout: 100000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },

}
