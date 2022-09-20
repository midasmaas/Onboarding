module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: 'webpack.config.js',
            },
        },
    },
    env: {
        browser: true,
    },
    extends: [
        'airbnb-base',
        'plugin:vue/base',
    ],
    rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        'linebreak-style': 0,
        'no-new': 1,
        'import/prefer-default-export': 1,
        'global-require': 1,
        'no-param-reassign': 1,
        indent: 'off',
    },
};
