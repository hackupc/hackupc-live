/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    'prettier/prettier': ['error', require('./prettier.config.js')],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/order-in-components': 'error',
    'vue/attributes-order': 'error',
    'vue/no-v-html': 'error',
    'prefer-template': 'warn',
  },
  overrides: [
    {
      files: ['*.js', '*.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
      env: {
        node: true,
      },
    },
  ],
  ignorePatterns: ['/dist/'],
}
