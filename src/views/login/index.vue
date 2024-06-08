<template>
  <div class="login">
    <!-- <h2>后台管理系统</h2> -->
    <el-form ref="form" :model="form" label-width="80px" label-position="top" :rules="rules">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="isLoginLoading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '@/services/user'
export default {
  name: 'login-index',
  data () {
    return {
      // 存储表单数据
      form: {
        phone: '18201288771',
        password: '111111'
      },
      // 设置表单校验规则
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1\d{10}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '密码长度为 6 到 18 位', trigger: 'blur' }
        ]
      },
      // 加载状态的设置
      isLoginLoading: false
    }
  },
  methods: {
    // 登录功能
    async onSubmit () {
      try {
        await this.$refs.form.validate()
        // console.log('成功')
        this.isLoginLoading = true
        // 发送请求
        // const { data } = await request({
        //   method: 'POST',
        //   url: '/front/user/login',
        //   data: qs.stringify(this.form)
        // })
        const { data } = await login(this.form)
        this.isLoginLoading = false
        // 响应处理
        if (data.state === 1) {
          this.$message.success(data.message)
          // 将用户信息存储到Vuex中
          this.$store.commit('setUser', data.content)
          // 根据存储的数据进行跳转
          this.$router.push(this.$route.query.redirect || '/')
        } else {
          this.$message.error(data.message)
        }
      } catch (err) {
        console.log('失败')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-form{
    background-color: #fff;
    padding: 20px;
    width: 300px;
    border-radius: 10px;
    .el-button{
      width: 100%;
    }
  }
}
</style>
