<template>
  <div class="nav-header">
    <el-icon :size="25" class="set-up" v-if="!isFold" @click="handleFoldClick"
      ><set-up></set-up
    ></el-icon>
    <el-icon :size="25" @click="handleFoldClick" v-else class="edit"
      ><edit></edit
    ></el-icon>
    <div class="nav-content">
      <div>面包屑</div>
      <div class="user-info">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-icon class="user-icon">
              <user></user>
            </el-icon>
            用户
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>用户个人信息</el-dropdown-item>
              <el-dropdown-item>系统管理</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
              <!-- <el-dropdown-item disabled>Action 4</el-dropdown-item> -->
              <!-- <el-dropdown-item divided>Action 5</el-dropdown-item> -->
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
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
.nav-header {
  display: flex;
  width: 100%;
  > .set-up {
    cursor: pointer;
  }
  > .edit {
    cursor: pointer;
  }
  > .nav-content {
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    > .user-info {
      .user-icon {
        position: relative;
        top: 2px;
      }
    }
  }
}
</style>
