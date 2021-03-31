const { resolve, createNotifierCallback, getIp } = require('./utils')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.conf')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const config = require('../config/index.js')
const HOST = process.env.HOST || config.dev.host
const PORT = (process.env.PORT && Number(process.env.PORT)) || config.dev.port
portfinder.basePort = PORT
console.log(PORT)
module.exports = env => {
    const devConfig = merge(webpackBaseConfig(env), {
        devServer: {
            host: HOST,
            port: PORT,
            inline: true,
            open: config.dev.open,
            hot: true,
            hotOnly: false,
            noInfo: true,
            proxy: config.dev.proxy,
            // quiet: true,
            overlay: {
                warnings: true,
                errors: true
            },
            historyApiFallback: true
        },
        target: 'web',
        plugins: [
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: false,
                __VUE_PROD_DEVTOOLS__: true,
                'proccess.env.NODE_ENV': env
            }),
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: resolve('public/index.html'),
                title: 'webpack搭建vue3-fwt',
                filename: 'index.html',
                inject: true,
                favicon: resolve('public/favicon.ico')
            })
        ]
    })
    return new Promise((resolve, reject) => {
        portfinder.getPort((err, port) => {
            console.log('port', port)
            if (err) {
                reject(err)
            } else {
                devConfig.devServer.port = port
                devConfig.plugins.push(new FriendlyErrorsWebpackPlugin({
                    compilationSuccessInfo: {
                        quiet: true,
                        messages: [`Your application is running here http://${getIp()}:${devConfig.devServer.port}`]
                    },
                    onErrors: env === 'development' ? createNotifierCallback() : undefined
                }))
                resolve(devConfig)
            }
        })
    })
}
