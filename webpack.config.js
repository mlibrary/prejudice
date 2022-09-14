const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

let libraryName = 'prejudice';

module.exports = (env, argv) => {
  const production = argv.mode === 'production';
  return {
    entry: __dirname + '/src/Prejudice.js',
    devtool: 'source-map',
    output: {
      path: __dirname + '/lib',
      filename: `${libraryName}${production ? '.min.js' : '.js'}`,
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
      minimize: production,
      minimizer: [new TerserPlugin()],
    },
    plugins: [new ESLintPlugin({
      extensions: ['js', 'jsx'],
      exclude: ['/node_modules/']
    })]
  };
}
