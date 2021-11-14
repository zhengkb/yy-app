// const bodyParser = require('body-parser')
module.exports = {
  // devServer.proxy 可以是一个指向开发环境 API 服务器的字符串  
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    // proxy 配置 https://github.com/chimurai/http-proxy-middleware#proxycontext-config
    proxy: {
      '/api/gethotkey.fcg': {
        target: 'https://c.y.qq.com/splcloud/fcgi-bin',
        pathRewrite: {
          '^/api': '/' //重写的路径
        }
      }
    }
  }
}