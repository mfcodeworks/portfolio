module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/airbnb',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'import/no-webpack-loader-syntax': 'off',
        'import/prefer-default-export': 'off',
        'comma-dangle': ['error', 'never'],
        indent: ['warn', 4],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-restricted-globals': 'off'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};
