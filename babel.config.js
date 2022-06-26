export default {
  presets: [['@babel/preset-env', {
    targets: [
      'last 1 firefox versions',
    ],
  }]],
  plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
};
