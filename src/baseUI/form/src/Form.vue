<template>
  <div class="my-form">
    <el-form
      :model="form"
      ref="form"
      :rules="rules"
      label-width="80px"
      :inline="false"
      size="normal"
    >
      <el-row>
        <template v-for="(item, index) in formItems" :key="index">
          <el-col :span="8"></el-col>
          <el-form-item :label="item.label">
            <el-input :placeholder="item?.placeholder"></el-input>
          </el-form-item>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IFormItem } from '@/baseUI/form/types';
export default defineComponent({
  name: 'myForm',
  props: {
    formItems: { type: Array as PropType<IFormItem[]>, default: () => [] }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
