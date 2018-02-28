/**
 *  axios全局设置
 *  axios拦截器
 */ 
import axios from 'axios'

export default function(){
    axios.defaults.baseURL = 'http://barefeet.cn';
    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    
    // axio拦截器
    axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });
    
    axios.interceptors.response.use(function (response) {
      // Do something with response data
      return response;
    }, function (error) {
      // Do something with response error
      return Promise.reject(error);
    });
}
