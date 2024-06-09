import axios from 'axios'
import store from '@/store'

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
