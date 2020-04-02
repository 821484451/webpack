const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        port: '9000',
        contentBase: path.resolve(__dirname, "./dist"),
        hot: true // 启动热更新
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers: ['last 30 versions', "> 2%", "Firefox >= 10", "ie 6-11"]
                                })
                            ]
                        }
                    },
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers: ['last 30 versions', "> 2%", "Firefox >= 10", "ie 6-11"]
                                })
                            ]
                        }
                    },
                    "less-loader"
                ]
            },
            {
                test:  /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader",
                    'image-webpack-loader', //压缩图片  
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new webpack.NamedModulesPlugin(), // HMR热更新
        new webpack.HotModuleReplacementPlugin() // HMR热更新
    ]
}