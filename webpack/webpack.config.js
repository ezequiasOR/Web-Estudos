const modoDev = process.env.NODE_ENV !== 'production'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: __dirname + '/public'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
          cache: true,
          parallel: true
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'estilo.css'
    })
  ],
  module: {
    rules: [{
      test: /\.s?[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        // 'style-loader',   // Adiciona CSS a DOM injetando a tag <style>
        'css-loader',  // interpreta @import, url()...
        'sass-loader',
      ]
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
          loader: 'babel-loader',
          options: {
              presets: ['@babel/preset-env']
          }
      }
    }
  ]
  }
}
