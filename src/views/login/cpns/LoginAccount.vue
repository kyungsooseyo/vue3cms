<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          type="password"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { rules } from '../config/account-config';
import { ElForm } from 'element-plus';
import localCache from '@/utils/cache';
export default defineComponent({
  setup() {
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    });
    const store = useStore();
    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          //1. 判断是否需要记住密码
          if (isKeepPassword) {
            localCache.setCache('name', account.name);
            localCache.setCache('password', account.password);
          } else {
            localCache.deleteCache('name');
            localCache.deleteCache('password');
          }
          store.dispatch('accountLoginAction', { ...account });
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
