<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" stretch>
      <el-tab-pane label="账号登录">
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane label="手机登录">
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox label="记住密码" v-model="isKeepPassword"></el-checkbox>
      <el-link type="primary" :underline="false" href="" target="_blank"
        >忘记密码</el-link
      >
    </div>
    <el-button
      type="primary"
      size="default"
      @click="handleLogin"
      class="login-btn"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LoginAccount from './LoginAccount.vue';
import LoginPhone from './LoginPhone.vue';
export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    const isKeepPassword = ref(true);
    //! 通过这种方式来指定这个组件的类型、记住！！这样的话就只能调用loginAction这个方法了，写其他的都会报错
    const accountRef = ref<InstanceType<typeof LoginAccount>>(); // 这先不能写null 因为类型推断的话是找不到loginAction这个方法的
    const handleLogin = () => {
      console.log('点击');
      accountRef.value?.loginAction();
    };
    return { isKeepPassword, handleLogin, accountRef };
  }
});
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 20vh;
  width: 15vw;
  .title {
    color: #666666;
    text-align: center;
  }
}
.account-control {
  display: flex;
  justify-content: space-between;
}
.login-btn {
  width: 100%;
}
</style>
