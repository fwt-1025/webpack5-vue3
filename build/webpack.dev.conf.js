const { resolve, createNotifierCallback, getIp } = require('./utils')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.conf')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
module.exports = env => {
    let devConfig = merge(webpackBaseConfig(env), {
        devServer: {
            host: '0.0.0.0',
            port: 8088,
            inline: true,
            // open: true,
            hot: true,
            noInfo: true,
            proxy: {
                '/api': {
                    target: 'http://127.0.0.1:10600/',
                    changeOrigin: true
                }
            },
            // quiet: true,
            overlay: {
                warnings: true,
                errors: true
            },
            historyApiFallback: true
        },
        plugins: [
            new webpack.DefinePlugin({
                "__VUE_OPTIONS_API__": false,
                "__VUE_PROD_DEVTOOLS__": true,
                "proccess.env.NODE_ENV": env
            }),
            new HtmlWebpackPlugin({
                template: resolve('public/index.html'),
                title: '零云平台移动端',
                filename: 'index.html',
                inject: true,
                favicon: resolve('public/favicon.ico')
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    })
    return new Promise((resolve, reject) => {
        portfinder.getPort((err, port) => {

            if (err) {
                reject(err)
            } else {
                devConfig.devServer.port = port
                devConfig.plugins.push(new FriendlyErrorsWebpackPlugin({
                    compilationSuccessInfo: {
                        quiet: true,
                        messages: [`Your application is running here ${getIp()}://${devConfig.devServer.port}`]
                    },
                    onErrors: env === 'development' ? createNotifierCallback() : undefined
                }))
                resolve(devConfig)
            }
        })
    })
}