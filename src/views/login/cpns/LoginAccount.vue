<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { rules } from '../config/account-config';
import { ElForm } from 'element-plus';
export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('登录');
        } else {
          console.log('验证不通过');
        }
      });
    };
    return {
      account,
      rules,
      loginAction,
      formRef
    };
  }
});
</script>

<style scoped></style>
