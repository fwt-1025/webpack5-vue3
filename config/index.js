module.exports = {
    dev: {
        host: '0.0.0.0',
        port: 8088,
        open: false,
        hot: true,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:10600',
                changeOrigin: true
            }
        },
        publicPath: '/',
        rootAssetsPath: 'dist'
    },
    prod: {
        publicPath: '/',
        rootAssetsPath: 'servers/dist'
    }
}