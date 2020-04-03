/*
 * @Date: 2020-03-16 14:01:18
 * @LastEditors: fangbao
 * @LastEditTime: 2020-04-03 18:23:52
 * @FilePath: /xt-new-mini/Users/fangbao/Documents/xituan/eslint-test/.eslintrc.js
 */
module.exports = {
  extends: ['eslint:recommended'],
  globals: {
    APP: true,
    Moon: true
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true
  },
  rules: {
    'no-unused-vars': 0,
    'no-console': 0,
    'space-before-blocks': 2,
    'wrap-regex': 2,
    'array-bracket-spacing': 2,
    'block-spacing': 2,
    'brace-style': 2,
    'comma-dangle': 2,
    'comma-spacing': 2,
    'comma-style': 2,
    'computed-property-spacing': 2,
    'jsx-quotes': ["error", "prefer-single"]
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  }
};
