import { RouteRecordRaw } from 'vue-router'
const MainRouter: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "userManager" */'@/componens/HelloWorld.vue')
  }
]
export default MainRouter
