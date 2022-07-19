const path = require('path');

module.exports = {
  entry: './src/app.js',
  devtool: 'source-map',
  output: {
    filename: 'Smartis.build.js',
    path: path.resolve(__dirname, 'dist'),
    library : 'Smartis',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  // mode: 'development',
  mode: 'production',
};