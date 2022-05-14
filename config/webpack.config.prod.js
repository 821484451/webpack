


const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩js
const path = require("path");
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const prodConfig = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, '../node_modules/'),
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader" 
                ]
            },
            {
                test: /\.less$/,
                exclude: path.resolve(__dirname, '../node_modules/'),
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            },
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({test: /\.js(\?.*)?$/i})],
        // sideEffects如果设为false，webpack就会认为所有没用到的函数都是没副作用的，即删了也没关系。
        "sideEffects": false
    }, 
    plugins: [
        new MiniCssExtractPlugin()
    ]
}

module.exports = merge(baseConfig, prodConfig)