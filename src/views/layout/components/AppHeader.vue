<template>
  <div class="app-header">
    <!-- 左侧 -->
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 右侧 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" style="width: 100px;">
        <el-dropdown-item>用户信息</el-dropdown-item>
        <el-dropdown-item divided>登录退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss" scoped>
.app-header{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  .el-dropdown-link{
    display: flex;
    align-items: center;
  }
}
</style>
