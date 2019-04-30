var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'public/index.html',
      template: 'app/index.html',
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      applicationStyles: 'app/styles/app.scss',
      reducers: 'app/reducers/reducers.jsx',
      MyApp: 'app/components/MyApp.jsx',
      Header: 'app/components/Header.jsx',
      Recipes: 'app/components/Recipes.jsx',
      AdRecipe: 'app/components/AdRecipe.jsx',
      Information: 'app/components/Information.jsx',
      actions: 'app/actions/actions.jsx',
      RecipeComponent: 'app/components/RecipeComponent.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },

  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
