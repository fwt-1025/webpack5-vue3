module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",
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
        ],
        ["@babel/plugin-syntax-dynamic-import"]
    ]
}