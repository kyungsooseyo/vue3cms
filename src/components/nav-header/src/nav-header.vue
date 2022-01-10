<template>
  <div class="nav-header">
    <el-icon :size="25" class="set-up" v-if="!isFold" @click="handleFoldClick"
      ><set-up></set-up
    ></el-icon>
    <el-icon :size="25" @click="handleFoldClick" v-else class="edit"
      ><edit></edit
    ></el-icon>
    <div class="nav-content">
      <div class="nav-bread">
        <my-breadcrumb :breadcrumbs="breadcrumbs"></my-breadcrumb>
      </div>
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
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import MyBreadcrumb from '@/baseUI/breadcrumb/index';
import { useRoute } from 'vue-router';
import { useStore } from '@/store/index';
import { pathMapBreadcrumbs } from '@/utils/mapMenu';
export default defineComponent({
  emits: ['foldChange'],
  components: { MyBreadcrumb },
  setup(props, context) {
    let isFold = ref(false);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      context.emit('foldChange', isFold.value);
    };
    const store = useStore();
    //~ 面包屑数据  用computed 将当前路由缓存起来，当路由改变时重新获得新的面包屑
    const breadcrumbs = computed(() => {
      const userMenus = store.state.loginModule?.userMenus;
      const route = useRoute();
      const currentPath = route.path;
      return pathMapBreadcrumbs(userMenus, currentPath);
    });
    return { isFold, handleFoldClick, breadcrumbs };
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
