const { defineConfig } = require('@vue/cli-service')

// 按需导入需要配置的东西--------------------------------------------------
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// --------------------------------------------------------------------

module.exports = defineConfig({
  transpileDependencies: true,
  // 按需导入需要配置的东西------------------------------------------------
  configureWebpack:{
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  }
  // ------------------------------------------------------------------
})
