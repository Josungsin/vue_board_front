const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        //개발서버
        target: 'http://localhost:8081'
      }
    }
  }
})
