import axios from 'axios';
import router from '../router';
// 创建axios实例
const service = axios.create({            
  timeout: 30000 // 请求超时时间                                   
})
service.defaults.withCredentials = true
// 添加request拦截器 
service.interceptors.request.use(config => {  
  if (localStorage.getItem('Authorization')) {
    config.headers.Authorization = localStorage.getItem('Authorization');
  }       
  return config
}, error => {
  Promise.reject(error)
})
// 添加respone拦截器
service.interceptors.response.use(                  
  response => {
   console.log('200::::::')
    return response
  },
  error => {
    const response = error.response.status;
    console.log(response,'err:::::')
    switch (response) {
      case 401:
        console.log('Token已过期或有误')
        this.$router.push('/login')
        break;
      case 403:
        console.log('无访问权限')
        break;
      case 404:
          console.log('请求路径不存在')
          break;
      default:
        break;
    }
    return Promise.reject(response)
  }
)

export function get(url, params = {}) {
  params.t = new Date().getTime(); //get方法加一个时间参数,解决ie下可能缓存问题.
  return service({
    url: url,
    method: 'get',
    headers: {},
    params
  })
}


//封装post请求
export function post(url, data = {}) { 
  //默认配置 
  let sendObject={
    url: url,
    method: 'post',
    headers: {
      'Content-Type':'application/json;charset=UTF-8'       
    },
    data:data
  };
  sendObject.data=JSON.stringify(data);
  return service(sendObject)
}

//封装put方法 
export function put(url,data = {}){
  return service({
    url: url,
    method: 'put',
    headers: {
      'Content-Type':'application/json;charset=UTF-8'       
    },
    data:JSON.stringify(data)
  }) 
}
//封装patch方法
export function patch(url,data = {}){
  return service({
    url: url,
    method: 'patch',
    headers: {
      'Content-Type':'application/json;charset=UTF-8'       
    },
    data:JSON.stringify(data)
  }) 
}
//删除方法(resfulAPI常用)
export function deletes(url,data = {}){
  return service({
    url: url,
    method: 'delete',
    headers: {
      'Content-Type':'application/json;charset=UTF-8'       
    },
    data:JSON.stringify(data)
  }) 
}

export {
  service
}