import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入Element-UI和主题风格样式文件
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'

// 将Element-UI注册为Vue的插件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
