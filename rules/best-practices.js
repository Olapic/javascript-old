module.exports = {
  rules: {
    complexity: ['warn'],
    'class-methods-use-this': 'off',
    'no-invalid-this': ['warn'],
    'no-magic-numbers': ['error', {
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],
    'no-unmodified-loop-condition': 'error',
    'no-useless-call': 'error',
    'no-useless-escape': 'off',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'require-await': 'error',
  },
};
