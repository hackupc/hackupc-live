/**
 * @type {import('eslint").Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "prettier/prettier": ["error", require("./prettier.config.js")],
    "no-console": import.meta.env.DEV ? "off" : "warn",
    "no-debugger": import.meta.env.DEV ? "off" : "warn",
    "vue/component-tags-order": [
      "error",
      { order: ["script", "template", "style"] },
    ],
    "vue/block-lang": ["error", { script: { lang: "ts" } }],
    "prefer-template": "warn",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
  },
  overrides: [
    {
      files: ["*.js", "*.ts"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
      env: {
        node: true,
      },
    },
  ],
  ignorePatterns: ["/dist/"],
};
