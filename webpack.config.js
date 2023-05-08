const path = require('path');
module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },  
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { targets: 'defaults' }]],
        },
        exclude: '/node_modules/',
      },
    ],
  },
};
