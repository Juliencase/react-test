const merge = require('webpack-merge');
const common = require('./webpack.common.js');
 var webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './app/app.jsx'
   //  'react-hot-loader/patch',
   //  'webpack-hot-middleware/client?quiet=true'
  ],
  output: {
    path: __dirname,
    filename: 'public/bundle.js',
    publicPath: '/'
   },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
