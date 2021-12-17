<template>
  <div class="user">
    <my-form :formItems="formItems"></my-form>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import myForm, { IFormItem } from '@/baseUI/form/index';
export default defineComponent({
  components: { myForm },
  name: 'user',
  setup() {
    const formItems: IFormItem[] = [
      { label: '用户名', placeholder: '请输入用户名' },
      { label: '密码', placeholder: '请输入密码' }
    ];
    return { formItems };
  }
});
</script>

<style scoped></style>
