module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'standard'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 11,
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: [
        'vue',
        '@typescript-eslint'
    ],
    rules: {
        quotes: ['error', 'single'],
        indent: ['error', 4, {
            SwitchCase: 1
        }],
        'eol-last': ['error', 'never'],
        'comma-dangle': ['error', 'only-multiline'],
        'space-before-function-paren': ['error', 'never']
    }
}