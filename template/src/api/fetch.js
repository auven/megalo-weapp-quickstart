import axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'
import qs from 'qs'
axios.defaults.adapter = mpAdapter

const instance = axios.create({
  baseURL: 'https://easy-mock.com/mock/5be12b95f7aed41684f2daea/axiosTest'
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 发送请求之前你可以在这里对config做一些羞羞的事情
    console.log('请求被拦截到了，加点料', config)
    config.headers['Authorization'] = '123ba'
    if (config.method === 'post' && !config.formData) {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)
// 添加一个响应拦截器
instance.interceptors.response.use(
  response => {
    console.log('拦截到响应数据了，我过滤下,过滤前的数据：', response)
    // Do something with response data
    return response.data
  },
  error => {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default instance
