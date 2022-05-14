const { merge } = require('webpack-merge')
const path = require("path");
const webpack = require("webpack");
const baseConfig = require('./webpack.config.base')
const devConfig = {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        port: '9000',
        contentBase: path.resolve(__dirname, "./dist"),
        hot: true // 启动热更新
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, '../node_modules/'),
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader" 
                ]
            },
            {
                test: /\.less$/,
                exclude: path.resolve(__dirname, '../node_modules/'),
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            },
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // HMR热更新
        new webpack.HotModuleReplacementPlugin() // HMR热更新
    ]
}

module.exports = merge(baseConfig, devConfig)