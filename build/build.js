const webpack = require('webpack')
const chalk = require('chalk')
const webpackProdConfig = require('./webpack.prod.conf')
module.exports = new Promise((resolve, reject) => {
    let env = process.argv[2].match(/(NODE_ENV=\w+)/g)[0].split('=')[1]
    console.log('打包环境', env)
    webpack(webpackProdConfig(env), (err, stats) => {
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
            chunks: false,
            chunkModules: false
        }) + '\n\n')
    
        if (stats.hasErrors()) {
            reject(err)
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
        }
    
        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n' + new Date()
        ))
        resolve()
    })
})