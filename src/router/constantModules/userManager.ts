import type { RouteRecordRaw } from 'vue-router';

const MainRouter: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "mind" */'@/components/TreeGraph/mind.vue')
  }
]
export default MainRouter
