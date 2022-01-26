const path = require('path');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

const config = {
  mode: 'development',
  entry: './src/server.js',
  performance: {
    hints: false,
  },
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'build'),
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
};

module.exports = merge(baseConfig, config);
