const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const dev = require('./webpack.dev.js');
const prod = require('./webpack.prod.js');

console.log(process.argv.slice(4));
const config = JSON.stringify(process.argv.slice(4)[0]);
if (config == 'test') {
    module.exports = merge(prod, {
      entry: './src/index.js',
      plugins: [
        new HtmlWebpackPlugin({
          title: '首页',
          template: './index.html'
        }),
        new CleanWebpackPlugin()
      ],
      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
      },
      mode: 'production'
    });
}else{
     module.exports = merge(dev, {
      entry: './src/index.js',
      plugins: [
        new HtmlWebpackPlugin({
          title: '首页',
          template: './index.html'
        }),
        new CleanWebpackPlugin()
      ],
      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
      },
      mode: 'development'
    });
}

