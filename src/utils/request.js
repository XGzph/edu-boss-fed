import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import router from '@/router'
import qs from 'qs'

const request = axios.create({
  // timeout: 5000
})

function getBaseURl (url) {
  if (url.startsWith('/boss')) {
    return 'http://eduboss.lagounews.com'
  } else {
    // 地址失效了
    return 'http://edufront.lagounews.com'
  }
}

// 请求拦截器的设置
request.interceptors.request.use(function (config) {
  config.baseURL = getBaseURl(config.url)
  // Token信息设置
  const { user } = store.state
  if (user && user.access_token) {
    config.headers.Authorization = user.access_token
  }
  return config
})
export default request

function redirectLogin () {
  router.push({
    name: 'login',
    query: {
      // 存储路由信息
      redirect: router.currentRoute.fullPath
    }
  })
}

// 存储是否正在更新Token状态
let isRefreshing = false
let requests = []

// 响应拦截器
request.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response) {
    // 状态码为失败的概况
    const { status } = error.response
    let errorMessage = ''
    if (status === 400) {
      // 没有Token
      if (!store.state.user) {
        redirectLogin()
        return Promise.reject(error)
      }
      // 检测是否
      if (isRefreshing) {
        return requests.push(() => {
          request(error.config)
        })
      }
      isRefreshing = true
      // Token无效
      return request({
        method: 'POST',
        url: '/front/user/refresh_token',
        data: qs.stringify({
          refreshatolen: store.state.user.refresh_token
        })
      }).then(res => {
        if (res.data.state !== 1) {
          store.commit('setUser', null)
          redirectLogin()
          return Promise.reject(error)
        }
        store.commit('setUser', res.data.content)
        requests.forEach(callback => callback())
        requests = []
        return request(error.config)
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        isRefreshing = false
      })
    } else if (status === 401) {
      errorMessage = 'Token 无效'
    } else if (status === 403) {
      errorMessage = '没有权限，联系管理员'
    } else if (status === 404) {
      errorMessage = '请求资源不存在'
    } else if (status === 500) {
      errorMessage = '服务端错误，联系管理员'
    }
    Message.error(errorMessage)
  } else if (error.request) {
    // 请求发送未收到响应
    Message.error('请求超时请重试')
  } else {
    // 其他状况
    Message.error(error.message)
  }
  return Promise.reject(error)
})
