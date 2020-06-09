const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');  // uglify 去除console 功能


function resolve (dir) {
  return path.resolve(__dirname, dir);
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))

    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true,  //生产环境自动删除console
            },
            warnings: false,
          },
          sourceMap: false,
          parallel: true,//使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        })
      );
    }
  },

  devServer: {
    open: process.platform === 'darwin',
    host: '127.0.0.1',
    port: 3030,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {
      console.log("app start")
    }
  },
}
