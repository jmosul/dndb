module.exports = {
    root: true,
    env: {
        node: true,
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'semi': [2, 'always'],
        'object-curly-spacing': ['error', 'never'],
        'indent': ['error', 4, {SwitchCase: 1}],
        'vue/script-indent': [
            'error', 4, {
                'baseIndent': 1,
                'switchCase': 1,
                'ignores': [],
            },
        ],
        'vue/no-use-v-if-with-v-for': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'space-before-function-paren': ['error', 'never'],
        'no-return-assign': 'off',
        'no-throw-literal': 'off',
    },
    'overrides': [
        {
            'files': ['*.vue'],
            'rules': {
                'indent': 'off',
            },
            'excludedFiles': '*-exports.js',
        },
    ],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2015,
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
};
