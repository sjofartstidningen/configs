module.exports = {
  parser: require.resolve('babel-eslint'),
  extends: [
    'eslint-config-airbnb-base',
    'eslint-plugin-flowtype/dist/configs/recommended',
    'eslint-config-prettier',
    'eslint-config-prettier/flowtype',
  ].map(require.resolve),
  plugins: ['import', 'flowtype'],
  env: {
    browser: 'true',
    node: true,
    commonjs: true,
    es6: true,
    serviceworker: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'off',
  },
};
