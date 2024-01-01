module.exports = {
  extends: [
    './lib/base',
    './lib/react',
    './lib/react-hooks',
    './lib/react-a11y'
  ].map(require.resolve),
};
