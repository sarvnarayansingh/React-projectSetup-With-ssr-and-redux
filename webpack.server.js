const path = require('path');
const { merge } = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

const config = {
  mode: 'production',
  target: 'node',
  entry: './src/index.js',
  performance: {
    hints: false,
  },
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
