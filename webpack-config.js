var path = require('path');
var webpack = require('webpack');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var chalk = require('chalk');

module.exports = {
  // context: path.join(__dirname, 'src'),
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    // 'webpack/hot/only-dev-server',
    'webpack/hot/dev-server',
    './src/index',
    'babel-polyfill',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new ProgressBarPlugin({
      format: chalk.yellow.bold('build [:bar]') + chalk.blue.bold(':percent') + ' (:elapsed seconds)',
      clear: false
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'react-hot!babel-loader',
        exclude: /node_modules/,
        include: __dirname
      },

      {
        test: /\.json?$/,
        loader: 'json'
      },

      // {
      //   test: /\.css$/,
      //   loaders: ['style', 'raw'],
      //   include: __dirname
      // },

      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url',
        query: { limit: 10240 }
      },

      {
        test: /\.scss?$/,
        loaders: ['style', 'css', 'sass'],
        include: __dirname
      },

      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },

      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  stats: {
    colors: true
  }
};
