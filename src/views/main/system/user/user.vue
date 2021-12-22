<template>
  <div class="user">
    <my-form v-bind="formConfig"></my-form>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import myForm from '@/baseUI/form/index';
import { formConfig } from './config/search.config';
export default defineComponent({
  components: { myForm },
  name: 'user',
  setup() {
    return { formConfig };
  }
});
</script>

<style scoped></style>
