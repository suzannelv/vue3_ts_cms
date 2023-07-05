<template>
  <div class="account">
    <el-form
      :model="account"
      :rules="accountRules"
      label-width="60px"
      size="large"
      status-icon
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormRules, ElForm } from 'element-plus'
import { accountLoginRequest } from '@/service/login.login.ts'
import useLoginStore from '@/store/login/login'
import type { IAccount } from '@/types'

//1. 定义account数据
const account = reactive<IAccount>({
  name: '',
  password: ''
})

//2. 定义校验规则
const accountRules: FormRules = {
  name: [
    { required: true, message: '必须输入用户名', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,20}$/, message: '必须是6~20个字母或数字', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '必须输入密码~', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/, message: '密码必须在3位以上', trigger: 'blur' }
  ]
}

// 3. 执行账号的登录逻辑
const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
function loginAction() {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 1. 获取用户输入的账号和密码
      const name = account.name
      const password = account.password
      // 2. 向服务器发送网络请求（携带账号和密码）
      loginStore.loginAccountAction({ name, password })
    } else {
      ElMessage.error('Oops, entrer le bon format de code et identifiant.')
    }
  })
}
// 把函数暴露出去
defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.account {
}
</style>
