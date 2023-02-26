import { RouteRecordRaw } from 'vue-router'
import { WebEnum } from '@/enums/pageEnum'

// 引入路径
const importPath = {
  [WebEnum.WEB_DISPLAY_NAME]: () => import('@/views/preview/web.vue')
}

const webRoutes: RouteRecordRaw = {
  path: WebEnum.WEB_DISPLAY,
  name: WebEnum.WEB_DISPLAY_NAME,
  component: importPath[WebEnum.WEB_DISPLAY_NAME],
  meta: {
    title: '编辑',
    isRoot: true
  }
}


export default webRoutes