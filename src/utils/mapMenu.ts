import { IBreadcrumb } from '@/baseUI/breadcrumb';
import { Key } from '@element-plus/icons-vue/dist/types';
import { RouteRecordRaw } from 'vue-router';
let firstMenu: any = null;
export function mapMenuToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = [];
  // ~ 这个是webpack提供的函数,用来读取指定文件用的，避免了一直import
  const routerFiles = require.context('../router/main', true, /\.ts/);

  routerFiles.keys().forEach((path) => {
    //- path是相对于main的相对路径
    // console.log(path);
    const route = require('../router/main' +
      path.substring(1, path.length - 3));
    allRoutes.push(route.default);
  });
  // console.log(allRoutes);
  // 2.根据菜单获取需要添加的routes
  // userMenus type==1 -> children
  const _recurseRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type == 2) {
        const route = allRoutes.find((item) => {
          return item.path == menu.url;
        });
        if (route) {
          routes.push(route);
          if (!firstMenu) {
            firstMenu = menu;
          }
        }
      } else {
        _recurseRoute(menu.children);
      }
    }
  };
  _recurseRoute(userMenus);
  return routes;
}
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = [];
  pathMapToMenu(userMenus, currentPath, breadcrumbs);
  return breadcrumbs;
}
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type == 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath);
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name });
        breadcrumbs?.push({ name: findMenu.name });
        return findMenu;
      }
    } else if (menu.type == 2 && menu.url == currentPath) {
      return menu;
    }
  }
}
export { firstMenu };
