var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')
var path = require('path') ;
// 创建一个express实例
var app = express()

//配置express的静态资源地址
var publicPath = path.join(__dirname, '../static') ;
app.use('/static',express.static(publicPath));//和上面是一样的

// 调用webpack并把配置传递过去
var compiler = webpack(config)

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

// 使用 webpack-hot-middleware 中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler)

// webpack插件，监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // 发布事件
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})


// 注册中间件
app.use(devMiddleware)
// 注册中间件
app.use(hotMiddleware)

// 监听 3000端口，开启服务器
app.listen(3000, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:3000')
})