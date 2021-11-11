<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" stretch>
      <el-tab-pane label="账号登录">
        <login-account></login-account>
      </el-tab-pane>
      <el-tab-pane label="手机登录">
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginAccount from './LoginAccount.vue';
import LoginPhone from './LoginPhone.vue';
export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 20vh;
  width: 20vw;
  .title {
    color: #666666;
    text-align: center;
  }
}
</style>
