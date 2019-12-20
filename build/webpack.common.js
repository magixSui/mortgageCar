const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let devMode = process.env.NODE_ENV === 'development' ? true : false

module.exports = {
  entry: {
    app:  path.resolve(__dirname, '../src/main.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      'vue$':'vue/dist/vue.js',
      '@':path.resolve(__dirname,'../src'),
      'style': path.resolve(__dirname,'../src/assets/style'),
      'utils': path.resolve(__dirname,'../src/utils'),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
         }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: devMode ? ['style-loader', 'css-loader', 'sass-loader'] : [
          MiniCssExtractPlugin.loader,
          'css-loader', 'sass-loader', 'postcss-loader'],
      },
      // {
      //   test: /\.(sa|sc|c)ss$/,
      //   use: ['to-string-loader', 'style-loader', 'css-loader', 'sass-loader'],
      // },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]?[hash]'
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new FriendlyErrorsWebpackPlugin()
  ],
  stats: 'errors-only'
};