module.exports = {
  env: {
    node: false,
    browser: false,
  },
  plugins: [
    'node',
  ],
  extends: [
    'airbnb-base',
    'plugin:node/recommended',
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/node.js',
    './rules/style.js',
    './rules/es6.js',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error',
  },
};
