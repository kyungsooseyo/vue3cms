<template>
  <div class="login">
    <login-v-panel></login-v-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginVPanel from './cpns/LoginPanel.vue';
export default defineComponent({
  components: { LoginVPanel },
  setup() {
    return {};
  }
});
// test
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url('~assets/img/login-bg.svg');
}
</style>
