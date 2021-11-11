<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import { ElButton, ElTag, ElInputNumber } from 'element-plus';
export default defineComponent({
  name: 'app',
  // components: { ElButton, ElTag, ElInputNumber },
  setup() {
    return {};
  }
});
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
