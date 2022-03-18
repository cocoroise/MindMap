/*
 * @Description:配置文件
 * @Author: ZY
 * @Date: 2020-12-07 11:41:22
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-27 15:17:29
 */
const { resolve } = require('path');
const dayjs = require('dayjs');

const time = dayjs().format('YYYY-M-D HH:mm:ss');
process.env.VUE_APP_UPDATE_TIME = time;
module.exports = {
  configureWebpack() {
    return {
      resolve: {
        alias: {
          '@': resolve('src'),
          '*': resolve(''),
          ASSETS: resolve('src/assets'),
        },
      },
    };
  },
};
