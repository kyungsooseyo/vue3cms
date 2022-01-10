<template>
  <div class="my-form">
    <el-form
      :model="form"
      ref="form"
      :rules="rules"
      :label-width="labelWidth"
      :inline="false"
    >
      <el-row>
        <template v-for="(item, index) in formItems" :key="index">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template v-if="item.type == 'input' || item.type == 'password'">
                <el-input
                  :placeholder="item?.placeholder"
                  :show-password="item.type == 'password'"
                ></el-input>
              </template>
              <template v-else-if="item.type == 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-bind="item.otherOptions"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option?.value"
                    :value="option?.value"
                    >{{ option.label }}</el-option
                  >
                </el-select>
              </template>
              <template
                v-else-if="item.type == 'datepicker'"
                style="width: 100%"
              >
                <!-- 通过v-bind直接将otherOptions（所有的）绑定在了date-picker上 -->
                <el-date-picker v-bind="item.otherOptions"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue';
import { IFormItem } from '@/baseUI/form/types';
export default defineComponent({
  name: 'myForm',
  props: {
    formItems: { type: Array as PropType<IFormItem[]>, default: () => [] },
    labelWidth: {
      type: String,
      default: '120px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup() {
    // todo 这应该少些东西
    const form = reactive({});
    const rules = reactive({});
    return { form, rules };
  }
});
</script>

<style scoped lang="less">
.my-form {
  padding-top: 22px;
}
</style>
