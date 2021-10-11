const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  mode: 'production',
  entry: './src/Client/Main.js',
  performance: {
    hints: false,
  },
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'public/rblbankoffers'),
  },
};

module.exports = merge(baseConfig, config);
