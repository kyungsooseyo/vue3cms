<template>
  <div>
    <el-form :model="form" :rules="rules">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="identifyingCode">
        <div class="get-code">
          <el-input v-model="form.identifyingCode"> </el-input>
          <el-button type="primary" size="mini" class="get-code-btn"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { rules } from '../config/phone-config';
export default defineComponent({
  setup() {
    const form = reactive({
      phone: '',
      identifyingCode: ''
    });
    return { form, rules };
  }
});
</script>

<style scoped lang="less">
.get-code {
  display: flex;
  .get-code-btn {
    margin-left: 10px;
  }
}
</style>
