module.exports = {
    parser: 'postcss-scss',
    plugins: [
        "postcss-preset-env",
        require('autoprefixer')
    ]
}