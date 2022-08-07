<template>
  <div class="login-box">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="60px"
        class="demo-ruleForm"
    >
      <h2>后台管理系统</h2>
      <el-form-item label="账号: " prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="密码: " prop="password">
        <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button class="loginBtn" type="primary" @click="submitForm(ruleFormRef)"
        >登录
        </el-button
        >
        <el-button class="loginBtn" @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
// 导入一个名为 LoginData 的类
import { LoginData } from "@/type/login";

export default defineComponent({
  setup() {
    // 用导入的 LoginData 创建一个新的对象，并用 reactive 赋予响应性，实际上他的代码就和
    // const data = reactive({ruleForm:{username: '', password: ''}}) 实现了同一个效果
    const data = reactive(new LoginData())

    const rules = {
      username: [
        {
          required: true,
          message: '请输入账号',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 10,
          message: '账号长度3-10',
          trigger: 'blur'
        },
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 10,
          message: '密码长度3-10',
          trigger: 'blur'
        },
      ],
    }
    return { ...toRefs(data), rules }
  }
})
</script>

<style lang="scss" scoped>
  .login-box {
    width: 100%;
    height: 100%;
    text-align: center;
    overflow: hidden;
    // no-repeat 不平铺
    background: url("../assets/bg.jpg") no-repeat;
    // 宽高铺满
    background-size: 100% 100%;

    .demo-ruleForm{
      width: 500px;
      margin: 220px auto;
      background-color: white;
      padding: 40px;
      border-radius: 20px;
    }

    .loginBtn{
      width: 48%;
    }

    h2{
      margin-bottom: 10px;
    }
  }
</style>