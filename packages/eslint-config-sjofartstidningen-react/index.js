module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-sjofartstidningen',
    'eslint-config-prettier/react',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'react/jsx-filename-extension': 0,
    'jsx-a11y/href-no-hash': 0,
  },
};
