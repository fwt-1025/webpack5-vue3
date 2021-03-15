const utils = require('./utils')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/dist/plugin').default
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = env => ({
    mode: env,
    devtool: env === 'development' ? 'inline-cheap-module-source-map' : 'source-map',
    entry: {
        main: utils.resolve('src/main.js')
    },
    output: {
        filename: 'js/[name][contenthash].js',
        path: env === 'development' ? utils.resolve('dist') : utils.resolve('servers/dist'),
        publicPath: '/',
        chunkFilename: 'js/[name]/[name][contenthash:7].js'
    },
    resolve: {
        alias: {
            '@': utils.resolve('src'),
            'vue$': 'vue/dist/vue.runtime.esm-browser.js'
        },
        extensions: [".ts", ".tsx", ".js", ".vue", ".json"]
    },
    performance: false,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        ts: 'ts-loader',
                        tsx: 'babel-loader!ts-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                include: utils.resolve('src'),
                use: [
                    'thread-loader',
                    'babel-loader'
                ]
            },
            {
                test: /\.ts$/,
                include: utils.resolve('src'),
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            appendTsSuffixTo: [/TS\.vue$/]
                        }
                    }
                ]
            },
            {
                test: /\.tsx$/,
                include: utils.resolve('src'),
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            appendTsSuffixTo: [/TSX\.vue$/]
                        }
                    }
                ]
            },
            {
                test: /\.(sc|c)ss$/,
                // exclude: /node_modules/,
                use: [
                    // 'thread-loader',
                  {
                    loader: MiniCssExtractPlugin.loader
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 2
                    }
                  }, {
                    loader: 'postcss-loader'
                  }, {
                    loader: 'sass-loader'
                  }
                ],
                sideEffects: true
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: env === 'development' ? '[name].css' : 'css/[name]-[contenthash:7].css',
            chunkFilename: env === 'development' ? '[name].css' : 'css/[name]=[id][contenthash:7].css'
        })
    ]
})