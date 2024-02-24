module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  ignorePatterns: ['.eslintrc.js', 'node_modules/'],
  rules: {
    '@import/no-anonymous-default-export': 'off',
  },
};
