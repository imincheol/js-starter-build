const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
      app: './app/src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
      contentBase: './test/'
  },

};
