const { default: merge } = require("webpack-merge")
const webpack = require('webpack')
const webpackBaseConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
// const OptimizeCssWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve } = require('./utils')
module.exports = env => {
    console.log(process.env.NODE_ENV)
    return merge(webpackBaseConfig(env), {
        optimization: {
            runtimeChunk: {
                name: "runtime"
            },
            usedExports: true,
            minimize: true,
            minimizer: [new TerserWebpackPlugin({
                parallel: true
            }), new CssMinimizerWebpackPlugin()],
            splitChunks: {
                cacheGroups: {
                    defaultVendors: {
                        chunks: 'initial',
                        name: 'vendors',
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        // reuseExistingChunk: true
                    },
                    common: {
                        name: 'common',
                        chunks: 'initial',
                        minChunks: 2,
                        priority: -20,
                        // reuseExistingChunk: true
                    }
                }
            }
        },
        plugins: [
            new webpack.DefinePlugin({
                "__VUE_OPTIONS_API__": false,
                "__VUE_PROD_DEVTOOLS__": false,
                "proccess.env.NODE_ENV": env
            }),
            new HtmlWebpackPlugin({
                title: 'webpack搭建vue3-fwt',
                template: resolve('public/index.html'),
                filename: 'index.html',
                hash: true,
                inject: 'body',
                chunks: ['runtime', 'vendors', 'common', 'main']
            }),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ['**/*', 'dist']
            })
            // new OptimizeCssWebpackPlugin({
            //     assetNameRegExp: /\.optimize\.css$/,
            //     cssProcessor: require('cssnano')
            // })
        ]
    })
}
