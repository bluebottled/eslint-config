module.exports = {
  extends: [
    './recommended',
    './typescript'
  ].map(require.resolve),
};
