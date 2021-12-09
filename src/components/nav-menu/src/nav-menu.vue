/* eslint-disable */
<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" class="img" alt="logo" />
      <span class="title">Vue3+TS</span>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type == 1">
          <!-- 二级菜单展示的标题 -->
          <el-submenu index="">
            <i v-if="item.icon" :class="item.icon">
              <span>{{ item.name }}</span>
            </i>
          </el-submenu>
          <!--  遍历item-->
          <template v-for="subitem in item.children" :key="subitem.id">
            <el-menu-item index="">
              <i v-if="subitem.icon" :class="subitem.icon"></i>
            </el-menu-item>
          </template>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type == 2">
          <el-menu-item index="">
            <i :class="item.icon" v-if="item.icon">
              <span>{{ item.name }}</span>
            </i>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
// import {useStore} from 'vuex';
import { useStore } from '@/store/index';
import localCache from '@/utils/cache';
export default defineComponent({
  setup() {
    const store = useStore();
    onMounted(() => {
      //
    });
    const userMenus = computed(() => store.state.loginModule?.userMenus);

    // const userMenus = computed(() => localCache.getCache('userMenus'));

    return { userMenus };
  }
});
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
