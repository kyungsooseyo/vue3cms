<template>
  <div>
    <router-link to="/main">main</router-link>
    <router-link to="/login">login</router-link>
    <router-view></router-view>
    <h1>{{ $store.state.name }}</h1>
    <el-button type="warning">hhhh</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElButton } from 'element-plus';
export default defineComponent({
  name: 'app',
  components: { ElButton }
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app {
  .text {
    background-color: #fff;
  }
  color: red;
}
</style>
