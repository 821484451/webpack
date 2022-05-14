const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackBar = require('webpackbar')

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    module:{
        rules: [
           
            {
                test:  /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader",
                    'image-webpack-loader' //压缩图片  
                ]
            },
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, '../node_modules/'),
                use: "babel-loader",
                   
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            src: path.resolve(__dirname, '../src'),
            '@assets': path.resolve(__dirname, '../src/assets'),
        }
    },
    plugins: [
        new WebpackBar(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            title: 'myWebpack'
        }),
        new OptimizeCssAssetsWebpackPlugin()
    ]
}