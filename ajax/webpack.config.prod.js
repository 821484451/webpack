const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 生成html
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除dist打包文件
// 分离css文件，style-loader是为了内联到html,这个插件可以使用link插入，放弃Extract-text-webpack-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩js

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    devtool: 'inline-source-map',
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'postcss-loader'
                        
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'postcss-loader',
                    "less-loader"
                ]
            },
            {
                test:  /\.(png|svg|jpg|gif)$/,
                use: ["file-loader",'image-webpack-loader'] //压缩图片
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ],
        
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })

    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({}), new UglifyJsPlugin({test: /\.js(\?.*)?$/i})],
        // sideEffects如果设为false，webpack就会认为所有没用到的函数都是没副作用的，即删了也没关系。
        "sideEffects": false,
    }
}