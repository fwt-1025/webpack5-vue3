module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "entry",
                modules: false,
                corejs: 3
            }
        ]
    ],
    plugins: [
        [
            'import', {
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
            }, 'vant'
        ]
    ]
}