const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

const libraryName = 'prejudice';

module.exports = (env, argv) => {
  const production = argv.mode === 'production';
  return {
    devtool: 'source-map',
    entry: `${__dirname}/src/Prejudice.js`,
    module: {
      rules: [
        {
          exclude: /(?:node_modules|bower_components)/u,
          loader: 'babel-loader',
          test: /(?:\.jsx|\.js)$/u
        }
      ]
    },
    optimization: {
      minimize: production,
      minimizer: [new TerserPlugin()]
    },
    output: {
      filename: `${libraryName}${production ? '.min.js' : '.js'}`,
      library: libraryName,
      libraryTarget: 'umd',
      path: `${__dirname}/lib`,
      umdNamedDefine: true
    },
    resolve: {
      extensions: ['.json', '.js'],
      modules: [path.resolve('./node_modules'), path.resolve('./src')]
    }
  };
};
