
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended','airbnb-base/legacy'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': ['error', 'ignore']
  }
};
