<template>
  <el-container>
    <el-aside width="200px">
      <app-aside></app-aside>
    </el-aside>
    <el-container>
      <el-header><app-header></app-header></el-header>
      <el-main>
        <!-- 设置子路由的出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 引入侧边栏组件
import AppAside from './components/AppAside.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'layout-index',
  // 所有要使用的子组件的注册
  components: {
    AppAside,
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
.el-container{
  height: 100vh;
  min-width: 980px;
}
.el-aside{
  background-color: #d3dce6;
}
.el-header{
  background-color: #fff;
}
.el-main{
  background-color: #e9eef3;
}
</style>
