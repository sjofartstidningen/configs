module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-sjofartstidningen',
    'eslint-config-prettier/react',
  ].map(require.resolve),
  plugins: ['react', 'jsx-a11y'],
};
