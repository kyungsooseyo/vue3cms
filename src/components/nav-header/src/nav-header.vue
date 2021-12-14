<template>
  <div class="nav-header">
    <el-icon :size="25" class="set-up" v-if="!isFold" @click="handleFoldClick"
      ><set-up></set-up
    ></el-icon>
    <el-icon :size="25" @click="handleFoldClick" v-else><edit></edit></el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['foldChange'],
  setup(props, context) {
    let isFold = ref(false);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      context.emit('foldChange', isFold.value);
    };
    return { isFold, handleFoldClick };
  }
});
</script>

<style scoped lang="less">
// ?? 没啥用呢~
::v-deep .nav-header {
  > .set-up {
    cursor: pointer;
  }
}
</style>
