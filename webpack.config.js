/* global __dirname, require, module*/

const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const ESLintPlugin = require('eslint-webpack-plugin');

let libraryName = 'prejudice';

let plugins = [new ESLintPlugin({
    extensions: ['js', 'jsx'],
    exclude: ['/node_modules/']
  })], outputFile;

let minimize = false;

if (env === 'build') {
  minimize = true;
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

const config = {
  entry: __dirname + '/src/Prejudice.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  optimization: {
    minimize: minimize,
    minimizer: [new TerserPlugin()],
  },
  plugins: plugins
};

module.exports = config;
