const path = require('path');

const config = {
  entry: './src/dummy.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'all.js'
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015','react','env']
        }
      }
    }
  ]
  }
};

module.exports = config;
