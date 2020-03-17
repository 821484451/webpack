const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = merge(common, {
	plugins: [
		new ExtractTextPlugin("styles.css"),
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.DefinePlugin({
			
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{loader:"css-loader"}
					]
				})
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					use:[{
							loader:'css-loader'
						},{
							loader:'less-loader'
						}],
					fallback:'style-loader'
				})
			},
			{
				test: /\.sass$/,
				use: ExtractTextPlugin.extract({
					use:[{
							loader:'css-loader'
						},{
							loader:'sass-loader'
						}],
					fallback:'style-loader'
				})
			}
		]
	}
});