const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        port: '9000',
        contentBase: path.resolve(__dirname, "./dist"),
        hot: true, // 启动热更新
        open: true
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, './node_modules/'),
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.less$/,
                exclude: path.resolve(__dirname, './node_modules/'),
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
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
                exclude: path.resolve(__dirname, './node_modules/'),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            src: path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: 'myWebpack'
        }),
        new webpack.NamedModulesPlugin(), // HMR热更新
        new webpack.HotModuleReplacementPlugin() // HMR热更新
    ]
}