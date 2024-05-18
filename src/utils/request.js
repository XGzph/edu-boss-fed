import axios from 'axios'

const request = axios.create({
  // timeout: 5000
})

function getBaseURl (url) {
  if (url.startsWith('/boss')) {
    return 'http://eduboss.lagounews.com'
  } else {
    return 'http://edufront.lagounews.com'
  }
}

// 请求拦截器的设置
request.interceptors.request.use(function (config) {
  config.baseURL = getBaseURl(config.url)
  return config
})
export default request
