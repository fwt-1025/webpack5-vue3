const path = require('path')

const resolve = (filePath) => {
    return path.resolve(__dirname, filePath)
}

module.exports = env => ({
    mode: env,
    entry: {
        main: resolve('src/main.js')
    },
    output: {
        filename: 'js/[name].js',
        path: resolve('servers/dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [resolve('src')],
                loader: 'thread-loader'
            }
        ]
    }
})