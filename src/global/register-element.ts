import { App } from 'vue';
import 'element-plus/dist/index.css';
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElIcon,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElCalendar
} from 'element-plus';

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElIcon,
  ElCalendar
];

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
