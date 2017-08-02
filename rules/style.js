/* eslint no-magic-numbers: 'off' */

module.exports = {
  rules: {
    indent: ['error', 2, {
      MemberExpression: 0,
    }],
    'max-len': ['error', 120],
    'max-statements-per-line': ['error', { max: 1 }],
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'semi-style': ['error', 'last'],
    'template-tag-spacing': ['error', 'always'],
  },
};
