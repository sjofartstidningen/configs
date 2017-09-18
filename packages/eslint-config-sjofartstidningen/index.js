module.exports = {
  parser: require.resolve('babel-eslint'),
  extends: [
    'eslint-config-airbnb-base',
    'eslint-plugin-flowtype/dist/configs/recommended',
    'eslint-config-prettier',
    'eslint-config-prettier/flowtype',
  ].map(require.resolve),
  plugins: ['import', 'flowtype', 'prettier'],
  env: {
    commonjs: true,
    es6: true,
    serviceworker: true,
    'shared-node-browser': true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
