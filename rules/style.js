module.exports = {
  rules: {
    'line-comment-position': ['error', {
      position: 'above',
    }],
    'max-len': ['error', 120],
    'max-statements-per-line': ['error', { max: 1 }],
    'no-plusplus': 'off',
    'no-underscore-dangle': ['error', {
      allowAfterThis: true,
    }],
    'semi-style': ['error', 'last'],
    'template-tag-spacing': ['error', 'always'],
  },
};
