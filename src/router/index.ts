import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const constantFiles = require.context('./constantModules', true, /\.ts$/)
let constantModules: Array<RouteRecordRaw> = []
constantFiles.keys().forEach((key) => {
  if (key === './index.ts') return
  constantModules = constantModules.concat(constantFiles(key).default)
})

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantModules
})

export default router
