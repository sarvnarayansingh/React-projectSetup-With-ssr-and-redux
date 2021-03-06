var config = require('./config');
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            [
              '@babel/env',
              {
                targets: {
                  browsers: ['last 2 versions'],
                },
              },
            ],
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          exposes: ['$', 'jQuery'],
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|it/),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  stats: 'errors-only'
};
