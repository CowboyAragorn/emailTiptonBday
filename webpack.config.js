const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/main.js',
  },

  plugins: [
    new HtmlWebpackPlugin({

      title: 'Knightmail',

    }),
  ],

  module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },

      ],
    },


    devtool: 'inline-source-map',
    devServer: {
    static: './dist',
    hot: true,
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
     };